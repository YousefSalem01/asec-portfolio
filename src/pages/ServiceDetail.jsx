import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Lightbox from '../components/Lightbox.jsx'
import NotFound from './NotFound.jsx'
import { getService, services } from '../data/services.js'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)
  const [lightbox, setLightbox] = useState(null)

  if (!service) return <NotFound />

  const items = service.gallery.map((src) => ({ src, caption: service.title }))
  const others = services.filter((s) => s.slug !== slug)

  return (
    <>
      <PageHero
        title={service.title}
        eyebrow="Our services"
        image={service.image}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
      >
        {service.summary}
      </PageHero>

      <section className="section">
        <div className="container detail">
          <div className="detail__main">
            <Reveal>
              {service.intro.map((p) => (
                <p key={p.slice(0, 24)} className="detail__intro">
                  {p}
                </p>
              ))}
            </Reveal>

            <div className="scope-grid">
              {service.blocks.map((b, i) => (
                <Reveal key={b.title} delay={(i % 2) * 100} className="scope-card">
                  <span className="scope-card__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{b.title}</h3>
                  {b.text && <p>{b.text}</p>}
                  <ul>
                    {b.items.map((it) => (
                      <li key={it}>
                        <CheckCircle2 size={17} /> {it}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            {service.tech && (
              <Reveal className="tech-strip">
                <h3>Technologies</h3>
                <ul className="tag-list">
                  {service.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          <aside className="detail__aside">
            <div className="aside-card">
              <h3>We serve</h3>
              <ul>
                {service.serves.map((x) => (
                  <li key={x}>
                    <CheckCircle2 size={17} /> {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aside-card aside-card--navy">
              <h3>Talk to an engineer</h3>
              <p>Share your requirements and we'll prepare a tailored technical and commercial proposal.</p>
              <Link to="/contact" className="btn btn--red btn--block">
                Request a proposal <ArrowRight size={18} />
              </Link>
            </div>
            <nav className="aside-card" aria-label="Other services">
              <h3>Other services</h3>
              <ul className="aside-links">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`}>
                      <Icon name={s.icon} size={18} /> {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="On site" title="From our projects" />
          <div className="mini-gallery">
            {items.map((it, i) => (
              <button key={it.src} className="gallery-item" onClick={() => setLightbox(i)} aria-label={`Open image ${i + 1}`}>
                <img src={it.src} alt={`${service.title} — project photo ${i + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && <Lightbox items={items} index={lightbox} onIndex={setLightbox} onClose={() => setLightbox(null)} />}

      <CtaBand />
    </>
  )
}
