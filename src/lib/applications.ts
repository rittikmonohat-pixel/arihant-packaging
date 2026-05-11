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
  category: 'foods' | 'snacks' | 'dairy-batter' | 'personal-care' | 'detergents' | 'agri';
  recommendedProductSlugs: string[];
  packSizes: string[];
  features: string[];
  faq: { q: string; a: string }[];
};

export const APPLICATIONS: Application[] = [
  {
    slug: 'atta-packaging-pouch',
    title: 'Atta (Wheat Flour) Packaging Pouches',
    shortTitle: 'Atta Pouch',
    oneLiner: 'Strong moisture-barrier pouches for 1 kg, 5 kg, and 10 kg flour packs.',
    description:
      'Atta needs packaging that locks out moisture and pests while standing up to rough handling in retail. Our milky LDPE laminated rolls and pouches with handle deliver shelf life and durability — and look sharp printed in your brand colours.',
    metaDescription: 'Atta (wheat flour) packaging pouch manufacturer in Kolkata — milky laminated, with handle option. 1 kg / 5 kg / 10 kg sizes. MOQ 300 kg.',
    keywords: ['atta packaging pouch manufacturer', 'wheat flour packaging India', 'atta pouch with handle'],
    image: '/images/applications/atta.jpg',
    category: 'foods',
    recommendedProductSlugs: ['milky-roll', 'pouch-with-handle', 'three-side-seal-pouch'],
    packSizes: ['500 g', '1 kg', '2 kg', '5 kg', '10 kg'],
    features: ['Moisture barrier', 'High burst strength', 'D-cut handle option', 'Up to 8-color print'],
    faq: [
      { q: 'What MOQ for atta pouches?', a: '300 kg per design — that is roughly 30,000–60,000 pouches depending on size.' },
      { q: 'Can the pouch carry 10 kg?', a: 'Yes, with 3-layer milky laminate and reinforced handle.' },
    ],
  },
  {
    slug: 'namkeen-packaging-pouch',
    title: 'Namkeen Packaging Pouches',
    shortTitle: 'Namkeen Pouch',
    oneLiner: 'Crisp-protecting pouches in window, glossy, or stand-up zipper formats.',
    description:
      'Namkeen and savoury snacks need an oxygen + oil barrier to stay crisp. We supply both pre-made pouches and FFS rolls, in finishes that win shelf attention from window-style transparent to glossy metallic.',
    metaDescription: 'Namkeen packaging pouch manufacturer in Kolkata — window, glossy, stand-up zipper. PET + MET PET + LDPE. 8-color print.',
    keywords: ['namkeen packaging pouch', 'namkeen pouch manufacturer Kolkata'],
    image: '/images/applications/namkeen.jpg',
    category: 'snacks',
    recommendedProductSlugs: ['stand-up-pouch', 'three-side-seal-pouch', 'aluminium-laminated-roll', 'transparent-window-roll'],
    packSizes: ['25 g', '50 g', '100 g', '200 g', '500 g'],
    features: ['Oil barrier', 'Oxygen barrier', 'Premium glossy or window finish', 'Stand-up zipper option'],
    faq: [
      { q: 'How long does namkeen stay crisp in your pouches?', a: 'With 3-layer aluminium laminate, 4–6 months from packing date in normal Indian retail conditions.' },
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
    category: 'foods',
    recommendedProductSlugs: ['aluminium-laminated-roll', 'stand-up-pouch', 'center-seal-pouch'],
    packSizes: ['50 g', '100 g', '250 g', '500 g', '1 kg'],
    features: ['Aroma & moisture barrier', '3-layer laminate', 'Glossy or matte', 'Zipper option'],
    faq: [
      { q: 'Does the pouch keep tea fresh for 12+ months?', a: 'Yes — properly sealed 3-layer aluminium laminate keeps tea fresh 12–18 months.' },
    ],
  },
  {
    slug: 'ice-cream-packaging-pouch',
    title: 'Ice Cream Packaging Pouches',
    shortTitle: 'Ice Cream Pouch',
    oneLiner: 'Freezer-tough pouches for ice cream and frozen desserts.',
    description:
      'Ice cream packaging has to survive sub-zero temperatures, condensation, and rough handling in cold-chain logistics. Our laminated pouches use food-grade LDPE that stays flexible at -20 °C.',
    metaDescription: 'Ice cream packaging pouch manufacturer Kolkata — freezer-grade laminate, glossy print, custom sizes.',
    keywords: ['ice cream packaging pouch', 'frozen dessert pouch manufacturer'],
    image: '/images/applications/ice-cream.jpg',
    category: 'dairy-batter',
    recommendedProductSlugs: ['center-seal-pouch', 'aluminium-laminated-roll'],
    packSizes: ['50 ml', '100 ml', '250 ml', '500 ml', '1 L'],
    features: ['Freezer-grade LDPE', 'Glossy print', 'Sealing reliability at low temperatures'],
    faq: [{ q: 'Is the laminate FSSAI compliant?', a: 'Yes — all food-contact materials we use are food-grade and FSSAI compliant.' }],
  },
  {
    slug: 'masala-packaging-pouch',
    title: 'Masala / Spices Packaging Pouches',
    shortTitle: 'Masala Pouch',
    oneLiner: 'Aroma & oil-barrier pouches for ground spices, blends, and pastes.',
    description:
      'Spices are oily, aromatic, and demanding. Our 3-layer aluminium laminated pouches lock in volatile oils and aromas while standing up to retail handling for 12+ months.',
    metaDescription: 'Masala / spices packaging pouch manufacturer in Kolkata. 3-layer laminate, aroma barrier, custom-printed.',
    keywords: ['masala packaging pouch', 'spices packaging pouch India'],
    image: '/images/applications/masala.jpg',
    category: 'foods',
    recommendedProductSlugs: ['aluminium-laminated-roll', 'three-side-seal-pouch', 'center-seal-pouch'],
    packSizes: ['10 g', '50 g', '100 g', '200 g', '500 g'],
    features: ['Aroma & oil barrier', '3-layer construction', 'Glossy or matte print'],
    faq: [{ q: 'Is the laminate suitable for oily spice mixes?', a: 'Yes — LDPE inner is oil-resistant and certified for direct food contact.' }],
  },
  {
    slug: 'idly-dosa-batter-packaging-pouch',
    title: 'Idly & Dosa Batter Packaging Pouches',
    shortTitle: 'Idly Dosa Batter Pouch',
    oneLiner: 'Stand-up pouches for fresh fermented batters that need to breathe.',
    description:
      'Fermented batters need to release CO₂ without leaking liquid. Our specialised stand-up zipper batter pouches handle this with a calibrated seal pattern, keeping batters fresh for 5–7 days refrigerated.',
    metaDescription: 'Idly & dosa batter packaging pouch manufacturer in Kolkata. Stand-up, leak-proof, food-grade laminate.',
    keywords: ['idly dosa batter pouch', 'batter packaging stand up pouch'],
    image: '/images/applications/idly-dosa.jpg',
    category: 'dairy-batter',
    recommendedProductSlugs: ['stand-up-pouch', 'milky-roll'],
    packSizes: ['500 ml', '1 L', '2 L'],
    features: ['Leak-proof', 'Pressure-tolerant seal', 'Food-grade LDPE', 'Stand-up format'],
    faq: [{ q: 'Will the pouch leak under fridge pressure?', a: 'No — our seal recipe is tested for fermenting batter conditions.' }],
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
    category: 'foods',
    recommendedProductSlugs: ['transparent-window-roll', 'three-side-seal-pouch'],
    packSizes: ['100 g', '200 g', '500 g', '1 kg'],
    features: ['Window front', 'Moisture barrier', 'Custom branding'],
    faq: [{ q: 'Will the window get scratched in transit?', a: 'No — the LDPE inner protects the PET window film, and we add scuff-resistant ink overprint where requested.' }],
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
    category: 'foods',
    recommendedProductSlugs: ['milky-roll', 'three-side-seal-pouch'],
    packSizes: ['100 g', '200 g', '500 g', '1 kg'],
    features: ['Volume strength', 'Moisture barrier', 'Vibrant print'],
    faq: [{ q: 'How many printing colors do you support?', a: 'Up to 8 colors via rotogravure — sharp, photo-quality output.' }],
  },
  {
    slug: 'fryums-packaging-pouch',
    title: 'Fryums Packaging Pouches',
    shortTitle: 'Fryums Pouch',
    oneLiner: 'Lightweight, big-impact MET BOPP pouches for raw and fried fryums.',
    description:
      'Fryums (kurkure-style snacks) need lightweight high-yield pouches with a glossy retail-ready finish. Our MET BOPP 2-layer rolls deliver — at attractive cost per pouch.',
    metaDescription: 'Fryums packaging pouch manufacturer Kolkata — MET BOPP glossy laminate, custom design.',
    keywords: ['fryums packaging pouch', 'kurkure style pouch manufacturer'],
    image: '/images/applications/fryums.jpg',
    category: 'snacks',
    recommendedProductSlugs: ['met-bopp-laminated-roll', 'center-seal-pouch'],
    packSizes: ['25 g', '50 g', '100 g', '200 g'],
    features: ['Glossy finish', 'Lightweight', 'High yield'],
    faq: [{ q: 'Why 2-layer instead of 3-layer for fryums?', a: 'Fryums are eaten quickly — 2-layer gives sufficient shelf life at meaningfully lower cost.' }],
  },
  {
    slug: 'detergent-packaging-pouch',
    title: 'Detergent Powder Packaging Pouches',
    shortTitle: 'Detergent Pouch',
    oneLiner: 'Tear-resistant detergent pouches in 1 kg and 500 g formats.',
    description:
      'Detergent packaging is a high-volume, cost-driven category. Our laminated rolls keep your cost per kg low while delivering vibrant 8-color brand graphics that stand out on the kirana shelf.',
    metaDescription: 'Detergent packaging pouch manufacturer Kolkata. Laminated rolls and pouches, tear-resistant, 8-color print.',
    keywords: ['detergent packaging pouch', 'detergent pouch manufacturer'],
    image: '/images/applications/detergent.jpg',
    category: 'detergents',
    recommendedProductSlugs: ['aluminium-laminated-roll', 'three-side-seal-pouch', 'milky-roll'],
    packSizes: ['200 g', '500 g', '1 kg', '2 kg'],
    features: ['Tear resistance', 'Premium 8-color print', 'Hand-fill or FFS'],
    faq: [{ q: 'Does the pouch leak with detergent?', a: 'No — our seal is rated for granular and powder products with reliable barrier.' }],
  },
  {
    slug: 'fertilizer-packaging-pouch',
    title: 'Fertilizer Packaging Pouches',
    shortTitle: 'Fertilizer Pouch',
    oneLiner: 'High-strength, UV-resistant pouches for granular and powder fertilizer.',
    description:
      'Garden and farm fertilizer packaging needs to survive outdoor storage, UV exposure, and rough handling. Our 3-layer milky laminated pouches with UV-stable inks fit the brief.',
    metaDescription: 'Fertilizer packaging pouch manufacturer Kolkata. 3-layer milky laminate, UV-resistant, custom-printed.',
    keywords: ['fertilizer packaging pouch', 'fertilizer pouch manufacturer India'],
    image: '/images/applications/fertilizer.jpg',
    category: 'agri',
    recommendedProductSlugs: ['milky-roll', 'aluminium-laminated-roll', 'pouch-with-handle'],
    packSizes: ['250 g', '500 g', '1 kg', '5 kg'],
    features: ['UV-resistant ink', 'High burst strength', 'Outdoor storage suitable'],
    faq: [{ q: 'Is the pouch suitable for chemical fertilizer?', a: 'Yes — LDPE inner is chemically inert against most agricultural fertilizers.' }],
  },
  {
    slug: 'seed-packaging-pouch',
    title: 'Seed Packaging Pouches',
    shortTitle: 'Seed Pouch',
    oneLiner: 'Moisture-control pouches that protect germination viability.',
    description:
      'Seeds lose germination if exposed to moisture. Our 3-layer aluminium laminated pouches with strong seal integrity preserve viability for 18–24 months in normal storage.',
    metaDescription: 'Seed packaging pouch manufacturer in Kolkata. 3-layer aluminium laminate to protect germination viability.',
    keywords: ['seed packaging pouch', 'seed pouch manufacturer India'],
    image: '/images/applications/seed.jpg',
    category: 'agri',
    recommendedProductSlugs: ['aluminium-laminated-roll', 'three-side-seal-pouch', 'transparent-window-roll'],
    packSizes: ['50 g', '100 g', '250 g', '500 g', '1 kg'],
    features: ['Aluminium moisture barrier', 'Window option', 'Long shelf life'],
    faq: [{ q: 'Will the pouch keep seeds viable for 2 years?', a: 'Yes — with our 3-layer aluminium laminate and an oxygen scavenger if specified.' }],
  },
  {
    slug: 'whole-spices-packaging-pouch',
    title: 'Whole Spices Packaging Pouches',
    shortTitle: 'Whole Spices',
    oneLiner: 'Window-front laminated pouches that showcase spice quality.',
    description:
      'Whole spices — cumin, mustard, coriander seeds, peppercorns — sell better when buyers can see the grain. Our window-front laminated rolls combine clarity with full barrier protection.',
    metaDescription: 'Whole spices packaging pouch manufacturer in Kolkata. Transparent window with aluminium back panel.',
    keywords: ['whole spices packaging pouch', 'cumin pouch manufacturer'],
    image: '/images/applications/whole-spices.jpg',
    category: 'foods',
    recommendedProductSlugs: ['transparent-window-roll', 'three-side-seal-pouch'],
    packSizes: ['50 g', '100 g', '200 g', '500 g'],
    features: ['Window front', 'Aroma barrier', 'Custom-printed back panel'],
    faq: [{ q: 'Can I get a window on one side and aluminium on the other?', a: 'Yes — our 3-layer laminate supports one-side window, one-side metallic.' }],
  },
  {
    slug: 'paneer-vacuum-pouch',
    title: 'Paneer Vacuum Packaging Pouches',
    shortTitle: 'Paneer Vacuum Pouch',
    oneLiner: 'High-barrier vacuum pouches for fresh paneer and dairy curds.',
    description:
      'Paneer needs vacuum-sealed pouches that hold up under pressure and protect against off-flavours. Our 3-layer EVOH-blend pouches deliver the moisture and oxygen barrier dairy demands.',
    metaDescription: 'Paneer vacuum packaging pouch manufacturer Kolkata. 3-layer EVOH laminate. FSSAI compliant.',
    keywords: ['paneer vacuum pouch', 'paneer packaging India'],
    image: '/images/applications/paneer.jpg',
    category: 'dairy-batter',
    recommendedProductSlugs: ['aluminium-laminated-roll', 'three-side-seal-pouch'],
    packSizes: ['100 g', '200 g', '500 g', '1 kg'],
    features: ['Vacuum-sealable', 'Oxygen barrier', 'FSSAI compliant'],
    faq: [{ q: 'Are the pouches vacuum-machine compatible?', a: 'Yes — compatible with both chamber vacuum machines and external vacuum sealers.' }],
  },
  {
    slug: 'sattu-packaging-pouch',
    title: 'Sattu Packaging Pouches',
    shortTitle: 'Sattu Pouch',
    oneLiner: 'Moisture-tight pouches for roasted gram flour and sattu blends.',
    description:
      'Sattu absorbs moisture quickly, losing flavour and texture. Our 3-layer laminated pouches keep sattu shelf-stable for 6–9 months without the need for oxygen scavengers.',
    metaDescription: 'Sattu packaging pouch manufacturer Kolkata. Moisture-locking 3-layer laminate, custom-printed.',
    keywords: ['sattu packaging pouch', 'sattu pouch manufacturer'],
    image: '/images/applications/sattu.jpg',
    category: 'foods',
    recommendedProductSlugs: ['aluminium-laminated-roll', 'milky-roll', 'three-side-seal-pouch'],
    packSizes: ['100 g', '200 g', '500 g', '1 kg'],
    features: ['Moisture barrier', '3-layer construction', '8-color print'],
    faq: [{ q: 'Will the pouch keep sattu fresh for 6 months?', a: 'Yes — with our 3-layer aluminium laminate and proper sealing.' }],
  },
  {
    slug: 'sanitary-napkin-packaging-pouch',
    title: 'Sanitary Napkin Packaging Pouches',
    shortTitle: 'Sanitary Napkin',
    oneLiner: 'Discreet, hygienic pouches for sanitary pads and napkins.',
    description:
      'Sanitary product packaging requires hygienic, tamper-evident, opaque pouches with strong shelf appeal. Our gusseted laminated pouches deliver privacy and durability with bold print.',
    metaDescription: 'Sanitary napkin / pad packaging pouch manufacturer Kolkata. Gusseted, hygienic, opaque, custom-printed.',
    keywords: ['sanitary napkin packaging pouch', 'sanitary pad pouch manufacturer'],
    image: '/images/applications/sanitary.jpg',
    category: 'personal-care',
    recommendedProductSlugs: ['three-side-seal-pouch', 'aluminium-laminated-roll', 'pouch-with-handle'],
    packSizes: ['8 pads', '10 pads', '15 pads', 'family pack'],
    features: ['Opaque outer', 'Hygienic seal', 'Tamper-evident'],
    faq: [{ q: 'Can the pouch include a tear-notch?', a: 'Yes — easy-tear notch is a standard option at no extra cost.' }],
  },
  {
    slug: 'dried-fruits-packaging-pouch',
    title: 'Dried Fruits Packaging Pouches',
    shortTitle: 'Dried Fruits',
    oneLiner: 'Premium stand-up zipper pouches for cashews, almonds, raisins, and mixes.',
    description:
      'Dried fruits demand premium retail-ready packaging with resealable convenience. Our stand-up zipper pouches in glossy or matte aluminium laminate deliver shelf appeal and 12-month freshness.',
    metaDescription: 'Dried fruits packaging pouch manufacturer Kolkata — stand-up zipper, aluminium laminate, glossy or matte.',
    keywords: ['dried fruits packaging pouch', 'cashew almond pouch manufacturer'],
    image: '/images/applications/dried-fruits.jpg',
    category: 'foods',
    recommendedProductSlugs: ['stand-up-pouch', 'aluminium-laminated-roll'],
    packSizes: ['100 g', '200 g', '250 g', '500 g', '1 kg'],
    features: ['Stand-up zipper', 'Aluminium barrier', 'Premium glossy or matte'],
    faq: [{ q: 'Are the pouches Amazon-listing ready?', a: 'Yes — we design barcodes, FSSAI symbols, and nutrition labels into the printable area.' }],
  },
  {
    slug: 'makhana-packaging-pouch',
    title: 'Makhana / Fox Nut Packaging Pouches',
    shortTitle: 'Makhana',
    oneLiner: 'Stand-up zipper pouches for roasted makhana — snack or premium food.',
    description:
      'Makhana is taking off as a healthy snack — premium packaging matters. Our stand-up zipper pouches in aluminium or window-front laminate keep makhana crunchy and shelf-attractive.',
    metaDescription: 'Makhana / fox nut packaging pouch manufacturer Kolkata. Stand-up zipper, aluminium laminate.',
    keywords: ['makhana packaging pouch', 'fox nut pouch manufacturer'],
    image: '/images/applications/makhana.jpg',
    category: 'snacks',
    recommendedProductSlugs: ['stand-up-pouch', 'aluminium-laminated-roll', 'transparent-window-roll'],
    packSizes: ['50 g', '100 g', '200 g', '500 g'],
    features: ['Crunch protection', 'Stand-up zipper', 'Premium look'],
    faq: [{ q: 'Will the pouch keep makhana crunchy for 6 months?', a: 'Yes — with 3-layer aluminium and a tight seal.' }],
  },
  {
    slug: 'besan-packaging-pouch',
    title: 'Besan (Gram Flour) Packaging Pouches',
    shortTitle: 'Besan',
    oneLiner: 'Moisture-control pouches for besan in 500 g and 1 kg formats.',
    description:
      'Besan absorbs humidity and clumps if not packed in proper barrier material. Our laminated pouches keep besan free-flowing for the full shelf life.',
    metaDescription: 'Besan / gram flour packaging pouch manufacturer Kolkata. Milky and aluminium laminated options.',
    keywords: ['besan packaging pouch', 'gram flour pouch manufacturer'],
    image: '/images/applications/besan.jpg',
    category: 'foods',
    recommendedProductSlugs: ['milky-roll', 'three-side-seal-pouch'],
    packSizes: ['500 g', '1 kg', '2 kg'],
    features: ['Moisture barrier', 'Free-flow protection', '8-color print'],
    faq: [{ q: 'Does besan keep fresh in your pouch?', a: 'Yes — moisture-barrier laminate keeps besan free-flowing for 6+ months.' }],
  },
  {
    slug: 'tissue-packaging-pouch',
    title: 'Tissue Packaging Pouches',
    shortTitle: 'Tissue',
    oneLiner: 'Lightweight, attractive pouches for tissue paper retail packs.',
    description:
      'Tissue packaging is high-volume and price-sensitive. Our 2-layer milky laminated rolls give a crisp print at the lowest cost per pouch.',
    metaDescription: 'Tissue packaging pouch manufacturer Kolkata. 2-layer milky laminated, lightweight.',
    keywords: ['tissue packaging pouch', 'tissue pouch manufacturer'],
    image: '/images/applications/tissue.jpg',
    category: 'personal-care',
    recommendedProductSlugs: ['milky-roll', 'three-side-seal-pouch'],
    packSizes: ['50 sheets', '100 sheets', '200 sheets'],
    features: ['Light barrier', 'Crisp print', 'Cost optimized'],
    faq: [{ q: 'Can I order in low MOQ?', a: 'Standard MOQ is 300 kg — but speak to us about smaller trial runs.' }],
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
