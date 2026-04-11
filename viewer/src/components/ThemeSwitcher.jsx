import { themes } from '../themes'
import './ThemeSwitcher.css'

export default function ThemeSwitcher({ currentTheme, onThemeChange }) {
  return (
    <div className="theme-switcher">
      <span className="theme-label">Theme</span>
      <div className="theme-options">
        {themes.map(theme => (
          <button
            key={theme.id}
            className={`theme-option ${currentTheme.id === theme.id ? 'active' : ''}`}
            onClick={() => onThemeChange(theme)}
            title={theme.description}
          >
            <span className="theme-swatches">
              {theme.preview.map((color, i) => (
                <span
                  key={i}
                  className="theme-swatch"
                  style={{ background: color }}
                />
              ))}
            </span>
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  )
}
