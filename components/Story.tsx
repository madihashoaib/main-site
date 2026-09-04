import Reveal from "./Reveal";

export default function Story() {
  return (
    <section className="py-28 px-6 md:px-12 bg-navy-deep text-white" id="story">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
        <Reveal>
          <div className="h-[420px] rounded-md flex items-center justify-center border border-white/10 bg-gradient-to-br from-navy-light to-navy-mid">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="90" stroke="#4A5C8C" strokeWidth="1.5" />
              <circle cx="70" cy="120" r="30" stroke="#C9A227" strokeWidth="1.5" />
            </svg>
          </div>
        </Reveal>
        <Reveal>
          <span className="text-gold-light text-xs uppercase tracking-widest">Our Story</span>
          <h2 className="font-serif italic font-medium text-4xl my-5 leading-tight">
            Made with family,
            <br />
            <span className="text-gold-light">worn with pride</span>
          </h2>
          <p className="text-white/70 leading-8 text-sm mb-4">
            adorn N adobe began as a small family project — a shared love for
            beautiful things that don&apos;t shout, but stay with you. Every
            piece is chosen with the same care we&apos;d want for our own home.
          </p>
          <p className="text-white/70 leading-8 text-sm mb-6">
            From delicate gold-toned jewelry to home living accents, our
            collection is built around one idea: quiet luxury that
            photographs as well as it feels.
          </p>
          <a
            href="#collection"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-gold-light to-gold text-navy-deep font-semibold text-sm tracking-wider uppercase px-9 py-4 rounded-sm hover:-translate-y-1 transition"
          >
            Explore Pieces
          </a>
        </Reveal>
      </div>
    </section>
  );
}
