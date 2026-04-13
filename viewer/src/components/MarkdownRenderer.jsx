import { createContext, useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { useNavigate } from 'react-router-dom'
import './MarkdownRenderer.css'

// Transform [[wikilinks]] into clickable links
function processWikilinks(text) {
  return text.replace(/\[\[([^\]]+)\]\]/g, (match, link) => {
    const slug = link.toLowerCase().replace(/\s+/g, '-')
    return `[${link}](wiki-link://${slug})`
  })
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

export default function MarkdownRenderer({ content }) {
  const navigate = useNavigate()
  const processed = processWikilinks(content || '')

  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          a({ href, children }) {
            if (href && href.startsWith('wiki-link://')) {
              const slug = href.replace('wiki-link://', '')
              return (
                <a
                  href="#"
                  className="wiki-link"
                  onClick={(e) => {
                    e.preventDefault()
                    navigate(`/wiki/concepts/${slug}`)
                  }}
                >
                  {children}
                </a>
              )
            }
            return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
          },

          // Track whether this row is about freeboard
          tr({ children, node }) {
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
          },

          // Conditionally highlight table cells
          td({ children, node }) {
            const isFreeboardRow = useContext(FreeboardRowCtx)
            const text = extractText(node).trim()

            let cellClass = ''

            // "RED" alert text anywhere in the cell
            if (/\bRED\b/.test(text)) {
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
          },
        }}
      >
        {processed}
      </ReactMarkdown>
    </div>
  )
}
