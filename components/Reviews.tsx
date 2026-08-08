import Reveal from "./Reveal";

const REVIEWS = [
  {
    name: "Ayesha K.",
    initial: "A",
    rating: 5,
    date: "2 weeks ago",
    purchased: "Necklace Set",
    text: "Ordered the butterfly necklace set for my cousin's mehndi and everyone kept asking where it was from. Packaging was so pretty I almost didn't want to open it."
  },
  {
    name: "Hina R.",
    initial: "H",
    rating: 5,
    date: "1 month ago",
    purchased: "Ring",
    text: "Ring bilkul waisi hi aayi jaisi pictures mein thi, quality bhi achi hai. Colour abhi tak fade nahi hua. Sabko recommend karungi!"
  },
  {
    name: "Sana M.",
    initial: "S",
    rating: 4,
    date: "3 weeks ago",
    purchased: "Earrings",
    text: "Earrings are gorgeous, exactly like the photos. Delivery took an extra 2 days but honestly, worth the wait."
  },
  {
    name: "Fatima A.",
    initial: "F",
    rating: 5,
    date: "5 days ago",
    purchased: "Bracelet",
    text: "This is my 3rd order and still zero complaints. Doesn't turn my wrist green like the cheap stuff I used to get from bazaars."
  },
  {
    name: "Zainab H.",
    initial: "Z",
    rating: 5,
    date: "1 week ago",
    purchased: "Earrings Set",
    text: "Bohat pyari earrings hain aur delivery bhi jaldi hogayi thi. Thank you!"
  },
  {
    name: "Mahnoor S.",
    initial: "M",
    rating: 4,
    date: "2 months ago",
    purchased: "Bracelet",
    text: "Good quality for the price. One stone felt a little loose when it arrived — messaged their Insta and they replaced it no questions asked."
  }
];

const AVATAR_TINTS = [
  { bg: "#F1ECE0", text: "#0B1640" },
  { bg: "#0B1640", text: "#E4C862" },
  { bg: "#E4C862", text: "#0B1640" },
  { bg: "#233769", text: "#F1ECE0" },
  { bg: "#C9A227", text: "#FFFFFF" },
  { bg: "#16244F", text: "#E4C862" }
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 shrink-0">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill={i < rating ? "#C9A227" : "none"}
          stroke="#C9A227"
          strokeWidth="1.3"
        >
          <polygon points="12 2 15.09 8.63 22 9.24 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.24 8.91 8.63 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-24 px-6 md:px-12 bg-ivory-soft">
      <Reveal>
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-gold text-xs uppercase tracking-widest">Testimonials</span>
          <h2 className="font-serif italic font-medium text-navy-deep text-4xl mt-3">
            Loved by our customers
          </h2>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {REVIEWS.map((r, i) => {
          const tint = AVATAR_TINTS[i % AVATAR_TINTS.length];
          return (
            <Reveal key={r.name}>
              <div className="bg-white rounded-lg p-6 h-full border border-black/5 shadow-[0_10px_30px_rgba(11,22,64,0.06)] flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                      style={{ backgroundColor: tint.bg, color: tint.text }}
                    >
                      {r.initial}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="text-sm font-medium text-navy-deep truncate">{r.name}</p>
                        <svg width="13" height="13" viewBox="0 0 24 24" className="shrink-0" aria-label="Verified purchase">
                          <circle cx="12" cy="12" r="10" fill="#C9A227" />
                          <path d="M8 12.5l2.5 2.5 5.5-5.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                      </div>
                      <p className="text-[11px] text-navy-deep/40">{r.date}</p>
                    </div>
                  </div>
                  <Stars rating={r.rating} />
                </div>

                <p className="text-sm text-navy-deep/75 leading-6 mb-5 flex-1">{r.text}</p>

                <p className="text-[11px] text-gold uppercase tracking-wide font-medium">
                  Verified purchase &middot; {r.purchased}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
