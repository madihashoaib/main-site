"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "./productData";
import { useWishlist } from "./WishlistContext";
import { useCart } from "./CartContext";

export default function WishlistPage() {
  const { ids, hydrated, remove, clear } = useWishlist();
  const { addItem } = useCart();
  const [addedAll, setAddedAll] = useState(false);

  // Keep the order the customer saved them in
  const items = ids
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is (typeof products)[number] => Boolean(p));
  const available = items.filter((p) => !p.soldOut);

  const addAllToCart = () => {
    available.forEach((p) => addItem(p));
    setAddedAll(true);
    setTimeout(() => setAddedAll(false), 2500);
  };

  if (!hydrated) return <div className="min-h-[60vh]" />;

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 min-h-[60vh]">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div>
          <div className="text-[11px] tracking-widest uppercase text-gold mb-2">Your Picks</div>
          <h1 className="font-serif font-semibold text-3xl text-navy-deep">My Wishlist</h1>
        </div>

        {items.length > 0 && (
          <div className="flex items-center gap-3">
            <button onClick={clear} className="text-sm text-gray-500 underline underline-offset-4 hover:text-navy-deep">
              Clear all
            </button>
            {available.length > 0 && (
              <button
                onClick={addAllToCart}
                className="bg-navy-deep text-white text-sm tracking-wider uppercase px-6 py-3 rounded-sm hover:opacity-90 transition"
              >
                {addedAll ? "Added to cart ✓" : `Add all to cart (${available.length})`}
              </button>
            )}
          </div>
        )}
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 mb-6">Your wishlist is empty. Tap the heart on any piece you love and it will show up here.</p>
          <Link href="/" className="inline-block border border-navy-deep text-navy-deep px-6 py-3 rounded-sm text-sm tracking-wider uppercase hover:bg-navy-deep hover:text-white transition">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((p) => (
            <div key={p.id} className="bg-white rounded-md overflow-hidden shadow-md flex flex-col">
              <Link href={`/product/${p.id}`} className="relative block aspect-[4/5] bg-ivory-soft overflow-hidden">
                {p.images?.[0] && <img src={p.images[0]} alt={p.name} className="absolute inset-0 w-full h-full object-cover" />}
                {p.soldOut && (
                  <span className="absolute top-3 right-3 bg-red-600 text-white text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-sm">
                    Sold Out
                  </span>
                )}
              </Link>

              <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <div className="text-[10px] tracking-widest uppercase text-gold mb-1">{p.category}</div>
                  <Link href={`/product/${p.id}`} className="font-serif font-semibold text-navy-deep leading-snug line-clamp-2 hover:underline">
                    {p.name}
                  </Link>
                  <div className={`mt-2 text-[15px] font-medium ${p.soldOut ? "text-gray-400 line-through" : ""}`}>{p.price}</div>
                </div>

                <div className="flex items-center gap-2">
                  {p.soldOut ? (
                    <span className="flex-1 text-center text-[11px] tracking-wider uppercase text-red-600 font-semibold py-2">Sold Out</span>
                  ) : (
                    <button
                      onClick={() => addItem(p)}
                      className="flex-1 bg-navy-deep text-white text-xs tracking-wider uppercase py-2.5 rounded-sm hover:opacity-90 transition"
                    >
                      Add to cart
                    </button>
                  )}
                  <button
                    aria-label={`Remove ${p.name} from wishlist`}
                    onClick={() => remove(p.id)}
                    className="w-9 h-9 shrink-0 rounded-full border border-gray-300 text-gray-500 hover:border-red-500 hover:text-red-500 transition flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}