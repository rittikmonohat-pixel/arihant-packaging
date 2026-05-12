'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { SITE } from '@/lib/site';
import { PRODUCTS } from '@/lib/products';
import { cn } from '@/lib/utils';

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products', children: PRODUCTS.map((p) => ({ label: p.shortTitle, href: `/products/${p.slug}` })) },
  { label: 'Applications', href: '/applications' },
  { label: 'Custom Printed', href: '/custom-printed-pouches' },
  { label: 'Quality', href: '/quality' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-all duration-300',
        scrolled ? 'shadow-sm' : '',
      )}
      style={{
        background: scrolled ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.5)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: scrolled ? '1px solid rgba(186,230,253,0.6)' : '1px solid transparent',
      }}
    >
      {/* Thin top utility bar */}
      <div className="hidden lg:block text-white text-xs" style={{ background: 'linear-gradient(90deg, #163E61, #1F4E79 50%, #2F6FB0)' }}>
        <div className="container-x flex items-center justify-between py-1.5">
          <div className="flex items-center gap-4">
            <span className="opacity-90">Custom flexible packaging since {SITE.foundedYear}</span>
            <span className="opacity-50">·</span>
            <span className="opacity-90">MOQ {SITE.stats.minOrderKg} kg · Up to 8-colour rotogravure</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${SITE.contact.email}`} className="hover:underline">{SITE.contact.email}</a>
            <span className="opacity-50">·</span>
            <a href={`tel:${SITE.contact.phone}`} className="hover:underline">{SITE.contact.phoneDisplay}</a>
          </div>
        </div>
      </div>

      <div className="container-x">
        <div className="flex items-center justify-between py-3 lg:py-4">
          <Link href="/" className="flex items-center gap-3 group" aria-label="Arihant Packaging — Home">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 transition-transform group-hover:scale-105">
              <Image src="/images/logo.png" alt="Arihant Packaging logo" width={56} height={56} className="object-contain" priority />
            </div>
            <div className="leading-tight">
              <div className="text-copper-500 font-bold text-lg sm:text-xl tracking-tight">ARIHANT</div>
              <div className="text-accent-500 font-bold text-xs sm:text-sm tracking-[0.2em] -mt-0.5">PACKAGING</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {NAV.map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link href={item.href} className="px-3 py-2 text-sm font-medium text-ink-700 hover:text-brand-600 rounded-full hover:bg-brand-50/70 transition">
                    {item.label}
                  </Link>
                  {productsOpen && (
                    <div className="absolute left-0 top-full pt-2 w-72">
                      <div className="glass rounded-2xl p-2 shadow-glass">
                        {item.children.map((c) => (
                          <Link key={c.href} href={c.href} className="block px-3 py-2 text-sm text-ink-700 hover:bg-brand-50/80 hover:text-brand-700 rounded-xl transition">
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="px-3 py-2 text-sm font-medium text-ink-700 hover:text-brand-600 rounded-full hover:bg-brand-50/70 transition">
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <a href={`tel:${SITE.contact.phone}`} className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-600" aria-label={`Call ${SITE.contact.phoneDisplay}`}>
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">{SITE.contact.phoneDisplay}</span>
            </a>
            <Link href="/contact" className="hidden sm:inline-flex btn-primary text-xs sm:text-sm py-2 px-4">Get Quote</Link>
            <button type="button" onClick={() => setOpen(!open)} className="lg:hidden p-2 -mr-2 text-ink-700 hover:bg-brand-50/80 rounded-full" aria-label="Toggle menu" aria-expanded={open}>
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brand-100/50" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)' }}>
          <div className="container-x py-3">
            {NAV.map((item) => (
              <div key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className="block px-3 py-3 text-base font-medium text-ink-800 hover:bg-brand-50/80 hover:text-brand-700 rounded-xl">
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 border-l-2 border-brand-100 ml-3 my-1">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-ink-600 hover:bg-brand-50/80 hover:text-brand-700 rounded-xl">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 pt-3 border-t border-brand-100/50 grid grid-cols-2 gap-2">
              <a href={`tel:${SITE.contact.phone}`} className="btn-secondary justify-center"><Phone className="w-4 h-4" />Call</a>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary justify-center">Get Quote</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
