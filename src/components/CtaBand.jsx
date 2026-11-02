import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { company } from '../data/site.js'

export default function CtaBand({ title = 'Have a project in mind?', text = 'Tell us about your facility, plant or development. Our engineering team will get back to you with the right solution.' }) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-band__actions">
          <Link to="/contact" className="btn btn--red">
            Request a proposal <ArrowRight size={18} />
          </Link>
          <a href={company.phoneHref} className="btn btn--ghost-light">
            <Phone size={18} /> {company.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
