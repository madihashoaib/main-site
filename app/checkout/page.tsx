import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckoutPage from "@/components/CheckoutPage";

export const metadata = {
  title: "Checkout — adorn N adobe",
  description: "Review your bag and complete your order."
};

export default function Checkout() {
  return (
    <main>
      <Header />
      <CheckoutPage />
      <Footer />
    </main>
  );
}
