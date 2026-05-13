import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/lib/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group card overflow-hidden flex flex-col"
    >
      <div className="relative aspect-square bg-ink-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur rounded-full p-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-4 h-4 text-brand-600" />
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-ink-900 text-lg leading-tight group-hover:text-brand-600 transition">
          {product.shortTitle}
        </h3>
        <p className="text-sm text-ink-500 mt-1.5 line-clamp-2">{product.oneLiner}</p>
        <div className="mt-4 pt-4 border-t border-ink-100 flex items-center justify-between text-xs">
          <span className="text-ink-500">MOQ <span className="text-ink-900 font-semibold">{product.specs.find((s) => s.label === 'MOQ')?.value}</span></span>
          <span className="text-brand-600 font-semibold">View specs →</span>
        </div>
      </div>
    </Link>
  );
}
