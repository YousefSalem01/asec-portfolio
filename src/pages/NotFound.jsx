import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <p className="eyebrow">Error 404</p>
        <h1>Page not found</h1>
        <p>The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn btn--navy">
          <ArrowLeft size={18} /> Back to home
        </Link>
      </div>
    </section>
  )
}
