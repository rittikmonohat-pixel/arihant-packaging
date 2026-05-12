import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import ProductCard from '@/components/ProductCard';
import { ProductSchema, FAQSchema } from '@/components/Schema';
import { PRODUCTS, getProduct, getRelatedProducts } from '@/lib/products';
import { getApplication } from '@/lib/applications';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: 'Product not found' };
  return {
    title: product.title,
    description: product.metaDescription,
    keywords: product.keywords,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.title,
      description: product.metaDescription,
      images: [{ url: product.image, width: 1200, height: 900, alt: product.title }],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug, 3);

  return (
    <>
      <section className="container-x pt-8 pb-4">
        <Breadcrumbs items={[
          { name: 'Products', href: '/products' },
          { name: product.shortTitle, href: `/products/${product.slug}` },
        ]} />
      </section>

      <section className="container-x pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-ink-100 bg-ink-50">
              <Image src={product.image} alt={product.title} fill priority sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            </div>
            {product.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-2 mt-2">
                {product.gallery.slice(0, 4).map((g, i) => (
                  <div key={g + i} className="relative aspect-square rounded-lg overflow-hidden border border-ink-100 bg-ink-50">
                    <Image src={g} alt={`${product.title} view ${i + 1}`} fill sizes="20vw" className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <span className="pill">Product</span>
            <h1 className="heading-lg mt-3">{product.title}</h1>
            <p className="lede mt-3">{product.oneLiner}</p>
            <p className="text-ink-700 mt-5 leading-relaxed">{product.description}</p>

            <div className="mt-7 rounded-xl border border-ink-100 overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {product.specs.map((s, i) => (
                    <tr key={s.label} className={i % 2 ? 'bg-white' : 'bg-ink-50/60'}>
                      <th scope="row" className="text-left p-3 font-medium text-ink-700 w-1/3">{s.label}</th>
                      <td className="p-3 text-ink-900">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-ink-900 mb-2">Common applications</h2>
              <div className="flex flex-wrap gap-2">
                {product.applicationsSlugs.map((s) => {
                  const app = getApplication(s);
                  if (!app) return null;
                  return (
                    <Link key={s} href={`/applications/${s}`} className="text-xs px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 hover:bg-brand-100">
                      {app.shortTitle}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section className="bg-ink-50/50 py-16">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="pill">Get a Quote</span>
            <h2 className="heading-md mt-3">Tell us about your packaging needs</h2>
            <p className="lede mt-3">Our team will get back to you with a competitive quote.</p>
            <ul className="mt-6 space-y-2.5 text-sm text-ink-700">
              {['MOQ from 300 kg', 'Up to 8-colour print', 'Pan-India delivery', 'Custom sizes'].map((b) => (
                <li key={b} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-success" />{b}</li>
              ))}
            </ul>
          </div>
          <QuoteForm context={product.title} />
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-16">
        <h2 className="heading-md">FAQ</h2>
        <div className="mt-6 max-w-3xl divide-y divide-ink-100 border-y border-ink-100">
          {product.faq.map((f) => (
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

      {/* Related */}
      <section className="container-x pb-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
          <h2 className="heading-md">Related products</h2>
          <Link href="/products" className="text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>

      <ProductSchema
        name={product.title}
        description={product.metaDescription}
        image={product.image}
        sku={`AP-${product.slug.toUpperCase()}`}
        offers={{ minimumOrderQuantity: '300' }}
      />
      <FAQSchema items={product.faq} />
    </>
  );
}
