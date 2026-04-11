import './Frontmatter.css'

const domainColors = {
  journal: 'var(--domain-journal)',
  tsf: 'var(--domain-tsf)',
  kenmare: 'var(--domain-kenmare)',
  cssm: 'var(--domain-cssm)',
  'cross-domain': 'var(--domain-concepts)',
}

export default function Frontmatter({ data }) {
  if (!data || Object.keys(data).length === 0) return null

  return (
    <div className="frontmatter">
      {data.domain && (
        <span className="fm-badge" style={{ borderColor: domainColors[data.domain] || 'var(--border)' }}>
          {data.domain}
        </span>
      )}
      {data.type && <span className="fm-badge fm-type">{data.type}</span>}
      {data.tags && data.tags.map(tag => (
        <span key={tag} className="fm-tag">#{tag}</span>
      ))}
      {data.updated && <span className="fm-date">Updated {data.updated}</span>}
    </div>
  )
}
