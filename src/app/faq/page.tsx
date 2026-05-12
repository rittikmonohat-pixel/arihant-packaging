import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FAQSchema } from '@/components/Schema';

export const metadata: Metadata = {
  title: 'FAQ — Pricing, MOQ, Lead Time, Materials',
  description: 'Frequently asked questions about Arihant Packaging — MOQ, lead times, materials, customisation, and delivery.',
  alternates: { canonical: '/faq' },
};

const FAQ: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: 'Pricing & MOQ',
    items: [
      { q: 'What is your minimum order quantity (MOQ)?', a: 'Standard MOQ is 300 kg per design for laminated rolls. Stand-up zipper pouches start at 500 kg. Talk to us about smaller trial runs for new clients.' },
      { q: 'How is pricing calculated?', a: 'Per kilogram, based on material spec, layers, finish, and number of print colours. Larger orders get a better per-kg rate.' },
      { q: 'What payment terms do you offer?', a: 'For new clients, 50% advance and 50% on dispatch. Established clients can negotiate credit terms.' },
    ],
  },
  {
    category: 'Lead time & samples',
    items: [
      { q: 'How long does production take?', a: 'First-order lead time is typically 10–14 working days from artwork approval. Repeat orders ship in 7–10 days.' },
      { q: 'Can I see samples before placing an order?', a: 'Yes — we can share our standard sample pack so you can feel the materials and see print quality. Project-specific samples are arranged on a case-by-case basis.' },
    ],
  },
  {
    category: 'Customisation',
    items: [
      { q: 'How many printing colours do you support?', a: 'Up to 8 colours via rotogravure printing — sharp, photo-quality output.' },
      { q: 'Can I bring my own design?', a: 'Yes — send us your artwork (Adobe Illustrator AI, EPS, PDF). If you do not have artwork, our team can help with adjustments.' },
      { q: 'Can the pouch have a window?', a: 'Yes — we offer transparent window pouches, fully transparent rolls, and even one-side window / one-side metallic.' },
    ],
  },
  {
    category: 'Materials',
    items: [
      { q: 'What materials do you use?', a: 'PET, MET PET, BOPP, MET BOPP, and LDPE in various layer combinations.' },
      { q: 'Can the pouch handle oily or spicy products?', a: 'Yes — LDPE inner is oil-resistant. For high-oil products like spice mixes, we recommend a 3-layer aluminium laminate.' },
    ],
  },
  {
    category: 'Delivery & support',
    items: [
      { q: 'Where do you deliver?', a: 'Across India via reputable transporters. Local delivery in Kolkata is arranged as part of the order.' },
      { q: 'Do you ship internationally?', a: 'Currently we focus on the Indian domestic market. International orders are considered case by case.' },
      { q: 'How do I track my order?', a: 'Once dispatched, you receive transporter details and LR number on WhatsApp.' },
    ],
  },
];

export default function FaqPage() {
  const allItems = FAQ.flatMap((c) => c.items);

  return (
    <>
      <section className="container-x pt-8 pb-4">
        <Breadcrumbs items={[{ name: 'FAQ', href: '/faq' }]} />
      </section>

      <section className="container-x pb-12 max-w-3xl">
        <h1 className="heading-xl">Frequently asked <span className="serif-accent">questions</span></h1>
        <p className="lede mt-4">Everything we get asked about MOQ, materials, lead time, and delivery. Don&apos;t see your question? <a href="/contact" className="text-brand-600 underline">Ask us directly</a>.</p>
      </section>

      <section className="container-x pb-24 max-w-3xl">
        {FAQ.map((cat) => (
          <div key={cat.category} className="mb-10">
            <h2 className="heading-sm mb-3">{cat.category}</h2>
            <div className="glass rounded-2xl divide-y divide-brand-100/40 overflow-hidden">
              {cat.items.map((it) => (
                <details key={it.q} className="group">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-base font-semibold text-ink-900 px-5 py-4">
                    {it.q}
                    <span className="text-brand-500 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-ink-600 leading-relaxed">{it.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>

      <FAQSchema items={allItems} />
    </>
  );
}
