'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const MACHINES = [
  {
    name: 'Rotogravure Printing',
    desc: 'Up to 8-colour multicolour rotogravure printing on PET, BOPP, and laminated films - sharp, photo-quality output.',
    image: '/images/factory/rotogravure-printing.jpg',
  },
  {
    name: 'Solventless Lamination',
    desc: 'Low-VOC solventless multi-layer lamination machine - faster turnaround, eco-friendlier, and food-contact compliant.',
    image: '/images/factory/solventless-lamination.jpg',
  },
  {
    name: 'Pouching Machine',
    desc: 'Stand-up zipper, 3-side seal, centre seal and gusseted pouch formation - cutting, sealing, and zipper inserting in one pass.',
    image: '/images/factory/pouching-machine.jpg',
  },
];

export default function MachinerySection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <span className="pill">Manufacturing capability</span>
          <h2 className="heading-lg mt-4">
            Everything <span className="serif-accent">in-house</span>, under one roof.
          </h2>
          <p className="lede mt-4">
            Printing, lamination, slitting, and pouching all happen at our Madhyamgram, Kolkata facility -
            shorter lead times, tighter QC, and a single accountable partner.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {MACHINES.map((m, i) => (
            <motion.div
              key={m.name}
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="relative aspect-[4/3] bg-ink-100">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(min-width:1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-ink-900">{m.name}</h3>
                <p className="text-sm text-ink-600 mt-2 leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
