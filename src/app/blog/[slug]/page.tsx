import type { Metadata } from 'next';
import React from 'react';
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

// Render inline markdown: **bold**, *italic*, [text](url)
function renderInline(text: string): (string | React.ReactElement)[] {
  const parts: (string | React.ReactElement)[] = [];
  // Combined regex: bold | italic | link
  const re = /\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0; let m: RegExpExecArray | null; let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1] !== undefined) parts.push(<strong key={`b-${i++}`} className="font-semibold text-ink-900">{m[1]}</strong>);
    else if (m[2] !== undefined) parts.push(<em key={`i-${i++}`}>{m[2]}</em>);
    else if (m[3] !== undefined) parts.push(<a key={`l-${i++}`} href={m[4]} className="text-brand-600 hover:text-brand-700 underline" target={m[4].startsWith('http') ? '_blank' : undefined} rel={m[4].startsWith('http') ? 'noopener' : undefined}>{m[3]}</a>);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function renderBody(body: string) {
  const blocks = body.split('\n\n');
  const out: React.ReactElement[] = [];
  let listBuf: string[] = [];
  const flushList = (idx: number) => {
    if (listBuf.length === 0) return;
    out.push(
      <ul key={`ul-${idx}`} className="list-disc pl-6 my-4 text-ink-700 space-y-2">
        {listBuf.map((item, j) => <li key={j} className="leading-relaxed">{renderInline(item.replace(/^[-*]\s+/, ''))}</li>)}
      </ul>
    );
    listBuf = [];
  };
  blocks.forEach((para, i) => {
    const trimmed = para.trim();
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      // multi-line list possible
      trimmed.split('\n').forEach(line => {
        if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) listBuf.push(line.trim());
      });
      return;
    }
    flushList(i);
    if (trimmed.startsWith('## ')) {
      out.push(<h2 key={i} className="heading-sm mt-10 mb-3">{renderInline(trimmed.slice(3))}</h2>);
    } else if (trimmed.startsWith('### ')) {
      out.push(<h3 key={i} className="text-lg font-semibold mt-6 mb-2">{renderInline(trimmed.slice(4))}</h3>);
    } else if (trimmed.startsWith('# ')) {
      out.push(<h2 key={i} className="heading-md mt-10 mb-3">{renderInline(trimmed.slice(2))}</h2>);
    } else {
      out.push(<p key={i} className="text-ink-700 leading-relaxed mb-4">{renderInline(trimmed)}</p>);
    }
  });
  flushList(blocks.length);
  return out;
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
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-ink-100 bg-white mt-7">
            <Image src={post.image} alt={post.title} fill priority sizes="(min-width:1024px) 768px, 100vw" className="object-contain p-3" />
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
            <p className="text-ink-700 text-sm mt-2">Get a quote from our team. MOQ from 300 kg.</p>
            <Link href="/contact" className="btn-primary mt-4">Get a Quote <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </article>

      <section className="container-x pb-24">
        <h2 className="heading-md mb-6">More from the blog</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card overflow-hidden group">
              <div className="relative aspect-video bg-white">
                <Image src={p.image} alt={p.title} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-contain p-2 group-hover:scale-105 transition-transform" />
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
