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

            <PouchPreview format={format} w={w} h={h} gusset={g} valid={valid} />

            <button type="button" onClick={reset} className="btn-secondary mt-4 text-sm">
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

// ============================================================
//  Pouch preview SVG
// ============================================================
//
// Renders a schematic of the pouch (or roll laminate) in proportion to the
// dimensions the operator has entered. Updates live. When inputs are invalid
// or empty, falls back to a sample shape with a muted note so the layout
// stays stable.

function PouchPreview({
  format,
  w,
  h,
  gusset,
  valid,
}: {
  format: Format;
  w: number;
  h: number;
  gusset: number;
  valid: boolean;
}) {
  // Fallback "sample" dimensions when the operator has not finished typing.
  const wn = valid ? w : 200;
  const hn = valid ? h : 250;
  const gn = format === 'standup' ? (gusset > 0 ? gusset : 80) : 0;

  // Drawing geometry. The viewBox is fixed and the pouch is scaled to fit a
  // padded inner rectangle while preserving aspect ratio.
  const VB_W = 320;
  const VB_H = 280;
  const PAD_X = 50;
  const PAD_TOP = 30;
  const PAD_BOTTOM = 50;
  const DRAW_W = VB_W - 2 * PAD_X;
  const DRAW_H = VB_H - PAD_TOP - PAD_BOTTOM;

  const aspect = hn / wn;
  const drawAspect = DRAW_H / DRAW_W;
  let visW: number;
  let visH: number;
  if (aspect > drawAspect) {
    visH = DRAW_H;
    visW = visH / aspect;
  } else {
    visW = DRAW_W;
    visH = visW * aspect;
  }
  const x = (VB_W - visW) / 2;
  const y = PAD_TOP + (DRAW_H - visH) / 2;

  const COLOR = '#1F4E79';
  const FILL = 'rgba(31,78,121,0.06)';
  const DASH = '4,3';
  const LABEL_STROKE = '#94a3b8';

  // Format-specific shape + decorations
  let shape: React.ReactNode = null;
  let decorations: React.ReactNode = null;
  let openMarker: React.ReactNode = null;

  if (format === 'roll') {
    // The roll laminate (after cylinder printing) is conceptually divided into:
    //   |seal| back | front | back |seal|
    // Sealing area is 10 mm at each edge. The remaining usable strip is split
    // 25 / 50 / 25 across back / front / back (the two "back" halves meet at
    // the centre-back seal once the tube is formed).
    const sealMm = 10;
    const usableMm = Math.max(0, wn - 2 * sealMm);
    const frontMm = usableMm / 2;
    const backMm = usableMm / 4;
    const scale = visW / wn;
    const sealVis = sealMm * scale;
    const backVis = backMm * scale;
    const frontVis = frontMm * scale;

    // Guard: only show subdivisions if the roll is at least 30 mm wide so the
    // labels don't visually collide.
    const showZones = wn >= 30;

    shape = (
      <rect x={x} y={y} width={visW} height={visH} fill={FILL} stroke={COLOR} strokeWidth={1.5} rx={2} />
    );

    if (showZones) {
      const labelMidY = y + visH / 2 + 3;
      decorations = (
        <>
          {/* Sealing-area boundary lines, dotted, at both edges */}
          <line x1={x + sealVis} y1={y + 4} x2={x + sealVis} y2={y + visH - 4} stroke={COLOR} strokeWidth={1} strokeDasharray={DASH} opacity={0.55} />
          <line x1={x + visW - sealVis} y1={y + 4} x2={x + visW - sealVis} y2={y + visH - 4} stroke={COLOR} strokeWidth={1} strokeDasharray={DASH} opacity={0.55} />

          {/* Centre "Front Side" dotted box */}
          <rect
            x={x + sealVis + backVis}
            y={y + visH * 0.18}
            width={frontVis}
            height={visH * 0.64}
            fill="rgba(31,78,121,0.10)"
            stroke={COLOR}
            strokeWidth={1}
            strokeDasharray={DASH}
            opacity={0.85}
          />

          {/* Labels: Back / Front Side / Back */}
          <text x={x + sealVis + backVis / 2} y={labelMidY} textAnchor="middle" fontSize={9} fill={COLOR} opacity={0.7}>
            Back
          </text>
          <text x={x + sealVis + backVis + frontVis / 2} y={labelMidY} textAnchor="middle" fontSize={10} fill={COLOR} fontWeight={600}>
            Front Side
          </text>
          <text x={x + visW - sealVis - backVis / 2} y={labelMidY} textAnchor="middle" fontSize={9} fill={COLOR} opacity={0.7}>
            Back
          </text>
        </>
      );
    } else {
      decorations = (
        <text x={x + visW / 2} y={y + visH / 2 + 4} textAnchor="middle" fontSize={10} fill={COLOR} opacity={0.55}>
          laminate
        </text>
      );
    }
  } else if (format === 'center-seal') {
    // Centre back seal shown as a small vertical strip (10 mm for closed
    // width ≤ 200 mm, 15 mm above that — same threshold as the sealing
    // margin used in the cost calculation).
    const stripMm = wn > 200 ? 15 : 10;
    const scale = visW / wn;
    const stripVis = stripMm * scale;

    shape = (
      <rect x={x} y={y} width={visW} height={visH} fill={FILL} stroke={COLOR} strokeWidth={1.5} rx={2} />
    );
    decorations = (
      <>
        <rect
          x={x + visW / 2 - stripVis / 2}
          y={y + 6}
          width={stripVis}
          height={visH - 12}
          fill="rgba(31,78,121,0.12)"
          stroke={COLOR}
          strokeWidth={1}
          strokeDasharray={DASH}
          opacity={0.7}
        />
        <text x={x + visW / 2} y={y + visH / 2 + 4} textAnchor="middle" fontSize={9} fill={COLOR} opacity={0.6}>
          back seal
        </text>
      </>
    );
  } else if (format === '3-side-seal') {
    shape = (
      <rect x={x} y={y} width={visW} height={visH} fill={FILL} stroke={COLOR} strokeWidth={1.5} rx={2} />
    );
    // Inner dashed seal lines on left, right, and bottom (3-side seal).
    const seal = 6;
    decorations = (
      <>
        <line x1={x + seal} y1={y + seal} x2={x + seal} y2={y + visH - seal} stroke={COLOR} strokeWidth={1} strokeDasharray={DASH} opacity={0.45} />
        <line x1={x + visW - seal} y1={y + seal} x2={x + visW - seal} y2={y + visH - seal} stroke={COLOR} strokeWidth={1} strokeDasharray={DASH} opacity={0.45} />
        <line x1={x + seal} y1={y + visH - seal} x2={x + visW - seal} y2={y + visH - seal} stroke={COLOR} strokeWidth={1} strokeDasharray={DASH} opacity={0.45} />
      </>
    );
    openMarker = (
      <text x={x + visW / 2} y={y - 6} textAnchor="middle" fontSize={9} fill={COLOR} opacity={0.6}>
        ↑ open (filling)
      </text>
    );
  } else {
    // Standup pouch: rectangle body that curves into an oval gusset at the
    // bottom (per the reference illustration). Single SVG path makes it one
    // continuous outline.
    const bodyFrac = 0.82; // body is ~82% of total height; gusset is the bottom 18%
    const bodyH = visH * bodyFrac;
    const gussetTopY = y + bodyH;
    const path = [
      `M ${x} ${y}`,
      `L ${x + visW} ${y}`,
      `L ${x + visW} ${gussetTopY}`,
      // Right half of gusset: smooth curve down to the centre-bottom.
      `Q ${x + visW * 0.96} ${y + visH} ${x + visW / 2} ${y + visH}`,
      // Left half of gusset.
      `Q ${x + visW * 0.04} ${y + visH} ${x} ${gussetTopY}`,
      'Z',
    ].join(' ');

    shape = (
      <path d={path} fill={FILL} stroke={COLOR} strokeWidth={1.5} />
    );

    const seal = 6;
    decorations = (
      <>
        {/* Side seals — left and right of the body */}
        <line x1={x + seal} y1={y + seal} x2={x + seal} y2={gussetTopY - 2} stroke={COLOR} strokeWidth={1} strokeDasharray={DASH} opacity={0.45} />
        <line x1={x + visW - seal} y1={y + seal} x2={x + visW - seal} y2={gussetTopY - 2} stroke={COLOR} strokeWidth={1} strokeDasharray={DASH} opacity={0.45} />
        {/* Gusset fold line — soft horizontal arc just inside the gusset bowl */}
        <path
          d={`M ${x + visW * 0.12} ${gussetTopY + 2} Q ${x + visW / 2} ${gussetTopY + visH * 0.08} ${x + visW - visW * 0.12} ${gussetTopY + 2}`}
          fill="none"
          stroke={COLOR}
          strokeWidth={1}
          strokeDasharray={DASH}
          opacity={0.45}
        />
        <text x={x + visW / 2} y={y + visH - visH * 0.04} textAnchor="middle" fontSize={9} fill={COLOR} opacity={0.65}>
          gusset
        </text>
      </>
    );
    openMarker = (
      <text x={x + visW / 2} y={y - 6} textAnchor="middle" fontSize={9} fill={COLOR} opacity={0.6}>
        ↑ open (filling)
      </text>
    );
  }

  // Dimension labels (only when valid, so we don't fake numbers).
  const widthLabel = valid ? `${fmtNum(w, 0)} mm` : '— mm';
  const heightLabel = valid ? `${fmtNum(h, 0)} mm` : '— mm';

  const widthCaption =
    format === 'roll' ? 'open width' :
    format === 'center-seal' ? 'closed width' :
    'pouch width';

  return (
    <div className="bg-white/60 rounded-xl border border-ink-100 p-3 mt-5">
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="w-full" style={{ maxHeight: 240 }} aria-hidden="true">
        {shape}
        {decorations}
        {openMarker}

        {/* Width dimension (below) */}
        <g>
          <line x1={x} y1={y + visH + 14} x2={x + visW} y2={y + visH + 14} stroke={LABEL_STROKE} strokeWidth={1} />
          <line x1={x} y1={y + visH + 10} x2={x} y2={y + visH + 18} stroke={LABEL_STROKE} strokeWidth={1} />
          <line x1={x + visW} y1={y + visH + 10} x2={x + visW} y2={y + visH + 18} stroke={LABEL_STROKE} strokeWidth={1} />
          <text x={x + visW / 2} y={y + visH + 30} textAnchor="middle" fontSize={11} fill="#475569" fontWeight={500}>
            {widthLabel}
          </text>
          <text x={x + visW / 2} y={y + visH + 42} textAnchor="middle" fontSize={9} fill="#94a3b8">
            {widthCaption}
          </text>
        </g>

        {/* Height dimension (left) */}
        <g>
          <line x1={x - 14} y1={y} x2={x - 14} y2={y + visH} stroke={LABEL_STROKE} strokeWidth={1} />
          <line x1={x - 18} y1={y} x2={x - 10} y2={y} stroke={LABEL_STROKE} strokeWidth={1} />
          <line x1={x - 18} y1={y + visH} x2={x - 10} y2={y + visH} stroke={LABEL_STROKE} strokeWidth={1} />
          <text
            x={x - 22}
            y={y + visH / 2}
            textAnchor="middle"
            fontSize={11}
            fill="#475569"
            fontWeight={500}
            transform={`rotate(-90 ${x - 22} ${y + visH / 2})`}
          >
            {heightLabel}
          </text>
        </g>
      </svg>

      <div className="text-xs text-center mt-1">
        {format === 'roll' && <span className="text-ink-500">Roll laminate · open width × height</span>}
        {format === 'center-seal' && <span className="text-ink-500">Center seal pouch · back seal shown dashed</span>}
        {format === '3-side-seal' && <span className="text-ink-500">3-side seal pouch · sealed left / right / bottom, open top</span>}
        {format === 'standup' && (
          <span className="text-ink-500">
            Standup pouch · gusset {gn > 0 ? `${fmtNum(gn, 0)} mm` : '—'} (×2)
          </span>
        )}
      </div>
      {!valid && (
        <p className="text-center text-[11px] text-ink-400 italic mt-0.5">
          Sample shape — preview updates as you enter dimensions
        </p>
      )}
    </div>
  );
}
