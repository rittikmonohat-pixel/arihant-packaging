import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbSchema } from './Schema';

export default function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  const trail = [{ name: 'Home', href: '/' }, ...items];
  return (
    <>
      <nav className="text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center flex-wrap gap-1.5 text-ink-500">
          {trail.map((item, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-ink-400" />}
                {last ? (
                  <span className="text-ink-700 font-medium" aria-current="page">{item.name}</span>
                ) : (
                  <Link href={item.href} className="hover:text-brand-600 inline-flex items-center gap-1">
                    {i === 0 && <Home className="w-3.5 h-3.5" />}
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <BreadcrumbSchema items={trail} />
    </>
  );
}
