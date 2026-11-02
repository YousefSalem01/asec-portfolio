import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, children, align = 'left', light = false }) {
  return (
    <Reveal className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''}`}>
      {eyebrow && <p className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>{eyebrow}</p>}
      <h2>{title}</h2>
      {children && <p className="section-heading__lead">{children}</p>}
    </Reveal>
  )
}
