import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductImage from '../components/ProductImage'
import { INSTAGRAM_DM_URL } from '../config'

export default function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const [size, setSize] = useState(null)

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then(setProduct)
      .catch(() => setNotFound(true))
  }, [id])

  if (notFound) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-24 text-center">
        <p className="text-ink/60">Product not found.</p>
        <Link to="/" className="mt-4 inline-block font-semibold text-brand">Back to shop</Link>
      </div>
    )
  }
  if (!product) return <p className="py-24 text-center text-ink/50">Loading…</p>

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2">
      <ProductImage product={product} className="aspect-[4/5] rounded-2xl" />
      <div className="md:py-6">
        <Link to="/" className="text-sm font-medium text-ink/60 hover:text-brand">← Back to shop</Link>
        <h1 className="display mt-4 text-4xl">{product.name}</h1>
        <p className="mt-1 text-ink/60">{product.color}</p>
        <p className="mt-4 text-3xl font-bold text-brand">₹{product.price}</p>
        <p className="mt-6 leading-relaxed text-ink/80">{product.description}</p>

        <div className="mt-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider">Size</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`h-11 w-14 rounded-lg border-2 text-sm font-semibold transition ${
                  size === s ? 'border-brand bg-brand text-white' : 'border-neutral-200 hover:border-brand'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {product.soldOut ? (
          <p className="mt-8 rounded-full bg-neutral-100 py-4 text-center text-sm font-semibold uppercase text-ink/60">
            Sold out
          </p>
        ) : (
          <a
            href={INSTAGRAM_DM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 block rounded-full bg-brand py-4 text-center text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
          >
            Order on Instagram{size ? ` · Size ${size}` : ''}
          </a>
        )}
        <p className="mt-3 text-center text-xs text-ink/50">DM us the product name and size to place your order.</p>
      </div>
    </div>
  )
}
