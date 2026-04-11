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
                    // Try to navigate — the slug could be in any domain
                    navigate(`/wiki/concepts/${slug}`)
                  }}
                >
                  {children}
                </a>
              )
            }
            return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
          }
        }}
      >
        {processed}
      </ReactMarkdown>
    </div>
  )
}
