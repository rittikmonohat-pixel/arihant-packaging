import Link from 'next/link';
import Image from 'next/image';
import type { Application } from '@/lib/applications';

export default function ApplicationCard({ app }: { app: Application }) {
  return (
    <Link
      href={`/applications/${app.slug}`}
      className="group block relative aspect-square overflow-hidden rounded-xl border border-ink-100 bg-ink-50"
    >
      <Image
        src={app.image}
        alt={app.title}
        fill
        sizes="(min-width:1024px) 16vw, (min-width:640px) 25vw, 50vw"
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <h3 className="text-white font-semibold text-sm sm:text-base leading-tight">{app.shortTitle}</h3>
        <p className="text-white/80 text-xs mt-0.5 line-clamp-1">{app.oneLiner}</p>
      </div>
    </Link>
  );
}
