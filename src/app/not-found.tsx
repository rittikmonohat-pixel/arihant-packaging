import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-x py-24 text-center">
      <span className="pill">404</span>
      <h1 className="heading-xl mt-4">We couldn't find that page.</h1>
      <p className="lede mt-4 max-w-xl mx-auto">
        The page you're looking for may have moved when we redesigned the site. Try the links below.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">Go Home</Link>
        <Link href="/products" className="btn-secondary">Browse Products</Link>
        <Link href="/contact" className="btn-secondary">Contact Us</Link>
      </div>
    </section>
  );
}
