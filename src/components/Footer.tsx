import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SITE } from '@/lib/site';
import { PRODUCTS } from '@/lib/products';
import { APPLICATIONS } from '@/lib/applications';

export default function Footer() {
  const year = new Date().getFullYear();
  const topApps = APPLICATIONS.slice(0, 8);

  return (
    <footer className="mt-24 bg-ink-900 text-ink-200">
      <div className="container-x py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-full p-1">
                <Image src="/images/logo.png" alt="Arihant Packaging" width={48} height={48} className="object-contain" />
              </div>
              <div className="leading-tight">
                <div className="text-white font-bold text-lg">ARIHANT</div>
                <div className="text-accent-300 font-semibold text-xs tracking-[0.2em]">PACKAGING</div>
              </div>
            </Link>
            <p className="text-sm text-ink-300 leading-relaxed max-w-md">
              Leading manufacturer of custom flexible packaging — laminated rolls, stand-up zipper pouches, and printed films. Serving brands across India since {SITE.foundedYear}.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href={`tel:${SITE.contact.phone}`} className="flex items-center gap-2 text-ink-100 hover:text-accent-300">
                <Phone className="w-4 h-4 flex-shrink-0" /> {SITE.contact.phoneDisplay}
              </a>
              <a href={`mailto:${SITE.contact.email}`} className="flex items-center gap-2 text-ink-100 hover:text-accent-300 break-all">
                <Mail className="w-4 h-4 flex-shrink-0" /> {SITE.contact.email}
              </a>
              <div className="flex items-start gap-2 text-ink-300">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{SITE.address.full}</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="text-ink-300 hover:text-accent-300">
                    {p.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Applications</h3>
            <ul className="space-y-2 text-sm">
              {topApps.map((a) => (
                <li key={a.slug}>
                  <Link href={`/applications/${a.slug}`} className="text-ink-300 hover:text-accent-300">
                    {a.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/applications" className="text-accent-300 hover:text-accent-200 font-medium">
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-ink-300 hover:text-accent-300">About Us</Link></li>
              <li><Link href="/quality" className="text-ink-300 hover:text-accent-300">Quality & QC</Link></li>
              <li><Link href="/custom-printed-pouches" className="text-ink-300 hover:text-accent-300">Custom Printed</Link></li>
              <li><Link href="/blog" className="text-ink-300 hover:text-accent-300">Blog</Link></li>
              <li><Link href="/faq" className="text-ink-300 hover:text-accent-300">FAQ</Link></li>
              <li><Link href="/contact" className="text-ink-300 hover:text-accent-300">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Find us on */}
        <div className="mt-10 pt-8 border-t border-ink-700">
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Find us on</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href={SITE.social.google} target="_blank" rel="noopener" className="px-3 py-1.5 bg-ink-800 hover:bg-brand-700 rounded-md transition">Google</a>
            <a href={SITE.social.facebook} target="_blank" rel="noopener" className="px-3 py-1.5 bg-ink-800 hover:bg-brand-700 rounded-md transition">Facebook</a>
            <a href={SITE.social.instagram} target="_blank" rel="noopener" className="px-3 py-1.5 bg-ink-800 hover:bg-brand-700 rounded-md transition">Instagram</a>
            <a href={SITE.social.twitter} target="_blank" rel="noopener" className="px-3 py-1.5 bg-ink-800 hover:bg-brand-700 rounded-md transition">Twitter</a>
            <a href={SITE.social.youtube} target="_blank" rel="noopener" className="px-3 py-1.5 bg-ink-800 hover:bg-brand-700 rounded-md transition">YouTube</a>
            <a href={SITE.social.indiamart} target="_blank" rel="noopener" className="px-3 py-1.5 bg-ink-800 hover:bg-brand-700 rounded-md transition">IndiaMART</a>
            <a href={SITE.social.tradeindia} target="_blank" rel="noopener" className="px-3 py-1.5 bg-ink-800 hover:bg-brand-700 rounded-md transition">TradeIndia</a>
            <a href={SITE.social.justdial} target="_blank" rel="noopener" className="px-3 py-1.5 bg-ink-800 hover:bg-brand-700 rounded-md transition">JustDial</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-ink-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-400">
          <div>© {year} Arihant Packaging. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>MSME / Udyam Registered</span>
            <span className="opacity-50">|</span>
            <span>GST invoice provided</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
