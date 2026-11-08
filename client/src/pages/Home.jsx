import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { ClawMark } from '../components/Logo'

export default function Home() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/products')
      .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
      .then(setProducts)
      .catch(() => setError('Could not load products. Is the server running?'))
  }, [])

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-light to-white">
        <ClawMark className="pointer-events-none absolute -top-10 -left-16 h-72 w-72 text-brand/15" />
        <ClawMark className="pointer-events-none absolute -right-10 -bottom-16 h-80 w-80 text-brand/20" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:py-32">
          <span className="inline-block rounded-full bg-brand px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
            Drop shoulder · Oversized fit
          </span>
          <h1 className="display mt-6 text-6xl text-ink sm:text-8xl">
            Wear the <span className="text-brand">Mindset.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-ink/70">
            Oversized T-shirts made for people who move with purpose. Limited first drop.
          </p>
          <a
            href="#shop"
            className="mt-10 inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
          >
            Shop the drop
          </a>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
        <h2 className="display mb-10 text-4xl">
          The <span className="text-brand">Collection</span>
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </>
  )
}
