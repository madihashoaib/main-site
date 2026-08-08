import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategoryStrip from "@/components/CategoryStrip";
import Reviews from "@/components/Reviews";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CategoryStrip />
      <ProductGrid />
      <Reviews />
      <Newsletter />
      <Footer />
    </main>
  );
}
