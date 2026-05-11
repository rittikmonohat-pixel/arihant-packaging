import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Packaging Products — Pouches, Rolls, Stand-Up Pouches',
  description: 'All flexible packaging products from Arihant Packaging — transparent window rolls, aluminium laminated rolls, MET BOPP, milky LDPE, stand-up pouches, center seal, 3-side seal, and pouches with handle.',
  alternates: { canonical: '/products' },
};

export default function ProductsIndex() {
  return (
    <>
      <section className="container-x pt-8 pb-4">
        <Breadcrumbs items={[{ name: 'Products', href: '/products' }]} />
      </section>
      <section className="container-x pb-12">
        <div className="max-w-3xl">
          <h1 className="heading-xl">Our Products</h1>
          <p className="lede mt-4">
            8 flexible packaging formats — every one customisable in material, layers, finish, and printing. MOQ from 300 kg.
          </p>
        </div>
      </section>
      <section className="container-x pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>
    </>
  );
}
