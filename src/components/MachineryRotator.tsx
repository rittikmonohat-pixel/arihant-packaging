'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const IMAGES = [
  { src: '/images/factory/rotogravure-printing.jpg', alt: 'Rotogravure printing machine' },
  { src: '/images/factory/solventless-lamination.jpg', alt: 'Solventless lamination machine' },
  { src: '/images/factory/pouching-machine.jpg', alt: 'Pouching machine' },
];

export default function MachineryRotator() {
  const [idx, setIdx] = useState(0);
  // Track which images have been visited so we only mount each one once
  // (after first reveal it stays in the DOM for instant crossfade).
  const [mounted, setMounted] = useState<boolean[]>(() => IMAGES.map((_, i) => i === 0));

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => {
        const next = (i + 1) % IMAGES.length;
        setMounted((m) => (m[next] ? m : m.map((v, j) => (j === next ? true : v))));
        return next;
      });
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const handleClick = (i: number) => {
    setIdx(i);
    setMounted((m) => (m[i] ? m : m.map((v, j) => (j === i ? true : v))));
  };

  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white">
      {IMAGES.map((img, i) =>
        mounted[i] ? (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden={i !== idx}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
              priority={i === 0}
            />
          </div>
        ) : null
      )}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleClick(i)}
            aria-label={`Show machine ${i + 1}`}
            aria-current={i === idx}
            className={`h-2 rounded-full transition-all ${i === idx ? 'w-6 bg-white' : 'w-2 bg-white/60 hover:bg-white/90'}`}
          />
        ))}
      </div>
    </div>
  );
}
