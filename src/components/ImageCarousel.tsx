'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  images: string[];
  alt: string;
  priority?: boolean;
  sizes?: string;
};

export default function ImageCarousel({ images, alt, priority = false, sizes = '(min-width:1024px) 45vw, 100vw' }: Props) {
  const [index, setIndex] = useState(0);
  const safe = images && images.length > 0 ? images : ['/images/og-default.jpg'];
  const total = safe.length;
  const thumbStripRef = useRef<HTMLDivElement | null>(null);
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    if (total <= 1) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next, total]);

  // Scroll the thumbnail strip so the active thumb is in view
  useEffect(() => {
    const el = thumbRefs.current[index];
    if (el && thumbStripRef.current) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [index]);

  const scrollThumbs = (dir: -1 | 1) => {
    const strip = thumbStripRef.current;
    if (!strip) return;
    strip.scrollBy({ left: dir * (strip.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      <div className="relative aspect-square rounded-2xl overflow-hidden border border-ink-100 bg-ink-50">
        {safe.map((src, i) => (
          <div
            key={src + i}
            className={`absolute inset-0 transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-hidden={i !== index}
          >
            <Image
              src={src}
              alt={`${alt} — image ${i + 1} of ${total}`}
              fill
              loading={i === 0 ? 'eager' : 'lazy'}
              priority={priority && i === 0}
              sizes={sizes}
              className="object-cover"
            />
          </div>
        ))}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 grid place-items-center rounded-full bg-white/85 hover:bg-white text-ink-900 shadow-md backdrop-blur-sm border border-white/60 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 grid place-items-center rounded-full bg-white/85 hover:bg-white text-ink-900 shadow-md backdrop-blur-sm border border-white/60 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
              {safe.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-brand-600' : 'w-2 bg-white/80 hover:bg-white'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="relative mt-3">
          {total > 5 && (
            <button
              type="button"
              onClick={() => scrollThumbs(-1)}
              aria-label="Scroll thumbnails left"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 grid place-items-center rounded-full bg-white text-ink-900 shadow-md border border-ink-100 hover:bg-brand-50 transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
          <div
            ref={thumbStripRef}
            className={`flex gap-2 overflow-x-auto scroll-smooth ${total > 5 ? 'px-10' : ''}`}
            style={{ scrollbarWidth: 'none' as const, msOverflowStyle: 'none' as const }}
          >
            {safe.map((src, i) => (
              <button
                key={src + i}
                ref={(el) => { thumbRefs.current[i] = el; }}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}`}
                aria-current={i === index}
                className={`relative aspect-square w-[18%] min-w-[68px] flex-shrink-0 rounded-lg overflow-hidden border-2 transition ${i === index ? 'border-brand-600 ring-2 ring-brand-100' : 'border-ink-100 hover:border-brand-300'} bg-ink-50`}
              >
                <Image src={src} alt={`${alt} thumb ${i + 1}`} fill sizes="15vw" className="object-cover" />
              </button>
            ))}
          </div>
          {total > 5 && (
            <button
              type="button"
              onClick={() => scrollThumbs(1)}
              aria-label="Scroll thumbnails right"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 grid place-items-center rounded-full bg-white text-ink-900 shadow-md border border-ink-100 hover:bg-brand-50 transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
          <style jsx>{`
            div::-webkit-scrollbar { display: none; }
          `}</style>
        </div>
      )}
    </div>
  );
}
