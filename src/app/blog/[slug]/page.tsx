import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ArticleSchema, FAQSchema } from '@/components/Schema';
import { POSTS, getPost, getRelatedPosts } from '@/lib/blog';

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

function renderBody(body: string) {
  return body.split('\n\n').map((para, i) => {
    if (para.startsWith('## ')) {
      return <h2 key={i} className="heading-sm mt-10 mb-3">{para.slice(3)}</h2>;
    }
    if (para.startsWith('### ')) {
      return <h3 key={i} className="text-lg font-semibold mt-6 mb-2">{para.slice(4)}</h3>;
    }
    return <p key={i} className="text-ink-700 leading-relaxed mb-4">{para}</p>;
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <section className="container-x pt-8 pb-4">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: post.title, href: `/blog/${post.slug}` },
        ]} />
      </section>

      <article className="container-x pb-16">
        <div className="max-w-3xl mx-auto">
          <span className="pill">{post.category}</span>
          <h1 className="heading-xl mt-3">{post.title}</h1>
          <p className="lede mt-4">{post.excerpt}</p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-ink-500">
            <span className="inline-flex items-center gap-1.5"><User className="w-4 h-4" />{post.author}</span>
            <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4" />{new Date(post.date).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readingMinutes} min read</span>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-ink-100 mt-7">
            <Image src={post.image} alt={post.title} fill priority sizes="(min-width:1024px) 768px, 100vw" className="object-cover" />
          </div>

          <div className="prose prose-brand max-w-none mt-10">
            {renderBody(post.body)}
          </div>

          {post.faq && post.faq.length > 0 && (
            <div className="mt-12">
              <h2 className="heading-sm mb-3">Frequently asked questions</h2>
              <div className="divide-y divide-ink-100 border-y border-ink-100">
                {post.faq.map((f) => (
                  <details key={f.q} className="group py-4">
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-base font-semibold text-ink-900">
                      {f.q}
                      <span className="text-brand-500 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                    </summary>
                    <p className="mt-3 text-ink-600 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 rounded-2xl bg-brand-50 border border-brand-100 p-6 sm:p-8">
            <h2 className="font-semibold text-lg text-ink-900">Need flexible packaging for your brand?</h2>
            <p className="text-ink-700 text-sm mt-2">Get a free quote within 4 working hours. MOQ from 300 kg.</p>
            <Link href="/contact" className="btn-primary mt-4">Get Best Price <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </article>

      <section className="container-x pb-24">
        <h2 className="heading-md mb-6">More from the blog</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card overflow-hidden group">
              <div className="relative aspect-video bg-ink-100">
                <Image src={p.image} alt={p.title} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-ink-900 group-hover:text-brand-600 line-clamp-2">{p.title}</h3>
                <p className="text-xs text-ink-500 mt-2">{p.readingMinutes} min read</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ArticleSchema title={post.title} description={post.metaDescription} image={post.image} datePublished={post.date} dateModified={post.modified} />
      {post.faq && <FAQSchema items={post.faq} />}
    </>
  );
}
