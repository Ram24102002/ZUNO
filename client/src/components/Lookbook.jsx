import { INSTAGRAM_URL } from '../config'

const PHOTOS = [
  { src: '/images/lookbook/gym.webp', alt: 'Jersey 80 tee at the gym', label: 'In the gym' },
  { src: '/images/lookbook/beach.webp', alt: 'Flame graphic tee at the beach', label: 'By the sea' },
  { src: '/images/lookbook/street.webp', alt: 'Essential polo outdoors', label: 'On the street' },
  { src: '/images/lookbook/city.webp', alt: 'Essential polo in the city', label: 'In the city' },
]

export default function Lookbook() {
  return (
    <section className="bg-ink py-20 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="display text-4xl">
            Real life <span className="text-brand">fit</span>
          </h2>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-sm font-semibold text-brand hover:text-white">
            More on @zuno.clo →
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {PHOTOS.map((p) => (
            <figure key={p.src} className="group relative overflow-hidden rounded-2xl">
              <img src={p.src} alt={p.alt} loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase text-ink">
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
