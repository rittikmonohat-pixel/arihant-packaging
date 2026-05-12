import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Factory, Palette, Sparkles, Truck, Layers } from 'lucide-react';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import ProductCard from '@/components/ProductCard';
import ApplicationCard from '@/components/ApplicationCard';
import { PRODUCTS } from '@/lib/products';
import { APPLICATIONS } from '@/lib/applications';

export default function HomePage() {
  const featuredApps = APPLICATIONS.slice(0, 12);

  return (
    <>
      <Hero />
      <TrustStrip />

      {/* Why Arihant */}
      <section className="container-x py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="pill">Why Arihant Packaging</span>
          <h2 className="heading-lg mt-4">Built for India's growing FMCG brands</h2>
          <p className="lede mt-4">
            From small runs to lakhs of pouches per month, we deliver the print quality, barrier protection, and reliability your product deserves.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Palette, title: 'Up to 8-Colour Print', desc: 'Photo-quality rotogravure printing for vibrant brand graphics.' },
            { icon: Factory, title: 'Full In-House Capability', desc: 'Printing, lamination (solvent + solventless), slitting, pouching — all under one roof.' },
            { icon: Layers, title: 'Multi-Layer Lamination', desc: 'PET, MET PET, BOPP, LDPE — engineered for moisture and oxygen barrier.' },
            { icon: Truck, title: 'Pan-India Delivery', desc: 'Shipped to clients across India.' },
          ].map((f) => (
            <div key={f.title} className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-4">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg text-ink-900">{f.title}</h3>
              <p className="text-sm text-ink-500 mt-2 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="bg-ink-50/50 py-16 sm:py-24">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="pill">Our Products</span>
              <h2 className="heading-lg mt-3">8 packaging formats, all customisable</h2>
              <p className="lede mt-3 max-w-2xl">
                Pick the format that fits your product, then customise material, layers, finish, and printing.
              </p>
            </div>
            <Link href="/products" className="btn-secondary">All Products <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="container-x py-16 sm:py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <span className="pill">Applications</span>
            <h2 className="heading-lg mt-3">Trusted across 20+ industries</h2>
            <p className="lede mt-3 max-w-2xl">
              From atta and namkeen to dairy, detergent, and agri-fertiliser — our packaging powers brands across India.
            </p>
          </div>
          <Link href="/applications" className="btn-secondary">All Applications <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredApps.map((a) => <ApplicationCard key={a.slug} app={a} />)}
        </div>
      </section>

      {/* Trust block */}
      <section className="bg-brand-700 text-white py-16 sm:py-20">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block pill bg-white/10 text-white">Why brands trust us</span>
            <h2 className="heading-lg text-white mt-4">A manufacturer that grows with you</h2>
            <p className="text-lg text-brand-50/90 mt-4 leading-relaxed">
              We have been making flexible packaging in Kolkata since 2016, working with growing FMCG brands across India.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { icon: Award, label: 'MSME / Udyam', value: 'Registered' },
                { icon: Factory, label: 'Capability', value: 'In-house' },
                { icon: Layers, label: 'Lamination', value: '2 / 2½ / 3 layer' },
                { icon: Sparkles, label: 'Print colours', value: 'Up to 8' },
              ].map((s) => (
                <div key={s.label} className="flex items-start gap-3">
                  <s.icon className="w-6 h-6 text-accent-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <div className="text-sm text-brand-100">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/about" className="inline-flex items-center gap-2 text-accent-300 hover:text-accent-200 font-semibold">
                Read our story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/factory/factory-1.jpg"
              alt="Arihant Packaging factory floor — rotogravure printing"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-16 sm:py-24">
        <div className="rounded-3xl bg-gradient-to-br from-brand-50 to-sky-50 p-10 sm:p-16 text-center border border-brand-100">
          <h2 className="heading-lg max-w-3xl mx-auto">Ready to discuss your packaging?</h2>
          <p className="lede mt-4 max-w-2xl mx-auto">
            Tell us about your product, quantity, and timeline — we&apos;ll come back with a competitive quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary text-base">
              Get Best Price <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products" className="btn-secondary text-base">Browse Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
