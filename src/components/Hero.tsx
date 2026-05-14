import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SITE, whatsappLink } from '@/lib/site';

export default function Hero() {
  return (
    <section className="relative">
      <div className="container-x relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-12 lg:pt-20 pb-12 lg:pb-24">
        <div className="lg:col-span-6 xl:col-span-6 hero-fade">
          <span className="pill">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse-soft" />
            Manufacturing in Kolkata since {SITE.foundedYear}
          </span>

          <h1 className="heading-xl mt-5">
            Custom flexible packaging,{' '}
            <span className="serif-accent">engineered</span> in Kolkata.
          </h1>

          <p className="lede mt-5 max-w-2xl">
            Rotogravure-printed pouches and rolls for atta, namkeen, tea, masala, dairy and more —
            built in West Bengal, shipped across India. MOQ from {SITE.stats.minOrderKg}&nbsp;kg.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary text-base">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products" className="btn-ghost text-base">Browse catalogue</Link>
            <a
              href={whatsappLink('Hi Arihant Packaging, I would like a quote.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500">
            <span><strong className="text-ink-900 font-semibold">{SITE.stats.yearsInBusiness}+</strong> years in business</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-ink-400 opacity-50" />
            <span><strong className="text-ink-900 font-semibold">8-colour</strong> rotogravure</span>
          </div>
        </div>

        <div className="lg:col-span-6 xl:col-span-6 relative">
          <div className="relative aspect-[16/10] sm:aspect-[16/10] rounded-3xl overflow-hidden glass p-2 shadow-glass">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
              <Image
                src="/images/hero/hero-1.jpg"
                alt="Custom printed flexible packaging pouches by Arihant Packaging"
                fill
                priority
                fetchPriority="high"
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover object-center"
              />

            </div>
          </div>

          <div className="hidden lg:flex absolute bottom-8 -left-4 items-center gap-3 px-4 py-3 rounded-2xl glass-strong animate-floaty">
            <div className="w-9 h-9 rounded-xl grid place-items-center text-white text-xs font-bold" style={{ backgroundImage: 'linear-gradient(135deg, #1F4E79, #2F6FB0)' }}>8</div>
            <div>
              <div className="font-bold text-ink-900 leading-none">Up to 8 colours</div>
              <div className="text-[11px] uppercase tracking-wider text-ink-700 mt-1">Rotogravure</div>
            </div>
          </div>
          <div className="hidden lg:flex absolute top-6 -right-4 items-center gap-3 px-4 py-3 rounded-2xl glass-strong animate-floaty" style={{ animationDelay: '-3s' }}>
            <div className="w-9 h-9 rounded-xl bg-brand-50 border border-brand-100 grid place-items-center text-brand-600 text-sm font-bold">kg</div>
            <div>
              <div className="font-bold text-ink-900 leading-none">From 300 kg</div>
              <div className="text-[11px] uppercase tracking-wider text-ink-700 mt-1">Minimum order</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
