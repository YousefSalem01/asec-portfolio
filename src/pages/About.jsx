import { Award, CheckCircle2, Eye, Globe2, MapPin, ShieldCheck, Target } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { awards, certifications, footprint, hse, milestones, offices, stats } from '../data/site.js'

const divisions = [
  'Technical — Automation, Electrical Design & IT',
  'HSE & QA/QC',
  'Supply Chain & Manufacturing — Logistics, Procurement, Workshops',
  'Operations — O&M and EPC projects',
  'Estimation & Proposals',
  'Commercial — Sales & Business Development',
  'Human Resources & Learning',
  'Finance',
]

export default function About() {
  return (
    <>
      <PageHero title="About ASEC Automation" eyebrow="Since 1997" image="/images/ccr-wide.webp" crumbs={[{ label: 'About' }]}>
        A regional pioneer providing cutting-edge automation and electrical engineering solutions across the MENA
        region and Asia Pacific.
      </PageHero>

      <section className="section">
        <div className="container split">
          <div className="split__text">
            <SectionHeading eyebrow="Overview" title="Over 25 years of delivering what matters" />
            <Reveal>
              <p>
                Since its foundation in 1997, ASA has been a pioneer in providing cutting-edge solutions for
                automation and electrical engineering to some of the world's most demanding heavy industries and
                infrastructure projects. We have delivered quality projects from Mexico to the Philippines and remain
                a leader in the MENA region.
              </p>
              <p>
                From the beginning, ASA has invested in talent, equipment and capacity to deliver the highest
                quality, efficient operation and uncompromising safety. Our projects include cement plants,
                refineries, water and wastewater treatment, power plants, residential developments and distribution
                networks.
              </p>
              <p>
                Beyond design-and-build, we operate and maintain many industrial and commercial facilities —
                combining our capabilities to give clients unparalleled technical management of their assets.
              </p>
            </Reveal>
          </div>
          <Reveal className="split__media">
            <img src="/images/infra-team.webp" alt="ASA site engineers walking a development site" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="stats stats--flat">
        <div className="container stats__grid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>
                <Counter value={s.value} suffix={s.suffix} plain={s.plain} />
              </strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container goals">
          <Reveal className="goal-card">
            <Eye size={34} />
            <h3>Our Vision</h3>
            <p>
              To be the first electrical contractor of choice, offering clients sustainable growth by stimulating
              the positive impact of energy-saving technologies, renewable energy and remote solutions.
            </p>
          </Reveal>
          <Reveal className="goal-card goal-card--red" delay={120}>
            <Target size={34} />
            <h3>Our Mission</h3>
            <p>
              To put our clients' goals and needs at the centre of an integrated service and technology offering —
              going beyond the role of an electrical contractor.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="Background & milestones" title="Our journey" align="center" />
          <ol className="timeline">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 120} className="timeline__item">
                <span className="timeline__year">{m.year}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split__text">
            <SectionHeading eyebrow="Regional pioneer" title="Global operations & footprint" />
            <Reveal>
              <p>
                Headquartered in Cairo with branches in the UAE and the Philippines, ASA has executed projects in
                more than 40 countries and is currently active in 7.
              </p>
              <ul className="pill-list">
                {footprint.map((c) => (
                  <li key={c}>
                    <Globe2 size={14} /> {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="office-list">
            {offices.map((o, i) => (
              <Reveal key={o.country} delay={i * 100} className="office">
                <MapPin size={22} />
                <div>
                  <h3>
                    {o.country} <small>{o.label}</small>
                  </h3>
                  <p>{o.address}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container split">
          <div className="split__text">
            <SectionHeading eyebrow="Our people" title="An agile, flexible team of 500+" light />
            <Reveal>
              <p className="on-dark">
                ASA uses an agile and flexible business model — including subcontracting and third-party labour
                agreements — so we can scale services and manpower to match each client's time, budget and quality
                goals. Our workforce is balanced roughly evenly between white-collar and blue-collar professionals,
                and we invest in on-the-job and off-the-job training to build productive career paths.
              </p>
            </Reveal>
          </div>
          <Reveal className="division-list">
            <h3>Organisational divisions</h3>
            <ul>
              {divisions.map((d) => (
                <li key={d}>
                  <CheckCircle2 size={18} /> {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section" id="quality">
        <div className="container">
          <SectionHeading eyebrow="Quality assurance" title="HSE commitment & certifications" align="center">
            ASA is an ISO-certified company that strictly follows international standards and is subject to
            continuous audits.
          </SectionHeading>
          <div className="hse-grid">
            <Reveal className="hse-card">
              <h3>Our commitment is sustained through</h3>
              <ul>
                {hse.sustained.map((x) => (
                  <li key={x}><CheckCircle2 size={18} /> {x}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="hse-card" delay={100}>
              <h3>Monitoring & improvement</h3>
              <ul>
                {hse.monitoring.map((x) => (
                  <li key={x}><CheckCircle2 size={18} /> {x}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="hse-card hse-card--img" delay={200}>
              <img src="/images/infra-cable-spacers.webp" alt="ASA crew working safely in PPE" loading="lazy" />
            </Reveal>
          </div>

          <div className="cert-grid">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 60} className="cert">
                <ShieldCheck size={30} />
                <strong>{c.name}</strong>
                <span>{c.detail}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="awards">
            <h3>
              <Award size={22} /> Awards &amp; recognition
            </h3>
            <ul>
              {awards.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="Partners" title="Working with the world's leading technology brands" align="center" />
          <Reveal className="logo-wall logo-wall--narrow">
            <img src="/images/partners-wall.webp" alt="Main partners: Arab Contractors, Elsewedy Electric, Siemens, Schneider Electric, ABB, Rockwell Automation, EFS, Nidec, TAQA Arabia, Mitsubishi Electric, Sinoma CBMI and thyssenkrupp" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
