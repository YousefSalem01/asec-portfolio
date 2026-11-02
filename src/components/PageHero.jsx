import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ title, eyebrow, image, crumbs = [], children }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="page-hero__overlay" />
      <div className="container page-hero__inner">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <ChevronRight size={14} aria-hidden="true" />
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        {eyebrow && <p className="eyebrow eyebrow--light">{eyebrow}</p>}
        <h1>{title}</h1>
        {children && <p className="page-hero__lead">{children}</p>}
      </div>
    </section>
  )
}
