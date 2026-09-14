import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/65 pt-16 pb-8 px-6 md:px-12">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-10 max-w-6xl mx-auto mb-12">
        <div>
          <Link href="/" className="font-serif italic text-white text-xl">
            adorn <span className="text-gold-light">N</span> adobe
          </Link>
          <p className="mt-4 text-sm leading-7 text-white/50 max-w-[280px]">
            Jewelry and home living products, designed for quiet elegance and everyday wear.
          </p>
        </div>
        <div>
          <h4 className="text-white text-sm tracking-wider uppercase mb-5">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop?category=Earrings" className="hover:text-gold-light transition">Earrings</Link></li>
            <li><Link href="/shop?category=Ring" className="hover:text-gold-light transition">Rings</Link></li>
            <li><Link href="/shop?category=Bracelet" className="hover:text-gold-light transition">Bracelets</Link></li>
            <li><Link href="/shop?category=Sets" className="hover:text-gold-light transition">Sets</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm tracking-wider uppercase mb-5">Help</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/policies/shipping" className="hover:text-gold-light transition">Shipping</Link></li>
            <li><Link href="/policies/returns" className="hover:text-gold-light transition">Returns</Link></li>
            <li><Link href="/policies/faqs" className="hover:text-gold-light transition">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-gold-light transition">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm tracking-wider uppercase mb-5">Follow</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.instagram.com/adornnadobe?igsh=aWVrZHhveDdzeTRr" target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition">Instagram</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61592853789016" target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-white/40 border-t border-white/10 pt-6 max-w-6xl mx-auto">
        &copy; 2026 adorn N adobe. All rights reserved.
      </div>
    </footer>
  );
}