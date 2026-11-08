import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'

const linkClass = ({ isActive }) =>
  `text-sm font-semibold uppercase tracking-wider transition ${
    isActive ? 'text-brand' : 'text-ink/70 hover:text-brand'
  }`

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" aria-label="ZUNO home"><Logo /></Link>
        <div className="flex gap-6">
          <NavLink to="/" end className={linkClass}>Shop</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </div>
      </nav>
    </header>
  )
}
