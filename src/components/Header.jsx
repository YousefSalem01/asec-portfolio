import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react'
import { company } from '../data/site.js'
import { services } from '../data/services.js'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services', children: services },
  { to: '/projects', label: 'Projects' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="topbar">
        <div className="container topbar__inner">
          <span className="topbar__tag">{company.tagline}</span>
          <div className="topbar__contact">
            <a href={company.phoneHref}>
              <Phone size={14} /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`}>
              <Mail size={14} /> {company.email}
            </a>
          </div>
        </div>
      </div>

      <div className="container navbar">
        <Link to="/" className="brand" aria-label="ASEC Automation — home">
          <img src="/images/logo.png" alt="ASEC Automation" width="800" height="167" />
        </Link>

        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Main">
          <ul>
            {links.map((l) => (
              <li key={l.to} className={l.children ? 'has-menu' : ''}>
                <NavLink to={l.to} end={l.end}>
                  {l.label}
                  {l.children && <ChevronDown size={15} className="nav__caret" aria-hidden="true" />}
                </NavLink>
                {l.children && (
                  <ul className="submenu">
                    {l.children.map((s) => (
                      <li key={s.slug}>
                        <NavLink to={`/services/${s.slug}`}>{s.title}</NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn--red nav__cta">
            Get a Quote
          </Link>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  )
}
