import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import { CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Custom Printed Pouch Manufacturer in Kolkata',
  description: 'Custom printed flexible packaging pouches in Kolkata. Up to 8-color rotogravure printing on stand-up, zipper, three-side seal, and center seal pouches. MOQ 300 kg.',
  alternates: { canonical: '/custom-printed-pouches' },
  keywords: ['custom printed pouch manufacturer', 'printed pouch Kolkata', 'rotogravure printed pouch'],
};

export default function CustomPrintedPouches() {
  return (
    <>
      <section className="container-x pt-8 pb-4">
        <Breadcrumbs items={[{ name: 'Custom Printed Pouches', href: '/custom-printed-pouches' }]} />
      </section>

      <section className="container-x pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="pill">Custom printed pouches</span>
            <h1 className="heading-xl mt-3">High-quality custom printed pouches for your brand.</h1>
            <p className="lede mt-5">
              Make your product stand out on crowded shelves. We combine state-of-the-art rotogravure printing with multi-layer laminated materials to deliver pouches that protect your product and elevate your brand.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm text-ink-700">
              {[
                'Up to 8-colour photo-quality printing',
                'Stand-up, zipper, 3-side, center seal formats',
                'Window / glossy / milky finishes',
                'Bring your artwork or rough sketches',
                'MOQ 300 kg per design',
                'Pan-India delivery',
              ].map((b) => (
                <li key={b} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-success" />{b}</li>
              ))}
            </ul>
            <div className="mt-7 flex gap-3">
              <Link href="#quote" className="btn-primary">Get a Quote</Link>
              <Link href="/products" className="btn-secondary">Browse Pouch Types</Link>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-ink-100 shadow-card">
            <Image src="/images/products/stand-up-pouch.jpg" alt="Custom printed stand-up pouches" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Pouch types */}
      <section className="bg-ink-50/50 py-16">
        <div className="container-x">
          <h2 className="heading-md mb-2">Pouch types we customise</h2>
          <p className="text-ink-600 max-w-2xl">Pick the format that best fits your product, then customise material, layers, finish, and printing.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTS.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="card overflow-hidden group">
                <div className="relative aspect-square bg-ink-100">
                  <Image src={p.image} alt={p.title} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-ink-900 group-hover:text-brand-600 transition">{p.shortTitle}</h3>
                  <p className="text-xs text-ink-500 mt-1 line-clamp-2">{p.oneLiner}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="container-x py-16 grid lg:grid-cols-2 gap-10">
        <div>
          <span className="pill">Get a quote</span>
          <h2 className="heading-md mt-3">Ready to discuss your packaging?</h2>
          <p className="lede mt-3">Tell us about your product, target pack size, and design — we'll come back with a competitive quote.</p>
        </div>
        <QuoteForm context="Custom Printed Pouches landing page" />
      </section>
    </>
  );
}
