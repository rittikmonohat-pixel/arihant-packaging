'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SITE, whatsappLink } from '@/lib/site';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative">
      <div className="container-x relative pt-12 lg:pt-20 pb-10 lg:pb-14">
        <div className="max-w-4xl">
          <motion.span className="pill" initial="hidden" animate="show" variants={fadeUp} custom={0}>
            <span className="w-2 h-2 rounded-full bg-success animate-pulse-soft" />
            Manufacturing in Kolkata since {SITE.foundedYear}
          </motion.span>

          <motion.h1 className="heading-xl mt-5" initial="hidden" animate="show" variants={fadeUp} custom={1}>
            Custom flexible packaging,{' '}
            <span className="serif-accent">engineered</span> in Kolkata.
          </motion.h1>

          <motion.p className="lede mt-5 max-w-2xl" initial="hidden" animate="show" variants={fadeUp} custom={2}>
            Rotogravure-printed pouches and rolls for atta, namkeen, tea, masala, dairy and more -
            built in West Bengal, shipped across India. MOQ from {SITE.stats.minOrderKg}&nbsp;kg.
          </motion.p>

          <motion.div className="mt-7 flex flex-wrap gap-3" initial="hidden" animate="show" variants={fadeUp} custom={3}>
            <Link href="/contact" className="btn-primary text-base">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products" className="btn-ghost text-base">Browse catalogue</Link>
            <a
              href={whatsappLink('Hi Arihant Packaging, I would like a quote.')}
              target="_blank"
              rel="noopener"
              className="btn-secondary text-base"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </motion.div>

          <motion.div
            className="mt-7 flex flex-col sm:flex-row sm:items-center flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500"
            initial="hidden" animate="show" variants={fadeUp} custom={4}
          >
            <span><strong className="text-ink-900 font-semibold">{SITE.stats.yearsInBusiness}+</strong> years in business</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-ink-400 opacity-50" />
            <span><strong className="text-ink-900 font-semibold">22+</strong> industries</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-ink-400 opacity-50" />
            <span><strong className="text-ink-900 font-semibold">8-colour</strong> rotogravure</span>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 lg:mt-12 relative"
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[16/9] sm:aspect-[1.91/1] rounded-3xl overflow-hidden glass p-2 shadow-glass">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/hero/hero-1.jpg"
                alt="Arihant Packaging - custom flexible packaging manufactured in Kolkata"
                fill
                priority
                sizes="(min-width:1280px) 1200px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <motion.div
            className="hidden md:flex absolute bottom-6 left-6 items-center gap-3 px-4 py-3 rounded-2xl glass-strong animate-floaty"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <div className="w-10 h-10 rounded-xl grid place-items-center text-white text-sm font-bold" style={{ backgroundImage: 'linear-gradient(135deg, #1F4E79, #2F6FB0)' }}>8</div>
            <div>
              <div className="font-bold text-ink-900 leading-none">Up to 8 colours</div>
              <div className="text-[11px] uppercase tracking-wider text-ink-700 mt-1">Rotogravure</div>
            </div>
          </motion.div>
          <motion.div
            className="hidden md:flex absolute top-6 right-6 items-center gap-3 px-4 py-3 rounded-2xl glass-strong animate-floaty"
            style={{ animationDelay: '-3s' }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 grid place-items-center text-brand-600 text-sm font-bold">kg</div>
            <div>
              <div className="font-bold text-ink-900 leading-none">From 300 kg</div>
              <div className="text-[11px] uppercase tracking-wider text-ink-700 mt-1">Minimum order</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
