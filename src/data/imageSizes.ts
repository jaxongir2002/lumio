import SIZES from './imageSizes.json';

/**
 * Rasmning haqiqiy width/height'i (scripts/image-sizes.mjs build oldidan yaratadi).
 * <img> ga yoyiladi — brauzer rasm yuklanmasdan oldin to'g'ri joy ajratadi.
 */
export const imageSize = (src: string): { width?: number; height?: number } =>
  (SIZES as Record<string, { width: number; height: number }>)[src] ?? {};
