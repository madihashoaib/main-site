import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Shipping — adorn N adobe", description: "Shipping timelines and charges for adorn N adobe orders." };

export default function ShippingPage() {
  return (
    <main>
      <Header />
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
        <nav className="text-xs text-gray-400 tracking-wide mb-6">
          <a href="/" className="hover:text-navy-deep transition">Home</a>
          <span className="mx-2">/</span>
          <span className="text-navy-deep">Shipping</span>
        </nav>

        <span className="text-gold text-xs uppercase tracking-widest">Help</span>
        <h1 className="font-serif italic font-medium text-navy-deep text-[clamp(30px,4vw,44px)] mt-3 mb-10">Shipping</h1>

        <div className="space-y-8 text-sm leading-7 text-gray-600">
          <div>
            <h3 className="text-navy-deep font-semibold mb-2">Processing time</h3>
            <p>Har order 1–2 business days ke andar pack karke dispatch kiya jata hai.</p>
          </div>
          <div>
            <h3 className="text-navy-deep font-semibold mb-2">Delivery time</h3>
            <p>Pakistan bhar mein courier ke zariye 2–5 business days mein delivery ho jati hai, city ke hisaab se.</p>
          </div>
          <div>
            <h3 className="text-navy-deep font-semibold mb-2">Order tracking</h3>
            <p>Dispatch hone ke baad aapko tracking details WhatsApp ya email par bhej di jati hain.</p>
          </div>
        </div>

        <p className="text-gray-400 text-xs mt-10">Kisi bhi shipping se related sawal ke liye humein <a href="/contact" className="text-gold hover:underline">contact</a> karein.</p>
      </div>
      <Footer />
    </main>
  );
}