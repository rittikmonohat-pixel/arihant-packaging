const INDUSTRIES = [
  'Atta',
  'Namkeen',
  'Tea',
  'Masala',
  'Snacks',
  'Dairy',
  'Detergent',
  'Agri-fertiliser',
  'Makhana',
  'Confectionery',
  'Spices',
  'Dried Fruits',
  'Ice Cream',
  'Pulses',
  'Pet Food',
];

export default function TrustedBy() {
  const items = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <section className="py-12 sm:py-16 overflow-hidden">
      <div className="container-x text-center">
        <div className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-ink-500">
          Industries we serve — trusted by manufacturers and FMCG brands across India
        </div>
      </div>

      <div
        className="mt-8 relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
        }}
      >
        <div className="flex w-max gap-x-10 sm:gap-x-14 animate-marquee">
          {items.map((label, i) => (
            <span
              key={label + i}
              className="font-serif italic text-xl sm:text-2xl lg:text-3xl font-normal text-ink-600/80 whitespace-nowrap select-none"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
