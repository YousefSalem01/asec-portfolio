import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Lightbox({ items, index, onClose, onIndex }) {
  const item = items[index]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onIndex((index + 1) % items.length)
      if (e.key === 'ArrowLeft') onIndex((index - 1 + items.length) % items.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, items.length, onClose, onIndex])

  if (!item) return null
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.caption} onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        <X size={28} />
      </button>
      <button
        className="lightbox__nav lightbox__nav--prev"
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation()
          onIndex((index - 1 + items.length) % items.length)
        }}
      >
        <ChevronLeft size={32} />
      </button>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.caption} />
        <figcaption>
          {item.caption}
          <span>
            {index + 1} / {items.length}
          </span>
        </figcaption>
      </figure>
      <button
        className="lightbox__nav lightbox__nav--next"
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation()
          onIndex((index + 1) % items.length)
        }}
      >
        <ChevronRight size={32} />
      </button>
    </div>
  )
}
