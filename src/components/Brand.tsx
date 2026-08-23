import logo from '../assets/jasmin-homes-logo.jpg'
import { sitePath } from '../lib/routes'

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href={sitePath('/')} aria-label="Jasmin Homes Constructions home">
      <img className="brand__image" src={logo} alt="Jasmin Homes Constructions" />
    </a>
  )
}
