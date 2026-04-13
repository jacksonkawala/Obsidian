import { NavLink } from 'react-router-dom'
import ThemeSwitcher from './ThemeSwitcher'
import './Sidebar.css'

const domains = [
  { key: 'journal', label: 'Journal', color: 'var(--domain-journal)' },
  { key: 'tsf', label: 'TSF', color: 'var(--domain-tsf)' },
  { key: 'geotech', label: 'Geotech', color: 'var(--domain-geotech)' },
  { key: 'water', label: 'Water', color: 'var(--domain-water)' },
  { key: 'kenmare', label: 'Kenmare', color: 'var(--domain-kenmare)' },
  { key: 'cssm', label: 'CSSM', color: 'var(--domain-cssm)' },
  { key: 'concepts', label: 'Concepts', color: 'var(--domain-concepts)' },
  { key: 'synthesis', label: 'Synthesis', color: 'var(--domain-synthesis)' },
]

export default function Sidebar({ currentTheme, onThemeChange }) {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <NavLink to="/" className="logo-link">
          <h1>Obsidian</h1>
          <span className="subtitle">Second Brain</span>
        </NavLink>
      </div>

      <div className="sidebar-section">
        <span className="section-label">Domains</span>
        {domains.map(d => (
          <NavLink
            key={d.key}
            to={`/domain/${d.key}`}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <span className="dot" style={{ background: d.color }} />
            {d.label}
          </NavLink>
        ))}
      </div>

      <div className="sidebar-section">
        <span className="section-label">System</span>
        <NavLink to="/log" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          Log
        </NavLink>
      </div>

      <ThemeSwitcher currentTheme={currentTheme} onThemeChange={onThemeChange} />
    </nav>
  )
}
