import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchPages } from '../api'
import './DomainView.css'

const domainLabels = {
  journal: 'Journal',
  tsf: 'TSF',
  geotech: 'Geotech',
  kenmare: 'Kenmare',
  cssm: 'CSSM',
  concepts: 'Concepts',
  synthesis: 'Synthesis',
}

export default function DomainView() {
  const { domain } = useParams()
  const [pages, setPages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchPages(domain)
      .then(setPages)
      .catch(() => setPages([]))
      .finally(() => setLoading(false))
  }, [domain])

  return (
    <div className="domain-view">
      <h1>{domainLabels[domain] || domain}</h1>

      {loading && <p className="loading">Loading...</p>}

      {!loading && pages.length === 0 && (
        <div className="empty-state">
          <p>No pages yet.</p>
          <p className="hint">Drop a source file into <code>raw/{domain}/</code> and ask Claude to ingest it.</p>
        </div>
      )}

      {!loading && pages.length > 0 && (
        <div className="page-list">
          {pages.map(p => (
            <Link
              key={p.path}
              to={`/wiki/${p.domain}/${p.slug}`}
              className="page-list-item"
            >
              <div className="page-list-title">
                {p.frontmatter?.title || p.slug}
              </div>
              <div className="page-list-meta">
                {p.frontmatter?.type && <span className="page-type">{p.frontmatter.type}</span>}
                {p.frontmatter?.updated && <span className="page-date">{p.frontmatter.updated}</span>}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
