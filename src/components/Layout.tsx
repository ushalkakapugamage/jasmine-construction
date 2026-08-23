import { useEffect, useState, type ReactNode } from 'react'
import { Brand } from './Brand'
import { Button } from './Button'
import { CloseIcon, MenuIcon } from './Icons'
import { site } from '../data/site'
import { sitePath } from '../lib/routes'

const links = [
  ['Projects', '/projects'],
  ['Services', '/services'],
  ['Our Process', '/process'],
  ['About', '/about'],
] as const

export function Header({ dark = false }: { dark?: boolean }) {
  const [isOpen, setOpen] = useState(false)
  useEffect(() => {
    document.body.classList.toggle('menu-is-open', isOpen)
    return () => document.body.classList.remove('menu-is-open')
  }, [isOpen])

  return <header className={`site-header ${dark ? 'site-header--dark' : ''}`}>
    <div className="site-header__inner shell">
      <Brand light={dark} />
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, href]) => <a href={sitePath(href)} key={href}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <a className="header-phone" href={`tel:${site.phones[0].replaceAll(' ', '')}`}>{site.phones[0]}</a>
        <Button href={sitePath('/contact')} className="header-cta">Start a project</Button>
        <button className="menu-toggle" onClick={() => setOpen(!isOpen)} aria-controls="mobile-menu" aria-expanded={isOpen} aria-label={isOpen ? 'Close navigation' : 'Open navigation'}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
    <div className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`} id="mobile-menu">
      <nav aria-label="Mobile navigation">
        {links.map(([label, href], index) => <a href={sitePath(href)} key={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</a>)}
        <a href={sitePath('/contact')} onClick={() => setOpen(false)}><span>05</span>Start a project</a>
      </nav>
      <div className="mobile-menu__contact"><a href={`tel:${site.phones[0].replaceAll(' ', '')}`}>{site.phones[0]}</a><a href={`mailto:${site.email}`}>{site.email}</a></div>
    </div>
  </header>
}

export function Footer() {
  const year = new Date().getFullYear()
  return <footer className="site-footer">
    <div className="shell site-footer__main">
      <div><Brand light /><p className="site-footer__statement">A considered starting point for construction projects in Sri Lanka.</p></div>
      <div className="footer-block"><span className="eyebrow">Contact</span><a href={`tel:${site.phones[0].replaceAll(' ', '')}`}>{site.phones[0]}</a><a href={`tel:${site.phones[1].replaceAll(' ', '')}`}>{site.phones[1]}</a><a href={`mailto:${site.email}`}>{site.email}</a></div>
      <div className="footer-block"><span className="eyebrow">Explore</span>{links.map(([label, href]) => <a href={sitePath(href)} key={href}>{label}</a>)}<a href={sitePath('/contact')}>Start a project</a></div>
      <div className="footer-block footer-block--credentials"><span className="eyebrow">Registration</span><p>Business Reg. {site.registration}</p><p>CIDA {site.cidaRegistration}</p><p>Grade {site.cidaGrade}</p></div>
    </div>
    <div className="shell site-footer__lower"><span>© {year} Jasmin Constructions. All rights reserved.</span><span>Built with clarity and care.</span></div>
  </footer>
}

export function PageLayout({ children, headerDark = false }: { children: ReactNode; headerDark?: boolean }) {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Header dark={headerDark} /><main id="main-content">{children}</main><Footer /></>
}

export function SectionIntro({ number, label, title, text }: { number: string; label: string; title: string; text?: string }) {
  return <div className="section-intro"><div className="section-marker"><span>{number}</span><i /></div><div><p className="eyebrow">{label}</p><h2>{title}</h2></div>{text && <p className="section-intro__text">{text}</p>}</div>
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image?: string }) {
  return <section className={`page-hero ${image ? 'page-hero--image' : ''}`} style={image ? { backgroundImage: `linear-gradient(90deg, rgba(8, 46, 91, .96) 0%, rgba(8, 46, 91, .8) 48%, rgba(23, 33, 43, .42) 100%), url(${image})` } : undefined}>
    <div className="shell page-hero__content"><p className="eyebrow eyebrow--light">{eyebrow}</p><h1>{title}</h1><p>{text}</p></div>
  </section>
}
