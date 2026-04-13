import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchPages, fetchLog } from '../api'
import MarkdownRenderer from '../components/MarkdownRenderer'
import './Dashboard.css'

const domainMeta = {
  journal: { label: 'Journal', color: 'var(--domain-journal)', desc: 'Personal reflections & goals' },
  tsf: { label: 'TSF', color: 'var(--domain-tsf)', desc: 'Tailings Storage Facility' },
  geotech: { label: 'Geotech', color: 'var(--domain-geotech)', desc: 'Daily geotechnical reports' },
  water: { label: 'Water', color: 'var(--domain-water)', desc: 'Water supply & balance' },
  kenmare: { label: 'Kenmare', color: 'var(--domain-kenmare)', desc: 'Work projects & decisions' },
  cssm: { label: 'CSSM', color: 'var(--domain-cssm)', desc: 'Critical State Soil Mechanics' },
  concepts: { label: 'Concepts', color: 'var(--domain-concepts)', desc: 'Cross-domain concepts' },
  synthesis: { label: 'Synthesis', color: 'var(--domain-synthesis)', desc: 'Analysis & comparisons' },
}

export default function Dashboard() {
  const [pages, setPages] = useState([])
  const [log, setLog] = useState(null)

  useEffect(() => {
    fetchPages().then(setPages).catch(() => {})
    fetchLog().then(setLog).catch(() => {})
  }, [])

  // Count pages per domain
  const counts = {}
  for (const p of pages) {
    counts[p.domain] = (counts[p.domain] || 0) + 1
  }

  return (
    <div className="dashboard">
      <h1>Knowledge Base</h1>
      <p className="dash-subtitle">Your second brain — {pages.length} pages across {Object.keys(counts).length} domains</p>

      <div className="domain-grid">
        {Object.entries(domainMeta).map(([key, meta]) => (
          <Link to={`/domain/${key}`} key={key} className="domain-card">
            <div className="domain-card-header">
              <span className="domain-dot" style={{ background: meta.color }} />
              <h2>{meta.label}</h2>
            </div>
            <p className="domain-desc">{meta.desc}</p>
            <span className="domain-count">{counts[key] || 0} pages</span>
          </Link>
        ))}
      </div>

      {log && (
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <MarkdownRenderer content={log.content} />
        </div>
      )}
    </div>
  )
}
