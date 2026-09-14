"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { products } from "./productData";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) { inputRef.current?.focus(); } else { setQuery(""); }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  function goToProduct(id: string) {
    onClose();
    router.push(`/product/${id}`);
  }

  return (
    <div className={`fixed inset-0 z-[70] transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div onClick={onClose} aria-hidden className="absolute inset-0 bg-navy-deep/60 backdrop-blur-sm" />

      <div className="relative max-w-2xl mx-auto mt-24 md:mt-32 px-6">
        <div className="bg-white rounded-md shadow-2xl overflow-hidden">
          <div className="flex items-center gap-4 px-6 py-5 border-b border-gray-100">
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-navy-deep shrink-0">
              <circle cx="9.5" cy="9.5" r="6.5" stroke="currentColor" strokeWidth="1.6" />
              <line x1="14.3" y1="14.3" x2="19.5" y2="19.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <input ref={inputRef} type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for earrings, rings, zircon, tikka..." className="flex-1 outline-none text-sm md:text-base text-navy-deep placeholder:text-gray-400" />
            <button onClick={onClose} aria-label="Close search" className="text-gray-400 hover:text-navy-deep transition text-xl leading-none">&times;</button>
          </div>

          {query.trim() !== "" && (
            <div className="max-h-[60vh] overflow-y-auto">
              {results.length === 0 ? (
                <p className="text-center text-sm text-gray-400 py-10">Koi product nahi mila is naam ke liye.</p>
              ) : (
                <ul className="divide-y divide-gray-100">
                  {results.map((product) => (
                    <li key={product.id}>
                      <button onClick={() => goToProduct(product.id)} className="w-full flex items-center gap-4 px-6 py-3.5 text-left hover:bg-ivory-soft/60 transition">
                        <div className="w-12 h-12 rounded-sm overflow-hidden bg-ivory-soft shrink-0">
                          {product.images?.[0] && (<img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm text-navy-deep font-medium truncate">{product.name}</p>
                          <p className="text-[11px] uppercase tracking-wider text-gold">{product.category}</p>
                        </div>
                        <span className="text-sm text-navy-deep shrink-0">{product.price}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}