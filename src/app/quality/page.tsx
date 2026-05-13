import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Award, BadgeCheck, FlaskConical, Layers, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quality Control Process — Arihant Packaging Kolkata',
  description: 'How Arihant Packaging engineers quality across PET, MET PET, BOPP, MET BOPP, and LDPE laminated packaging materials. MSME / Udyam registered.',
  alternates: { canonical: '/quality' },
};

const materials = [
  { name: 'PET (Polyester)', use: 'Outer layer for sharp print and dimensional stability.', barrier: 'Aroma & moisture barrier (good)' },
  { name: 'MET PET', use: 'Metalised polyester — full-spectrum light & oxygen barrier.', barrier: 'Excellent oxygen, moisture, and light barrier' },
  { name: 'BOPP', use: 'Bi-axially oriented polypropylene — clear glossy outer.', barrier: 'Moisture barrier (moderate)' },
  { name: 'MET BOPP', use: 'Metalised BOPP — premium glossy + barrier at lower cost.', barrier: 'Very good moisture and light barrier' },
  { name: 'LDPE', use: 'Sealing layer that gives strength and reliable heat-seal.', barrier: 'Heat-sealable' },
];

export default function QualityPage() {
  return (
    <>
      <section className="container-x pt-8 pb-4">
        <Breadcrumbs items={[{ name: 'Quality', href: '/quality' }]} />
      </section>

      <section className="container-x pb-12 max-w-4xl">
        <span className="pill">Quality & QC</span>
        <h1 className="heading-xl mt-3">Quality you can taste, feel, and trust.</h1>
        <p className="lede mt-4">
          Flexible packaging is only as good as its weakest layer. We engineer ours so every pouch performs in storage, shipping, and on-shelf — and so the food inside stays fresh and safe.
        </p>
      </section>

      {/* Materials */}
      <section className="bg-ink-50/50 py-16">
        <div className="container-x">
          <h2 className="heading-md">Materials we use</h2>
          <p className="text-ink-600 mt-2 max-w-3xl">All materials are sourced from established Indian and global suppliers. We blend layers based on your product&apos;s barrier and yield needs.</p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {materials.map((m) => (
              <div key={m.name} className="rounded-xl bg-white border border-ink-100 p-5">
                <div className="text-brand-600 mb-2"><Layers className="w-5 h-5" /></div>
                <h3 className="font-semibold text-ink-900">{m.name}</h3>
                <p className="text-sm text-ink-600 mt-2">{m.use}</p>
                <p className="text-xs text-ink-500 mt-2"><span className="font-semibold text-ink-700">Barrier:</span> {m.barrier}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QC process */}
      <section className="container-x py-16">
        <h2 className="heading-md">Our QC process</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {[
            { icon: FlaskConical, title: 'Incoming Material Inspection', desc: 'LDPE film is tested for thickness, consistency and strength before it touches our line.' },
            { icon: Award, title: 'In-Line Print QC', desc: 'Reel is inspected for print registration and color match during rotogravure printing.' },
            { icon: ShieldCheck, title: 'Lamination Bond Test', desc: 'Bond strength tested per reel — both solvent and solventless laminates are verified before slitting.' },
            { icon: BadgeCheck, title: 'Final Pouch QC + Sample Retention', desc: 'Random pouches per batch are seal-tested and retained for retrospective check.' },
          ].map((s) => (
            <div key={s.title} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 grid place-items-center flex-shrink-0">
                <s.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-ink-900">{s.title}</h3>
                <p className="text-sm text-ink-600 mt-1.5 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="container-x pb-24">
        <h2 className="heading-md">Certifications & registrations</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-5">
          {[
            { title: 'MSME / Udyam', sub: 'Registered Indian micro / small enterprise.' },
            { title: 'Established 2016', sub: 'Manufacturing flexible packaging in Kolkata.' },
          ].map((c) => (
            <div key={c.title} className="rounded-xl bg-white border border-ink-100 p-6 text-center">
              <Award className="w-8 h-8 mx-auto text-brand-600 mb-2" />
              <h3 className="font-semibold text-ink-900">{c.title}</h3>
              <p className="text-sm text-ink-500 mt-2">{c.sub}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
