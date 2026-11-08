import { ClawMark } from './Logo'

// Shows a product photo (the first one unless `src` is given), otherwise a branded placeholder in the tee's colour.
export default function ProductImage({ product, src = product.images?.[0], className = '' }) {
  if (src) {
    return <img src={src} alt={product.name} loading="lazy" className={`w-full bg-neutral-100 object-cover ${className}`} />
  }
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden ${className}`}
      style={{ backgroundColor: product.swatch || '#e5e5e5' }}
    >
      <ClawMark className="absolute -right-6 -bottom-6 h-40 w-40 text-brand/40" />
      <span className="display text-4xl text-white/30">ZUNO</span>
    </div>
  )
}
