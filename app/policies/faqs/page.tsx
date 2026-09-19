import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqItem, { Faq } from "@/components/FaqItem";

export const metadata = { title: "FAQs — adorn N adobe", description: "Frequently asked questions about adorn N adobe products and orders." };

const faqs: Faq[] = [
    {
    q: "What is the process of returning a parcel?",
    a: "We guarantee 100% quality-checked pieces — every item is inspected before it's shipped, so damage is extremely rare. But if a piece does arrive damaged in transit, our rider will personally come to your doorstep to collect it and hand you a brand-new replacement, at no extra cost.",
    qUr: "پارسل واپس کرنے کا طریقہ کیا ہے؟",
    aUr: "ہمارے تمام زیورات شپمنٹ سے پہلے مکمل طور پر چیک کیے جاتے ہیں، اس لیے نقصان کا امکان نہ ہونے کے برابر ہوتا ہے۔ لیکن اگر شپنگ کے دوران کوئی پیس ڈیمج ہو جائے، تو ہمارا رائیڈر خود آپ کے گھر آ کر وہ پیس واپس لے گا اور بغیر کسی اضافی چارج کے آپ کو نیا پیس دے جائے گا۔"
  },
    
  {
    q: "What payment methods do you offer?",
    a: "Currently Cash on Delivery is available. Online payment options are coming soon.",
    qUr: "آپ کون سے ادائیگی کے طریقے پیش کرتے ہیں؟",
    aUr: "فی الحال صرف کیش آن ڈیلیوری دستیاب ہے۔ آن لائن ادائیگی کا آپشن جلد شامل کیا جائے گا۔"
  },
  {
    q: "Can I cancel my order?",
    a: "Orders can be cancelled before dispatch — please contact us as soon as possible.",
    qUr: "کیا میں اپنا آرڈر منسوخ کروا سکتا/سکتی ہوں؟",
    aUr: "آرڈر ڈسپیچ ہونے سے پہلے منسوخ کیا جا سکتا ہے، براہ کرم جلد از جلد ہم سے رابطہ کریں۔"
  },
  {
    q: "Can I exchange my order?",
    a: "Yes, if an item arrives damaged or defective, you can request an exchange within 3 days of delivery.",
    qUr: "کیا میں اپنا آرڈر تبدیل کروا سکتا/سکتی ہوں؟",
    aUr: "جی ہاں، اگر پروڈکٹ خراب یا ڈیمج حالت میں پہنچے تو آپ ڈیلیوری کے 3 دن کے اندر اسے تبدیل کروانے کی درخواست دے سکتے ہیں۔"
  },
  {
    q: "Will the jewelry turn black or fade over time?",
    a: "No — we use good quality, anti-tarnish plating, and with basic care (keeping it away from water, perfume, and sweat) it stays shiny for a long time.",
    qUr: "کیا زیورات وقت کے ساتھ کالے یا ماند پڑ جاتے ہیں؟",
    aUr: "نہیں — ہم اچھے معیار کی اینٹی ٹارنش پلیٹنگ استعمال کرتے ہیں، اور تھوڑی سی احتیاط (پانی، پرفیوم اور پسینے سے دور رکھنے) سے یہ کافی عرصے تک چمکدار رہتے ہیں۔"
  },
  {
    q: "What material is used in your jewelry?",
    a: "Our pieces are made using high-quality alloys with gold or silver plating — clearly mentioned in each product description.",
    qUr: "آپ کے زیورات میں کون سا میٹریل استعمال ہوتا ہے؟",
    aUr: "ہمارے زیورات اعلیٰ معیار کی دھات پر گولڈ یا سلور پلیٹنگ سے تیار کیے جاتے ہیں، جس کی تفصیل ہر پراڈکٹ کی تفصیل میں دی گئی ہے۔"
  },
  {
    q: "Is your jewelry waterproof ?",
    a: "Our pieces are water-resistant for everyday wear, but we recommend removing them before swimming or showering.",
    qUr: "کیا زیورات پانی اور پسینے سے محفوظ ہیں؟",
    aUr: "روزمرہ استعمال کے لیے یہ پانی سے کسی حد تک محفوظ ہیں، لیکن نہاتے وقت، تیراکی یا  اتار دینے کی تجویز دی جاتی ہے تاکہ چمک برقرار رہے۔"
  },
  {
    q: "How long does delivery take?",
    a: "Delivery usually takes 3–5 working days within Pakistan, depending on your city.",
    qUr: "ڈیلیوری میں کتنا وقت لگتا ہے؟",
    aUr: "پاکستان کے اندر عام طور پر ڈیلیوری میں 3 سے 5 کام کے دن لگتے ہیں، شہر کے مطابق وقت میں فرق ہو سکتا ہے۔"
  },
  {
    q: "Do you deliver all over Pakistan?",
    a: "Yes, we deliver nationwide through our courier partners.",
    qUr: "کیا آپ پورے پاکستان میں ڈیلیوری کرتے ہیں؟",
    aUr: "جی ہاں، ہم اپنے کورئیر پارٹنرز کے ذریعے پورے پاکستان میں ڈیلیوری فراہم کرتے ہیں۔"
  },
  {
    q: "How should I take care of my jewelry to keep it shiny?",
    a: "Keep it in a dry place, avoid contact with water, perfume, and lotion, and wipe it gently with a soft cloth after wearing.",
    qUr: "زیورات کی چمک برقرار رکھنے کے لیے دیکھ بھال کیسے کریں؟",
    aUr: "زیورات کو خشک جگہ پر رکھیں، پانی، پرفیوم اور لوشن سے دور رکھیں، اور پہننے کے بعد نرم کپڑے سے صاف کر لیں۔"
  }
];

export default function FaqsPage() {
  return (
    <main>
      <Header />
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
        <nav className="text-[14px] text-gray-400 tracking-wide mb-6">
          <a href="/" className="hover:text-navy-deep transition">Home</a>
          <span className="mx-2">/</span>
          <span className="text-navy-deep">FAQs</span>
        </nav>

        <span className="text-gold text-[14px] uppercase tracking-widest">Help</span>
        <h1 className="font-serif italic font-medium text-navy-deep text-[clamp(30px,4vw,44px)] mt-3 mb-10">Frequently Asked Questions</h1>

        <div className="divide-y divide-gray-200">
          {faqs.map((item) => (
            <FaqItem key={item.q} item={item} />
          ))}
        </div>

        <p className="text-gray-400 text-[14px] mt-10">Koi aur sawal ho to humein <a href="/contact" className="text-gold hover:underline">contact</a> karein.</p>
      </div>
      <Footer />
    </main>
  );
}