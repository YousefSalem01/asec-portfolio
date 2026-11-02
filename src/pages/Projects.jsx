import { useMemo, useState } from 'react'
import { MapPin, Search } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { featured, projects, projectSectors } from '../data/projects.js'

export default function Projects() {
  const [sector, setSector] = useState('All')
  const [query, setQuery] = useState('')

  const counts = useMemo(() => {
    const c = { All: projects.length }
    projects.forEach((p) => (c[p.sector] = (c[p.sector] || 0) + 1))
    return c
  }, [])

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter(
      (p) =>
        (sector === 'All' || p.sector === sector) &&
        (!q || [p.client, p.name, p.location, p.scope].join(' ').toLowerCase().includes(q)),
    )
  }, [sector, query])

  return (
    <>
      <PageHero title="Projects" eyebrow="25 years of clients, partners & projects" image="/images/infra-ducts.webp" crumbs={[{ label: 'Projects' }]}>
        A selection of the infrastructure, industrial, energy and facility management projects ASA has delivered and
        is delivering today.
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Highlights" title="Featured projects" />
          <div className="project-grid">
            {featured.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90} className="project-card">
                <div className="project-card__img">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <span className="tag">{p.sector}</span>
                </div>
                <div className="project-card__body">
                  <h3>{p.title}</h3>
                  <p className="project-card__meta">
                    <span>{p.client}</span>
                    <span>
                      <MapPin size={14} /> {p.location}
                    </span>
                  </p>
                  <p>{p.scope}</p>
                  <span className="project-card__year">{p.year}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint" id="reference-list">
        <div className="container">
          <SectionHeading eyebrow="Reference list" title="Selected project references" />

          <div className="filters">
            <div className="filter-chips" role="tablist" aria-label="Filter by sector">
              {['All', ...projectSectors].map((s) => (
                <button
                  key={s}
                  role="tab"
                  aria-selected={sector === s}
                  className={`chip ${sector === s ? 'is-active' : ''}`}
                  onClick={() => setSector(s)}
                >
                  {s} <span>{counts[s] || 0}</span>
                </button>
              ))}
            </div>
            <label className="search">
              <Search size={18} aria-hidden="true" />
              <input
                type="search"
                placeholder="Search client, project or location"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search projects"
              />
            </label>
          </div>

          <div className="ref-table" role="table" aria-label="Project references">
            <div className="ref-row ref-row--head" role="row">
              <span role="columnheader">Client</span>
              <span role="columnheader">Project</span>
              <span role="columnheader">Location</span>
              <span role="columnheader">Scope</span>
              <span role="columnheader">Period</span>
            </div>
            {list.map((p) => (
              <div className="ref-row" role="row" key={p.sector + p.client + p.name}>
                <span role="cell" data-label="Client">
                  <strong>{p.client}</strong>
                  <em className="ref-sector">{p.sector}</em>
                </span>
                <span role="cell" data-label="Project">{p.name}</span>
                <span role="cell" data-label="Location">{p.location}</span>
                <span role="cell" data-label="Scope">{p.scope}</span>
                <span role="cell" data-label="Period">{p.year}</span>
              </div>
            ))}
            {list.length === 0 && <p className="empty">No projects match your search.</p>}
          </div>
        </div>
      </section>

      <CtaBand title="Your project could be next" />
    </>
  )
}
