import type { Metadata } from 'next';
import Calculator from './Calculator';

// Internal testing tool — keep out of Google's index and out of the sitemap.
// Reachable by URL only (no nav link). When the calculator is locked in we
// can flip this to indexable and add it to /sitemap.ts.
export const metadata: Metadata = {
  title: { absolute: 'Cylinder Cost Calculator (Test) — Arihant Packaging' },
  description: 'Internal testing tool for rotogravure cylinder pricing.',
  alternates: { canonical: '/tools/cylinder-cost' },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function CylinderCostPage() {
  return <Calculator />;
}
