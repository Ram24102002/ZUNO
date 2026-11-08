import { INSTAGRAM_URL } from '../config'
import { ClawMark } from '../components/Logo'

const CLAW_MEANING = [
  { word: 'Strength', text: 'Built rep by rep, inside the gym and out.' },
  { word: 'Survival', text: 'Showing up every day, even when it is hard.' },
  { word: 'Dominance', text: 'Refusing to stay average.' },
]

export default function About() {
  return (
    <>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        <img
          src="/images/about/hoodie.webp"
          alt="What is ZUNO"
          className="aspect-[4/5] w-full rounded-2xl object-cover"
        />
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-ink/60">From zero to number one</p>
          <h1 className="display mt-3 text-5xl leading-tight">
            Wear the <span className="text-brand">Mindset.</span>
          </h1>
          <p className="mt-6 leading-relaxed text-ink/80">
            We create clothing for those who push limits, inside the gym and outside in life.
            We are not just clothing. We are a mindset you wear.
          </p>
          <p className="mt-4 leading-relaxed text-ink/80">
            We're starting small with a few oversized, drop-shoulder pieces, made in limited runs.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block rounded-full border-2 border-brand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-brand transition hover:bg-brand hover:text-white"
          >
            Follow @zuno.clo
          </a>
        </div>
      </div>

      <section className="bg-brand-light py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center gap-3">
            <ClawMark className="h-12 w-12 text-brand" />
            <h2 className="display text-4xl">
              What our <span className="text-brand">claw</span> says
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {CLAW_MEANING.map(({ word, text }) => (
              <div key={word} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="display text-2xl text-brand">{word}</p>
                <p className="mt-2 text-ink/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
