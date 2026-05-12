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
      <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center pt-14 lg:pt-24 pb-16 lg:pb-28">
        <div className="lg:col-span-7">
          <motion.span className="pill" initial="hidden" animate="show" variants={fadeUp} custom={0}>
            <span className="w-2 h-2 rounded-full bg-success animate-pulse-soft" />
            Manufacturing in Kolkata since {SITE.foundedYear}
          </motion.span>

          <motion.h1 className="heading-xl mt-5" initial="hidden" animate="show" variants={fadeUp} custom={1}>
            Custom flexible packaging,{' '}
            <span className="serif-accent">engineered</span> in Kolkata.
          </motion.h1>

          <motion.p className="lede mt-5 max-w-2xl" initial="hidden" animate="show" variants={fadeUp} custom={2}>
            Rotogravure-printed pouches and rolls for atta, namkeen, tea, masala, dairy and more —
            built in West Bengal, shipped across India. MOQ from {SITE.stats.minOrderKg}&nbsp;kg.
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap gap-3" initial="hidden" animate="show" variants={fadeUp} custom={3}>
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
            className="mt-10 flex flex-col sm:flex-row sm:items-center flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500"
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
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-3xl overflow-hidden glass p-2">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/hero/hero-1.jpg"
                alt="Custom printed flexible packaging pouches by Arihant Packaging"
                fill
                priority
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/75 via-ink-900/10 to-transparent p-5">
                <div className="text-white font-semibold">Stand-up zipper pouches</div>
                <div className="text-white/80 text-sm">Retail-ready format</div>
              </div>
            </div>
          </div>

          {/* Floating glass cards positioned inside the image bounds */}
          <motion.div
            className="hidden lg:flex absolute bottom-24 -left-4 items-center gap-3 px-4 py-3 rounded-2xl glass-strong animate-floaty"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="w-9 h-9 rounded-xl grid place-items-center text-white text-xs font-bold" style={{ backgroundImage: 'linear-gradient(135deg, #1F4E79, #2F6FB0)' }}>8</div>
            <div>
              <div className="font-bold text-ink-900 leading-none">Up to 8 colours</div>
              <div className="text-[11px] uppercase tracking-wider text-ink-700 mt-1">Rotogravure</div>
            </div>
          </motion.div>
          <motion.div
            className="hidden lg:flex absolute top-16 -right-4 items-center gap-3 px-4 py-3 rounded-2xl glass-strong animate-floaty"
            style={{ animationDelay: '-3s' }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <div className="w-9 h-9 rounded-xl bg-brand-50 border border-brand-100 grid place-items-center text-brand-600 text-sm font-bold">kg</div>
            <div>
              <div className="font-bold text-ink-900 leading-none">From 300 kg</div>
              <div className="text-[11px] uppercase tracking-wider text-ink-700 mt-1">Minimum order</div>
            </div>
          </motion.div>
        </motion