import { ClawMark } from './Logo'

// Shows the product photo if one is set, otherwise a branded placeholder in the tee's colour.
export default function ProductImage({ product, className = '' }) {
  if (product.image) {
    return <img src={product.image} alt={product.name} className={`w-full bg-neutral-100 object-cover ${className}`} />
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
