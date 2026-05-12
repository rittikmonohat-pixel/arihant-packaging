'use client';

import { motion } from 'framer-motion';
import { MessageSquare, CheckSquare, Settings, Layers, Scissors, PackageOpen, Truck } from 'lucide-react';

const STEPS = [
  { icon: MessageSquare, title: 'Brief & quote', desc: 'WhatsApp us your product, target qty, and any reference photos.' },
  { icon: CheckSquare,   title: 'Design approval', desc: 'We share artwork + soft proof. You approve or revise.' },
  { icon: Settings,      title: 'Printing',        desc: 'Rotogravure on calibrated cylinders, up to 8 colours.' },
  { icon: Layers,        title: 'Lamination',      desc: 'Solvent or solventless multi-layer lamination.' },
  { icon: Scissors,      title: 'Slitting',        desc: 'Precise width slitting for FFS film rolls.' },
  { icon: PackageOpen,   title: 'Pouching',        desc: 'Pre-made stand-up, zipper, side-seal, or D-cut pouches.' },
  { icon: Truck,         title: 'Dispatch',        desc: 'Shipped anywhere in India.' },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <span className="pill">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse-soft" />
            How it works
          </span>
          <h2 className="heading-lg mt-4">
            From brief to <span className="serif-accent">delivered</span> pouches in seven steps.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-8 gap-x-4 relative">
          {/* Dashed connector line on lg+ */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px border-t border-dashed border-brand-300/50 mx-[7%]" aria-hidden="true" />

          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="text-center flex flex-col items-center relative"
            >
              <div className="w-14 h-14 rounded-full bg-white border border-brand-100 shadow-card grid place-items-center text-brand-600 relative z-10">
                <s.icon className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <div className="mt-4 font-semibold text-ink-900 text-sm sm:text-base">{i + 1}. {s.title}</div>
              <p className="mt-2 text-xs sm:text-[13px] text-ink-500 leading-snug max-w-[180px]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
