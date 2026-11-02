import { useMemo, useState } from 'react'
import { Expand } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Lightbox from '../components/Lightbox.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { gallery, galleryCategories } from '../data/gallery.js'

export default function Gallery() {
  const [cat, setCat] = useState('All')
  const [open, setOpen] = useState(null)
  const items = useMemo(() => (cat === 'All' ? gallery : gallery.filter((g) => g.category === cat)), [cat])

  return (
    <>
      <PageHero title="Gallery" eyebrow="On site with ASA" image="/images/ccr-operators.webp" crumbs={[{ label: 'Gallery' }]}>
        Real photos from our sites, workshops, control rooms and solar plants.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="filter-chips filter-chips--center" role="tablist" aria-label="Filter gallery">
            {['All', ...galleryCategories].map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={cat === c}
                className={`chip ${cat === c ? 'is-active' : ''}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="masonry">
            {items.map((g, i) => (
              <button key={g.src} className="gallery-item" onClick={() => setOpen(i)} aria-label={`Open: ${g.caption}`}>
                <img src={g.src} alt={g.caption} loading="lazy" />
                <span className="gallery-item__cap">
                  <Expand size={16} /> {g.caption}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {open !== null && <Lightbox items={items} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />}

      <CtaBand />
    </>
  )
}
