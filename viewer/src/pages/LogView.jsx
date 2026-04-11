import { useState, useEffect } from 'react'
import { fetchLog } from '../api'
import MarkdownRenderer from '../components/MarkdownRenderer'

export default function LogView() {
  const [log, setLog] = useState(null)

  useEffect(() => {
    fetchLog().then(setLog).catch(() => {})
  }, [])

  if (!log) return <p style={{ color: 'var(--text-muted)' }}>Loading...</p>

  return (
    <div style={{ maxWidth: 800 }}>
      <h1 style={{ fontSize: '2em', marginBottom: 24 }}>Wiki Log</h1>
      <MarkdownRenderer content={log.content} />
    </div>
  )
}
