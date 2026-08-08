"use client";

import { useEffect } from "react";
import Link from "next/link";
import JewelIcon from "./JewelIcon";
import { useCart, formatRs } from "./CartContext";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, subtotalLabel, count } =
    useCart();

  // Close on Escape, and lock body scroll while the drawer is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Dim backdrop */}
      <div
        onClick={closeCart}
        aria-hidden
        className={`fixed inset-0 z-[60] bg-navy-deep/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-label="Shopping bag"
        className={`fixed top-0 right-0 z-[61] h-full w-full max-w-[420px] bg-ivory flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <h2 className="font-serif italic text-xl text-navy-deep">
            Your Bag{" "}
            <span className="text-gold not-italic text-sm">({count})</span>
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close bag"
            className="text-navy-deep text-2xl leading-none hover:text-gold transition"
          >
            &times;
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
            <div className="text-gold mb-4 opacity-60">
              <JewelIcon shape="drop" size={90} />
            </div>
            <p className="text-navy-deep font-serif italic text-lg mb-2">
              Your bag is empty
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Beautiful things are waiting to be discovered.
            </p>
            <button
              onClick={closeCart}
              className="text-sm tracking-wider uppercase border border-navy-deep text-navy-deep px-7 py-3 rounded-sm hover:bg-navy-deep hover:text-white transition"
            >
              Continue shopping
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-gray-200">
            {items.map(({ product, qty }) => (
              <div key={product.id} className="flex gap-4 py-5">
                <div className="w-20 h-20 shrink-0 rounded-md bg-gradient-to-br from-ivory-soft to-[#e7e0cf] flex items-center justify-center">
                  <JewelIcon shape={product.shape} size={54} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-[10px] tracking-widest uppercase text-gold">
                    {product.category}
                  </div>
                  <h3 className="font-serif text-navy-deep text-[15px] leading-snug truncate">
                    {product.name}
                  </h3>
                  <div className="text-sm text-navy-deep mt-1">{product.price}</div>

                  <div className="flex items-center justify-between mt-2.5">
                    {/* qty stepper */}
                    <div className="flex items-center border border-gray-300 rounded-sm">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => updateQty(product.id, qty - 1)}
                        className="w-7 h-7 text-navy-deep hover:bg-ivory-soft transition"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-xs">{qty}</span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => updateQty(product.id, qty + 1)}
                        className="w-7 h-7 text-navy-deep hover:bg-ivory-soft transition"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(product.id)}
                      className="text-[11px] uppercase tracking-wider text-gray-400 hover:text-navy-deep transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer / checkout */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 px-6 py-5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm uppercase tracking-wider text-gray-500">
                Subtotal
              </span>
              <span className="text-lg font-medium text-navy-deep">
                {subtotalLabel}
              </span>
            </div>
            <p className="text-[11px] text-gray-400 mb-4">
              Shipping &amp; taxes calculated at checkout.
            </p>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block text-center bg-navy-deep text-white text-sm tracking-wider uppercase px-8 py-4 rounded-sm hover:bg-navy-mid transition"
            >
              Checkout
            </Link>
            <button
              onClick={closeCart}
              className="w-full text-center text-xs tracking-wider uppercase text-navy-deep mt-3 hover:text-gold transition"
            >
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
