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
    <footer className="mt-24 text-ink-200" style={{ background: 'linear-gradient(180deg, #0C4A6E 0%, #082F49 100%)' }}>
      <div className="container-x py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-2xl p-1.5">
                <Image src="/images/logo.png" alt="Arihant Packaging" width={48} height={48} className="object-contain" />
              </div>
              <div className="leading-tight">
                <div className="text-white font-bold text-lg">ARIHANT</div>
                <div className="text-brand-200 font-semibold text-xs tracking-[0.2em]">PACKAGING</div>
              </div>
            </Link>
            <p className="text-sm text-white/85 leading-relaxed max-w-md">
              Manufacturer of custom flexible packaging - laminated rolls, stand-up zipper pouches, and printed films. Serving brands across India since {SITE.foundedYear}.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href={`tel:${SITE.contact.phone}`} className="flex items-center gap-2 text-white/90 hover:text-brand-200">
                <Phone className="w-4 h-4 flex-shrink-0" /> {SITE.contact.phoneDisplay}
              </a>
              <a href={`mailto:${SITE.contact.email}`} className="flex items-center gap-2 text-white/90 hover:text-brand-200 break-all">
                <Mail className="w-4 h-4 flex-shrink-0" /> {SITE.contact.email}
              </a>
              <div className="flex items-start gap-2 text-white/85">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{SITE.address.full}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              {PRODUCTS.map((p) => (
                <li key={p.slug}><Link href={`/products/${p.slug}`} className="text-white/85 hover:text-white">{p.shortTitle}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Applications</h3>
            <ul className="space-y-2 text-sm">
              {topApps.map((a) => (
                <li key={a.slug}><Link href={`/applications/${a.slug}`} className="text-white/85 hover:text-white">{a.shortTitle}</Link></li>
              ))}
              <li><Link href="/applications" className="text-brand-300 hover:text-white font-medium">View all -&gt;</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-white/85 hover:text-white">About Us</Link></li>
              <li><Link href="/quality" className="text-white/85 hover:text-white">Quality &amp; QC</Link></li>
              <li><Link href="/custom-printed-pouches" className="text-white/85 hover:text-white">Custom Printed</Link></li>
              <li><Link href="/blog" className="text-white/85 hover:text-white">Blog</Link></li>
              <li><Link href="/faq" className="text-white/85 hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="text-white/85 hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/20">
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Find us on</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {[
              ['Google', SITE.social.google],
              ['Facebook', SITE.social.facebook],
              ['Instagram', SITE.social.instagram],
              ['Twitter', SITE.social.twitter],
              ['YouTube', SITE.social.youtube],
              ['IndiaMART', SITE.social.indiamart],
              ['TradeIndia', SITE.social.tradeindia],
              ['JustDial', SITE.social.justdial],
            ].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener" className="px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 hover:border-white/50 transition text-white font-medium">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/80">
          <div>(c) {year} Arihant Packaging. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <span>MSME / Udyam Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
