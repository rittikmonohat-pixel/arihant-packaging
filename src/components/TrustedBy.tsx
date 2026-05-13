'use client';

import { motion } from 'framer-motion';

const INDUSTRIES = [
  'Atta',
  'Namkeen',
  'Tea',
  'Masala',
  'Snacks',
  'Dairy',
  'Detergent',
  'Agri-fertiliser',
  'Makhana',
  'Confectionery',
  'Spices',
  'Dried Fruits',
  'Ice Cream',
  'Pulses',
  'Pet Food',
];

export default function TrustedBy() {
  // Duplicate the list so the marquee can scroll seamlessly
  const items = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <section className="py-12 sm:py-16 overflow-hidden">
      <div className="container-x text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-ink-500"
        >
          Industries we serve — trusted by manufacturers and FMCG brands across India
        </motion.div>
      </div>

      <div
        className="mt-8 relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
        }}
      >
        <div className="flex w-max gap-x-10 sm:gap-x-14 animate-marquee">
          {items.map((label, i) => (
            <span
              key={label + i}
              className="font-serif italic text-xl sm:text-2xl lg:text-3xl font-normal text-ink-600/80 whitespace-nowrap select-none"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        :global(.animate-marquee) {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
