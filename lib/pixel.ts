"use client";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

/** Fires a Meta Pixel standard event. Safe to call anywhere client-side —
 *  does nothing if the base pixel script hasn't loaded yet. */
export function fbEvent(name: string, data: Record<string, any> = {}) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", name, data);
  }
}