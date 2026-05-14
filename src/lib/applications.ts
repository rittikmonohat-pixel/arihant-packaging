// 22 application industries — each becomes /applications/[slug].

export type Application = {
  slug: string;
  title: string;
  shortTitle: string;
  oneLiner: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  image: string;
  gallery?: string[];
  category: 'foods' | 'snacks' | 'dairy-batter' | 'personal-care' | 'detergents' | 'agri';
  recommendedProductSlugs: string[];
  packSizes: string[];
  features: string[];
  faq: { q: string; a: string }[];
  // Optional long-form SEO content. Rendered as a dedicated section on the
  // application page between the hero and the recommended-products block.
  // Supports a Markdown subset: ## H2, - bullet, **bold**, *italic*.
  // Paragraphs separated by blank lines (use the join() helper).
  longBody?: string;
};

const join = (...lines: string[]) => lines.join('\n\n');

export const APPLICATIONS: Application[] = [
  {
    slug: 'atta-packaging-pouch',
    title: 'Atta (Wheat Flour) Packaging Pouches',
    shortTitle: 'Atta Pouch',
    oneLiner: 'Strong moisture-barrier pouches for 1 kg, 5 kg, and 10 kg flour packs.',
    description:
      'Custom flexible packaging engineered for atta — wheat flour, multigrain blends, and atta blends sold in Indian retail and HoReCa channels. Manufactured in Madhyamgram, Kolkata. Shipped pan-India.',
    metaDescription: 'Atta (wheat flour) packaging pouch manufacturer in Kolkata — milky LDPE laminated rolls and center-seal pouches. 1 kg / 5 kg / 10 kg sizes. MOQ from 300 kg.',
    keywords: ['atta packaging pouch manufacturer', 'wheat flour packaging India', 'milky LDPE atta pouch'],
    image: '/images/applications/atta.jpg',
    gallery: ['/images/applications/atta.jpg', '/images/applications/atta-2.jpg'],
    category: 'foods',
    recommendedProductSlugs: ['milky-roll', 'center-seal-pouch'],
    packSizes: ['500 g', '1 kg', '2 kg', '5 kg', '10 kg'],
    features: ['Moisture barrier', 'High burst strength', 'Heavy duty', 'Up to 8-color print'],
    faq: [
      {
        q: 'What is the MOQ for atta packaging?',
        a: 'Standard MOQ is 300 kg of laminated film per design for 1 kg packs. For 5 kg and 10 kg packs, MOQ is 500 kg per design. These are indicative; the formal MOQ for your order is stated in our quotation.',
      },
      {
        q: 'Are the pouches suitable for heavy-duty use?',
        a: 'The laminate spec scales with the pack size. For 5 kg and 10 kg packs we use heavier multi-layer structures designed for stacking and transport. Real-world performance depends on filling moisture, handling, and storage at the destination.',
      },
      {
        q: 'Can I customise the design of my atta pouches?',
        a: 'Yes — pouch size, laminate structure, and print colours (up to 8) can all be specified per SKU. Send us your artwork and we will return a press-ready proof.',
      },
      {
        q: 'What is the lead time on a first order?',
        a: 'Typical first-run lead time is 20–30 working days from artwork sign-off. Repeat orders are usually 10–15 working days because printing cylinders are ready with us. The formal lead time is stated in the quotation we issue.',
      },
      {
        q: 'Will the pouch keep atta fresh on the shelf?',
        a: 'The laminate is designed as a barrier against moisture, light, and oxygen — the three things that age atta in storage. Real-world shelf-life depends on the atta itself (moisture at packing, grind, blend), the supply chain (transit time, warehouse humidity), and storage at home. We do not provide a shelf-life warranty.',
      },
      {
        q: 'Can you ship to my city?',
        a: 'We ship pan-India through trusted transporters. Freight charges are quoted separately based on destination, weight, and delivery timeline.',
      },
    ],
    longBody: join(
      '## Overview',
      'Atta is one of the highest-volume FMCG categories in India and one of the toughest to package well. A typical 5 kg atta pouch is stacked, shipped, lifted, dropped, and stored next to masala blends that bleed moisture into anything porous. Get the packaging wrong and you have a burst pouch in the back of the kirana store. Get it right and your brand is what a customer reaches for next month.',
      'We manufacture milky LDPE laminated rolls and pre-made center-seal pouches purpose-built for atta — printed in your brand colours, structurally specified across the pack-size range, and dispatched from our Madhyamgram facility across India.',
      '## Why atta packaging is engineered differently',
      'Three failure modes shape every spec on this page.',
      '**Moisture.** Atta is hygroscopic — it pulls in water from humid air. In Indian retail conditions, ambient humidity is rarely below 70% RH from June through September. A weak laminate lets moisture in over weeks; the pouch starts smelling and clumping before the customer opens it.',
      '**Pests.** Weevils and grain mites are present in almost every Indian warehouse. A pouch that flexes too much at the seal opens tiny gaps over a transport cycle. The pest gets in; the customer returns the pack.',
      '**Weight and stacking.** A 10 kg atta pouch lives most of its life upside down in a stack. The bottom pouch carries much more weight above it.',
      'These are the failure modes we design the laminate against. Real-world shelf-life depends on filling moisture, handling, transit, and storage at the destination; we engineer the pouch but cannot warranty the end product.',
      '## Pack sizes we manufacture',
      'The three pack sizes Indian retail expects:',
      '- **1 kg** — kirana single-buyer SKU. A 2-layer milky LDPE pouch is sufficient for most brands at this size. Print quality is the main differentiator at the kirana shelf.',
      '- **5 kg** — household monthly purchase. The crossover size where laminate strength becomes the main factor, not the seal. Produced either as pre-made center-seal pouches for hand-fill / semi-auto lines, or as a laminated roll on an in-house FFS line.',
      '- **10 kg** — joint families, small caterers, B2B users. Heavy-duty multi-layer laminate (PET + Milky LDPE for retail SKUs) for burst strength under stacking.',
      'Other pack sizes (500 g, 2 kg) can be quoted on request.',
      '## Pouch formats available',
      'Two formats cover the bulk of atta production at our facility.',
      '**Center seal pouch.** The workhorse format. Available as pre-made center-seal pouches for hand-fill and semi-auto operations.',
      '**Milky LDPE laminated roll for FFS.** For atta brands running an in-house Form-Fill-Seal line. The roll is slit to your machine’s web width. Faster line speed and lower per-kg cost; higher upfront setup.',
      '## Material structures',
      'The dominant atta structure is 2-layer, PET + Milky LDPE — a milky-pigmented outer layer that blocks UV. The milky layer matters for atta specifically because:',
      '- It reflects most visible and UV light.',
      '- Spot brand colours print on a white substrate at their target values.',
      '## Print options',
      '- Up to 8-colour rotogravure printing in a single pass.',
      '- Standard finishes: milky, glossy, matte.',
      '## MOQ and lead time',
      '- MOQ for 1 kg packs: 300 kg of laminated film per SKU per design.',
      '- MOQ for 5 kg and 10 kg packs: 500 kg per SKU.',
      '- Typical first-run lead time: 20–30 working days from artwork sign-off.',
      '- Repeat orders: 10–15 working days because cylinders are ready with us.',
      '*Indicative only — the formal MOQ and lead time for your order are stated in the quotation we issue.*',
      '## Why brands choose us',
      '- **One roof.** Printing, lamination, slitting, and pouching all in-house at our facility — tighter QC and faster turnaround than a multi-vendor chain.',
      '- **Up to 8-colour rotogravure** for sharp brand graphics on every SKU.',
      '- **Trusted by many atta manufacturers.**'
    ),
  },
  {
    slug: 'namkeen-packaging-pouch',
    title: 'Namkeen Packaging Pouches',
    shortTitle: 'Namkeen Pouch',
    oneLiner: 'Crisp-protecting pouches in window, glossy, or stand-up zipper formats.',
    description:
      'Namkeen and savoury snacks need reliable packaging for clean handling and shelf appeal. We supply both pre-made pouches and FFS rolls in finishes ranging from transparent window styles to glossy metallic.',
    metaDescription: 'Namkeen packaging pouch manufacturer in Kolkata — window, glossy, stand-up zipper. PET + MET PET + LDPE. 8-color print.',
    keywords: ['namkeen packaging pouch', 'namkeen pouch manufacturer Kolkata'],
    image: '/images/applications/namkeen.jpg',
    gallery: ['/images/applications/namkeen.jpg', '/images/applications/namkeen-2.jpg', '/images/applications/namkeen-3.jpg', '/images/applications/namkeen-4.jpg', '/images/applications/namkeen-5.jpg'],
    category: 'snacks',
    recommendedProductSlugs: ['stand-up-pouch', 'three-side-seal-pouch', 'aluminium-laminated-roll', 'transparent-window-roll'],
    packSizes: ['25 g', '50 g', '100 g', '200 g', '500 g'],
    features: ['Premium glossy or window finish', 'Stand-up zipper option', '8-color rotogravure print'],
    faq: [
      { q: 'Are these pouches suitable for automated packing?', a: 'Yes, our laminate rolls are compatible with standard packing machines.' },
    ],
  },
  {
    slug: 'tea-packaging-pouch',
    title: 'Tea Packaging Pouches',
    shortTitle: 'Tea Pouch',
    oneLiner: 'Aroma-locking aluminium laminated pouches in 100 g, 250 g, 500 g, 1 kg.',
    description:
      'Tea loses aroma fast in air. Our 3-layer PET + MET PET + LDPE laminated pouches are the standard for branded tea — full barrier, vibrant printing, and stand-up zipper option for premium retail.',
    metaDescription: 'Tea packaging pouch manufacturer Kolkata — 3-layer aluminium laminate, 100 g to 1 kg. Stand-up zipper available. 8-color rotogravure.',
    keywords: ['tea packaging pouch', 'tea pouch manufacturer India'],
    image: '/images/applications/tea.jpg',
    gallery: ['/images/applications/tea.jpg', '/images/applications/tea-2.jpg', '/images/applications/tea-3.jpg'],
    category: 'foods',
    recommendedProductSlugs: ['aluminium-laminated-roll', 'stand-up-pouch', 'center-seal-pouch'],
    packSizes: ['50 g', '100 g', '250 g', '500 g', '1 kg'],
    features: ['Aroma & moisture barrier', '3-layer laminate', 'Glossy or matte', 'Zipper option'],
    faq: [
      { q: 'Why a 3-layer laminate for tea?', a: 'Tea aroma is volatile and degrades fast with oxygen or light exposure. A 3-layer aluminium laminate is designed as a barrier against both.' },
    ],
  },
  {
    slug: 'ice-cream-packaging-pouch',
    title: 'Ice Cream Packaging Pouches',
    shortTitle: 'Ice Cream Pouch',
    oneLiner: 'Freezer-tough pouches for ice cream and frozen desserts.',
    description:
      'Ice cream packaging has to survive sub-zero temperatures, condensation, and rough handling in cold-chain logistics. Our laminated pouches use LDPE that stays flexible at low temperatures.',
    metaDescription: 'Ice cream packaging pouch manufacturer Kolkata — freezer-grade laminate, glossy print, custom sizes.',
    keywords: ['ice cream packaging pouch', 'frozen dessert pouch manufacturer'],
    image: '/images/applications/ice-cream.jpg',
    gallery: ['/images/applications/ice-cream.jpg', '/images/applications/ice-cream-2.jpg', '/images/applications/ice-cream-3.jpg', '/images/applications/ice-cream-4.jpg', '/images/applications/ice-cream-5.jpg', '/images/applications/ice-cream-6.jpg', '/images/applications/ice-cream-7.jpg'],
    category: 'dairy-batter',
    recommendedProductSlugs: ['center-seal-pouch', 'aluminium-laminated-roll'],
    packSizes: ['50 ml', '100 ml'],
    features: ['Glossy print', 'Sealing reliability at low temperatures'],
    faq: [{ q: 'Will the seal hold under freezer conditions?', a: 'Yes — our sealing is designed to remain intact across cold-chain temperature ranges.' }],
  },
  {
    slug: 'masala-packaging-pouch',
    title: 'Masala / Spices Packaging Pouches',
    shortTitle: 'Masala Pouch',
    oneLiner: 'High-performance pouches designed for ground spices and blends.',
    description:
      'Spices need robust packaging. Our 3-layer laminated rolls and pouches deliver strength and dependable performance on the shelf.',
    metaDescription: 'Masala / spices packaging pouch manufacturer in Kolkata. 3-layer laminate, custom-printed.',
    keywords: ['masala packaging pouch', 'spices packaging pouch India'],
    image: '/images/applications/masala.jpg',
    gallery: ['/images/applications/masala.jpg', '/images/applications/masala-2.jpg', '/images/applications/masala-3.jpg', '/images/applications/masala-4.jpg'],
    category: 'foods',
    recommendedProductSlugs: ['aluminium-laminated-roll', 'three-side-seal-pouch', 'center-seal-pouch'],
    packSizes: ['10 g', '50 g', '100 g', '200 g', '500 g'],
    features: ['3-layer construction', 'Glossy or matte print'],
    faq: [
      { q: 'Are these pouches suitable for retail handling?', a: 'Yes, they are designed for strength, durability, and reliable performance during storage and transit.' },
    ],
  },
  {
    slug: 'idly-dosa-batter-packaging-pouch',
    title: 'Idly & Dosa Batter Packaging Pouches',
    shortTitle: 'Idly Dosa Batter Pouch',
    oneLiner: 'Stand-up pouches for fresh fermented batters that need to breathe.',
    description:
      'Fermented batters need to release CO₂ without leaking liquid. Our specialised stand-up zipper batter pouches handle this with a calibrated seal pattern, keeping batters fresh for 5–7 days refrigerated.',
    metaDescription: 'Idly & dosa batter packaging pouch manufacturer in Kolkata. Stand-up, leak-resistant laminate.',
    keywords: ['idly dosa batter pouch', 'batter packaging stand up pouch'],
    image: '/images/applications/idly-dosa.jpg',
    gallery: ['/images/applications/idly-dosa.jpg', '/images/applications/idly-dosa-2.jpg'],
    category: 'dairy-batter',
    recommendedProductSlugs: ['stand-up-pouch', 'milky-roll'],
    packSizes: ['500 ml', '1 L', '2 L'],
    features: ['Leak-resistant', 'Pressure-tolerant seal', 'Stand-up format'],
    faq: [
      { q: 'What type of pouches are suitable for batter packaging?', a: 'Stand-up pouches are ideal, offering structure and easy handling.' },
    ],
  },
  {
    slug: 'chira-packaging-pouch',
    title: 'Chira (Flattened Rice) Packaging Pouches',
    shortTitle: 'Chira Pouch',
    oneLiner: 'Window-front pouches that show off flattened rice grain quality.',
    description:
      'Chira buyers in West Bengal and Eastern India look at the rice through the pouch before buying. Our window-front laminated rolls let your product speak for itself while keeping it crisp.',
    metaDescription: 'Chira (poha) packaging pouch manufacturer in Kolkata. Window front, multi-layer laminate, customisable.',
    keywords: ['chira packaging pouch', 'poha pouch manufacturer'],
    image: '/images/applications/chira.jpg',
    gallery: ['/images/applications/chira.jpg', '/images/applications/chira-2.jpg', '/images/applications/chira-3.jpg'],
    category: 'foods',
    recommendedProductSlugs: ['transparent-window-roll', 'three-side-seal-pouch'],
    packSizes: ['100 g', '200 g', '500 g', '1 kg'],
    features: ['Window front', 'Custom branding'],
    faq: [
      { q: 'Is the packaging suitable for automated filling?', a: 'Yes, the laminated rolls are compatible with standard filling and sealing machines.' },
    ],
  },
  {
    slug: 'soya-bari-packaging-pouch',
    title: 'Soya Bari / Soya Chunks Packaging Pouches',
    shortTitle: 'Soya Bari Pouch',
    oneLiner: 'Bulk-strength pouches for soya chunks and bari packs.',
    description:
      'Soya products are light but bulky. Our milky LDPE laminated pouches give the volume coverage needed without compromising strength. 8-color rotogravure makes brand presentation memorable.',
    metaDescription: 'Soya bari / soya chunks packaging pouch manufacturer Kolkata. Milky laminated, custom-printed.',
    keywords: ['soya bari packaging pouch', 'soya chunks pouch manufacturer'],
    image: '/images/applications/soya.jpg',
    gallery: ['/images/applications/soya.jpg', '/images/applications/soya-2.jpg', '/images/applications/soya-3.jpg'],
    category: 'foods',
    recommendedProductSlugs: ['milky-roll', 'three-side-seal-pouch'],
    packSizes: ['100 g', '200 g', '500 g', '1 kg'],
    features: ['Volume strength', 'Vibrant print'],
    faq: [{ q: 'How many printing colors do you support?', a: 'Up to 8 colors via rotogravure — sharp, photo-quality output.' }],
  },
  {
    slug: 'fryums-packaging-pouch',
    title: 'Fryums Packaging Pouches',
    shortTitle: 'Fryums Pouch',
    oneLiner: 'Lightweight, high-impact 3-layer rolls for fryums.',
    description:
      'Designed for efficient, high-yield packaging with a glossy, retail-ready finish at an attractive cost per pouch.',
    metaDescription: 'Fryums packaging pouch manufacturer Kolkata — 3-layer laminate, glossy, custom design.',
    keywords: ['fryums packaging pouch', 'kurkure style pouch manufacturer'],
    image: '/images/applications/fryums.jpg',
    gallery: ['/images/applications/fryums.jpg', '/images/applications/fryums-2.jpg', '/images/applications/fryums-3.jpg'],
    category: 'snacks',
    recommendedProductSlugs: ['met-bopp-laminated-roll', 'center-seal-pouch'],
    packSizes: ['Rs 2/-', 'Rs 5/-', 'Rs 10/-'],
    features: ['Glossy finish', 'Lightweight', 'High yield', '3-layer construction'],
    faq: [
      { q: 'Can the pouch size be customized?', a: 'Yes, pouch sizes can be customized based on your pack weight and requirements.' },
    ],
  },
  {
    slug: 'detergent-packaging-pouch',
    title: 'Detergent Powder Packaging Pouches',
    shortTitle: 'Detergent Pouch',
    oneLiner: 'Detergent pouches in roll and pouch formats.',
    description:
      'Detergent packaging is a high-volume, cost-driven category. Our laminated rolls keep your cost per kg low while delivering vibrant 8-color brand graphics that stand out on the kirana shelf.',
    metaDescription: 'Detergent packaging pouch manufacturer Kolkata. Laminated rolls and pouches, 8-color print.',
    keywords: ['detergent packaging pouch', 'detergent pouch manufacturer'],
    image: '/images/applications/detergent.jpg',
    gallery: ['/images/applications/detergent.jpg', '/images/applications/detergent-2.jpg'],
    category: 'detergents',
    recommendedProductSlugs: ['aluminium-laminated-roll', 'three-side-seal-pouch', 'milky-roll'],
    packSizes: ['200 g', '500 g', '1 kg', '2 kg'],
    features: ['Premium 8-color print', 'Hand-fill or FFS'],
    faq: [
      { q: 'Can these pouches handle heavy weights?', a: 'Yes, the structure is designed to support various pack sizes, including larger, heavier packs.' },
    ],
  },
  {
    slug: 'fertilizer-packaging-pouch',
    title: 'Fertilizer Packaging Pouches',
    shortTitle: 'Fertilizer Pouch',
    oneLiner: 'High-strength pouches for granular and powder fertilizers.',
    description:
      'Designed to handle outdoor storage and rough handling, our laminated pouches deliver durability and reliable performance.',
    metaDescription: 'Fertilizer packaging pouch manufacturer Kolkata. Laminated, custom-printed, durable.',
    keywords: ['fertilizer packaging pouch', 'fertilizer pouch manufacturer India'],
    image: '/images/applications/fertilizer.jpg',
    category: 'agri',
    recommendedProductSlugs: ['milky-roll', 'aluminium-laminated-roll', 'pouch-with-handle'],
    packSizes: ['250 g', '500 g', '1 kg', '5 kg'],
    features: ['High burst strength', 'Outdoor storage suitable'],
    faq: [{ q: 'Is the pouch suitable for chemical fertilizer?', a: 'Yes — LDPE inner is chemically inert against most agricultural fertilizers.' }],
  },
  {
    slug: 'seed-packaging-pouch',
    title: 'Seed Packaging Pouches',
    shortTitle: 'Seed Pouch',
    oneLiner: 'Durable pouches designed to protect seeds during storage and handling.',
    description:
      'Our laminated pouches with strong seal integrity ensure reliable performance and secure packaging.',
    metaDescription: 'Seed packaging pouch manufacturer in Kolkata. Laminated, durable, secure sealing.',
    keywords: ['seed packaging pouch', 'seed pouch manufacturer India'],
    image: '/images/applications/seed.jpg',
    gallery: ['/images/applications/seed.jpg', '/images/applications/seed-2.jpg'],
    category: 'agri',
    recommendedProductSlugs: ['aluminium-laminated-roll', 'three-side-seal-pouch', 'transparent-window-roll'],
    packSizes: ['50 g', '100 g', '250 g', '500 g', '1 kg'],
    features: ['Strong seal integrity', 'Long shelf life'],
    faq: [
      { q: 'What finishes are available?', a: 'We offer glossy, matte, and metallic finishes depending on your preference.' },
    ],
  },
  {
    slug: 'whole-spices-packaging-pouch',
    title: 'Whole Spices Packaging Pouches',
    shortTitle: 'Whole Spices',
    oneLiner: 'Window-front laminated pouches that showcase spice quality.',
    description:
      'Whole spices — cumin, mustard, coriander seeds, peppercorns — sell better when buyers can see the grain. Our window-front laminated rolls combine clarity with reliable barrier protection.',
    metaDescription: 'Whole spices packaging pouch manufacturer in Kolkata. Transparent window with aluminium back panel.',
    keywords: ['whole spices packaging pouch', 'cumin pouch manufacturer'],
    image: '/images/applications/whole-spices.jpg',
    category: 'foods',
    recommendedProductSlugs: ['transparent-window-roll', 'three-side-seal-pouch'],
    packSizes: ['50 g', '100 g', '200 g', '500 g'],
    features: ['Window front', 'Custom-printed back panel'],
    faq: [
      { q: 'What pouch formats are available?', a: 'We offer stand-up pouches, flat pouches, and other retail-friendly formats.' },
    ],
  },
  {
    slug: 'paneer-vacuum-pouch',
    title: 'Paneer Vacuum Packaging Pouches',
    shortTitle: 'Paneer Vacuum Pouch',
    oneLiner: 'High-barrier vacuum pouches for fresh paneer.',
    description:
      'Designed to handle vacuum sealing, our pouches offer strength, secure sealing, and reliable performance for dairy packaging.',
    metaDescription: 'Paneer vacuum packaging pouch manufacturer Kolkata. Multi-layer laminate. Vacuum-sealable.',
    keywords: ['paneer vacuum pouch', 'paneer packaging India'],
    image: '/images/applications/paneer.jpg',
    category: 'dairy-batter',
    recommendedProductSlugs: ['aluminium-laminated-roll', 'three-side-seal-pouch'],
    packSizes: ['100 g', '200 g', '500 g', '1 kg'],
    features: ['Vacuum-sealable', 'Multi-layer construction'],
    faq: [
      { q: 'Can these pouches handle vacuum pressure?', a: 'Yes, they are designed to withstand vacuum sealing.' },
    ],
  },
  {
    slug: 'sattu-packaging-pouch',
    title: 'Sattu Packaging Pouches',
    shortTitle: 'Sattu Pouch',
    oneLiner: 'Customized pouches for roasted gram flour and sattu blends.',
    description:
      'Moisture-sensitive sattu needs protection — our laminated pouches deliver reliable barrier performance.',
    metaDescription: 'Sattu packaging pouch manufacturer Kolkata. Laminated, customized, reliable barrier.',
    keywords: ['sattu packaging pouch', 'sattu pouch manufacturer'],
    image: '/images/applications/sattu.jpg',
    category: 'foods',
    recommendedProductSlugs: ['aluminium-laminated-roll', 'milky-roll', 'three-side-seal-pouch'],
    packSizes: ['100 g', '200 g', '500 g', '1 kg'],
    features: ['Moisture barrier', '3-layer construction', '8-color print'],
    faq: [
      { q: 'Can the pouches be customized?', a: 'Yes, sizes, formats, and designs can be fully customized as per your requirement.' },
    ],
  },
  {
    slug: 'sanitary-napkin-packaging-pouch',
    title: 'Sanitary Napkin Packaging Pouches',
    shortTitle: 'Sanitary Napkin',
    oneLiner: 'Discreet, opaque pouches for sanitary pads and napkins.',
    description:
      'Sanitary product packaging requires tamper-evident, opaque pouches with strong shelf appeal. Our gusseted pouches deliver privacy and durability with bold print.',
    metaDescription: 'Sanitary napkin / pad packaging pouch manufacturer Kolkata. Gusseted, opaque, custom-printed.',
    keywords: ['sanitary napkin packaging pouch', 'sanitary pad pouch manufacturer'],
    image: '/images/applications/sanitary.jpg',
    gallery: ['/images/applications/sanitary.jpg', '/images/applications/sanitary-2.jpg'],
    category: 'personal-care',
    recommendedProductSlugs: ['three-side-seal-pouch', 'aluminium-laminated-roll', 'pouch-with-handle'],
    packSizes: ['XL', 'XXL'],
    features: ['Opaque outer', 'Tamper-evident'],
    faq: [
      { q: 'Are the pouches opaque for privacy?', a: 'Yes, they are designed to be fully opaque to ensure discreet packaging.' },
    ],
  },
  {
    slug: 'dried-fruits-packaging-pouch',
    title: 'Dried Fruits Packaging Pouches',
    shortTitle: 'Dried Fruits',
    oneLiner: 'Premium stand-up zipper pouches for cashews, almonds, raisins, and mixes.',
    description:
      'Dried fruits demand premium retail-ready packaging with resealable convenience. Our stand-up zipper pouches in glossy or matte laminate deliver shelf appeal.',
    metaDescription: 'Dried fruits packaging pouch manufacturer Kolkata — stand-up zipper, glossy or matte laminate.',
    keywords: ['dried fruits packaging pouch', 'cashew almond pouch manufacturer'],
    image: '/images/applications/dried-fruits.jpg',
    gallery: ['/images/applications/dried-fruits.jpg', '/images/applications/dried-fruits-2.jpg', '/images/applications/dried-fruits-3.jpg'],
    category: 'foods',
    recommendedProductSlugs: ['stand-up-pouch', 'aluminium-laminated-roll'],
    packSizes: ['100 g', '200 g', '250 g', '500 g', '1 kg'],
    features: ['Stand-up zipper', 'Premium glossy or matte'],
    faq: [
      { q: 'Can I combine a zipper with a tear notch?', a: 'Yes, tear notches are commonly added for easy first opening, followed by the zipper feature.' },
    ],
  },
  {
    slug: 'makhana-packaging-pouch',
    title: 'Makhana / Fox Nut Packaging Pouches',
    shortTitle: 'Makhana',
    oneLiner: 'Stand-up zipper pouches, D-cut handle pouches, and center seal pouches for makhana.',
    description:
      'Makhana is gaining popularity as a healthy snack — premium packaging matters. Our stand-up zipper and D-cut handle pouches offer strong shelf appeal and convenient handling.',
    metaDescription: 'Makhana / fox nut packaging pouch manufacturer Kolkata. Stand-up zipper, D-cut handle, center seal.',
    keywords: ['makhana packaging pouch', 'fox nut pouch manufacturer'],
    image: '/images/applications/makhana.jpg',
    category: 'snacks',
    recommendedProductSlugs: ['stand-up-pouch', 'pouch-with-handle', 'center-seal-pouch'],
    packSizes: ['50 g', '100 g', '200 g', '250 g'],
    features: ['Stand-up zipper', 'D-cut handle option', 'Premium look'],
    faq: [
      { q: 'Are these pouches suitable for automated packing?', a: 'Yes, they are compatible with standard filling and sealing machines.' },
    ],
  },
  {
    slug: 'besan-packaging-pouch',
    title: 'Besan (Gram Flour) Packaging Pouches',
    shortTitle: 'Besan',
    oneLiner: 'Clean, reliable packaging for everyday staples.',
    description:
      'Our laminated pouches are designed to maintain product quality and ensure smooth handling.',
    metaDescription: 'Besan / gram flour packaging pouch manufacturer Kolkata. Laminated, clean, reliable.',
    keywords: ['besan packaging pouch', 'gram flour pouch manufacturer'],
    image: '/images/applications/besan.jpg',
    category: 'foods',
    recommendedProductSlugs: ['milky-roll', 'three-side-seal-pouch'],
    packSizes: ['200 g', '500 g', '1 kg', '2 kg'],
    features: ['Moisture barrier', 'Free-flow protection', '8-color print'],
    faq: [
      { q: 'What type of packaging is suitable for besan?', a: 'Laminated pouches are ideal, offering strength, clean handling, and good shelf presentation.' },
    ],
  },
  {
    slug: 'tissue-packaging-pouch',
    title: 'Tissue Packaging Pouches',
    shortTitle: 'Tissue',
    oneLiner: 'Lightweight, attractive pouches for tissue paper retail packs.',
    description:
      'Tissue packaging is high-volume and price-sensitive. Our LDPE / BOPP pouches give you the lowest cost per pouch.',
    metaDescription: 'Tissue packaging pouch manufacturer Kolkata. LDPE / BOPP pouches, lightweight.',
    keywords: ['tissue packaging pouch', 'tissue pouch manufacturer'],
    image: '/images/applications/tissue.jpg',
    category: 'personal-care',
    recommendedProductSlugs: ['milky-roll', 'three-side-seal-pouch'],
    packSizes: ['50 sheets', '100 sheets', '200 sheets'],
    features: ['Light barrier', 'Crisp print', 'Cost optimized'],
    faq: [
      { q: 'What type of pouches are suitable for tissue packs?', a: 'Lightweight LDPE and BOPP pouches are ideal for tissue packaging, offering cost efficiency and good presentation.' },
    ],
  },
  {
    slug: 'dates-packaging-pouch',
    title: 'Dates Packaging Pouches',
    shortTitle: 'Dates',
    oneLiner: 'Stand-up zipper pouches for premium dates and date-based products.',
    description:
      'Dates require packaging that supports their natural softness and prevents sticking. Our 3-layer laminated stand-up zipper pouches offer reliable protection and strong shelf presentation for retail packs of khajur, Medjool dates, date balls, and similar products.',
    metaDescription: 'Dates packaging pouch manufacturer Kolkata. 3-layer laminated stand-up zipper, premium retail.',
    keywords: ['dates packaging pouch', 'khajur pouch manufacturer', 'medjool dates pouch'],
    image: '/images/applications/dates.jpg',
    category: 'foods',
    recommendedProductSlugs: ['stand-up-pouch', 'aluminium-laminated-roll', 'three-side-seal-pouch'],
    packSizes: ['100 g', '200 g', '250 g', '500 g', '1 kg'],
    features: ['Stand-up zipper', '3-layer laminate', 'Premium retail appearance'],
    faq: [
      { q: 'What type of pouches are suitable for dates?', a: 'Stand-up zipper pouches are ideal, offering structure, easy handling, and a premium retail appearance.' },
    ],
  },
];

export function getApplication(slug: string): Application | undefined {
  return APPLICATIONS.find((a) => a.slug === slug);
}

export function getRelatedApplications(slug: string, count = 4): Application[] {
  const current = getApplication(slug);
  if (!current) return APPLICATIONS.slice(0, count);
  return APPLICATIONS.filter((a) => a.slug !== slug && a.category === current.category)
    .concat(APPLICATIONS.filter((a) => a.slug !== slug && a.category !== current.category))
    .slice(0, count);
}
