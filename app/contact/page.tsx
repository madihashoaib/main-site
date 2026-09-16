import Image from "next/image";
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
            <div className="h-16 flex items-center justify-center mb-4">
              <Image
                src="/icons/instagram.png"
                alt="Instagram"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
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
            <div className="h-16 flex items-center justify-center mb-4">
              <Image
                src="/icons/facebook.png"
                alt="Facebook"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
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
            <div className="h-16 flex items-center justify-center mb-4">
              <Image
                src="/icons/gmail.png"
                alt="Email"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
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
