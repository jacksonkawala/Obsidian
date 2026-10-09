import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchPage } from '../api'
import MarkdownRenderer from '../components/MarkdownRenderer'
import Frontmatter from '../components/Frontmatter'
import ChartPanel from '../components/ChartPanel'
import KanbanBoard from '../components/KanbanBoard'
import './PageView.css'

export default function PageView() {
  const { domain, slug } = useParams()
  const [page, setPage] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetchPage(domain, slug)
      .then(data => {
        if (cancelled) return
        if (data.error) throw new Error(data.error)
        setPage(data)
        setError(null)
      })
      .catch(err => {
        if (cancelled) return
        setPage(null)
        setError(err.message)
      })
    return () => {
      cancelled = true
    }
  }, [domain, slug])

  const expectedPath = `wiki/${domain}/${slug}.md`
  const isCurrentPage = page?.path === expectedPath

  if (error) {
    return (
      <div className="page-view">
        <div className="page-error">
          <h2>Page not found</h2>
          <p>{domain}/{slug}</p>
          <Link to={`/domain/${domain}`}>Back to {domain}</Link>
        </div>
      </div>
    )
  }

  if (!page || !isCurrentPage) return <div className="page-view"><p className="loading">Loading...</p></div>

  // Chart data is embedded in frontmatter as `chart` key
  const chartConfig = page.frontmatter?.chart || null
  const kanbanConfig = page.frontmatter?.kanban || null

  return (
    <div className="page-view">
      <div className="page-breadcrumb">
        <Link to={`/domain/${domain}`}>{domain}</Link>
        <span className="sep">/</span>
        <span>{page.frontmatter?.title || slug}</span>
      </div>

      <Frontmatter data={page.frontmatter} />

      {kanbanConfig && <KanbanBoard kanban={kanbanConfig} domain={domain} slug={slug} />}
      {chartConfig && <ChartPanel config={chartConfig} />}

      <MarkdownRenderer content={page.content} />
    </div>
  )
}
