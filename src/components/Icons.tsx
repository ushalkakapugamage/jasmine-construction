import type { SVGProps } from 'react'

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 20 20" aria-hidden="true" {...props}><path d="M5 15 15 5M7 5h8v8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" /></svg>
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path d="M3 7h18M3 12h18M3 17h18" fill="none" stroke="currentColor" strokeWidth="1.7" /></svg>
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path d="m5 5 14 14M19 5 5 19" fill="none" stroke="currentColor" strokeWidth="1.7" /></svg>
}

export function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 20 20" aria-hidden="true" {...props}><path d="M10 3v14M3 10h14" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
}
