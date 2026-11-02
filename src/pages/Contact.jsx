import { useState } from 'react'
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import { company, offices } from '../data/site.js'
import { services } from '../data/services.js'

const empty = { name: '', company: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  // No backend yet: open the visitor's mail client with the enquiry pre-filled.
  const submit = (e) => {
    e.preventDefault()
    const subject = `Website enquiry${form.service ? ` — ${form.service}` : ''} — ${form.company || form.name}`
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service || 'General'}`,
      '',
      form.message,
    ].join('\n')
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <PageHero title="Contact Us" eyebrow="Let's talk" image="/images/ccr-desk.webp" crumbs={[{ label: 'Contact' }]}>
        Tell us about your project — our engineering and commercial teams will respond promptly.
      </PageHero>

      <section className="section">
        <div className="container contact">
          <Reveal className="contact__info">
            <h2>Get in touch</h2>
            <p>Reach our sales team directly, or send us your requirements using the form.</p>
            <ul className="contact__list">
              <li>
                <span className="contact__icon"><Phone size={20} /></span>
                <div>
                  <small>Telephone</small>
                  <a href={company.phoneHref}>{company.phone}</a>
                </div>
              </li>
              <li>
                <span className="contact__icon"><Mail size={20} /></span>
                <div>
                  <small>Email</small>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </li>
              {offices.map((o) => (
                <li key={o.country}>
                  <span className="contact__icon"><MapPin size={20} /></span>
                  <div>
                    <small>{o.country} — {o.label}</small>
                    <span>{o.address}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="contact__form-wrap" delay={120}>
            {sent ? (
              <div className="form-success">
                <CheckCircle2 size={48} />
                <h3>Thank you, {form.name.split(' ')[0] || 'there'}!</h3>
                <p>
                  Your email app should have opened with your enquiry ready to send. If it didn't, email us directly at{' '}
                  <a href={`mailto:${company.email}`}>{company.email}</a>.
                </p>
                <button className="btn btn--outline" onClick={() => { setForm(empty); setSent(false) }}>
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form className="form" onSubmit={submit}>
                <h2>Request a proposal</h2>
                <div className="form__row">
                  <label>
                    Full name *
                    <input required value={form.name} onChange={set('name')} autoComplete="name" />
                  </label>
                  <label>
                    Company
                    <input value={form.company} onChange={set('company')} autoComplete="organization" />
                  </label>
                </div>
                <div className="form__row">
                  <label>
                    Email *
                    <input type="email" required value={form.email} onChange={set('email')} autoComplete="email" />
                  </label>
                  <label>
                    Phone
                    <input type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" />
                  </label>
                </div>
                <label>
                  Service of interest
                  <select value={form.service} onChange={set('service')}>
                    <option value="">General enquiry</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Project details *
                  <textarea required rows={6} value={form.message} onChange={set('message')} placeholder="Location, scope, timeline…" />
                </label>
                <button type="submit" className="btn btn--red btn--block">
                  Send enquiry <Send size={18} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="map">
        <iframe
          title="ASEC Automation head office — New Maadi, Cairo"
          src={offices[0].map}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
