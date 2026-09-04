import Link from "next/link";
import Reveal from "./Reveal";
import ProductCard from "./ProductCard";
import { products } from "./productData";

export default function ProductGrid() {
  const featured = products.slice(0, 4);

  return (
    <section className="py-28 px-6 md:px-12" id="collection">
      <Reveal className="text-center max-w-xl mx-auto mb-16">
        <span className="text-gold text-xs uppercase tracking-widest">Best Sellers</span>
        <h2 className="font-serif italic font-medium text-navy-deep text-[clamp(32px,4vw,46px)] my-4">
          Pieces worth a second glance
        </h2>
        <p className="text-gray-500 text-sm leading-7">
          Move your cursor over a piece — light catches every angle, just
          like it would in your hand.
        </p>
      </Reveal>

      <div
        className="grid gap-11 max-w-6xl mx-auto"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
          perspective: "1400px"
        }}
      >
        {featured.map((product) => (
          <Reveal key={product.id}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 border border-navy-deep text-navy-deep text-sm tracking-wider uppercase px-9 py-4 rounded-sm hover:bg-navy-deep hover:text-white transition"
        >
          View all products
        </Link>
      </div>
    </section>
  );
}
