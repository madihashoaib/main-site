import ShopPageClient from "./ShopPageClient";
import { products, categories } from "./productData";

export default function ShopPage() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
      <nav className="text-xs text-gray-400 tracking-wide mb-6">
        <a href="/" className="hover:text-navy-deep transition">Home</a>
        <span className="mx-2">/</span>
        <span className="text-navy-deep">Shop</span>
      </nav>

      <ShopPageClient initialProducts={products} categories={categories} />
    </main>
  );
}