import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShopPage from "@/components/ShopPage";

export const metadata = {
  title: "Collection — adorn N adobe",
  description: "Browse the full adorn N adobe jewelry collection."
};

export default function Shop() {
  return (
    <main>
      <Header />
      <Suspense fallback={null}>
        <ShopPage />
      </Suspense>
      <Footer />
    </main>
  );
}
