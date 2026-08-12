import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategoryStrip from "@/components/CategoryStrip";

import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBadges />
      <CategoryStrip />
      <ProductGrid />
      
      <Footer />
    </main>
  );
}