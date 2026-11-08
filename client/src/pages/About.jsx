import { INSTAGRAM_URL } from '../config'
import { ClawMark } from '../components/Logo'

export default function About() {
  return (
    <div className="relative overflow-hidden">
      <ClawMark className="pointer-events-none absolute -right-20 top-10 h-96 w-96 text-brand/10" />
      <div className="relative mx-auto max-w-2xl px-4 py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-ink">What is</p>
        <h1 className="display text-7xl text-brand">ZUNO</h1>
        <p className="mt-8 text-2xl font-semibold">Wear the Mindset.</p>
        <p className="mt-4 leading-relaxed text-ink/80">
          ZUNO is a clothing brand built around one idea: what you wear should say how you think.
          We're starting small with a few oversized, drop-shoulder T-shirts, made in limited runs.
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
  )
}
