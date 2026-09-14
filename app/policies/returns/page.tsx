import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Returns — adorn N adobe", description: "Return and exchange policy for adorn N adobe orders." };

export default function ReturnsPage() {
  return (
    <main>
      <Header />
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
        <nav className="text-xs text-gray-400 tracking-wide mb-6">
          <a href="/" className="hover:text-navy-deep transition">Home</a>
          <span className="mx-2">/</span>
          <span className="text-navy-deep">Returns</span>
        </nav>

        <span className="text-gold text-xs uppercase tracking-widest">Help</span>
        <h1 className="font-serif italic font-medium text-navy-deep text-[clamp(30px,4vw,44px)] mt-3 mb-10">Returns &amp; Exchanges</h1>

        <div className="space-y-8 text-sm leading-7 text-gray-600">
          <div>
            <h3 className="text-navy-deep font-semibold mb-2">Return window</h3>
            <p>Delivery ke 3 din ke andar, agar item damaged ya defective pohncha ho to return/exchange request kar sakti hain.</p>
          </div>
          <div>
            <h3 className="text-navy-deep font-semibold mb-2">Condition</h3>
            <p>Item apni original packaging mein, bila istemal, tags ke saath wapas bhejni hogi.</p>
          </div>
          <div>
            <h3 className="text-navy-deep font-semibold mb-2">How to request</h3>
            <p>Order number aur unboxing ki tasveer ke saath humein <a href="/contact" className="text-gold hover:underline">contact</a> karein — hum aage ka process guide kar denge.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}