// 8 product types — each becomes /products/[slug] with full SEO page.

export type Product = {
  slug: string;
  title: string;
  shortTitle: string;       // for cards / nav
  oneLiner: string;         // hero subtitle
  description: string;      // 1–2 sentence H1 description
  metaDescription: string;
  keywords: string[];
  image: string;            // /public path
  gallery: string[];
  specs: { label: string; value: string }[];
  finish: string[];
  applicationsSlugs: string[];
  faq: { q: string; a: string }[];
};

export const PRODUCTS: Product[] = [
  {
    slug: 'transparent-window-roll',
    title: 'Transparent Window Packaging Rolls & Pouches',
    shortTitle: 'Transparent Window Roll',
    oneLiner: 'See-through pouches that show your product and brand together.',
    description:
      'Two-layer multi-layer flexible packaging rolls with a transparent window — ideal when you want the customer to see what is inside while keeping a printed branding panel on the front.',
    metaDescription:
      'Transparent window packaging rolls and pouches manufacturer in Kolkata. PET + LDPE laminated, 2-layer, customizable up to 8 colors. MOQ 300 kg.',
    keywords: ['transparent window pouch', 'see through packaging roll', 'window pouch manufacturer Kolkata'],
    image: '/images/products/transparent-window-roll.jpg',
    gallery: [
      '/images/products/transparent-window-roll.jpg',
      '/images/products/transparent-window-roll-2.jpg',
    ],
    specs: [
      { label: 'MOQ', value: '300 kg' },
      { label: 'Layers', value: '2 (PET + Transparent LDPE)' },
      { label: 'Material', value: 'PET + Transparent LDPE' },
      { label: 'LDPE Type', value: 'Natural or N/F (for FFS machines)' },
      { label: 'Finish', value: 'Window with printing surround' },
      { label: 'Print Colors', value: 'Up to 8 colors (rotogravure)' },
      { label: 'Size', value: 'Customized' },
    ],
    finish: ['Window'],
    applicationsSlugs: ['chira-packaging-pouch', 'namkeen-packaging-pouch', 'whole-spices-packaging-pouch'],
    faq: [
      { q: 'What products is a transparent window pouch best for?', a: 'Chira, namkeen, rice, whole spices, sugar, seeds — any product where the visual appearance helps sell.' },
      { q: 'What is the minimum order?', a: '300 kg per design. We can run smaller trial batches on request.' },
      { q: 'Do you provide samples before bulk order?', a: 'Yes. Sample arrangements are discussed once artwork is approved — talk to us about your specifications.' },
    ],
  },
  {
    slug: 'aluminium-laminated-roll',
    title: 'Metal Polyester / Aluminium Laminated Rolls',
    shortTitle: 'Metal Polyester / Aluminium Roll',
    oneLiner: 'Premium glossy 3-layer laminate with metal polyester for longer shelf life.',
    description:
      'Three-layer laminated packaging rolls with PET + MET PET + LDPE — high gloss, full barrier, and protection from sunlight. The premium finish for products where shelf life and visual impact both matter.',
    metaDescription:
      'Aluminium / metal polyester laminated rolls and pouches — PET + MET PET + LDPE 3-layer construction. Glossy finish. Manufactured in Kolkata.',
    keywords: ['aluminium foil laminated pouch', 'metal polyester laminated roll', 'MET PET pouch manufacturer'],
    image: '/images/products/aluminium-laminated-roll.jpg',
    gallery: [
      '/images/products/aluminium-laminated-roll.jpg',
      '/images/products/aluminium-laminated-roll-2.jpg',
    ],
    specs: [
      { label: 'MOQ', value: '300 kg' },
      { label: 'Layers', value: '3 (PET + MET PET + LDPE)' },
      { label: 'Finish', value: 'Glossy' },
      { label: 'LDPE Type', value: 'Natural or N/F (for FFS)' },
      { label: 'Print Colors', value: 'Up to 8' },
      { label: 'Size', value: 'Customized' },
    ],
    finish: ['Glossy'],
    applicationsSlugs: ['namkeen-packaging-pouch', 'masala-packaging-pouch', 'tea-packaging-pouch', 'fertilizer-packaging-pouch'],
    faq: [
      { q: 'Why choose 3-layer over 2-layer?', a: '3-layer with metal polyester gives a complete barrier against light, oxygen, and moisture — essential for spices, tea, snacks, and pharma.' },
      { q: 'Why MET PET as the barrier layer?', a: 'Metalised polyester gives a full barrier against light, oxygen, and moisture — preserving flavour and shelf appeal.' },
    ],
  },
  {
    slug: 'met-bopp-laminated-roll',
    title: 'MET BOPP Laminated Rolls',
    shortTitle: 'MET BOPP Laminated Roll',
    oneLiner: '2-layer high-yield glossy laminate for low-cost premium-look packaging.',
    description:
      'PET + MET BOPP laminated rolls — glossy finish at a lower cost than 3-layer. Best for small pack sizes where high yield and visual impact matter more than maximum strength.',
    metaDescription:
      'MET BOPP 2-layer laminated rolls — high gloss, high yield, lower cost. Manufacturer Kolkata. Suitable for snacks and small pack sizes.',
    keywords: ['MET BOPP laminated pouch', 'BOPP packaging roll manufacturer'],
    image: '/images/products/met-bopp-laminated-roll.jpg',
    gallery: [
      '/images/products/met-bopp-laminated-roll.jpg',
      '/images/products/met-bopp-laminated-roll-2.jpg',
    ],
    specs: [
      { label: 'MOQ', value: '300 kg' },
      { label: 'Layers', value: '2 (PET + MET BOPP)' },
      { label: 'Finish', value: 'Glossy' },
      { label: 'Print Colors', value: 'Up to 8' },
      { label: 'Size', value: 'Customized' },
    ],
    finish: ['Glossy'],
    applicationsSlugs: ['namkeen-packaging-pouch', 'fryums-packaging-pouch'],
    faq: [
      { q: 'What is MET BOPP?', a: 'Metalized Bi-axially Oriented Polypropylene — gives a glossy metallic appearance at lower cost than aluminium foil.' },
      { q: 'For which products is this not suitable?', a: 'Heavy products (>1 kg) or anything needing very long shelf life — use 3-layer instead.' },
    ],
  },
  {
    slug: 'milky-roll',
    title: 'Milky LDPE Laminated Rolls',
    shortTitle: 'Milky Roll',
    oneLiner: 'Two-layer milky-finish laminate with strong yield and good cost-quality balance.',
    description:
      'PET + Milky LDPE laminated rolls — non-transparent, glossy finish. Ideal when you need a printed pouch with good strength but do not need either a window or premium glossy look.',
    metaDescription:
      'Milky LDPE laminated rolls and pouches — PET + Milky LDPE 2-layer, glossy. Manufactured in Kolkata for atta, soya chunks, batter, fertilizer.',
    keywords: ['milky LDPE pouch', 'PET milky laminated roll'],
    image: '/images/products/milky-roll.jpg',
    gallery: [
      '/images/products/milky-roll.jpg',
      '/images/products/milky-roll-2.jpg',
    ],
    specs: [
      { label: 'MOQ', value: '300 kg' },
      { label: 'Layers', value: '2 (PET + Milky LDPE)' },
      { label: 'Finish', value: 'Glossy, milky white' },
      { label: 'Print Colors', value: 'Up to 8' },
    ],
    finish: ['Milky', 'Glossy'],
    applicationsSlugs: ['atta-packaging-pouch', 'soya-bari-packaging-pouch', 'idly-dosa-batter-packaging-pouch', 'fertilizer-packaging-pouch'],
    faq: [
      { q: 'What does "milky" mean?', a: 'A milky-white tint inside the LDPE layer — gives a clean opaque background that prints look great on.' },
    ],
  },
  {
    slug: 'stand-up-pouch',
    title: 'Stand-Up Pouches (with optional Zipper)',
    shortTitle: 'Stand Up Pouch',
    oneLiner: 'Premium shelf-ready pouches that stand on their own — with or without zipper.',
    description:
      'Stand-up zipper pouches — the most retail-friendly format. Available in window, milky, or fully glossy finish. Optional resealable zipper for premium shelf appeal.',
    metaDescription:
      'Stand-up zipper pouch manufacturer Kolkata. PET + MET PET + LDPE construction. Optional zipper. Up to 8-color rotogravure printing.',
    keywords: ['stand up pouch manufacturer', 'zipper pouch Kolkata', 'standup zipper bag'],
    image: '/images/products/stand-up-pouch.jpg',
    gallery: [
      '/images/products/stand-up-pouch.jpg',
      '/images/products/stand-up-pouch-2.jpg',
      '/images/products/stand-up-pouch-3.jpg',
    ],
    specs: [
      { label: 'MOQ', value: '500 kg' },
      { label: 'Material', value: 'PET + MET PET (optional) + LDPE' },
      { label: 'Finish', value: 'Window / Milky / Glossy' },
      { label: 'Zipper', value: 'Optional resealable zipper' },
      { label: 'Print Colors', value: 'Up to 8' },
    ],
    finish: ['Glossy', 'Milky', 'Window'],
    applicationsSlugs: ['namkeen-packaging-pouch', 'tea-packaging-pouch', 'idly-dosa-batter-packaging-pouch', 'dried-fruits-packaging-pouch', 'makhana-packaging-pouch'],
    faq: [
      { q: 'Is the zipper resealable?', a: 'Yes — standard plastic resealable zipper that customers can open and close many times.' },
      { q: 'Can I get stand-up pouches without a zipper?', a: 'Absolutely — the zipper is optional and reduces cost when removed.' },
    ],
  },
  {
    slug: 'center-seal-pouch',
    title: 'Center Seal Packaging Pouches',
    shortTitle: 'Center Seal Pouch',
    oneLiner: 'Classic back-seal pouches for hand-fill or semi-auto sealing operations.',
    description:
      'Center seal (back seal) pouches — pre-made, ready for filling and hand sealing. The most common format for snacks, namkeen, and small spice packs.',
    metaDescription:
      'Center seal packaging pouches — PET + MET PET (optional) + LDPE laminated. Hand-seal ready. Manufactured in Kolkata.',
    keywords: ['center seal pouch manufacturer', 'back seal packaging'],
    image: '/images/products/center-seal-pouch.jpg',
    gallery: [
      '/images/products/center-seal-pouch.jpg',
      '/images/products/center-seal-pouch-2.jpg',
    ],
    specs: [
      { label: 'MOQ', value: '300 kg' },
      { label: 'Material', value: 'PET + MET PET (optional) + LDPE' },
      { label: 'Finish', value: 'Window / Milky / Glossy' },
      { label: 'Print Colors', value: 'Up to 8' },
    ],
    finish: ['Window', 'Milky', 'Glossy'],
    applicationsSlugs: ['namkeen-packaging-pouch', 'tea-packaging-pouch', 'masala-packaging-pouch', 'atta-packaging-pouch', 'ice-cream-packaging-pouch'],
    faq: [
      { q: 'Are center seal pouches FFS-compatible?', a: 'No — for FFS machines you need rolls. Center seal pouches are pre-made for hand-fill operations.' },
    ],
  },
  {
    slug: 'three-side-seal-pouch',
    title: '3-Side Seal Pouches',
    shortTitle: '3 Sides Seal Pouch',
    oneLiner: 'Pre-sealed on three sides, open on one — fastest hand-fill format.',
    description:
      'Three-side sealed pouches — pre-sealed on three edges with one side open for filling. Available in 2, 2½, or 3-layer construction with multiple finish options.',
    metaDescription:
      'Three-side seal pouches manufacturer Kolkata. 2 / 2½ / 3-layer construction. Window, milky, glossy, or one-side window finishes.',
    keywords: ['3 side seal pouch', 'three side sealed bag manufacturer'],
    image: '/images/products/three-side-seal-pouch.jpg',
    gallery: [
      '/images/products/three-side-seal-pouch.jpg',
      '/images/products/three-side-seal-pouch-2.jpg',
    ],
    specs: [
      { label: 'MOQ', value: '300 kg' },
      { label: 'Layers', value: '2 / 2½ / 3' },
      { label: 'Finish', value: 'Window / Milky / Glossy / One-side window, one-side metallic' },
      { label: 'Print Colors', value: 'Up to 8' },
    ],
    finish: ['Window', 'Milky', 'Glossy'],
    applicationsSlugs: ['namkeen-packaging-pouch', 'tea-packaging-pouch', 'masala-packaging-pouch', 'atta-packaging-pouch'],
    faq: [
      { q: 'How many sides do I have to seal myself?', a: 'Just one. Three sides come pre-sealed; you only seal the top after filling.' },
    ],
  },
  {
    slug: 'pouch-with-handle',
    title: 'Pouches with D-Cut Handle',
    shortTitle: 'Pouch with Handle',
    oneLiner: 'Three-side sealed pouches with a punched D-cut handle for easy carrying.',
    description:
      'Three-side sealed pouches with a die-cut handle on top — adds a carrying option, perfect for snacks, atta, namkeen retail packs that customers walk home with.',
    metaDescription:
      'Pouches with D-cut handle — manufacturer in Kolkata. 2 / 2½ / 3-layer laminated. Customizable in window, milky, or glossy finish.',
    keywords: ['pouch with handle', 'D-cut handle pouch manufacturer'],
    image: '/images/products/pouch-with-handle.jpg',
    gallery: [
      '/images/products/pouch-with-handle.jpg',
      '/images/products/pouch-with-handle-2.jpg',
    ],
    specs: [
      { label: 'MOQ', value: '300 kg' },
      { label: 'Layers', value: '2 / 2½ / 3' },
      { label: 'Handle', value: 'D-cut die punched' },
      { label: 'Print Colors', value: 'Up to 8' },
    ],
    finish: ['Window', 'Milky', 'Glossy'],
    applicationsSlugs: ['namkeen-packaging-pouch', 'tea-packaging-pouch', 'masala-packaging-pouch'],
    faq: [
      { q: 'How much weight can the handle hold?', a: 'Up to 2 kg comfortably with a 3-layer laminate.' },
    ],
  },
  {
    slug: 'ldpe-gusset-pouch',
    title: 'LDPE Gusset Pouches',
    shortTitle: 'LDPE Gusset Pouch',
    oneLiner: 'Side-gusseted LDPE pouches with large fill volume and stand-on-shelf shape.',
    description:
      'LDPE gusset pouches expand at both sides to hold significantly more volume than flat pouches of the same width. The gusseted shape stands stably on shelf and pallets well. A great fit for snacks, dried foods, fertiliser, garments, and any product where pack volume needs to scale up without sacrificing footprint.',
    metaDescription:
      'LDPE gusset pouch manufacturer in Kolkata. Side-gusseted construction, custom sizes, up to 8-colour print. MOQ 300 kg.',
    keywords: ['LDPE gusset pouch', 'gusseted pouch manufacturer', 'side gusset pouch India'],
    image: '/images/products/ldpe-gusset-pouch.jpg',
    gallery: ['/images/products/ldpe-gusset-pouch.jpg'],
    specs: [
      { label: 'MOQ', value: '300 kg' },
      { label: 'Layers', value: '1 (LDPE)' },
      { label: 'Construction', value: 'Side gusset' },
      { label: 'Print Colours', value: 'Up to 8' },
      { label: 'Size', value: 'Customised' },
    ],
    finish: ['Milky', 'Glossy', 'Matt'],
    applicationsSlugs: ['namkeen-packaging-pouch', 'fryums-packaging-pouch', 'detergent-packaging-pouch'],
    faq: [
      { q: 'What is a gusset pouch?', a: 'A gusset pouch has folded panels on the sides that expand when the pouch is filled, giving more volume than a flat pouch of the same width.' },
      { q: 'How tall can gusset pouches be made?', a: 'Standard heights up to about 600 mm. Speak to us for taller custom sizes.' },
    ],
  },
  {
    slug: 'registered-matt-pouch',
    title: 'Registered Matt Pouches',
    shortTitle: 'Registered Matt Pouch',
    oneLiner: 'Selective matt + gloss finish — matt only where you specify, glossy everywhere else.',
    description:
      'Registered matt is a premium finish where only specified zones of the printed pouch carry a matt effect, while the rest stays glossy. The contrast between matt logo, matt brand panel, and surrounding gloss creates a distinct tactile and visual signature that buyers notice on shelf. Used by premium tea, dried fruits, and spice brands.',
    metaDescription:
      'Registered matt pouch manufacturer in Kolkata — selective matt + gloss finish for premium packaging. Custom designs, 8-colour rotogravure.',
    keywords: ['registered matt pouch', 'spot matt pouch manufacturer', 'matt gloss combination pouch'],
    image: '/images/products/registered-matt-pouch.jpg',
    gallery: ['/images/products/registered-matt-pouch.jpg'],
    specs: [
      { label: 'MOQ', value: '500 kg' },
      { label: 'Finish', value: 'Selective matt + gloss (registered)' },
      { label: 'Material', value: 'PET + MET PET (optional) + LDPE' },
      { label: 'Layers', value: '2 or 3' },
      { label: 'Print Colours', value: 'Up to 8' },
    ],
    finish: ['Registered matt', 'Selective gloss'],
    applicationsSlugs: ['tea-packaging-pouch', 'dried-fruits-packaging-pouch', 'masala-packaging-pouch'],
    faq: [
      { q: 'What does registered matt mean?', a: 'It means only specified areas (e.g., your logo or a brand panel) are matt while the rest of the pouch stays glossy. The matt zones are precisely registered to your artwork.' },
      { q: 'Why is MOQ higher for this product?', a: 'Registered matt needs an extra coating cylinder during rotogravure and tighter print registration — making short runs less economical.' },
    ],
  },
  {
    slug: 'matt-pouch',
    title: 'Matt Pouches',
    shortTitle: 'Matt Pouch',
    oneLiner: 'Fully matt-finish pouches for a soft, premium, non-reflective look.',
    description:
      'Matt pouches carry an all-over matt finish — soft to touch, low glare, and modern in feel. Increasingly preferred by premium organic, ayurvedic, and artisan brands that want to stand apart from the typical glossy shelf. The matt coating also reduces fingerprint marks and looks cleaner over time.',
    metaDescription:
      'Matt finish pouch manufacturer in Kolkata. Full matt coating, soft-touch feel, custom sizes, 8-colour print. MOQ 300 kg.',
    keywords: ['matt pouch', 'matt finish pouch manufacturer', 'soft touch pouch India'],
    image: '/images/products/matt-pouch.jpg',
    gallery: ['/images/products/matt-pouch.jpg'],
    specs: [
      { label: 'MOQ', value: '300 kg' },
      { label: 'Finish', value: 'Full matt (all-over)' },
      { label: 'Material', value: 'PET + MET PET (optional) + LDPE' },
      { label: 'Layers', value: '2 or 3' },
      { label: 'Print Colours', value: 'Up to 8' },
    ],
    finish: ['Full matt'],
    applicationsSlugs: ['tea-packaging-pouch', 'dried-fruits-packaging-pouch', 'masala-packaging-pouch'],
    faq: [
      { q: 'Will matt finish wear off?', a: 'Matt is a coating layer applied during rotogravure printing. Under normal handling and storage it remains stable throughout the product shelf life.' },
      { q: 'Is matt or gloss more premium?', a: 'Neither is inherently more premium — it depends on positioning. Matt suits organic, ayurvedic, and artisan brands. Gloss suits mainstream FMCG.' },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  return PRODUCTS.filter((p) => p.slug !== slug).slice(0, count);
}
