import { useEffect, useState } from 'react'
import { useInView } from './Reveal.jsx'

export default function Counter({ value, suffix = '', plain = false, duration = 1600 }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const [n, setN] = useState(plain ? value : 0)

  useEffect(() => {
    if (!inView || plain) return
    let raf
    const start = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration)
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, plain, duration])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}
