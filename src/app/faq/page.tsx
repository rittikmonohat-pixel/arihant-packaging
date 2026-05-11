import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FAQSchema } from '@/components/Schema';

export const metadata: Metadata = {
  title: 'FAQ — Pricing, MOQ, Lead Time, Materials',
  description: 'Frequently asked questions about Arihant Packaging — MOQ, lead times, materials, GST, samples, customisation, and delivery.',
  alternates: { canonical: '/faq' },
};

const FAQ: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: 'Pricing & MOQ',
    items: [
      { q: 'What is your minimum order quantity (MOQ)?', a: 'Standard MOQ is 300 kg per design for laminated rolls. Stand-up zipper pouches start at 500 kg. Talk to us about smaller trial runs for new clients.' },
      { q: 'How is pricing calculated?', a: 'Per kilogram, based on material spec, layers, finish, and number of print colors. Larger orders get a better per-kg rate.' },
      { q: 'Do you provide GST invoice?', a: 'Yes. We are GST registered and provide full GST invoice with every order.' },
      { q: 'What payment terms do you offer?', a: 'For new clients, 50% advance and 50% on dispatch. Established clients can negotiate credit terms.' },
    ],
  },
  {
    category: 'Lead time & samples',
    items: [
      { q: 'How long does production take?', a: 'First-order lead time is typically 10–14 working days from artwork approval. Repeat orders ship in 7–10 days.' },
      { q: 'Do you provide free samples?', a: 'Yes — free physical pouch samples are dispatched after design approval, against a refundable plate cost.' },
      { q: 'Can I see samples before placing an order?', a: 'Absolutely. We can courier our standard sample pack so you can feel the materials and see print quality.' },
    ],
  },
  {
    category: 'Customisation',
    items: [
      { q: 'How many printing colors do you support?', a: 'Up to 8 colors via rotogravure printing — sharp, photo-quality output.' },
      { q: 'Can I bring my own design?', a: 'Yes — send us your artwork (Adobe Illustrator AI, EPS, PDF). If you don\'t have artwork, our design team can help.' },
      { q: 'Can the pouch have a window?', a: 'Yes — we offer transparent window pouches, fully transparent rolls, and even one-side window / one-side metallic.' },
    ],
  },
  {
    category: 'Materials',
    items: [
      { q: 'What materials do you use?', a: 'PET, MET PET, BOPP, MET BOPP, and LDPE. All food-grade and FSSAI compliant.' },
      { q: 'Are your laminates food safe?', a: 'Yes — all food-contact LDPE and PET layers comply with FSSAI standards for direct food contact.' },
      { q: 'Can the pouch handle oily / spicy products?', a: 'Yes — LDPE is oil-resistant. For high-oil products like spice mixes, we recommend 3-layer aluminium laminate.' },
    ],
  },
  {
    category: 'Delivery & support',
    items: [
      { q: 'Where do you deliver?', a: 'Across India via reputable transporters. Local delivery in Kolkata is free for orders above 500 kg.' },
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
        <h1 className="heading-xl">Frequently asked questions</h1>
        <p className="lede mt-4">Everything we get asked about MOQ, materials, lead time, and delivery. Don't see your question? <a href="/contact" className="text-brand-600 underline">Ask us directly</a>.</p>
      </section>

      <section className="container-x pb-24 max-w-3xl">
        {FAQ.map((cat) => (
          <div key={cat.category} className="mb-10">
            <h2 className="heading-sm mb-3">{cat.category}</h2>
            <div className="divide-y divide-ink-100 border-y border-ink-100">
              {cat.items.map((it) => (
                <details key={it.q} className="group py-4">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-base font-semibold text-ink-900">
                    {it.q}
                    <span className="text-brand-500 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-ink-600 leading-relaxed">{it.a}</p>
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
