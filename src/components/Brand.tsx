import logo from '../assets/jasmin-homes-logo.jpg'

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href="/" aria-label="Jasmin Homes Constructions home">
      <img className="brand__image" src={logo} alt="Jasmin Homes Constructions" />
    </a>
  )
}
