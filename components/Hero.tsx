"use client";

import Link from "next/link";
import Sparkles from "./Sparkles";

export default function Hero() {
  // Quick category links reuse the exact same routes as the rest of the
  // site (see CategoryStrip.tsx) — nothing new is introduced here.
  const swatches = [
    {
      name: "Earrings",
      href: "/shop?category=Earrings",
      image: "/images/products/Antique-Gold-Floral-Vine-Dangle-Earrings-With-Pink-Pavé-Blossom-2.jpeg"
    },
    {
      name: "Ring",
      href: "/shop?category=Ring",
      image: "/images/products/floral-green-ring-2.jpeg"
    },
    {
      name: "Bracelet",
      href: "/shop?category=Bracelet",
      image: "/images/products/Silver-Tone-Zircon-Floral-Cluster-Station-Bracelet-1.jpeg"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-ivory md:min-h-screen">
      {/* ============ full-bleed background photo — place hero-flatlay.png
          in /public/images/ (same file shared in chat). On mobile the
          section height now follows the content (not a forced full-screen
          height), so bg-cover doesn't need to upscale the photo as much —
          the picture stays sharp and fills the whole hero area, right down
          to the Shop Collection button. ============ */}
      <div
        className="absolute inset-0 bg-cover bg-top md:bg-[center_top_-40px]"
        style={{ backgroundImage: "url(/images/hero-flatlay.jfif)" }}
      />

      {/* soft light wash — only strong near the top where the text sits,
          fades away so the jewelry photo below stays fully visible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(250,247,240,0.92) 0%, rgba(250,247,240,0.78) 22%, rgba(250,247,240,0.35) 40%, rgba(250,247,240,0) 55%)"
        }}
      />

      <div className="absolute inset-0 z-0">
        <Sparkles count={14} />
      </div>

      {/* ============ text — sits in the quiet, empty part of the photo
          near the top ============ */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 pt-24 md:pt-28 pb-6 md:pb-10 text-center flex flex-col items-center">
        <span className="tracking-[5px] text-xs uppercase font-medium mb-5 inline-block" style={{ color: "#A8455A" }}>
          Jewelry &amp; Home Living Products
        </span>
        <h1 className="font-serif italic font-medium text-navy-deep leading-[1.1] mb-5 text-[clamp(30px,4.4vw,50px)]">
          Adorn every{" "}
          <span className="text-gold" style={{ textShadow: "0 0 30px rgba(201,162,39,0.25)" }}>
            moment
          </span>
          <br />
          with quiet luxury
        </h1>
        <p className="text-navy-deep/70 text-sm md:text-base leading-7 max-w-sm mb-7">
          Handpicked jewelry and home accents crafted for the woman who
          notices detail — where every piece is designed to be looked at
          twice.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href="#collection"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-gold-light to-gold text-navy-deep font-semibold text-sm tracking-wider uppercase px-9 py-4 rounded-sm shadow-[0_12px_28px_rgba(201,162,39,0.3)] hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(201,162,39,0.4)] transition-all"
          >
            Shop Collection
          </a>

          {/* quick category swatches — same hrefs used across the site */}
          <div className="flex items-center -space-x-3">
            {swatches.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                aria-label={s.name}
                title={s.name}
                className="w-11 h-11 rounded-full border-2 border-ivory overflow-hidden shadow-md hover:scale-110 hover:z-10 transition-transform relative"
              >
                <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}