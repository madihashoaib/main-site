"use client";

import Reveal from "./Reveal";

export default function Newsletter() {
  return (
    <section className="py-24 px-6 text-center bg-ivory-soft">
      <Reveal>
        <h2 className="font-serif italic text-navy-deep text-3xl mb-3">
          Join the inner circle
        </h2>
        <p className="text-gray-500 mb-9">
          New arrivals, styling notes, and early access to limited drops.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex max-w-md mx-auto border-b border-navy-deep"
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="flex-1 bg-transparent px-2 py-3 outline-none text-sm"
          />
          <button
            type="submit"
            className="text-navy-deep font-semibold tracking-wider uppercase text-xs"
          >
            Join
          </button>
        </form>
      </Reveal>
    </section>
  );
}
