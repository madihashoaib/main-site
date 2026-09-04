import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrderConfirmed from "@/components/OrderConfirmed";

export const metadata = {
  title: "Order confirmed — adorn N adobe",
  description: "Thank you for your order."
};

export default function OrderConfirmedPage() {
  return (
    <main>
      <Header />
      <OrderConfirmed />
      <Footer />
    </main>
  );
}
