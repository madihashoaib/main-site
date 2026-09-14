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
            <p>If an item arrives damaged or defective, you can request a return or exchange within 3 days of delivery.</p>
          </div>
          <div>
            <h3 className="text-navy-deep font-semibold mb-2">Condition</h3>
            <p>The item must be returned unused, in its original packaging, with all tags attached.</p>
          </div>
          <div>
            <h3 className="text-navy-deep font-semibold mb-2">How to request</h3>
            <p>Contact us with your order number and an unboxing photo at <a href="/contact" className="text-gold hover:underline">contact</a> — we'll guide you through the next steps.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}