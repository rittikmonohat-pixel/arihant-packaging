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
];

export default function TrustedBy() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-x text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-ink-500"
        >
          Trusted by manufacturers and FMCG brands across India
        </motion.div>

        <div className="mt-8 overflow-hidden relative">
          <div className="flex justify-center flex-wrap gap-x-10 gap-y-3 sm:gap-x-14 px-4">
            {INDUSTRIES.map((label, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className="font-serif italic text-xl sm:text-2xl lg:text-3xl font-normal text-ink-600/80 whitespace-nowrap"
              >
                {label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
