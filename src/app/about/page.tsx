import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Award, Calendar, Factory, Globe2, MapPin } from 'lucide-react';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us — Arihant Packaging, Kolkata',
  description: `Arihant Packaging — manufacturer of custom flexible packaging since ${SITE.foundedYear}. Located in Madhyamgram, Kolkata. Serving FMCG brands across India.`,
  alternates: { canonical: '/about' },
};

const machines = [
  { name: 'Fully Automatic Rotogravure Printing', purpose: 'Up to 8-color photo-quality printing on PET, BOPP, and laminated rolls.' },
  { name: 'Solvent-Based Lamination', purpose: 'High-bond multi-layer lamination for premium pouches.' },
  { name: 'Solventless Lamination', purpose: 'Eco-friendlier, food-safe lamination with low VOC.' },
  { name: 'Slitting Machine', purpose: 'Precise width slitting for FFS film rolls.' },
  { name: 'Stand-Up Zipper Pouching Machine', purpose: 'Pre-made stand-up pouches with optional zipper.' },
  { name: '5-Side Sealing Pouching Machine', purpose: 'Sealed pouches in window, milky, and glossy finishes.' },
  { name: 'PP Moulding Machine', purpose: 'In-house plate and ancillary tooling production.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-x pt-8 pb-4">
        <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />
      </section>

      <section className="container-x pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="pill">About Arihant Packaging</span>
            <h1 className="heading-xl mt-3">Custom flexible packaging, made in Kolkata since 2016.</h1>
            <p className="lede mt-5">
              Arihant Packaging was founded in 2016 in Madhyamgram, Kolkata with one mission — bring vibrant rotogravure-printed flexible packaging within reach of every Indian brand, big or small.
            </p>
            <p className="text-ink-700 mt-4 leading-relaxed">
              We deliver the print quality, barrier protection, and reliability your product deserves. We serve brands across India in foods, snacks, spices, dairy, personal care, detergents, and agriculture.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-4">
              {[
                { icon: Calendar, label: `${SITE.stats.yearsInBusiness}+ yrs` },
                { icon: Factory, label: 'In-house' },
                { icon: Globe2, label: 'Pan-India' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2 text-sm">
                  <s.icon className="w-5 h-5 text-brand-600" />
                  <span className="font-semibold text-ink-900">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-ink-100 shadow-card">
            <Image src="/images/factory/factory-hero.jpg" alt="Arihant Packaging factory" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Capability */}
      <section className="bg-ink-50/50 py-16">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="pill">Manufacturing capability</span>
            <h2 className="heading-lg mt-3">A one-stop flexible packaging facility</h2>
            <p className="lede mt-3">
              Printing, lamination, slitting, and pouching — all under one roof in Madhyamgram. That means tighter QC and faster turnaround.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {machines.map((m) => (
              <div key={m.name} className="rounded-xl bg-white border border-ink-100 p-5">
                <div className="text-brand-600 mb-2"><Factory className="w-5 h-5" /></div>
                <h3 className="font-semibold text-ink-900">{m.name}</h3>
                <p className="text-sm text-ink-500 mt-2">{m.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory walkthrough video */}
      <section className="container-x py-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="pill">Factory walkthrough</span>
          <h2 className="heading-md mt-3">See our facility in motion</h2>
          <p className="lede mt-3">
            A short walk through the Madhyamgram floor — printing, lamination, slitting, and pouching as they happen.
          </p>
        </div>
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-ink-100 shadow-card aspect-video bg-ink-900">
          <iframe
            title="Arihant Packaging — factory walkthrough"
            src="https://www.youtube-nocookie.com/embed/GAiCzrcBVFw"
            loading="lazy"
            width="100%"
            height="100%"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ border: 0 }}
          />
        </div>
      </section>

      {/* Address */}
      <section className="container-x py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="pill">Visit our factory</span>
          <h2 className="heading-md mt-3">Madhyamgram, Kolkata</h2>
          <p className="text-ink-700 mt-3 leading-relaxed">
            We welcome customer visits. Connect with our team for guidance on choosing the right packaging for your product.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <div className="flex items-start gap-2 text-ink-700">
              <MapPin className="w-4 h-4 text-brand-600 mt-0.5" />
              <span>{SITE.address.full}</span>
            </div>
            <div className="flex items-center gap-2 text-ink-700">
              <Award className="w-4 h-4 text-brand-600" />
              <span>MSME / Udyam Registered</span>
            </div>
          </div>
          <Link href="/contact" className="btn-primary mt-7">Schedule a visit</Link>
        </div>
        <div className="rounded-2xl overflow-hidden border border-ink-100 aspect-[4/3]">
          <iframe
            title="Arihant Packaging — Google Maps"
            src="https://www.google.com/maps?q=Arihant+Packaging+Madhyamgram+Kolkata&output=embed"
            loading="lazy"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
