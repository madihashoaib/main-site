import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "FAQs — adorn N adobe", description: "Frequently asked questions about adorn N adobe products and orders." };

const faqs = [
  { q: "Are your products handmade?", a: "Yes, most of our pieces are carefully checked and finished by hand." },
  { q: "What payment methods do you offer?", a: "Currently Cash on Delivery is available. Online payment options are coming soon." },
  { q: "Can I cancel my order?", a: "Orders can be cancelled before dispatch — please contact us as soon as possible." },
  { q: "Can I exchange my order?", a: "Yes, if an item arrives damaged or defective, you can request an exchange within 3 days of delivery." }
];

export default function FaqsPage() {
  return (
    <main>
      <Header />
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
        <nav className="text-xs text-gray-400 tracking-wide mb-6">
          <a href="/" className="hover:text-navy-deep transition">Home</a>
          <span className="mx-2">/</span>
          <span className="text-navy-deep">FAQs</span>
        </nav>

        <span className="text-gold text-xs uppercase tracking-widest">Help</span>
        <h1 className="font-serif italic font-medium text-navy-deep text-[clamp(30px,4vw,44px)] mt-3 mb-10">Frequently Asked Questions</h1>

        <div className="divide-y divide-gray-200">
          {faqs.map((item) => (
            <div key={item.q} className="py-6">
              <h3 className="text-navy-deep font-semibold mb-2">{item.q}</h3>
              <p className="text-sm leading-7 text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-xs mt-10">Koi aur sawal ho to humein <a href="/contact" className="text-gold hover:underline">contact</a> karein.</p>
      </div>
      <Footer />
    </main>
  );
}