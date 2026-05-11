import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SITE, whatsappLink } from '@/lib/site';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-sky-50">
      <div className="container-x relative grid lg:grid-cols-12 gap-10 items-center pt-12 lg:pt-20 pb-12 lg:pb-24">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 pill mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Manufacturing in Kolkata since {SITE.foundedYear}
          </div>
          <h1 className="heading-xl">
            Custom Flexible Packaging
            <span className="block text-brand-600">Pouches & Rolls</span>
          </h1>
          <p className="lede mt-5 max-w-2xl">
            Rotogravure-printed laminated pouches and films — built for India's food, snacks, spices, dairy, and FMCG brands. Up to 8-color print. MOQ from {SITE.stats.minOrderKg} kg.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary text-base">
              Get Best Price <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={whatsappLink('Hi Arihant Packaging, I would like a quote.')}
              target="_blank"
              rel="noopener"
              className="btn-secondary text-base"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-brand-600">{SITE.stats.yearsInBusiness}+</div>
              <div className="text-xs sm:text-sm text-ink-500 mt-0.5">Years in business</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-brand-600">{SITE.stats.clients}</div>
              <div className="text-xs sm:text-sm text-ink-500 mt-0.5">Clients served</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-brand-600">8</div>
              <div className="text-xs sm:text-sm text-ink-500 mt-0.5">Print colors max</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/images/hero/hero-1.jpg"
              alt="Custom printed flexible packaging pouches by Arihant Packaging"
              fill
              priority
              sizes="(min-width:1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-transparent p-5">
              <div className="text-white font-semibold">Stand-up zipper pouches</div>
              <div className="text-white/80 text-sm">Premium retail-ready packaging</div>
            </div>
          </div>
        </div>
      </div>

      {/* decorative blob */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-200/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-accent-100/30 blur-3xl" />
    </section>
  );
}
