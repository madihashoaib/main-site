import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccountPage from "@/components/AccountPage";

export const metadata = {
  title: "Account — adorn N adobe",
  description: "Sign in to view your orders and details."
};

export default function Account() {
  return (
    <main>
      <Header />
      <AccountPage />
      <Footer />
    </main>
  );
}
