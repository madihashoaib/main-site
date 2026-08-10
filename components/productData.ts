export type Category = "Necklace" | "Earrings" | "Ring" | "Bracelet" | "Sets";

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: string;
  priceValue: number;
  badge?: string;
  shape: "drop" | "circle" | "arch" | "band";
  order: number;
  /** Photo(s) for this product. First one is used as the main/cover photo
   *  everywhere (shop grid, cart, etc). If you add more than one, the
   *  product page shows a small gallery so customers can click through them.
   *  Paths point into the public/images/products folder, e.g.:
   *  images: ["/images/products/meher-1.jpg", "/images/products/meher-2.jpg"]
   *  Leave this out entirely to keep the default placeholder icon. */
  images?: string[];
  /** Optional hand-written copy; if omitted, category defaults are used. */
  description?: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Antique Gold Floral Vine Dangle Earrings With Pink Pavé Blossom",
    category: "Earrings",
    price: "Rs. 1500",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 1500,                // TODO: sirf number, e.g. 1850
    shape: "drop",
    order: 18,
    images: [
      "/images/products/Antique-Gold-Floral-Vine-Dangle-Earrings-With-Pink-Pavé-Blossom-.jpeg",
      "/images/products/Antique-Gold-Floral-Vine-Dangle-Earrings-With-Pink-Pavé-Blossom.jpeg",
      "/images/products/Antique-Gold-Floral-Vine-Dangle-Earrings-With-Pink-Pavé-Blossom-2.jpeg"
    ],
    description: "Antique gold-tone dangle earrings with a delicate floral vine and soft pink pavé blossoms. Vintage-inspired and lightweight enough for all-day wear, they add a romantic touch to festive or mehndi looks."
  },
  {
    id: "2",
    name: "Antique Gold Kundan Floral Vine Earrings And Tikka Set",
    category: "Earrings",
    price: "Rs. 1850",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 1850,                // TODO: sirf number, e.g. 1850
    shape: "drop",
    order: 17,
    images: [
      "/images/products/Antique-Gold-Kundan-Floral-Vine-Earrings-And-Tikka-Set.jpeg",
      "/images/products/Antique-Gold-Kundan-Floral-Vine-Earrings-And-Tikka-Set-2.jpeg",
      "/images/products/Antique-Gold-Kundan-Floral-Vine-Earrings-And-Tikka-Set-3.jpeg",
      "/images/products/Antique-Gold-Kundan-Floral-Vine-Earrings-And-Tikka-Set-4.jpeg"
    ],
    description: "A statement kundan set pairing floral vine earrings with a matching tikka, finished in warm antique gold. Perfect for bridal functions, mehndis, and any occasion that calls for traditional elegance."
  },
  {
    id: "3",
    name: "Crown Motif Oval Halo Zircon Tennis Bracelet",
    category: "Bracelet",
    price: "Rs. 1450",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 1450,                // TODO: sirf number, e.g. 1850
    shape: "circle",
    order: 16,
    images: [
      "/images/products/Crown-Motif-Oval-Halo-Zircon-Tennis-Bracelet.jpeg",
      "/images/products/Crown-Motif-Oval-Halo-Zircon-Tennis-Bracelet-2.jpeg",
      "/images/products/Crown-Motif-Oval-Halo-Zircon-Tennis-Bracelet-3.jpeg"
    ],
    description: "A sparkling tennis bracelet with an oval halo design and a delicate crown motif clasp. The continuous line of zircon stones catches the light beautifully, making it a versatile everyday-to-evening piece."
  },
  {
    id: "4",
    name: "Floral Green Ring",
    category: "Ring",
    price: "Rs. 1350",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 1350,                // TODO: sirf number, e.g. 1850
    shape: "band",
    order: 15,
    images: [
      "/images/products/floral-green-ring.jpeg",
      "/images/products/floral-green-ring-2.jpeg",
      "/images/products/floral-green-ring-3.jpeg"
    ],
    description: "A statement cocktail ring featuring an intricate floral cluster in green stones. Bold enough to be the centrepiece of any outfit, yet delicate in its detailed craftsmanship."
  },
  {
    id: "5",
    name: "Gold Pavé Floral Teardrop Dangle Earrings",
    category: "Earrings",
    price: "Rs. 1450",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 1450,                // TODO: sirf number, e.g. 1850
    shape: "drop",
    order: 14,
    images: [
      "/images/products/Gold-Pavé-Floral-Teardrop-Dangle-Earrings.jpeg"
    ],
    description: "Graceful teardrop earrings finished in gold with a pavé floral design. Their gentle movement and soft shine make them an easy pick for both everyday elegance and evening events."
  },
  {
    id: "6",
    name: "Gold Tone Geometric Rectangular Bar Link Bracelet",
    category: "Bracelet",
    price: "Rs. 1400",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 1400,                // TODO: sirf number, e.g. 1850
    shape: "circle",
    order: 13,
    images: [
      "/images/products/Gold-Tone-Geometric-Rectangular-Bar-Link-Bracelet-1.jpeg",
      "/images/products/Gold-Tone-Geometric-Rectangular-Bar-Link-Bracelet-2.jpeg",
      "/images/products/Gold-Tone-Geometric-Rectangular-Bar-Link-Bracelet-3.jpeg"
    ],
    description: "A sleek, modern bracelet made of linked rectangular bars in a warm gold tone. Its clean geometric lines make it easy to stack or wear alone for a polished, contemporary look."
  },
  {
    id: "7",
    name: "Golden Tone Geometric Rhombus Floral Dangle Earrings",
    category: "Earrings",
    price: "Rs. 1150",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 1150,                // TODO: sirf number, e.g. 1850
    shape: "drop",
    order: 12,
    images: [
      "/images/products/Golden-Tone-Geometric-Rhombus-Floral-Dangle-Earrings.jpeg"
    ],
    description: "Contemporary dangle earrings combining geometric rhombus shapes with delicate floral detailing in a rich gold tone. A striking blend of modern lines and classic femininity."
  },
  {
    id: "8",
    name: "Multicolor Zircon Cluster Cocktail Ring",
    category: "Ring",
    price: "Rs. 1350",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 1350,                // TODO: sirf number, e.g. 1850
    shape: "band",
    order: 11,
    images: [
      "/images/products/Multicolor-Zircon-Cluster-Cocktail-Ring.jpeg",
      "/images/products/Multicolor-Zircon-Cluster-Cocktail-Ring-2.jpeg"
    ],
    description: "An eye-catching cocktail ring featuring a cluster of multicolor zircon stones. Playful yet polished, it's designed to stand out at festive gatherings and celebrations."
  },
  {
    id: "9",
    name: "Pink And Champagne Floral Cluster Cocktail Ring",
    category: "Ring",
    price: "Rs. 1000",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 1000,                // TODO: sirf number, e.g. 1850
    shape: "band",
    order: 10,
    images: [
      "/images/products/Pink-&-Champagne-Floral-Cluster-Cocktail-Ring.jpeg",
      "/images/products/Pink-&-Champagne-Floral-Cluster-Cocktail-Ring-1.jpeg"
    ],
    description: "A romantic cocktail ring with a floral cluster of soft pink and champagne-toned stones. Its vintage charm makes it a lovely addition to both traditional and contemporary outfits."
  },
  {
    id: "10",
    name: "Rose Gold Champagne Zircon Solitaire With Pavé Cluster Ring",
    category: "Ring",
    price: "Rs. 1500",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 1500,                // TODO: sirf number, e.g. 1850
    shape: "band",
    order: 9,
    images: [
      "/images/products/Rose-Gold-Champagne-Zircon-Solitaire-With-Pavé-Cluster-Ring.jpeg",
      "/images/products/Rose-Gold-Champagne-Zircon-Solitaire-With-Pavé-Cluster-Ring-2.jpeg",
      "/images/products/Rose-Gold-Champagne-Zircon-Solitaire-With-Pavé-Cluster-Ring-3.jpeg"
    ],
    description: "An elegant solitaire ring in rose gold, featuring a champagne zircon centre stone surrounded by a delicate pavé cluster. Timeless and refined, ideal for engagements or special occasions."
  },
  {
    id: "11",
    name: "Rose Gold Red Zircon Solitaire With Pavé Cluster Ring",
    category: "Ring",
    price: "Rs. 1500",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 1500,                // TODO: sirf number, e.g. 1850
    shape: "band",
    order: 8,
    images: [
      "/images/products/Rose-Gold-Red-Zircon-Solitaire-With-Pavé-Cluster-Ring.jpeg",
      "/images/products/Rose-Gold-Red-Zircon-Solitaire-With-Pavé-Cluster-Ring-2.jpeg",
      "/images/products/Rose-Gold-Red-Zircon-Solitaire-With-Pavé-Cluster-Ring-3.jpeg"
    ],
    description: "A striking solitaire ring in rose gold with a vivid red zircon centre stone, framed by a sparkling pavé cluster. A bold, romantic piece that makes a lasting impression."
  },
  {
    id: "12",
    name: "Silver Floral Pavé Zircon Drop Earrings With Purple Stone Cluster",
    category: "Earrings",
    price: "Rs. 2250",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 2250,                // TODO: sirf number, e.g. 1850
    shape: "drop",
    order: 7,
    images: [
      "/images/products/Silver-Floral-Pavé-Zircon-Drop-Earrings-With-Purple-Stone-Cluster.jpeg"
    ],
    description: "Silver-tone drop earrings featuring pavé zircon detailing and a soft purple stone cluster. Their floral design brings a feminine, delicate sparkle to any outfit."
  },
  {
    id: "13",
    name: "Silver Green Emerald Halo Stud Earrings And Ring Set",
    category: "Earrings",
    price: "Rs. 1600",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 1600,                // TODO: sirf number, e.g. 1850
    shape: "circle",
    order: 6,
    images: [
      "/images/products/Silver-Green-Emerald-Halo-Stud-Earrings-And-Ring-Set.jpeg",
      "/images/products/Silver-Green-Emerald-Halo-Stud-Earrings-And-Ring-Set-2.jpeg"
    ],
    description: "A matching set of stud earrings and a ring, each featuring an emerald-green stone framed by a sparkling silver halo. Coordinated elegance for anyone who loves a complete look."
  },
  {
    id: "14",
    name: "Silver Pavé Floral Teardrop Dangle Earrings",
    category: "Earrings",
    price: "Rs. 1450",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 1450,                // TODO: sirf number, e.g. 1850
    shape: "drop",
    order: 5,
    images: [
      "/images/products/Silver-Pavé-Floral-Teardrop-Dangle-Earrings.jpeg"
    ],
    description: "Delicate teardrop earrings in silver tone with pavé floral detailing. Lightweight and graceful, they add a subtle shimmer to everyday and evening wear alike."
  },
  {
    id: "15",
    name: "Silver Solitaire Ring With Baguette Cut Zircon Band",
    category: "Ring",
    price: "Rs. 1150",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 1150,                // TODO: sirf number, e.g. 1850
    shape: "band",
    order: 4,
    images: [
      "/images/products/Silver-Solitaire-Ring-With-Baguette-Cut-Zircon-Band.jpeg"
    ],
    description: "A refined silver-tone solitaire ring with a band lined in baguette-cut zircon stones. Clean, classic, and versatile enough to wear on its own or stacked with other pieces."
  },
  {
    id: "16",
    name: "Silver Tone Geometric Rhombus Floral Dangle Earrings",
    category: "Earrings",
    price: "Rs. 1150",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 1150,                // TODO: sirf number, e.g. 1850
    shape: "drop",
    order: 3,
    images: [
      "/images/products/Silver-Tone-Geometric-Rhombus-Floral-Dangle-Earrings.jpeg"
    ],
    description: "Modern dangle earrings pairing geometric rhombus shapes with soft floral detailing in silver tone. A striking balance of contemporary structure and feminine grace."
  },
  {
    id: "17",
    name: "Two Tone Zirconia Floral Earrings With Champagne Accents",
    category: "Earrings",
    price: "Rs. 2250",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 2250,                // TODO: sirf number, e.g. 1850
    shape: "drop",
    order: 2,
    images: [
      "/images/products/Two-tone-Zirconia-Floral-Earrings-With-Champagne-Accents.jpeg",
      "/images/products/Two-tone-Zirconia-Floral-Earrings-With-Champagne-Accents-2.jpeg"
    ],
    description: "Two-tone floral earrings featuring sparkling zirconia with warm champagne accents. Their layered design adds dimension and shine, perfect for festive occasions."
  },
  {
    id: "18",
    name: "White Floral Zircon Ring",
    category: "Ring",
    price: "Rs. 1350",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 1350,                // TODO: sirf number, e.g. 1850
    shape: "band",
    order: 1,
    images: [
      "/images/products/white-floral-zircon-ring-1.jpeg",
      "/images/products/white-floral-zircon-ring-2.jpeg",
      "/images/products/white-floral-zircon-ring-3.jpeg"
    ],
    description: "An elegant floral cluster ring set with sparkling white zircon stones. Classic and versatile, it pairs beautifully with both everyday and special-occasion outfits."
  },

  // ===================================================================
  // ↓↓↓ NAYE PRODUCTS — Maryam ki taraf se add kiye gaye (jewelry_pics) ↓↓↓
  // Kahin "⚠️ CONFIRM" likha ho, wahan Explorer mein naam kat gaya tha —
  // apne jewelry_pics folder mein jaake exact filename check kar lein.
  // ===================================================================
  {
    id: "19",
    name: "Gold Tone Pavé Lotus Flower Pendant, Earrings And Ring Set",
    category: "Sets",
    price: "Rs. 3,000",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 3000,                // TODO: sirf number, e.g. 1850
    shape: "arch",
    order: 19,
    images: [
      "/images/products/Gold-Tone-Pave-Lotus-Flower-Pendant-Earrings-And-Ring-Set.jpeg",
      "/images/products/Gold-Tone-Pave-Lotus-Flower-Pendant-Earrings-And-Ring-Set-1.jpeg",
      "/images/products/Gold-Tone-Pave-Lotus-Flower-Pendant-Earrings-And-Ring-Set-2.jpeg"
    ],
    description: "A coordinated lotus flower set in warm gold tone — pendant, earrings and ring finished with delicate pavé detailing. A polished, complete look for festive occasions without matching pieces separately."
  },
  {
    id: "20",
    name: "Silver Tone Black Square Zircon Halo Drop Necklace And Earrings Set",
    category: "Sets",
    price: "Rs. 3,800",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 3800,                // TODO: sirf number, e.g. 1850
    shape: "arch",
    order: 20,
    images: [
      "/images/products/Silver-Tone-Black-Square-Zircon-Halo-Drop-Necklace-And-Earrings-Set.jpeg", // ⚠️ CONFIRM
      "/images/products/Silver-Tone-Black-Square-Zircon-Halo-Drop-Necklace-And-Earrings-Set-1.jpeg" // ⚠️ CONFIRM
    ],
    description: "A striking necklace and earring set featuring square-cut black zircon stones framed in a sparkling halo. Bold contrast and clean lines make this a statement pick for evening wear."
  },
  {
    id: "21",
    name: "Silver Tone Mint Green Zircon Heart Motif Necklace And Earrings Set",
    category: "Sets",
    price: "Rs. 4,000",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 4000,                // TODO: sirf number, e.g. 1850
    shape: "arch",
    order: 21,
    images: [
      "/images/products/Silver-Tone-Mint-Green-Zircon-Heart-Motif-Necklace-And-Earrings-Set.jpeg", // ⚠️ CONFIRM
      "/images/products/Silver-Tone-Mint-Green-Zircon-Heart-Motif-Necklace-And-Earrings-Set-1.jpeg", // ⚠️ CONFIRM
      "/images/products/Silver-Tone-Mint-Green-Zircon-Heart-Motif-Necklace-And-Earrings-Set-2.jpeg" // ⚠️ CONFIRM
    ],
    description: "A soft, romantic set with heart-shaped mint green zircon pendants on a matching necklace and earrings. Delicate colour and gentle sparkle make it a lovely everyday-to-evening pairing."
  },
  {
    id: "22",
    name: "Silver Tone Pavé Lotus Flower Pendant, Earrings And Ring Set",
    category: "Sets",
    price: "Rs. 3,000",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 3000,                // TODO: sirf number, e.g. 1850
    shape: "arch",
    order: 22,
    images: [
      "/images/products/Silver-Tone-Pave-Lotus-Flower-Pendant-Earrings-And-Ring-Set.jpeg",
      "/images/products/Silver-Tone-Pave-Lotus-Flower-Pendant-Earrings-And-Ring-Set-1.jpeg"
    ],
    description: "The silver-tone version of our lotus flower set — pendant, earrings and ring in pavé detailing. Cool-toned and versatile, it complements both traditional and modern outfits."
  },
  {
    id: "23",
    name: "Silver Tone Pavé Zircon Floral Cluster Necklace And Earrings Set",
    category: "Sets",
    price: "Rs. 3,000",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 3000,                // TODO: sirf number, e.g. 1850
    shape: "arch",
    order: 23,
    images: [
      "/images/products/Silver-Tone-Pave-Zircon-Floral-Cluster-Necklace-And-Earrings-Set.jpeg",
      "/images/products/Silver-Tone-Pave-Zircon-Floral-Cluster-Necklace-And-Earrings-Set-1.jpeg", // ⚠️ CONFIRM
      "/images/products/Silver-Tone-Pave-Zircon-Floral-Cluster-Necklace-And-Earrings-Set-2.jpeg" // ⚠️ CONFIRM
    ],
    description: "A matching necklace and earring set with clusters of pavé zircon flowers in silver tone. Full of texture and sparkle, made for festive occasions and celebrations."
  },
  {
    id: "24",
    name: "Silver Tone Pavé Zircon Teardrop Pendant And Earrings Set",
    category: "Sets",
    price: "Rs. 2,500",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 2500,                // TODO: sirf number, e.g. 1850
    shape: "arch",
    order: 24,
    images: [
      "/images/products/Silver-Tone-Pave-Zircon-Teardrop-Pendant-And-Earrings-Set.jpeg",
      "/images/products/Silver-Tone-Pave-Zircon-Teardrop-Pendant-And-Earrings-Set-1.jpeg"
    ],
    description: "A graceful teardrop pendant and earring set in silver tone with pavé zircon detailing. Simple, elegant, and easy to wear from day to evening."
  },
  {
    id: "25",
    name: "Silver Tone Red Rectangular Zircon Halo Necklace And Earrings Set",
    category: "Sets",
    price: "Rs. 2,800",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 2800,                // TODO: sirf number, e.g. 1850
    shape: "arch",
    order: 25,
    images: [
      "/images/products/Silver-Tone-Red-Rectangular-Zircon-Halo-Necklace-And-Earrings-Set.jpeg", // ⚠️ CONFIRM
      "/images/products/Silver-Tone-Red-Rectangular-Zircon-Halo-Necklace-And-Earrings-Set-1.jpeg", // ⚠️ CONFIRM
      "/images/products/Silver-Tone-Red-Rectangular-Zircon-Halo-Necklace-And-Earrings-Set-2.jpeg" // ⚠️ CONFIRM
    ],
    description: "A bold necklace and earring set featuring rectangular red zircon stones in a sparkling halo setting. A rich pop of colour designed to stand out at festive gatherings."
  },
  {
    id: "26",
    name: "Silver Tone White Rectangular Zircon Halo Necklace And Earrings Set",
    category: "Sets",
    price: "Rs. 2,800",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 2800,                // TODO: sirf number, e.g. 1850
    shape: "arch",
    order: 26,
    images: [
      "/images/products/Silver-Tone-White-Rectangular-Zircon-Halo-Necklace-And-Earrings-Set.jpeg", // ⚠️ CONFIRM
      "/images/products/Silver-Tone-White-Rectangular-Zircon-Halo-Necklace-And-Earrings-Set-1.jpeg" // ⚠️ CONFIRM
    ],
    description: "A classic necklace and earring set with rectangular white zircon stones in a halo setting. Clean and bright, it pairs beautifully with both pastel and traditional outfits."
  },
  {
    id: "27",
    name: "Silver Tone Zircon Butterfly Wing Necklace And Earrings Set",
    category: "Sets",
    price: "Rs. 2,200",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 2200,                // TODO: sirf number, e.g. 1850
    shape: "arch",
    order: 27,
    images: [
      "/images/products/Silver-Tone-Zircon-Butterfly-Wing-Necklace-And-Earrings-Set.jpeg",
      "/images/products/Silver-Tone-Zircon-Butterfly-Wing-Necklace-And-Earrings-Set-1.jpeg",
      "/images/products/Silver-Tone-Zircon-Butterfly-Wing-Necklace-And-Earrings-Set-2.jpeg",
      "/images/products/Silver-Tone-Zircon-Butterfly-Wing-Necklace-And-Earrings-Set-3.jpeg"
    ],
    description: "A whimsical necklace and earring set shaped like delicate butterfly wings, set with sparkling zircon. Light, playful, and full of movement — a lovely pick for daytime festivities."
  },
  {
    id: "28",
    name: "Silver Tone Zircon Double Floral Cluster Bypass Adjustable Ring",
    category: "Ring",
    price: "Rs. 899",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 899,                // TODO: sirf number, e.g. 1850
    shape: "band",
    order: 28,
    images: [
      "/images/products/Silver-Tone-Zircon-Double-Floral-Cluster-Bypass-Adjustable-Ring.jpeg",
      "/images/products/Silver-Tone-Zircon-Double-Floral-Cluster-Bypass-Adjustable-Ring-1.jpeg" // ⚠️ CONFIRM
    ],
    description: "An adjustable bypass ring with two floral clusters of sparkling zircon stones. The flexible band means one size comfortably fits most, making it an easy, no-fuss favourite."
  },
  {
    id: "29",
    name: "Silver Tone Zircon Floral Cluster Station Bracelet",
    category: "Bracelet",
    price: "Rs. 1,399",              // TODO: apna price yahan likho, e.g. "Rs. 1,850"
    priceValue: 1399,                // TODO: sirf number, e.g. 1850
    shape: "circle",
    order: 29,
    images: [
      "/images/products/Silver-Tone-Zircon-Floral-Cluster-Station-Bracelet.jpeg",
      "/images/products/Silver-Tone-Zircon-Floral-Cluster-Station-Bracelet-1.jpeg"
    ],
    description: "A dainty station bracelet with floral zircon clusters spaced evenly along a delicate chain. Understated sparkle that layers beautifully with other bracelets or watches."
  }
];

export const categories = ["All", "Earrings", "Ring", "Bracelet", "Sets"] as const;

/** Category-level detail content, reused when a product has no custom copy. */
const categoryDetails: Record<
  Category,
  { blurb: string; materials: string[]; care: string; shipping: string }
> = {
  Necklace: {
    blurb:
      "A necklace made to sit close to the heart — light enough for everyday, refined enough for the evenings that matter. Each chain is hand-finished so it lies flat and catches light with every movement.",
    materials: ["Cubic Zirconia stones", "Non-irritating material", "Tarnish-resistant finish", "Adjustable chain"],
    care: "Keep away from water, perfume and lotion. Wipe gently with a soft cloth and store in the pouch provided.",
    shipping: "Ships in 3-7 working days across Pakistan. Free delivery ."
  },
  Earrings: {
    blurb:
      "Earrings designed to frame the face without weighing it down. The posts are skin-friendly and secure, so they feel like nothing from morning meetings to midnight dinners.",
    materials: ["Sterling silver posts","Zirconia stones","Tarnish-resistant", "Feather-light"],
    care: "Remove before sleeping or showering. Store flat, away from moisture, to keep the shine.",
    shipping: "Ships in 3-7 working days across Pakistan. Free delivery ."
  },
  Ring: {
    blurb:
      "A ring built to be stacked or worn alone — clean lines and a comfortable inner band that stays true wear after wear. A quiet statement for the hands that make things happen.",
    materials: [ "Comfort-fit band", "Tarnish-resistant", "Cubic Zirconia Stones"],
    care: "Take off before washing hands often or applying lotion. Polish with a soft cloth to restore shine.",
    shipping: "Ships in 3-7 working days across Pakistan. Free delivery "
  },
  Bracelet: {
    blurb:
      "A bracelet that catches the light with every movement of the wrist — secure clasp, comfortable fit, and enough sparkle to dress up the simplest outfit.",
    materials: [ "Cubic Zirconia Stones", "Tarnish-resistant", "Adjustable length"],
    care: "Remove before washing hands, swimming or applying lotion. Store flat in the pouch provided.",
    shipping: "Ships in 3-7 working days across Pakistan. Free delivery ."
  },
  Sets: {
    blurb:
      "A coordinated set so every piece is chosen to match — no guesswork pairing earrings with a necklace or ring. Put it on together and the look is complete.",
    materials: ["Cubic Zirconia Stones", "Non-irritating material", "Tarnish-resistant finish", "Matched finish across all pieces"],
    care: "Keep away from water, perfume and lotion. Wipe gently with a soft cloth and store in the pouch provided.",
    shipping: "Ships in 3-7 working days across Pakistan. Free delivery "
  }
};

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

/** Up to `limit` other pieces, same category first, then anything else. */
export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const sameCategory = products.filter(
    (p) => p.id !== product.id && p.category === product.category
  );
  const others = products.filter(
    (p) => p.id !== product.id && p.category !== product.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}

/** Full copy for the product page — custom description if set, else category defaults. */
export function getProductCopy(product: Product) {
  const base = categoryDetails[product.category];
  return {
    description: product.description ?? base.blurb,
    materials: base.materials,
    care: base.care,
    shipping: base.shipping
  };
}