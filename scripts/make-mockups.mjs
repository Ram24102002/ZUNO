import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Placeholder T-shirt mockups. Run: node scripts/make-mockups.mjs
const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'client', 'public', 'images')

// Oversized drop-shoulder tee, front view, on an 800x1000 canvas
const SHIRT = `M318 170 Q400 232 482 170 L628 214 Q700 300 772 432 L664 492 L626 420 L640 846 Q400 872 160 846 L174 420 L136 492 L28 432 Q100 300 172 214 Z`
const CLAW = (x, y, s, fill, op = 1) => `
  <g transform="translate(${x} ${y}) scale(${s})" fill="${fill}" opacity="${op}">
    <path d="M14 52 C22 38 32 22 44 8 C36 24 28 40 18 54 Z"/>
    <path d="M24 56 C32 42 42 26 54 12 C46 28 38 44 28 58 Z"/>
    <path d="M34 58 C40 48 48 36 58 24 C52 38 46 48 38 60 Z"/>
  </g>`

function tee({ id, color, collar, print, dark }) {
  const fold = dark ? '#ffffff' : '#000000'
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f3f8fd"/><stop offset="1" stop-color="#e3edf6"/>
    </linearGradient>
    <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#000" stop-opacity="0.10"/>
      <stop offset="0.25" stop-color="#000" stop-opacity="0"/>
      <stop offset="0.75" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.14"/>
    </linearGradient>
    <radialGradient id="shadow"><stop offset="0" stop-color="#1d3550" stop-opacity="0.22"/><stop offset="1" stop-color="#1d3550" stop-opacity="0"/></radialGradient>
    <clipPath id="body"><path d="${SHIRT}"/></clipPath>
  </defs>
  <rect width="800" height="1000" fill="url(#bg)"/>
  ${CLAW(560, 640, 5.2, '#1d9bf0', 0.08)}
  <ellipse cx="400" cy="880" rx="300" ry="34" fill="url(#shadow)"/>
  <path d="${SHIRT}" fill="${color}"/>
  <g clip-path="url(#body)">
    ${print}
    <rect width="800" height="1000" fill="url(#shade)"/>
    <!-- fabric folds -->
    <path d="M250 430 Q270 640 240 840" stroke="${fold}" stroke-opacity="0.07" stroke-width="10" fill="none"/>
    <path d="M560 440 Q540 650 570 840" stroke="${fold}" stroke-opacity="0.07" stroke-width="10" fill="none"/>
    <path d="M174 420 Q190 330 172 214" stroke="${fold}" stroke-opacity="0.08" stroke-width="6" fill="none"/>
    <path d="M626 420 Q610 330 628 214" stroke="${fold}" stroke-opacity="0.08" stroke-width="6" fill="none"/>
    <!-- sleeve cuffs and hem stitching -->
    <path d="M44 420 L146 476" stroke="${fold}" stroke-opacity="0.15" stroke-width="3" fill="none"/>
    <path d="M756 420 L654 476" stroke="${fold}" stroke-opacity="0.15" stroke-width="3" fill="none"/>
    <path d="M162 826 Q400 852 638 826" stroke="${fold}" stroke-opacity="0.15" stroke-width="3" fill="none"/>
  </g>
  <!-- ribbed collar -->
  <path d="M318 170 Q400 232 482 170" stroke="${collar}" stroke-width="16" fill="none" stroke-linecap="round"/>
  <path d="M330 168 Q400 140 470 168 Q400 214 330 168 Z" fill="${color}"/>
  <path d="M330 168 Q400 140 470 168 Q400 214 330 168 Z" fill="#000" opacity="0.35"/>
</svg>
`
}

const products = [
  {
    id: 'jersey-80-black',
    color: '#1c1c1e',
    collar: '#2a2a2d',
    dark: true,
    print: `
    <path d="M172 214 Q100 300 28 432" stroke="#ffffff" stroke-width="10" fill="none" opacity="0.9"/>
    <path d="M628 214 Q700 300 772 432" stroke="#ffffff" stroke-width="10" fill="none" opacity="0.9"/>
    <text x="400" y="560" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="230" fill="#ffffff" letter-spacing="-8">80</text>
    ${CLAW(352, 590, 1.5, '#1d9bf0')}`,
  },
  {
    id: 'graphic-cream',
    color: '#efe6cf',
    collar: '#e4d9bd',
    dark: false,
    print: `
    ${CLAW(270, 300, 4.2, '#d7262e', 0.9)}
    <text x="400" y="520" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-style="italic" font-size="92" fill="#1c1c1e" letter-spacing="-3">MINDSET</text>
    <text x="400" y="566" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="22" fill="#d7262e" letter-spacing="10">WEAR IT · ZUNO</text>`,
  },
  {
    id: 'essential-green',
    color: '#1f4d3a',
    collar: '#1a4233',
    dark: true,
    print: `
    ${CLAW(470, 286, 1.1, '#e9f3ee')}
    <text x="508" y="372" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-style="italic" font-size="20" fill="#e9f3ee">ZUNO</text>`,
  },
]

for (const p of products) {
  writeFileSync(path.join(OUT, `${p.id}.svg`), tee(p))
  console.log('wrote', `${p.id}.svg`)
}
