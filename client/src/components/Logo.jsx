// The ZUNO claw-mark: three blue slashes, as on the Instagram profile picture.
export function ClawMark({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <g fill="currentColor">
        <path d="M14 52 C22 38 32 22 44 8 C36 24 28 40 18 54 Z" />
        <path d="M24 56 C32 42 42 26 54 12 C46 28 38 44 28 58 Z" />
        <path d="M34 58 C40 48 48 36 58 24 C52 38 46 48 38 60 Z" />
      </g>
    </svg>
  )
}

export default function Logo() {
  return (
    <span className="flex items-center gap-1.5">
      <ClawMark className="h-8 w-8 text-brand" />
      <span className="display text-2xl text-ink">ZUNO</span>
    </span>
  )
}
