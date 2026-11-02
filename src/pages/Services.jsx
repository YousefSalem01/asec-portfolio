import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { services } from '../data/services.js'

export default function Services() {
  return (
    <>
      <PageHero title="Our Services" eyebrow="What we do" image="/images/switchgear.webp" crumbs={[{ label: 'Services' }]}>
        A total-solutions company: we design, build, automate, power and maintain the facilities that drive economic
        growth.
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Business units" title="One partner across the full asset life-cycle" align="center">
            ASA is an integrated service provider with deep expertise in EPC projects and hard services — able to
            support clients with every non-core service linked to the continuity of their facilities.
          </SectionHeading>

          <div className="service-rows">
            {services.map((s, i) => (
              <Reveal key={s.slug} className={`service-row ${i % 2 ? 'service-row--reverse' : ''}`}>
                <div className="service-row__img">
                  <img src={s.image} alt={s.title} loading="lazy" />
                </div>
                <div className="service-row__body">
                  <span className="service-card__icon">
                    <Icon name={s.icon} size={26} />
                  </span>
                  <h2>{s.title}</h2>
                  <p>{s.summary}</p>
                  <ul className="tag-list">
                    {s.serves.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                  <Link to={`/services/${s.slug}`} className="btn btn--navy">
                    Explore {s.title} <ArrowRight size={18} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
