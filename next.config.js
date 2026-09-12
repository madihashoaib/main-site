/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" }
    ]
  },
  experimental: {
    // Next.js normally caches recently-visited pages in the browser for a
    // short time (the "Client Router Cache") so revisiting them feels
    // instant. The problem: it doesn't treat /shop?category=Earrings and
    // /shop?category=Ring as different enough — so navigating between
    // categories can show a stale, previously-cached version instead of
    // re-rendering with the new category. Setting both to 0 tells
    // Next.js: never reuse a cached page here, always render fresh.
    staleTimes: {
      dynamic: 0,
      static: 0
    }
  }
};

module.exports = nextConfig;