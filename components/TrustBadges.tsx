const BADGES = [
  {
    label: "Cash on Delivery",
    sub: "All over Pakistan",
    icon: (
      <path d="M3 8.5A1.5 1.5 0 014.5 7h15A1.5 1.5 0 0121 8.5v7a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 15.5v-7z" />
    )
  },
  {
    label: "7-Day Easy Exchange",
    sub: "No questions asked",
    icon: (
      <>
        <path d="M4 12a8 8 0 0113.66-5.66L20 8" />
        <path d="M20 12a8 8 0 01-13.66 5.66L4 16" />
        <path d="M17 4v4h-4" />
        <path d="M7 20v-4h4" />
      </>
    )
  },
  {
    label: "Secure Checkout",
    sub: "Your data stays safe",
    icon: (
      <>
        <rect x="5" y="10.5" width="14" height="9" rx="1.5" />
        <path d="M8 10.5V7.5a4 4 0 018 0v3" />
      </>
    )
  },
  {
    label: "Quality Checked",
    sub: "Every piece inspected",
    icon: (
      <>
        <path d="M12 3l7.5 3.5v5c0 4.5-3.2 7.8-7.5 9.5-4.3-1.7-7.5-5-7.5-9.5v-5L12 3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    )
  }
];

export default function TrustBadges() {
  return (
    <section className="bg-ivory border-y border-navy-deep/10 px-6 md:px-12 pt-5 pb-8 md:py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
        {BADGES.map((b) => (
          <div key={b.label} className="flex items-center gap-3 justify-center md:justify-start">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C9A227"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              {b.icon}
            </svg>
            <div className="leading-tight">
              <p className="text-navy-deep text-xs font-semibold tracking-wide">{b.label}</p>
              <p className="text-navy-deep/50 text-[11px]">{b.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}