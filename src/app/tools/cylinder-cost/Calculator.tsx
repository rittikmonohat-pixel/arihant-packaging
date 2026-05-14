'use client';

import { useState } from 'react';
import { Calculator as CalcIcon, RefreshCw } from 'lucide-react';

/*
 * Cylinder cost calculator — internal testing tool.
 *
 * Pricing rules (Arihant Packaging, May 2026):
 *   1. Min cylinder circumference: 380 mm physical, 400 mm priced.
 *   2. Min PET width: 370 mm. Pricing adds 60 mm.
 *   3. Rate: ₹14.5 / sq inch + 18% GST.
 *
 * Per-format input mapping:
 *   - Roll Form: user inputs open width (front+back+seal area) and design height.
 *   - Center Seal Pouch: user inputs closed pouch width and height. Open width
 *     is computed as 2×CW + sealing margin (20 mm if CW≤200, else 30 mm).
 *   - 3-Side Seal Pouch: user inputs pouch width and height. The pouch rotates
 *     90° for cylinder making so that height becomes the cylinder width axis
 *     and width becomes the cylinder circumference axis.
 *   - Standup Pouch: same as 3-side, plus bottom base width (gusset×2) added
 *     to the open width.
 *
 * Final calc for all formats:
 *   1. Derive (origWidth, origHeight) per format above.
 *   2. Multiply each by the smallest integer that makes it meet the minimum
 *      (370 mm for width, 380 mm for height).
 *   3. Priced width = multiplied width + 60 mm.
 *   4. Priced height = max(multiplied height, 400 mm).
 *   5. Area = priced width × priced height (in mm²).
 *   6. Cost = area / 645.16 (mm² → inch²) × ₹14.5 × 1.18 (GST).
 */

type Format = 'roll' | 'center-seal' | '3-side-seal' | 'standup';

const FORMATS: { value: Format; label: string }[] = [
  { value: 'roll', label: 'Roll Form' },
  { value: 'center-seal', label: 'Center Seal Pouch' },
  { value: '3-side-seal', label: '3-Side Seal Pouch' },
  { value: 'standup', label: 'Standup Pouch' },
];

const MIN_WIDTH = 370;
const MIN_HEIGHT_PHYSICAL = 380;
const MIN_HEIGHT_PRICED = 400;
const WIDTH_PRICING_ADDON = 60;
const RATE_PER_SQ_INCH = 14.5;
const GST_RATE = 0.18;
const MM2_PER_INCH2 = 645.16;

function deriveDimensions(format: Format, w: number, h: number, gusset = 0): { origWidthMm: number; origHeightMm: number } {
  if (format === 'roll') {
    return { origWidthMm: w, origHeightMm: h };
  }
  if (format === 'center-seal') {
    // Closed pouch → 2× for front+back, plus left+right sealing margin.
    // 10 + 10 mm for closed width ≤ 200 mm, 15 + 15 mm above that.
    const sealMargin = w > 200 ? 30 : 20;
    return { origWidthMm: 2 * w + sealMargin, origHeightMm: h };
  }
  if (format === '3-side-seal') {
    // Pouch rotates 90° for cylinder. Height becomes cylinder width axis,
    // width becomes circumference axis. Open width = 2 × pouch height.
    return { origWidthMm: 2 * h, origHeightMm: w };
  }
  // standup: same as 3-side-seal but + bottom base width on the open width.
  return { origWidthMm: 2 * h + gusset, origHeightMm: w };
}

function multiplyToMinimum(value: number, minimum: number): { multiplier: number; result: number } {
  if (!Number.isFinite(value) || value <= 0) return { multiplier: 0, result: 0 };
  if (value >= minimum) return { multiplier: 1, result: value };
  const multiplier = Math.ceil(minimum / value);
  return { multiplier, result: value * multiplier };
}

interface Result {
  origWidthMm: number;
  origHeightMm: number;
  widthMultiplier: number;
  heightMultiplier: number;
  multipliedWidthMm: number;
  multipliedHeightMm: number;
  pricedWidthMm: number;
  pricedHeightMm: number;
  areaMm2: number;
  areaInch2: number;
  baseCostInr: number;
  gstInr: number;
  totalInr: number;
}

function calculate(format: Format, w: number, h: number, gusset: number): Result {
  const { origWidthMm, origHeightMm } = deriveDimensions(format, w, h, gusset);
  const widthCheck = multiplyToMinimum(origWidthMm, MIN_WIDTH);
  const heightCheck = multiplyToMinimum(origHeightMm, MIN_HEIGHT_PHYSICAL);
  const pricedWidthMm = widthCheck.result + WIDTH_PRICING_ADDON;
  const pricedHeightMm = Math.max(heightCheck.result, MIN_HEIGHT_PRICED);
  const areaMm2 = pricedWidthMm * pricedHeightMm;
  const areaInch2 = areaMm2 / MM2_PER_INCH2;
  const baseCostInr = areaInch2 * RATE_PER_SQ_INCH;
  const gstInr = baseCostInr * GST_RATE;
  const totalInr = baseCostInr + gstInr;
  return {
    origWidthMm,
    origHeightMm,
    widthMultiplier: widthCheck.multiplier,
    heightMultiplier: heightCheck.multiplier,
    multipliedWidthMm: widthCheck.result,
    multipliedHeightMm: heightCheck.result,
    pricedWidthMm,
    pricedHeightMm,
    areaMm2,
    areaInch2,
    baseCostInr,
    gstInr,
    totalInr,
  };
}

const fmtNum = (n: number, digits = 2) => n.toLocaleString('en-IN', { minimumFractionDigits: digits, maximumFractionDigits: digits });
const fmtInr = (n: number) => `₹${n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export default function Calculator() {
  const [format, setFormat] = useState<Format>('roll');
  const [widthInput, setWidthInput] = useState('');
  const [heightInput, setHeightInput] = useState('');
  const [gussetInput, setGussetInput] = useState('');

  const w = parseFloat(widthInput);
  const h = parseFloat(heightInput);
  const g = parseFloat(gussetInput) || 0;

  const needsGusset = format === 'standup';
  const valid = w > 0 && h > 0 && (!needsGusset || g > 0);
  const result = valid ? calculate(format, w, h, g) : null;

  const widthLabel =
    format === 'roll' ? 'Open width — front + back + sealing area (mm)' :
    format === 'center-seal' ? 'Closed pouch width (mm)' :
    'Pouch width (mm)';

  const widthHelp =
    format === 'roll' ? 'Reel / open width as it comes off the press' :
    format === 'center-seal' ? 'Will be doubled (front + back); sealing margin added automatically (10+10 mm up to 200 mm closed width, else 15+15 mm)' :
    format === '3-side-seal' ? '10 mm / 15 mm seal already included' :
    'Pouch width (10 mm / 15 mm seal already included)';

  const reset = () => { setWidthInput(''); setHeightInput(''); setGussetInput(''); };

  return (
    <>
      <section className="container-x pt-8 pb-2">
        <div className="text-xs uppercase tracking-wider text-ink-500">Tools · Internal</div>
      </section>

      <section className="container-x pb-16 max-w-5xl">
        <div className="mb-8">
          <span className="pill"><CalcIcon className="w-3.5 h-3.5" /> Testing tool</span>
          <h1 className="heading-lg mt-3">Cylinder Cost Calculator</h1>
          <p className="lede mt-3">
            Per-cylinder price estimation for rotogravure cylinders. Internal use only — verify each scenario before quoting to a customer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="card p-6">
            <h2 className="heading-sm mb-4">Inputs</h2>

            <div className="mb-5">
              <label className="label">Pouch format</label>
              <div className="grid grid-cols-2 gap-2">
                {FORMATS.map((f) => (
                  <button
                    key={f.value}
                    type="button"
                    onClick={() => setFormat(f.value)}
                    aria-pressed={format === f.value}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition border ${
                      format === f.value
                        ? 'bg-brand-500 text-white border-brand-500 shadow-sm'
                        : 'bg-white text-ink-700 border-ink-200 hover:bg-ink-50'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="label" htmlFor="width-in">{widthLabel}</label>
              <input
                id="width-in"
                type="number"
                inputMode="decimal"
                value={widthInput}
                onChange={(e) => setWidthInput(e.target.value)}
                className="input-field"
                placeholder="e.g. 200"
                min={0}
                step="any"
              />
              <p className="text-xs text-ink-500 mt-1.5">{widthHelp}</p>
            </div>

            <div className="mb-4">
              <label className="label" htmlFor="height-in">
                {format === 'roll' ? 'Design height (mm)' : 'Pouch height (mm)'}
              </label>
              <input
                id="height-in"
                type="number"
                inputMode="decimal"
                value={heightInput}
                onChange={(e) => setHeightInput(e.target.value)}
                className="input-field"
                placeholder="e.g. 250"
                min={0}
                step="any"
              />
            </div>

            {needsGusset && (
              <div className="mb-4">
                <label className="label" htmlFor="gusset-in">Bottom base width (mm)</label>
                <input
                  id="gusset-in"
                  type="number"
                  inputMode="decimal"
                  value={gussetInput}
                  onChange={(e) => setGussetInput(e.target.value)}
                  className="input-field"
                  placeholder="e.g. 80"
                  min={0}
                  step="any"
                />
                <p className="text-xs text-ink-500 mt-1.5">Gusset width × 2</p>
              </div>
            )}

            <button type="button" onClick={reset} className="btn-secondary mt-2 text-sm">
              <RefreshCw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>

          {/* Result */}
          <div className="card p-6">
            <h2 className="heading-sm mb-4">Result</h2>
            {!result ? (
              <p className="text-sm text-ink-500">
                Enter the required dimensions to see the per-cylinder cost. The breakdown shows every step so you can verify the logic against your manual calculation.
              </p>
            ) : (
              <div className="space-y-5">
                <Step title="1. Derive cylinder dimensions">
                  <Row k="Open width" v={`${fmtNum(result.origWidthMm, 1)} mm`} />
                  <Row k="Open height" v={`${fmtNum(result.origHeightMm, 1)} mm`} />
                </Step>

                <Step title="2. Multiply to minimums">
                  <Row
                    k={`Width × ${result.widthMultiplier}`}
                    v={`${fmtNum(result.multipliedWidthMm, 1)} mm (min ${MIN_WIDTH} mm)`}
                  />
                  <Row
                    k={`Height × ${result.heightMultiplier}`}
                    v={`${fmtNum(result.multipliedHeightMm, 1)} mm (min ${MIN_HEIGHT_PHYSICAL} mm)`}
                  />
                </Step>

                <Step title="3. Priced dimensions">
                  <Row
                    k="Priced width"
                    v={`${fmtNum(result.multipliedWidthMm, 1)} + ${WIDTH_PRICING_ADDON} = ${fmtNum(result.pricedWidthMm, 1)} mm`}
                  />
                  <Row
                    k="Priced height"
                    v={`max(${fmtNum(result.multipliedHeightMm, 1)}, ${MIN_HEIGHT_PRICED}) = ${fmtNum(result.pricedHeightMm, 1)} mm`}
                  />
                </Step>

                <Step title="4. Area">
                  <Row
                    k="mm²"
                    v={`${fmtNum(result.pricedWidthMm, 1)} × ${fmtNum(result.pricedHeightMm, 1)} = ${fmtNum(result.areaMm2, 0)}`}
                  />
                  <Row k="inch²" v={`${fmtNum(result.areaMm2, 0)} ÷ ${MM2_PER_INCH2} = ${fmtNum(result.areaInch2, 2)}`} />
                </Step>

                <Step title="5. Cost">
                  <Row
                    k="Base cost"
                    v={`${fmtNum(result.areaInch2, 2)} × ₹${RATE_PER_SQ_INCH} = ${fmtInr(result.baseCostInr)}`}
                  />
                  <Row k={`GST ${GST_RATE * 100}%`} v={fmtInr(result.gstInr)} />
                </Step>

                <div className="border-t border-ink-100 pt-4 flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-ink-700">Total per cylinder</span>
                  <span className="text-3xl font-bold text-brand-700">{fmtInr(result.totalInr)}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Rules reference */}
        <details className="mt-8 card p-6 text-sm">
          <summary className="font-semibold text-ink-900 cursor-pointer">Pricing rules reference</summary>
          <ul className="mt-4 space-y-2 text-ink-700 list-disc pl-6">
            <li><strong>Minimum width:</strong> {MIN_WIDTH} mm (PET minimum). Priced width adds {WIDTH_PRICING_ADDON} mm.</li>
            <li><strong>Minimum height (circumference):</strong> {MIN_HEIGHT_PHYSICAL} mm physical. Priced minimum {MIN_HEIGHT_PRICED} mm — heights between {MIN_HEIGHT_PHYSICAL} and {MIN_HEIGHT_PRICED} are still priced at {MIN_HEIGHT_PRICED}.</li>
            <li><strong>Rate:</strong> ₹{RATE_PER_SQ_INCH} per inch² + {GST_RATE * 100}% GST.</li>
            <li><strong>Conversion:</strong> 1 inch² = {MM2_PER_INCH2} mm².</li>
            <li><strong>Center seal sealing margin:</strong> 10 + 10 mm (closed width ≤ 200 mm) or 15 + 15 mm (closed width &gt; 200 mm).</li>
            <li><strong>3-side seal & standup:</strong> pouch rotates 90° for cylinder layout — pouch height becomes cylinder width axis, pouch width becomes circumference axis.</li>
            <li><strong>Standup additional:</strong> bottom base width (gusset × 2) added to open width before multiplying to minimum.</li>
          </ul>
        </details>
      </section>
    </>
  );
}

function Step({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-ink-900 mb-2">{title}</h3>
      <div className="space-y-1 text-sm text-ink-700 pl-2">{children}</div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-ink-500">{k}</span>
      <span className="font-mono text-ink-900 text-right">{v}</span>
    </div>
  );
}
