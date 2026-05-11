/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      // Wix → new URL map. 301 (permanent).
      // ----- Top-level structure -----
      { source: '/ourproducts', destination: '/products', permanent: true },

      // ----- Application slug cleanups (decode %26, %2F; append -pouch where needed) -----
      { source: '/applications/tea-packaging', destination: '/applications/tea-packaging-pouch', permanent: true },
      { source: '/applications/ice-cream-packaging', destination: '/applications/ice-cream-packaging-pouch', permanent: true },
      { source: '/applications/masala-packaging', destination: '/applications/masala-packaging-pouch', permanent: true },
      { source: '/applications/idly-%26-dosa-batter-packaging', destination: '/applications/idly-dosa-batter-packaging-pouch', permanent: true },
      { source: '/applications/idly-&-dosa-batter-packaging', destination: '/applications/idly-dosa-batter-packaging-pouch', permanent: true },
      { source: '/applications/chira-packaging', destination: '/applications/chira-packaging-pouch', permanent: true },
      { source: '/applications/soya-bari-packaging', destination: '/applications/soya-bari-packaging-pouch', permanent: true },
      { source: '/applications/fryums-packaging', destination: '/applications/fryums-packaging-pouch', permanent: true },
      { source: '/applications/detergent-packaging', destination: '/applications/detergent-packaging-pouch', permanent: true },
      { source: '/applications/fertilizer-%26-seed-packaging', destination: '/applications/fertilizer-packaging-pouch', permanent: true },
      { source: '/applications/fertilizer-&-seed-packaging', destination: '/applications/fertilizer-packaging-pouch', permanent: true },
      { source: '/applications/whole-spices-packaging', destination: '/applications/whole-spices-packaging-pouch', permanent: true },
      { source: '/applications/paneer-packaging-vaccum-pouch', destination: '/applications/paneer-vacuum-pouch', permanent: true },
      { source: '/applications/sanitary-pad-%2F-napkin-packaging-pouch-', destination: '/applications/sanitary-napkin-packaging-pouch', permanent: true },
      { source: '/applications/sanitary-pad-/-napkin-packaging-pouch-', destination: '/applications/sanitary-napkin-packaging-pouch', permanent: true },
      { source: '/applications/dried-fruits-packaging', destination: '/applications/dried-fruits-packaging-pouch', permanent: true },
      { source: '/applications/makhana-%2F-fox-nut-packaging', destination: '/applications/makhana-packaging-pouch', permanent: true },
      { source: '/applications/makhana-/-fox-nut-packaging', destination: '/applications/makhana-packaging-pouch', permanent: true },

      // ----- Wix /post/* → /blog/* -----
      { source: '/post/finding-the-right-flexible-packaging-manufacturer', destination: '/blog/finding-the-right-flexible-packaging-manufacturer', permanent: true },
      { source: '/post/the-benefits-of-using-zip-lock-plastic-pouches-for-packaging-your-products', destination: '/blog/zip-lock-plastic-pouches-benefits', permanent: true },
      { source: '/post/flexible-laminated-pouches', destination: '/blog/flexible-laminated-pouches', permanent: true },
      // Catch-all fallback for any remaining /post/* slug
      { source: '/post/:slug*', destination: '/blog/:slug*', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
