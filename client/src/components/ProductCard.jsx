import { Link } from 'react-router-dom'
import ProductImage from './ProductImage'

export default function ProductCard({ product }) {
  const hoverImage = product.images?.[1]

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl">
        <ProductImage product={product} className="aspect-[4/5] transition duration-500 group-hover:scale-105" />
        {/* Second photo fades in on hover */}
        {hoverImage && (
          <ProductImage
            product={product}
            src={hoverImage}
            className="absolute inset-0 aspect-[4/5] opacity-0 transition duration-500 group-hover:opacity-100"
          />
        )}
        {product.tag && (
          <span className="absolute top-3 left-3 rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase text-white">
            {product.tag}
          </span>
        )}
        {product.soldOut && (
          <span className="absolute top-3 right-3 rounded-full bg-ink px-3 py-1 text-xs font-semibold uppercase text-white">
            Sold out
          </span>
        )}
      </div>
      <div className="mt-3 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold group-hover:text-brand">{product.name}</h3>
          <p className="text-sm text-ink/60">
            {product.colors.length > 1 ? `${product.colors.length} colours` : product.colors[0]}
          </p>
        </div>
        <p className="font-bold">₹{product.price}</p>
      </div>
    </Link>
  )
}
