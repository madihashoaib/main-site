"use client";

import { useState } from "react";

export type Faq = {
  q: string;
  a: string;
  qUr: string;
  aUr: string;
};

export default function FaqItem({ item }: { item: Faq }) {
  const [showUrdu, setShowUrdu] = useState(false);

  return (
    <div className="py-6">
      <h3 className="text-navy-deep font-semibold mb-2">{item.q}</h3>
      <p className="text-sm leading-7 text-gray-600">{item.a}</p>

      {showUrdu && (
        <div dir="rtl" className="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-100">
          <h4 className="text-navy-deep font-semibold mb-1 font-sans">{item.qUr}</h4>
          <p className="text-sm leading-8 text-gray-600 font-sans">{item.aUr}</p>
        </div>
      )}

      <button
        onClick={() => setShowUrdu(!showUrdu)}
        className="mt-3 text-xs text-gold hover:underline"
      >
        {showUrdu ? "Hide Urdu translation" : "Translate into Urdu"}
      </button>
    </div>
  );
}