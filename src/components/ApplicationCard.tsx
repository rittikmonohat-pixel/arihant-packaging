import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { Application } from '@/lib/applications';

export default function ApplicationCard({ app }: { app: Application }) {
  return (
    <Link
      href={`/applications/${app.slug}`}
      className="group card overflow-hidden flex flex-col"
    >
      <div className="relative aspect-square bg-white overflow-hidden">
        <Image
          src={app.image}
          alt={app.title}
          fill
          sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur rounded-full p-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-4 h-4 text-brand-600" />
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-ink-900 text-base leading-tight group-hover:text-brand-600 transition">
          {app.shortTitle}
        </h3>
        <p className="text-sm text-ink-500 mt-1 line-clamp-2">{app.oneLiner}</p>
      </div>
    </Link>
  );
}
