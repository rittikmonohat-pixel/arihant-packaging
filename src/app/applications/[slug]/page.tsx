import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import ApplicationCard from '@/components/ApplicationCard';
import { FAQSchema } from '@/components/Schema';
import { APPLICATIONS, getApplication, getRelatedApplications } from '@/lib/applications';
import { getProduct } from '@/lib/products';

export function generateStaticParams() {
  return APPLICATIONS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const app = getApplication(slug);
  if (!app) return { title: 'Application not found' };
  return {
    title: app.title,
    description: app.metaDescription,
    keywords: app.keywords,
    alternates: { canonical: `/applications/${app.slug}` },
    openGraph: {
      title: app.title,
      description: app.metaDescription,
      images: [{ url: app.image, width: 1200, height: 900, alt: app.title }],
    },
  };
}

export default async function ApplicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getApplication(slug);
  if (!app) notFound();

  const related = getRelatedApplications(slug, 4);

  return (
    <>
      <section className="container-x pt-8 pb-4">
        <Breadcrumbs items={[
          { name: 'Applications', href: '/applications' },
          { name: app.shortTitle, href: `/applications/${app.slug}` },
        ]} />
      </section>

      <section className="container-x pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="pill">Application</span>
            <h1 className="heading-lg mt-3">{app.title}</h1>
            <p className="lede mt-3">{app.oneLiner}</p>
            <p className="text-ink-700 mt-5 leading-relaxed">{app.description}</p>

            <div className="mt-6">
              <h3 className="font-semibold text-ink-900 mb-2">Common pack sizes</h3>
              <div className="flex flex-wrap gap-2">
                {app.packSizes.map((s) => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-ink-100 text-ink-800">{s}</span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-ink-900 mb-2">Key features</h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {app.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink-700">
                    <CheckCircle2 className="w-4 h-4 text-success" />{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden border border-ink-100 bg-ink-50">
            <Image src={app.image} alt={app.title} fill priority sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Recommended products */}
      <section className="bg-ink-50/50 py-14">
        <div className="container-x">
          <h2 className="heading-md mb-6">Recommended products for this application</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {app.recommendedProductSlugs.map((s) => {
              const p = getProduct(s);
              if (!p) return null;
              return (
                <Link key={s} href={`/products/${s}`} className="card overflow-hidden group">
                  <div className="relative aspect-[4/3] bg-ink-100">
                    <Image src={p.image} alt={p.title} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-ink-900">{p.shortTitle}</h3>
                    <p className="text-sm text-ink-500 mt-1.5 line-clamp-2">{p.oneLiner}</p>
                    <span className="inline-block mt-3 text-sm font-semibold text-brand-600">View specs →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section className="container-x py-16 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <span className="pill">Get Best Price</span>
          <h2 className="heading-md mt-3">Discuss your {app.shortTitle.toLowerCase()} project</h2>
          <p className="lede mt-3">Free physical samples on approved orders. Reply within 4 working hours.</p>
        </div>
        <QuoteForm context={`${app.title} — application page`} />
      </section>

      {/* FAQ */}
      <section className="container-x pb-16">
        <h2 className="heading-md">FAQ</h2>
        <div className="mt-6 max-w-3xl divide-y divide-ink-100 border-y border-ink-100">
          {app.faq.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-base font-semibold text-ink-900">
                {f.q}
                <span className="text-brand-500 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-ink-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related applications */}
      <section className="container-x pb-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
          <h2 className="heading-md">More applications</h2>
          <Link href="/applications" className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {related.map((a) => <ApplicationCard key={a.slug} app={a} />)}
        </div>
      </section>

      <FAQSchema items={app.faq} />
    </>
  );
}
