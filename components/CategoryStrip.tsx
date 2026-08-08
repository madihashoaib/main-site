type CategoryTile = {
  name: string;
  image?: string;
  href?: string;
  comingSoon?: boolean;
};

const categories: CategoryTile[] = [
  {
    name: "Earrings",
    image: "/images/products/Antique-Gold-Floral-Vine-Dangle-Earrings-With-Pink-Pavé-Blossom-2.jpeg",
    href: "/shop?category=Earrings"
  },
  {
    name: "Rings",
    image: "/images/products/floral-green-ring-2.jpeg",
    href: "/shop?category=Ring"
  },
  {
    name: "Bracelets",
    image: "/images/products/Silver-Tone-Zircon-Floral-Cluster-Station-Bracelet-1.jpeg",
    href: "/shop?category=Bracelet"
  },
  {
    name: "Sets",
    image: "/images/products/Silver-Tone-Mint-Green-Zircon-Heart-Motif-Necklace-And-Earrings-Set.jpeg",
    href: "/shop?category=Sets"
  },
  {
    name: "Home Living",
    comingSoon: true
  }
];

const [featured, ...rest] = categories;

export default function CategoryStrip() {
  return (
    <section className="bg-ivory py-16 px-6 md:px-12">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-gold text-xs uppercase tracking-widest">Shop by Category</span>
        <h2 className="font-serif italic font-medium text-navy-deep text-[clamp(28px,4vw,42px)] mt-3">
          Find your next favourite
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
        {/* ============ big featured tile ============ */}
        <a
          href={featured.href}
          className="group relative overflow-hidden rounded-2xl h-[340px] md:h-auto min-h-[420px] flex items-end p-8"
        >
          <img
            src={featured.image}
            alt={featured.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent" />
          <div className="relative z-10">
            <span className="inline-block mb-3 text-[10px] tracking-widest uppercase text-gold-light border border-gold-light/60 rounded-full px-3 py-1.5">
              Most Loved
            </span>
            <h3 className="font-serif italic text-white text-3xl mb-2">{featured.name}</h3>
            <span className="text-white/70 text-sm">Shop the edit →</span>
          </div>
        </a>

        {/* ============ small tile grid ============ */}
        <div className="grid grid-cols-2 gap-4">
          {rest.map((cat) => {
            const inner = (
              <>
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-light to-navy-mid transition-transform duration-500 group-hover:scale-110" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-transparent to-transparent" />
                <div className="relative z-10">
                  <h3 className="font-serif italic text-white text-xl">{cat.name}</h3>
                  {cat.comingSoon && (
                    <span className="inline-block mt-3 text-[9px] tracking-widest uppercase text-gold-light border border-gold-light/60 rounded-full px-2.5 py-1">
                      Launching Soon
                    </span>
                  )}
                </div>
              </>
            );

            if (cat.comingSoon) {
              return (
                <div
                  key={cat.name}
                  className="group relative rounded-2xl h-[195px] overflow-hidden flex items-end p-5 cursor-default"
                >
                  {inner}
                </div>
              );
            }

            return (
              <a
                key={cat.name}
                href={cat.href}
                className="group relative rounded-2xl h-[195px] overflow-hidden flex items-end p-5"
              >
                {inner}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}