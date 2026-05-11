// Blog posts migrated from Wix /post/* + new SEO posts.

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  date: string;            // ISO 8601
  modified?: string;
  author: string;
  readingMinutes: number;
  image: string;
  category: string;
  body: string;            // simple paragraph-array string (we render with whitespace-pre-line)
  faq?: { q: string; a: string }[];
};

const join = (...lines: string[]) => lines.join('\n\n');

export const POSTS: BlogPost[] = [
  {
    slug: 'finding-the-right-flexible-packaging-manufacturer',
    title: 'Finding the Right Flexible Packaging Manufacturer',
    excerpt: 'Choosing the right packaging partner is crucial in today\'s competitive market. Here is what to look for.',
    metaDescription: 'How to choose the right flexible packaging manufacturer in India — checklist of capability, quality, lead time, MOQ, and support to evaluate.',
    date: '2025-08-02',
    author: 'Rittik Monohat',
    readingMinutes: 5,
    image: '/images/blog/finding-the-right-manufacturer.jpg',
    category: 'Buyer\'s Guide',
    body: join(
      'Choosing the right partner for your packaging needs is crucial in today\'s competitive market. Flexible packaging offers numerous benefits — better shelf appeal, longer shelf life, lower freight cost, and creative format options that rigid packaging just cannot match.',
      'But the partner you choose matters as much as the format. Here is the checklist we recommend.',
      '## 1. In-house manufacturing capability',
      'Ask whether printing, lamination, slitting, and pouching all happen at one location. If your supplier outsources lamination or pouching, lead times stretch and accountability for defects gets murky. At Arihant Packaging we have all four capabilities under one roof in Madhyamgram, Kolkata.',
      '## 2. Material range',
      'A good supplier carries PET, MET PET, BOPP, MET BOPP, and LDPE — and can advise which combination is right for your product. A 3-layer PET + MET PET + LDPE laminate is overkill for a 25 g namkeen pouch and underkill for a 1 kg tea pack.',
      '## 3. Print quality and color count',
      'Rotogravure with 6–8 colors gives photo-quality output. Anything less is fine for low-end packs but limits your brand. Always ask for a printed sample before placing the first order.',
      '## 4. MOQ that matches your stage',
      'A 5-ton MOQ kills early-stage brands. Look for a partner whose 300–500 kg MOQ matches your initial run rate — and who is happy to grow with you.',
      '## 5. Lead time honesty',
      'New jobs typically take 10–14 days from artwork approval. If a supplier promises 5 days for first order, expect quality compromises. Repeat orders should ship in 7–10 days.',
      '## 6. After-sales support',
      'Defects happen. The right partner replaces affected stock without an argument. Read Google reviews and ask for client references before committing.',
      'When you find a packaging partner who scores well on all six points, you have a relationship that will last 5+ years and grow with your brand.'
    ),
    faq: [
      { q: 'How do I evaluate a flexible packaging manufacturer?', a: 'Check in-house capability (printing + lamination + pouching), material range, print color count, MOQ, lead time, and after-sales support.' },
      { q: 'What is a reasonable MOQ for a new brand?', a: '300–500 kg per design is the Indian industry standard for new clients. Below that, you may face high per-kg cost.' },
    ],
  },
  {
    slug: 'zip-lock-plastic-pouches-benefits',
    title: 'The Benefits of Using Zipper Lock Plastic Pouches for Packaging',
    excerpt: 'Resealable zipper pouches keep products fresh after opening — and customers love that.',
    metaDescription: 'Why resealable zipper pouches are taking over Indian retail — freshness preservation, reuse, premium shelf appeal, and customer convenience.',
    date: '2023-10-10',
    modified: '2025-12-01',
    author: 'Rittik Monohat',
    readingMinutes: 4,
    image: '/images/blog/zipper-pouches.jpg',
    category: 'Product Insight',
    body: join(
      'In today\'s market, the way you package your products plays a vital role in attracting customers and ensuring the freshness and safety of what is inside. Zipper lock pouches have emerged as a clear winner across categories.',
      '## Freshness preservation',
      'A standard heat-sealed pouch is single-use. Once opened, customers either use everything immediately or transfer the contents to another container. Zipper lock pouches solve that — the customer reseals the pouch and the product stays fresh for days or weeks longer.',
      '## Premium shelf perception',
      'Zipper pouches signal "premium" without you charging premium. They photograph better, stack better in stores, and build brand equity over time.',
      '## Reduced food waste',
      'Indian buyers are increasingly conscious of food waste. A pouch that keeps namkeen, makhana, or dried fruits crisp for weeks after opening is genuinely valued — and re-purchased.',
      '## Cost vs benefit',
      'A zipper adds roughly ₹0.30–₹0.80 per pouch depending on size. For products selling at ₹50+ retail, that is a no-brainer. For high-velocity 5-rupee snacks, stick with center seal pouches.',
      '## Common applications',
      'Tea, coffee, dry fruits, namkeen, dosa batter, chutneys, dehydrated foods, pet food. We supply zipper pouches in window, milky, glossy, and aluminium-laminated finishes — all with up to 8-color printing.'
    ),
    faq: [
      { q: 'How many times can a zipper pouch be reopened?', a: 'A typical resealable zipper holds for 50–100 reopen cycles before it loosens.' },
      { q: 'Are zipper pouches food safe?', a: 'Yes — the zipper itself is food-grade, and the pouch material is FSSAI compliant.' },
    ],
  },
  {
    slug: 'flexible-laminated-pouches',
    title: 'How Flexible Laminated Pouches Will Make Your Brand Stand Out',
    excerpt: 'Innovation in flexible packaging is helping Indian FMCG brands compete with multinationals.',
    metaDescription: 'How flexible laminated pouches deliver superior shelf appeal, longer shelf life, and lower freight costs — and why Indian brands are switching to them.',
    date: '2021-08-25',
    modified: '2025-12-01',
    author: 'Rittik Monohat',
    readingMinutes: 4,
    image: '/images/blog/laminated-pouches-stand-out.jpg',
    category: 'Industry Trends',
    body: join(
      'In every industry, there comes a moment when innovation gracefully ushers it into a new era. For packaging, that moment was the rise of multi-layer laminated flexible pouches.',
      '## Why brands are switching',
      'Glass jars are heavy, expensive, and fragile. Rigid plastic containers are bulky and cannot scale into high-volume retail. Laminated pouches solved all three problems — they are light, cheap to ship, easy to print, and they protect product as well as glass for most categories.',
      '## What "multi-layer" actually means',
      'A 3-layer laminated pouch is typically PET (outer print layer) + MET PET (barrier layer) + LDPE (heat-seal inner). Each layer does one job. Together they keep moisture, oxygen, and light out — protecting flavor, color, and texture.',
      '## Print quality is now world-class',
      'Modern Indian rotogravure presses (we run an 8-color machine) can match anything you would see on a global brand. The bar for "good" packaging is now what your customers see in supermarkets — and that is achievable for any brand.',
      '## Smaller MOQs, faster turnaround',
      'A decade ago, MOQs were 1–2 tons minimum. Today we routinely run 300 kg orders. That has unlocked an entire generation of small Indian brands that can compete on shelf alongside Tata, ITC, and HUL.',
      '## What\'s next',
      'Recyclable mono-material laminates, oxygen scavengers, antimicrobial inner layers, smart QR codes — flexible packaging is moving fast. Brands that pick capable manufacturing partners will grow with the wave.'
    ),
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  return POSTS.filter((p) => p.slug !== slug).slice(0, count);
}
