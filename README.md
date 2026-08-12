#  — E-commerce Website

Next.js 14 (App Router) + Tailwind CSS project. Navy-gold brand theme, 3D tilt product cards.

## Folder structure

```
adornnadobe/
├── app/
│   ├── layout.tsx        -> fonts (Playfair Display + Jost) aur metadata
│   ├── page.tsx          -> homepage, sab sections yahan assemble hotay hain
│   └── globals.css       -> tailwind + reveal animation styles
├── components/
│   ├── Header.tsx        -> sticky navbar, scroll par background change
│   ├── Hero.tsx           -> navy gradient hero section
│   ├── ProductCard.tsx    -> 3D tilt hover wala product card (mouse move par jhukta hai)
│   ├── ProductGrid.tsx    -> product cards ka grid
│   ├── productData.ts     -> abhi ke liye dummy products (yahan se Firebase/Supabase connect karenge)
│   ├── CategoryStrip.tsx  -> category tiles (Necklaces, Earrings, etc.)
│   ├── Story.tsx          -> brand story section
│   ├── Newsletter.tsx     -> email signup form
│   ├── Footer.tsx          -> footer
│   └── Reveal.tsx          -> scroll-in animation wrapper
├── tailwind.config.js      -> brand colors (navy, gold, ivory) yahan defined hain
├── package.json
└── README.md
```

## Setup (apne computer par)

1. Node.js install hona chahiye (v18+)
2. Terminal mein is folder ke andar jao:
   ```
   npm install
   ```
3. Development server chalao:
   ```
   npm run dev
   ```
4. Browser mein kholo: http://localhost:3000

## Deploy

- **Vercel** (recommended, sabse aasan): GitHub par push karo, phir vercel.com par "Import Project" se connect kar do — auto build ho jayega.
- **Netlify**: same tarah, GitHub connect karke build command `npm run build` aur publish folder `.next` set karo.

## Aage kya karna hai (roadmap)

1. Product listing page (`/shop`) — filters ke sath
2. Product detail page (`/product/[id]`) — 3D/360 view, add to cart
3. Cart + checkout
4. Firebase/Supabase se real products aur orders connect karna
5. Admin dashboard (product upload)
6. Live deploy

Har step alag se banayenge — jab ye theek lage tou agla step bolna.
