export const themes = [
  {
    id: 'midnight',
    name: 'Midnight',
    description: 'Deep blues & cool grays',
    preview: ['#0f1117', '#161922', '#60a5fa'],
    vars: {
      '--bg': '#0f1117',
      '--bg-secondary': '#161922',
      '--bg-hover': '#1e2231',
      '--bg-active': '#252a3a',
      '--border': '#2a2e3d',
      '--text': '#9ca3af',
      '--text-bright': '#e5e7eb',
      '--text-muted': '#6b7280',
      '--accent': '#60a5fa',
      '--accent-hover': '#93c5fd',
      '--accent-bg': 'rgba(96, 165, 250, 0.1)',
    },
  },
  {
    id: 'sandstone',
    name: 'Sandstone',
    description: 'Warm earth tones',
    preview: ['#1c1814', '#241f1a', '#d4915c'],
    vars: {
      '--bg': '#1c1814',
      '--bg-secondary': '#241f1a',
      '--bg-hover': '#2e2720',
      '--bg-active': '#3a312a',
      '--border': '#3e362d',
      '--text': '#b0a494',
      '--text-bright': '#e8ddd0',
      '--text-muted': '#7d7367',
      '--accent': '#d4915c',
      '--accent-hover': '#e6ae80',
      '--accent-bg': 'rgba(212, 145, 92, 0.1)',
    },
  },
  {
    id: 'eucalyptus',
    name: 'Eucalyptus',
    description: 'Muted greens & sage',
    preview: ['#121916', '#18211d', '#6dbfa0'],
    vars: {
      '--bg': '#121916',
      '--bg-secondary': '#18211d',
      '--bg-hover': '#1f2b26',
      '--bg-active': '#273530',
      '--border': '#2d3b35',
      '--text': '#94ada2',
      '--text-bright': '#d4e8e0',
      '--text-muted': '#637d72',
      '--accent': '#6dbfa0',
      '--accent-hover': '#93d4ba',
      '--accent-bg': 'rgba(109, 191, 160, 0.1)',
    },
  },
  {
    id: 'slate',
    name: 'Slate',
    description: 'Paper white, ink black',
    preview: ['#f5f5f0', '#eae9e4', '#4a5568'],
    vars: {
      '--bg': '#f5f5f0',
      '--bg-secondary': '#eae9e4',
      '--bg-hover': '#dddcd6',
      '--bg-active': '#d1d0ca',
      '--border': '#c8c7c1',
      '--text': '#4a5568',
      '--text-bright': '#1a202c',
      '--text-muted': '#838a97',
      '--accent': '#5a67d8',
      '--accent-hover': '#4351c5',
      '--accent-bg': 'rgba(90, 103, 216, 0.08)',
    },
  },
  {
    id: 'copper',
    name: 'Copper',
    description: 'Dark steel & metallic warmth',
    preview: ['#141218', '#1b1820', '#c78b6e'],
    vars: {
      '--bg': '#141218',
      '--bg-secondary': '#1b1820',
      '--bg-hover': '#242030',
      '--bg-active': '#2d283a',
      '--border': '#352f42',
      '--text': '#a8a0b4',
      '--text-bright': '#e4dff0',
      '--text-muted': '#756d85',
      '--accent': '#c78b6e',
      '--accent-hover': '#daa68e',
      '--accent-bg': 'rgba(199, 139, 110, 0.1)',
    },
  },
]

const STORAGE_KEY = 'obsidian-theme'

export function getStoredTheme() {
  const id = localStorage.getItem(STORAGE_KEY)
  return themes.find(t => t.id === id) || themes[0]
}

export function applyTheme(theme) {
  const root = document.documentElement
  for (const [prop, value] of Object.entries(theme.vars)) {
    root.style.setProperty(prop, value)
  }
  localStorage.setItem(STORAGE_KEY, theme.id)
}
