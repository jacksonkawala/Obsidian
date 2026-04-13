import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchPage } from '../api'
import { Layers, Zap, TrendingUp, Clock } from 'lucide-react'
import './IntelGrid.css'

const domainMeta = {
  tsf: { label: 'TSF', color: '#ef4444' },
  geotech: { label: 'Geotech', color: '#f97316' },
  water: { label: 'Water', color: '#0ea5e9' },
  kenmare: { label: 'Kenmare', color: '#10b981' },
  journal: { label: 'Journal', color: '#f59e0b' },
  cssm: { label: 'CSSM', color: '#8b5cf6' },
  concepts: { label: 'Concepts', color: '#60a5fa' },
  synthesis: { label: 'Synthesis', color: '#ec4899' },
}

function stripMarkdown(text) {
  return text
    .replace(/^---[\s\S]*?---/m, '')
    .replace(/^#+\s+.*/gm, '')
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, t, a) => a || t)
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_~`]/g, '')
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    .replace(/\|.*\|/g, '')
    .replace(/\n{2,}/g, ' ')
    .trim()
}

function AnimatedCounter({ target, duration = 1200 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!target) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration])

  return <span className="counter-value">{count}</span>
}

function relativeDate(dateStr) {
  if (!dateStr) return '\u2014'
  const d = new Date(dateStr)
  const now = new Date()
  const diff = Math.floor((now - d) / (1000 * 60 * 60 * 24))
  if (diff === 0) return 'Today'
  if (diff === 1) return 'Yesterday'
  if (diff < 7) return `${diff}d ago`
  if (diff < 30) return `${Math.floor(diff / 7)}w ago`
  return dateStr
}

export default function IntelGrid({ pages }) {
  const [previews, setPreviews] = useState({})

  const sorted = [...pages]
    .sort((a, b) => {
      const da = a.frontmatter?.updated || a.frontmatter?.created || ''
      const db = b.frontmatter?.updated || b.frontmatter?.created || ''
      return db.localeCompare(da)
    })
    .slice(0, 6)

  // Stats
  const activeDomains = new Set(pages.map(p => p.domain)).size
  const latestDate = pages.reduce((l, p) => {
    const d = p.frontmatter?.updated || p.frontmatter?.created || ''
    return d > l ? d : l
  }, '')
  const recentCount = pages.filter(p => {
    const d = p.frontmatter?.updated || p.frontmatter?.created || ''
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    return new Date(d) >= weekAgo
  }).length

  useEffect(() => {
    if (sorted.length === 0) return
    sorted.forEach(page => {
      const key = `${page.domain}/${page.slug}`
      fetchPage(page.domain, page.slug).then(res => {
        const stripped = stripMarkdown(res.content || '')
        const preview = stripped.slice(0, 200)
        setPreviews(prev => ({ ...prev, [key]: preview }))
      }).catch(() => {})
    })
  }, [pages.length])

  if (pages.length === 0) return null

  return (
    <div className="intel-section">
      <div className="stats-strip">
        <div className="stat-card">
          <div className="stat-icon"><Layers size={20} /></div>
          <div className="stat-info">
            <AnimatedCounter target={pages.length} />
            <span className="stat-label">Total Pages</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Zap size={20} /></div>
          <div className="stat-info">
            <AnimatedCounter target={activeDomains} />
            <span className="stat-label">Active Domains</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><TrendingUp size={20} /></div>
          <div className="stat-info">
            <AnimatedCounter target={recentCount} />
            <span className="stat-label">Updated This Week</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Clock size={20} /></div>
          <div className="stat-info">
            <span className="counter-value date-value">{relativeDate(latestDate)}</span>
            <span className="stat-label">Last Activity</span>
          </div>
        </div>
      </div>

      <div className="section-header">
        <h2>Recent Intelligence</h2>
        <span className="count-pill">{sorted.length} Latest</span>
      </div>

      <div className="intel-grid">
        {sorted.map((page, i) => {
          const meta = domainMeta[page.domain] || { label: page.domain, color: '#666' }
          const key = `${page.domain}/${page.slug}`
          const isHero = i === 0

          return (
            <Link
              to={`/wiki/${page.domain}/${page.slug}`}
              key={key}
              className={`intel-card ${isHero ? 'intel-card--hero' : ''}`}
              style={{
                '--domain-color': meta.color,
                '--delay': `${i * 80}ms`
              }}
            >
              <div className="intel-card__glow" />
              <div className="intel-card__content">
                <div className="intel-card__top">
                  <span className="intel-domain-dot" style={{ background: meta.color }} />
                  <span className="intel-domain-label" style={{ color: meta.color }}>
                    {meta.label}
                  </span>
                  {page.frontmatter?.type && (
                    <span className="intel-type-badge">{page.frontmatter.type}</span>
                  )}
                </div>
                <h3 className="intel-card__title">
                  {page.frontmatter?.title || page.slug}
                </h3>
                {previews[key] && (
                  <p className="intel-card__preview">{previews[key]}</p>
                )}
                <div className="intel-card__footer">
                  <span className="intel-card__date">
                    {relativeDate(page.frontmatter?.updated || page.frontmatter?.created)}
                  </span>
                  {page.frontmatter?.tags?.length > 0 && (
                    <div className="intel-card__tags">
                      {page.frontmatter.tags.slice(0, 3).map(t => (
                        <span key={t} className="intel-tag">#{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
