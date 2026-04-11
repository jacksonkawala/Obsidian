import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import DomainView from './pages/DomainView'
import PageView from './pages/PageView'
import LogView from './pages/LogView'
import { getStoredTheme, applyTheme } from './themes'
import './App.css'

function App() {
  const [theme, setTheme] = useState(getStoredTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
  }

  return (
    <div className="app">
      <Sidebar currentTheme={theme} onThemeChange={handleThemeChange} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/domain/:domain" element={<DomainView />} />
          <Route path="/wiki/:domain/:slug" element={<PageView />} />
          <Route path="/log" element={<LogView />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
