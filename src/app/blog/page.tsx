import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { POSTS } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Packaging Blog — Industry Insights & Buyer Guides',
  description: 'Industry insights and buyer guides on flexible packaging, custom printed pouches, materials, MOQ, lead times, and trends — from Arihant Packaging.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndex() {
  return (
    <>
      <section className="container-x pt-8 pb-4">
        <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }]} />
      </section>

      <section className="container-x pb-12 max-w-3xl">
        <h1 className="heading-xl">Packaging Insights</h1>
        <p className="lede mt-4">Buyer guides, material deep-dives, and industry trends — written for Indian FMCG brands.</p>
      </section>

      <section className="container-x pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card overflow-hidden flex flex-col group">
              <div className="relative aspect-video bg-ink-100">
                <Image src={p.image} alt={p.title} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-ink-500">
                  <span className="bg-brand-50 text-brand-700 rounded-full px-2 py-0.5">{p.category}</span>
                  <span>·</span>
                  <span>{new Date(p.date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</span>
                  <span>·</span>
                  <span>{p.readingMinutes} min read</span>
                </div>
                <h2 className="font-semibold text-lg text-ink-900 group-hover:text-brand-600 transition mt-3 leading-snug">
                  {p.title}
                </h2>
                <p className="text-sm text-ink-500 mt-2 line-clamp-2">{p.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-600">Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
