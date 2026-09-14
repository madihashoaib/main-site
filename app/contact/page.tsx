import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact — adorn N adobe",
  description: "Get in touch with adorn N adobe for orders, custom pieces, or support.",
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
        <nav className="text-xs text-gray-400 tracking-wide mb-6">
          <a href="/" className="hover:text-navy-deep transition">Home</a>
          <span className="mx-2">/</span>
          <span className="text-navy-deep">Contact</span>
        </nav>

        <span className="text-gold text-xs uppercase tracking-widest">Get in touch</span>
        <h1 className="font-serif italic font-medium text-navy-deep text-[clamp(30px,4vw,44px)] mt-3 mb-8">
          We'd love to hear from you
        </h1>

        <p className="text-gray-500 text-sm leading-7 mb-10 max-w-xl">
          Have a question about your order? Reach out to us using any of the methods below. We usually reply as quickly as we can.
        </p>

        <div className="grid sm:grid-cols-3 gap-8">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/adornnadobe?igsh=aWVrZHhveDdzeTRr"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-md p-6 hover:border-gold transition block"
          >
            <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
            <h3 className="text-xs uppercase tracking-widest text-gold mb-2">Instagram</h3>
            <span className="text-navy-deep hover:text-gold transition">@adornnadobe</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61592853789016"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-md p-6 hover:border-gold transition block"
          >
            <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
            <h3 className="text-xs uppercase tracking-widest text-gold mb-2">Facebook</h3>
            <span className="text-navy-deep hover:text-gold transition">adorn N adobe</span>
          </a>

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=adornnadobe@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-md p-6 hover:border-gold transition block"
          >
            <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h3 className="text-xs uppercase tracking-widest text-gold mb-2">Email</h3>
            <span className="text-navy-deep hover:text-gold transition break-all">adornnadobe@gmail.com</span>
          </a>
        </div>

        <p className="text-gray-400 text-xs mt-10">
          Order-specific queries ke liye apna order number bhejna na bhoolein taake hum jaldi madad kar sakein.
        </p>
      </div>
      <Footer />
    </main>
  );
}