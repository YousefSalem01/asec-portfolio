import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import Icon from '../components/Icon.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { stats, sectors, certifications } from '../data/site.js'
import { services } from '../data/services.js'
import { featured } from '../data/projects.js'

const heroSlides = ['/images/infra-team.webp', '/images/ccr-curved.webp', '/images/solar-tracker.webp', '/images/switchgear-room.webp']

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__slides" aria-hidden="true">
          {heroSlides.map((src, i) => (
            <div key={src} className="hero__slide" style={{ backgroundImage: `url(${src})`, animationDelay: `${i * 6}s` }} />
          ))}
        </div>
        <div className="hero__overlay" />
        <div className="container hero__inner">
          <p className="eyebrow eyebrow--light hero__eyebrow">Electrical &amp; Automation EPC Contractor · Since 1997</p>
          <h1>
            Innovating industries,
            <br />
            <span>powering progress.</span>
          </h1>
          <p className="hero__lead">
            From mega-infrastructure and central control rooms to certified panel building, solar plants and
            facility management — ASEC Automation delivers integrated electrical and automation solutions across
            the MENA region and Asia Pacific.
          </p>
          <div className="hero__actions">
            <Link to="/services" className="btn btn--red">
              Explore our services <ArrowRight size={18} />
            </Link>
            <Link to="/projects" className="btn btn--ghost-light">
              View projects
            </Link>
          </div>
        </div>
        <div className="hero__scroll" aria-hidden="true" />
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container stats__grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="stat">
              <strong>
                <Counter value={s.value} suffix={s.suffix} plain={s.plain} />
              </strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container split">
          <Reveal className="split__media">
            <img src="/images/ccr-team.webp" alt="ASA engineers commissioning a central control room" loading="lazy" />
            <div className="split__badge">
              <strong>25+</strong>
              <span>years of proven expertise</span>
            </div>
          </Reveal>
          <div className="split__text">
            <SectionHeading eyebrow="Who we are" title="A regional pioneer in electrical & automation engineering" />
            <Reveal>
              <p>
                Founded in 1997 as a member of the ASEC Holding family, ASEC Automation (ASA) has grown into a
                recognised <strong>integrated electrical and automation EPC contractor</strong>, delivering projects
                for some of the world's most demanding heavy industries and infrastructure owners.
              </p>
              <p>
                We have delivered work in more than 40 countries — from Mexico to the Philippines — and remain a
                leader in the MENA region. Our clients trust us because one company takes responsibility for the
                complete electrical and automation scope.
              </p>
              <ul className="checklist">
                <li><CheckCircle2 size={20} /> Engineering, procurement, construction &amp; commissioning under one roof</li>
                <li><CheckCircle2 size={20} /> Certified Siemens &amp; Schneider Electric panel builder</li>
                <li><CheckCircle2 size={20} /> ISO 9001, ISO 14001 &amp; ISO 45001 certified</li>
              </ul>
              <Link to="/about" className="link-arrow">
                More about ASA <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="What we do" title="Integrated solutions for every stage of your asset" align="center">
            Six service lines, one accountable partner — from the first load study to decades of operation and
            maintenance.
          </SectionHeading>
          <div className="service-grid">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 90}>
                <Link to={`/services/${s.slug}`} className="service-card">
                  <div className="service-card__img" style={{ backgroundImage: `url(${s.image})` }} />
                  <div className="service-card__body">
                    <span className="service-card__icon">
                      <Icon name={s.icon} size={26} />
                    </span>
                    <h3>{s.title}</h3>
                    <p>{s.summary}</p>
                    <span className="link-arrow">
                      Learn more <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="section section--navy">
        <div className="container">
          <SectionHeading eyebrow="Business sectors" title="Trusted across critical industries" light align="center" />
          <div className="sector-grid">
            {sectors.map((s, i) => (
              <Reveal key={s.name} delay={(i % 4) * 70} className="sector">
                <Icon name={s.icon} size={30} />
                <h3>{s.name}</h3>
                <p>{s.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <SectionHeading eyebrow="Selected work" title="Featured projects" />
            <Link to="/projects" className="btn btn--outline">
              All projects <ArrowRight size={18} />
            </Link>
          </div>
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

      {/* CLIENTS */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="Our clients" title="Chosen by industry leaders" align="center">
            A broad portfolio built over 25 years with developers, manufacturers, energy majors and global
            engineering partners.
          </SectionHeading>
          <Reveal className="logo-wall">
            <img src="/images/clients-wall.webp" alt="Main clients including Mivida, Lafarge, ENI, BP, TAQA Arabia, Jotun, CEMEX, Samsung, GE Vernova, Orascom, Heidelberg Materials, Titan, Orascom Development, Ezz Steel, Madinet Masr, Cleopatra Hospitals, ORASqualia, Tower Developments, Saint-Gobain, Air Liquide, Sphinx Glass, WE and Dina Farms" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* QUALITY */}
      <section className="section">
        <div className="container split split--reverse">
          <Reveal className="split__media">
            <img src="/images/infra-survey.webp" alt="ASA engineers in full PPE on site" loading="lazy" />
          </Reveal>
          <div className="split__text">
            <SectionHeading eyebrow="HSE & quality" title="Safety first. Quality always." />
            <Reveal>
              <p>
                Health, safety and environmental consciousness are an integral part of our culture — for our teams
                and our clients. Our management systems are certified and subject to continuous audit.
              </p>
              <div className="cert-chips">
                {certifications.map((c) => (
                  <span key={c.name} className="cert-chip">
                    <ShieldCheck size={18} />
                    <span>
                      <strong>{c.name}</strong>
                      <small>{c.detail}</small>
                    </span>
                  </span>
                ))}
              </div>
              <Link to="/about#quality" className="link-arrow">
                Our HSE commitment <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand title={`Let's power your next project`} />
    </>
  )
}
