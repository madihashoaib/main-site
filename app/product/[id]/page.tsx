import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";
import { products, getProductById, getRelatedProducts } from "@/components/productData";

type Params = { params: { id: string } };

// Pre-render a page for every product at build time.
export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: Params): Metadata {
  const product = getProductById(params.id);
  if (!product) return { title: "Product not found — adorn N adobe" };
  return {
    title: `${product.name} — adorn N adobe`,
    description: `${product.name}, a handcrafted ${product.category.toLowerCase()} from adorn N adobe. ${product.price}.`
  };
}

export default function ProductPage({ params }: Params) {
  const product = getProductById(params.id);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <main>
      <Header />
      <ProductDetail product={product} related={related} />
      <Footer />
    </main>
  );
}
