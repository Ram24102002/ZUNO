import { Link } from 'react-router-dom'
import ProductImage from './ProductImage'

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl">
        <ProductImage product={product} className="aspect-[4/5] transition duration-500 group-hover:scale-105" />
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
          <p className="text-sm text-ink/60">{product.color}</p>
        </div>
        <p className="font-bold">₹{product.price}</p>
      </div>
    </Link>
  )
}
