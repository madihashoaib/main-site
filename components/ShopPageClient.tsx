"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import type { Product } from "./productData";

type SortOption = "newest" | "price-low" | "price-high";

interface ShopPageClientProps {
  initialProducts: Product[];
  categories: readonly string[];
}

export default function ShopPageClient({ initialProducts, categories }: ShopPageClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // NO separate useState for category. It's read straight from the URL on
  // every render — the URL IS the state, so it can never fall out of sync.
  const categoryFromUrl = searchParams.get("category");
  const activeCategory =
    categoryFromUrl && (categories as readonly string[]).includes(categoryFromUrl)
      ? categoryFromUrl
      : "All";

  const [sort, setSort] = useState<SortOption>("newest");

  function selectCategory(cat: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "All") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    const query = params.toString();
    router.replace(query ? `/shop?${query}` : "/shop", { scroll: false });
  }

  const filteredProducts = useMemo(() => {
    let list =
      activeCategory === "All"
        ? [...initialProducts]
        : initialProducts.filter((p) => p.category === activeCategory);

    if (sort === "price-low") list.sort((a, b) => a.priceValue - b.priceValue);
    if (sort === "price-high") list.sort((a, b) => b.priceValue - a.priceValue);
    if (sort === "newest") list.sort((a, b) => b.order - a.order);

    return list;
  }, [activeCategory, sort, initialProducts]);

  return (
    <>
      <Reveal className="mb-14">
        <span className="text-gold text-xs uppercase tracking-widest">Full collection</span>
        <h1 className="font-serif italic font-medium text-navy-deep text-[clamp(30px,4vw,44px)] mt-3">
          Every piece, one place
        </h1>
      </Reveal>

      <div className="flex flex-wrap items-center justify-between gap-6 mb-12 border-b border-gray-200 pb-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => selectCategory(cat)}
              className={`text-xs tracking-wider uppercase px-5 py-2.5 rounded-full border transition ${
                activeCategory === cat
                  ? "bg-navy-deep text-white border-navy-deep"
                  : "border-gray-300 text-navy-deep hover:border-navy-deep"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="text-xs uppercase tracking-wider text-gray-500">
            Sort by
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="text-sm border border-gray-300 rounded-sm px-4 py-2.5 outline-none focus:border-navy-deep bg-white"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-400 py-20">
          Is category mein abhi koi product nahi hai.
        </p>
      ) : (
        <div
          className="grid gap-11"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            perspective: "1400px"
          }}
        >
          {filteredProducts.map((product) => (
            <Reveal key={product.id}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      )}
    </>
  );
}