import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { useNavigate } from 'react-router-dom'
import { fetchPages } from '../api'
import './MarkdownRenderer.css'

// Transform [[wikilinks]] into clickable links
function processWikilinks(text) {
  return text.replace(/\[\[([^\]]+)\]\]/g, (match, link) => {
    const [target, alias] = link.split('|')
    const slug = target.trim().toLowerCase().replace(/\s+/g, '-')
    const label = (alias || target).trim()
    return `[${label}](wiki-link://${slug})`
  })
}

function normaliseSlug(value) {
  return value?.toLowerCase().replace(/\s+/g, '-')
}

// Extract all text from a hast node tree
function extractText(node) {
  if (!node) return ''
  if (node.type === 'text') return node.value || ''
  if (node.children) return node.children.map(extractText).join('')
  return ''
}

// Context: is the current row a "freeboard" row?
const FreeboardRowCtx = createContext(false)

function isCriticalText(text) {
  return /\b(red alert|red|critical|urgent|overtopp(?:ed|ing)|not operational|not safe|breach|orange alert)\b/i.test(text)
}

function MarkdownTableRow({ children, node }) {
  const firstCell = node?.children?.find(
    c => c.tagName === 'td' || c.tagName === 'th'
  )
  const firstText = extractText(firstCell).toLowerCase()
  const isFreeboardRow = /freeboard/.test(firstText)

  return (
    <FreeboardRowCtx.Provider value={isFreeboardRow}>
      <tr>{children}</tr>
    </FreeboardRowCtx.Provider>
  )
}

function MarkdownTableCell({ children, node }) {
  const isFreeboardRow = useContext(FreeboardRowCtx)
  const text = extractText(node).trim()

  let cellClass = ''

  // Critical alert text anywhere in the cell
  if (isCriticalText(text)) {
    cellClass = 'alert-red-glow'
  }
  // Low freeboard value in a freeboard row
  else if (isFreeboardRow) {
    const match = text.match(/^(\d+\.?\d*)\s*m?$/)
    if (match) {
      const val = parseFloat(match[1])
      if (val < 2.0 && val >= 0) {
        cellClass = 'alert-red-glow'
      }
    }
  }

  return <td className={cellClass || undefined}>{children}</td>
}

export default function MarkdownRenderer({ content }) {
  const navigate = useNavigate()
  const [pages, setPages] = useState([])
  const processed = processWikilinks(content || '')
  const linkMap = useMemo(() => {
    const entries = new Map()
    pages.forEach(page => {
      entries.set(page.slug, page)
      const titleSlug = normaliseSlug(page.frontmatter?.title)
      if (titleSlug) entries.set(titleSlug, page)
    })
    return entries
  }, [pages])

  useEffect(() => {
    fetchPages()
      .then(pages => setPages(Array.isArray(pages) ? pages : []))
      .catch(() => setPages([]))
  }, [])

  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          h2({ children, node }) {
            const text = extractText(node).trim()
            const className = text.toLowerCase() === 'highlights' || isCriticalText(text)
              ? 'highlight-red-glow'
              : undefined
            return <h2 className={className}>{children}</h2>
          },

          h3({ children, node }) {
            const text = extractText(node).trim()
            const className = isCriticalText(text) ? 'highlight-red-glow' : undefined
            return <h3 className={className}>{children}</h3>
          },

          a({ href, children }) {
            if (href && href.startsWith('wiki-link://')) {
              const slug = href.replace('wiki-link://', '')
              const page = linkMap.get(slug)
              return (
                <a
                  href="#"
                  className="wiki-link"
                  onClick={(e) => {
                    e.preventDefault()
                    navigate(page ? `/wiki/${page.domain}/${page.slug}` : `/wiki/concepts/${slug}`)
                  }}
                >
                  {children}
                </a>
              )
            }
            return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
          },

          tr: MarkdownTableRow,
          td: MarkdownTableCell,

          strong({ children, node }) {
            const text = extractText(node).trim()
            const className = isCriticalText(text) ? 'highlight-red-glow' : undefined
            return <strong className={className}>{children}</strong>
          },
        }}
      >
        {processed}
      </ReactMarkdown>
    </div>
  )
}
