"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { count, hydrated, openCart } = useCart();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Header background is transparent/light at the top on every page (hero
  // image is light-toned), so text stays dark navy there. Once scrolled,
  // the header gets a solid dark navy background, so text switches to white.
  const textColor = scrolled ? "text-ivory" : "text-navy-deep";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <Link href="/" className={`font-serif italic text-2xl tracking-wide ${textColor}`}>
        adorn <span className="text-gold-light">N</span> adobe
      </Link>

      <nav className="hidden md:block">
        <ul className={`flex gap-9 text-xs tracking-widest uppercase font-medium ${textColor}`}>
          <li><Link href="/" className="hover:text-gold-light transition">Home</Link></li>
          <li><Link href="/shop" className="hover:text-gold-light transition">Collection</Link></li>
          <li><Link href="#" className="hover:text-gold-light transition">Contact</Link></li>
        </ul>
      </nav>

      <div className={`flex gap-5 items-center ${textColor}`}>
        <button aria-label="search" className="hover:text-gold-light transition">
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9.5" cy="9.5" r="6.5" stroke="currentColor" strokeWidth="1.6" />
            <line x1="14.3" y1="14.3" x2="19.5" y2="19.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
        <Link href="/account" aria-label="account" className="hover:text-gold-light transition">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
            <path d="M4.5 20c0-4.14 3.36-7 7.5-7s7.5 2.86 7.5 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </Link>
        <button onClick={openCart} aria-label="cart" className="relative hover:text-gold-light transition">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 8V6.5a3.5 3.5 0 017 0V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <rect x="4.5" y="8" width="15" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          {hydrated && count > 0 && (
            <span className="absolute -top-2 -right-2 bg-gold-light text-navy-deep text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}