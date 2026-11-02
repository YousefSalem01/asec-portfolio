import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { company, offices } from '../data/site.js'
import { services } from '../data/services.js'

const socialIcons = { linkedin: Linkedin, facebook: Facebook, twitter: Twitter }

export default function Footer() {
  const socials = Object.entries(company.social).filter(([, url]) => url)

  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="/images/logo-white-full.png" alt="ASEC Automation — Innovating Industries, Powering Progress" />
          <p>
            An integrated electrical and automation EPC contractor since {company.founded}, delivering
            cutting-edge solutions across the MENA region and Asia Pacific.
          </p>
          {socials.length > 0 && (
            <div className="footer__social">
              {socials.map(([key, url]) => {
                const Ico = socialIcons[key]
                return (
                  <a key={key} href={url} target="_blank" rel="noreferrer" aria-label={key}>
                    <Ico size={18} />
                  </a>
                )
              })}
            </div>
          )}
        </div>

        <div>
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About ASA</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about#quality">HSE &amp; Quality</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3>Services</h3>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Get in touch</h3>
          <ul className="footer__contact">
            <li>
              <Phone size={16} />
              <a href={company.phoneHref}>{company.phone}</a>
            </li>
            <li>
              <Mail size={16} />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            {offices.map((o) => (
              <li key={o.country}>
                <MapPin size={16} />
                <span>
                  <strong>{o.country}</strong> — {o.address}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} ASEC Automation. All rights reserved.</span>
          <span>A member of the ASEC Holding family</span>
        </div>
      </div>
    </footer>
  )
}
