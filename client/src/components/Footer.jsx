import { INSTAGRAM_URL } from '../config'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-ink/60 sm:flex-row">
        <Logo />
        <p>© {new Date().getFullYear()} ZUNO · Wear the Mindset.</p>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="font-semibold text-brand hover:text-brand-dark">
          @zuno.clo
        </a>
      </div>
    </footer>
  )
}
