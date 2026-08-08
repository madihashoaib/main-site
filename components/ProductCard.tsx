"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "./productData";
import JewelIcon from "./JewelIcon";
import { useCart } from "./CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const { addItem } = useCart();
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);
  const [shadow, setShadow] = useState("0 20px 40px rgba(11,22,64,0.12)");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    const shine = shineRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const percentX = (x - cx) / cx;
    const percentY = (y - cy) / cy;

    const rotateX = percentY * -18;
    const rotateY = percentX * 18;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.06,1.06,1.06)`;

    const shadowX = percentX * 30;
    const shadowY = percentY * 30 + 25;
    setShadow(`${shadowX}px ${shadowY}px 55px rgba(11,22,64,0.35)`);

    if (glow) {
      glow.style.left = `${x - 130}px`;
      glow.style.top = `${y - 130}px`;
      glow.style.opacity = "1";
    }
    if (shine) {
      shine.style.background = `linear-gradient(${115 + percentX * 40}deg, rgba(255,255,255,0) 35%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0) 65%)`;
      shine.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const glow = glowRef.current;
    const shine = shineRef.current;
    if (card) card.style.transform = "perspective(1200px) rotateX(0) rotateY(0) scale3d(1,1,1)";
    if (glow) glow.style.opacity = "0";
    if (shine) shine.style.opacity = "0";
    setShadow("0 20px 40px rgba(11,22,64,0.12)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => router.push(`/product/${product.id}`)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") router.push(`/product/${product.id}`);
      }}
      className="relative bg-white rounded-md overflow-hidden cursor-pointer card-float"
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease-out, box-shadow 0.2s ease-out",
        boxShadow: shadow,
        willChange: "transform"
      }}
    >
      <div className="relative h-80 bg-gradient-to-br from-ivory-soft to-[#e7e0cf] flex items-center justify-center overflow-hidden">
        {product.images?.[0] && (
          <img
            src={product.images[0]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: "translateZ(40px)" }}
          />
        )}

        {product.badge && (
          <span
            className="absolute top-4 left-4 bg-navy-deep text-white text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-sm z-10"
            style={{ transform: "translateZ(60px)" }}
          >
            {product.badge}
          </span>
        )}

        <div
          ref={shineRef}
          className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-200"
          style={{ transform: "translateZ(90px)", mixBlendMode: "overlay" }}
        />

        <div
          ref={glowRef}
          className="absolute w-[260px] h-[260px] rounded-full pointer-events-none opacity-0 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.95), rgba(255,255,255,0) 70%)",
            transform: "translateZ(80px)"
          }}
        />

        {!product.images?.[0] && (
          <div
            style={{
              transform: "translateZ(70px)",
              filter: "drop-shadow(0 24px 26px rgba(0,0,0,0.22))"
            }}
          >
            <JewelIcon shape={product.shape} />
          </div>
        )}

        <div
          className="absolute inset-x-6 bottom-3 h-4 rounded-full opacity-30 blur-md bg-navy-deep/40"
          style={{ transform: "translateZ(20px)" }}
        />
      </div>

      <div className="px-6 pt-6 pb-7 bg-white" style={{ transform: "translateZ(45px)" }}>
        <div className="text-[11px] tracking-widest uppercase text-gold mb-2">
          {product.category}
        </div>
        <h3 className="font-serif font-semibold text-xl text-navy-deep mb-3">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-[17px] font-medium">{product.price}</span>
          <button
            aria-label={`Add ${product.name} to cart`}
            onClick={(e) => {
              e.stopPropagation();
              addItem(product);
            }}
            className="w-9 h-9 rounded-full border border-navy-deep flex items-center justify-center text-lg text-navy-deep hover:bg-navy-deep hover:text-white transition"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
