"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Earrings", href: "/shop?category=Earrings" },
  { label: "Rings", href: "/shop?category=Ring" },
  { label: "Bracelets", href: "/shop?category=Bracelet" },
  { label: "Sets", href: "/shop?category=Sets" },
  // Dedicated page — is category ko shop filter mein render nahi karna,
  // Bedazzling ka apna alag /bedazzling page banega (next step mein).
  { label: "Bedazzling", href: "/bedazzling" },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  // Portals need a real browser `document` to render into, which doesn't
  // exist during server-side rendering. This flag waits until the
  // component has mounted in the browser before creating the portal, so
  // there's no "document is not defined" crash and no hydration mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Escape key se close, aur jab sidebar khula ho to background scroll lock
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  // createPortal renders this JSX directly under <body>, completely
  // outside Header's DOM tree — even though we're still calling
  // <Sidebar /> from inside Header.tsx. This is what breaks it free from
  // Header's backdrop-blur (or any future transform/filter Header might
  // get), so it always covers the FULL viewport, at the TRUE top layer,
  // scrolled or not.
  return createPortal(
    <>
      {/* Dark semi-transparent backdrop */}
      <div
        onClick={onClose}
        aria-hidden
        className={`fixed inset-0 z-[60] bg-navy-deep/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sliding white sidebar panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed top-0 left-0 z-[61] h-full w-full max-w-[300px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <span className="font-serif italic text-xl text-navy-deep">
            adorn <span className="text-gold-light">N</span> adobe
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-navy-deep text-2xl leading-none hover:text-gold transition"
          >
            &times;
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block py-3.5 text-sm tracking-widest uppercase text-navy-deep border-b border-gray-100 hover:text-gold hover:pl-2 transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>,
    document.body
  );
}
