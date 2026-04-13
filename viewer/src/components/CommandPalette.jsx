import React, { useState, useEffect } from 'react'
import { Command } from 'cmdk'
import { useNavigate } from 'react-router-dom'
import { Search, FileText, Folder, Zap } from 'lucide-react'
import './CommandPalette.css'

export default function CommandPalette({ pages = [] }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const onSelect = (path) => {
    setOpen(false)
    navigate(path)
  }

  return (
    <Command.Dialog open={open} onOpenChange={setOpen} label="Global Command Menu">
      <div className="command-palette-container">
        <div className="command-palette-header">
          <Search size={18} className="search-icon" />
          <Command.Input placeholder="Search pages, domains, or logs..." />
        </div>

        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Navigation">
            <Command.Item onSelect={() => onSelect('/')}>
              <Zap size={16} />
              <span>Dashboard</span>
            </Command.Item>
            <Command.Item onSelect={() => onSelect('/log')}>
              <FileText size={16} />
              <span>Recent Activity Log</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Domains">
            {['tsf', 'geotech', 'water', 'kenmare', 'journal', 'cssm', 'concepts', 'synthesis'].map(d => (
              <Command.Item key={d} onSelect={() => onSelect(`/domain/${d}`)}>
                <Folder size={16} />
                <span>{d.toUpperCase()} Domain</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Wiki Pages">
            {pages.map(p => (
              <Command.Item
                key={p.path}
                onSelect={() => onSelect(`/wiki/${p.domain}/${p.slug}`)}
              >
                <div className={`domain-indicator domain-${p.domain}`} />
                <span>{p.frontmatter?.title || p.slug}</span>
                <span className="domain-label">{p.domain}</span>
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  )
}
