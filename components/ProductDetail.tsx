"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import ProductCard from "./ProductCard";
import JewelIcon from "./JewelIcon";
import { getProductCopy, type Product } from "./productData";
import { useCart } from "./CartContext";

function Stars() {
  return (
    <span className="text-gold-light tracking-tight" aria-hidden>
      ★★★★★
    </span>
  );
}

export default function ProductDetail({
  product,
  related
}: {
  product: Product;
  related: Product[];
}) {
  const copy = getProductCopy(product);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>("Materials");
  const [activeImage, setActiveImage] = useState(0);
  const gallery = product.images ?? [];

  const sections: { title: string; body: React.ReactNode }[] = [
    {
      title: "Materials",
      body: (
        <ul className="space-y-1.5">
          {copy.materials.map((m) => (
            <li key={m} className="flex items-center gap-2">
              <span className="text-gold">•</span>
              {m}
            </li>
          ))}
        </ul>
      )
    },
    { title: "Care", body: <p>{copy.care}</p> },
    { title: "Shipping & Returns", body: <p>{copy.shipping}</p> }
  ];

  const handleAdd = () => {
    addItem(product, qty);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 tracking-wide mb-8">
        <Link href="/" className="hover:text-navy-deep transition">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-navy-deep transition">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-navy-deep">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left — jewel visual */}
        <Reveal>
          <div
            className="relative rounded-lg overflow-hidden bg-gradient-to-br from-ivory-soft to-[#e7e0cf] flex items-center justify-center h-[380px] md:h-[560px]"
            style={{ boxShadow: "0 30px 60px rgba(11,22,64,0.18)" }}
          >
            {product.badge && (
              <span className="absolute top-5 left-5 bg-navy-deep text-white text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-sm z-10">
                {product.badge}
              </span>
            )}

            {/* soft twinkles */}
            <span className="sparkle" style={{ width: 8, height: 8, top: "22%", left: "26%", animationDuration: "3s" }} />
            <span className="sparkle" style={{ width: 5, height: 5, top: "68%", left: "72%", animationDuration: "4s" }} />
            <span className="sparkle" style={{ width: 6, height: 6, top: "40%", left: "80%", animationDuration: "3.6s" }} />

            {gallery.length > 0 ? (
              <img
                src={gallery[activeImage]}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="card-float" style={{ filter: "drop-shadow(0 30px 34px rgba(0,0,0,0.22))" }}>
                <JewelIcon shape={product.shape} size={300} />
              </div>
            )}

            <div className="absolute inset-x-16 bottom-10 h-6 rounded-full opacity-30 blur-lg bg-navy-deep/40" />
          </div>

          {gallery.length > 1 && (
            <div className="flex gap-3 mt-4">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setActiveImage(i)}
                  className="w-16 h-16 rounded-md overflow-hidden border-2 transition"
                  style={{
                    borderColor: i === activeImage ? "#0B1640" : "transparent"
                  }}
                >
                  <img src={src} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </Reveal>

        {/* Right — details */}
        <Reveal>
          <div className="md:pt-4">
            <div className="text-[11px] tracking-widest uppercase text-gold mb-3">
              {product.category}
            </div>
            <h1 className="font-serif italic font-medium text-navy-deep text-[clamp(30px,4.5vw,48px)] leading-tight mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-6 text-sm">
              <Stars />
              <span className="text-gray-500">4.8 </span>
            </div>

            <div className="text-2xl font-medium text-navy-deep mb-7">
              {product.price}
            </div>

            <p className="text-gray-600 text-[15px] leading-8 mb-9 max-w-lg">
              {copy.description}
            </p>

            {/* Quantity */}
            <div className="flex items-center gap-6 mb-7">
              <span className="text-xs uppercase tracking-widest text-gray-500">Quantity</span>
              <div className="flex items-center border border-gray-300 rounded-sm">
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 text-lg text-navy-deep hover:bg-ivory-soft transition"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm">{qty}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-10 text-lg text-navy-deep hover:bg-ivory-soft transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 mb-9">
              <button
                onClick={handleAdd}
                className={`flex-1 min-w-[220px] text-sm tracking-wider uppercase px-8 py-4 rounded-sm transition ${
                  added
                    ? "bg-gold text-navy-deep"
                    : "bg-navy-deep text-white hover:bg-navy-mid"
                }`}
              >
                {added ? "Added to bag ✓" : "Add to bag"}
              </button>
              <button
                aria-label="Add to wishlist"
                className="px-6 py-4 rounded-sm border border-navy-deep text-navy-deep hover:bg-navy-deep hover:text-white transition"
              >
                ♥ Wishlist
              </button>
            </div>

            {/* Trust row */}
            <div className="grid grid-cols-3 gap-3 text-center border-y border-gray-200 py-5 mb-8">
              {[
                { t: "Free delivery" },
                { t: "7-day returns", s: "Easy & hassle-free" },
                { t: "Ships in 3-7 days", s: "Across Pakistan" }
              ].map((item) => (
                <div key={item.t}>
                  <div className="text-[13px] font-medium text-navy-deep">{item.t}</div>
                  <div className="text-[11px] text-gray-400 mt-1">{item.s}</div>
                </div>
              ))}
            </div>

            {/* Accordion */}
            <div className="divide-y divide-gray-200 border-t border-gray-200">
              {sections.map((s) => {
                const open = openSection === s.title;
                return (
                  <div key={s.title}>
                    <button
                      onClick={() => setOpenSection(open ? null : s.title)}
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className="text-sm uppercase tracking-wider text-navy-deep">
                        {s.title}
                      </span>
                      <span className="text-gold text-lg">{open ? "−" : "+"}</span>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300 text-sm text-gray-600 leading-7"
                      style={{ maxHeight: open ? 220 : 0 }}
                    >
                      <div className="pb-5">{s.body}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>

      {/* You may also like */}
      {related.length > 0 && (
        <section className="mt-28">
          <Reveal className="text-center max-w-xl mx-auto mb-14">
            <span className="text-gold text-xs uppercase tracking-widest">More to love</span>
            <h2 className="font-serif italic font-medium text-navy-deep text-[clamp(28px,3.5vw,40px)] mt-3">
              You may also like
            </h2>
          </Reveal>

          <div
            className="grid gap-11"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              perspective: "1400px"
            }}
          >
            {related.map((p) => (
              <Reveal key={p.id}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
