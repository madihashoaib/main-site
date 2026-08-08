import type { Product } from "./productData";

/**
 * The line-art jewel visual used on cards and the product page.
 * Shared so the card and the detail view stay visually identical.
 */
export default function JewelIcon({
  shape,
  size = 130
}: {
  shape: Product["shape"];
  size?: number;
}) {
  if (shape === "drop") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <polygon
          points="50,10 90,40 74,90 26,90 10,40"
          fill="none"
          stroke="#C9A227"
          strokeWidth="2"
        />
        <polygon points="50,10 90,40 50,55 10,40" fill="#E4C862" opacity="0.5" />
      </svg>
    );
  }
  if (shape === "circle") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="34" fill="none" stroke="#C9A227" strokeWidth="2" />
        <circle cx="50" cy="50" r="14" fill="#E4C862" opacity="0.6" />
      </svg>
    );
  }
  if (shape === "arch") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <path d="M20 60 Q50 10 80 60" fill="none" stroke="#C9A227" strokeWidth="2" />
        <circle cx="50" cy="60" r="8" fill="#E4C862" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect x="30" y="20" width="40" height="60" rx="6" fill="none" stroke="#C9A227" strokeWidth="2" />
      <line x1="30" y1="50" x2="70" y2="50" stroke="#E4C862" strokeWidth="2" />
    </svg>
  );
}
