import React from 'react'
import { motion } from 'framer-motion'
import { Activity, Droplets, Ruler, AlertTriangle, TrendingDown } from 'lucide-react'
import './OperationalHUD.css'

export default function OperationalHUD({ metrics }) {
  if (!metrics) return null

  const freeboard = metrics.freeboard != null ? parseFloat(metrics.freeboard) : null
  const tarpColor = freeboard != null && freeboard < 6.5 ? 'var(--domain-tsf)' : 'var(--domain-journal)'
  const tarpStatus = freeboard != null && freeboard < 6.5 ? 'YELLOW TARP' : freeboard != null ? 'GREEN' : '—'

  return (
    <div className="operational-hud">
      <div className="hud-top">
        <motion.div 
          className="hud-stat-card"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="hud-stat-icon"><Droplets size={20} /></div>
          <div className="hud-stat-info">
            <span className="label">Pool Elevation</span>
            <span className="value">{metrics.poolElevation ?? '—'} mRL</span>
          </div>
        </motion.div>

        <motion.div 
          className="hud-stat-card"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="hud-stat-icon"><Ruler size={20} /></div>
          <div className="hud-stat-info">
            <span className="label">Freeboard</span>
            <span className="value" style={{ color: tarpColor }}>{metrics.freeboard ?? '—'} m</span>
          </div>
        </motion.div>

        <motion.div 
          className="hud-stat-card tarp-badge"
          style={{ '--tarp-color': tarpColor }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <AlertTriangle size={18} />
          <span>{tarpStatus}</span>
        </motion.div>
      </div>

      <div className="hud-bottom">
        <div className="predictive-timeline">
          <div className="timeline-header">
            <h3>Race to Capacity</h3>
            <span className="margin-days">{metrics.marginDays ?? '—'} days remaining</span>
          </div>
          <div className="progress-track">
            <motion.div 
              className="progress-bar filled"
              initial={{ width: 0 }}
              animate={{ width: `${metrics.filledPercent ?? 0}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <span className="progress-label">{metrics.filledPercent ?? '—'}% Capacity</span>
            </motion.div>
          </div>
          <div className="progress-track lift-track">
            <motion.div
              className="progress-bar lift"
              initial={{ width: 0 }}
              animate={{ width: `${metrics.lift1Progress != null ? metrics.lift1Progress * 100 : 0}%` }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            >
              <span className="progress-label">Lift 1: {metrics.lift1Progress != null ? Math.round(metrics.lift1Progress * 100) : '—'}%</span>
            </motion.div>
          </div>
        </div>

        <div className="ticker-tape">
          <div className="ticker-content">
            <TrendingDown size={14} />
            <span>Pool dropped 0.70m from 09 Apr</span>
            <Activity size={14} />
            <span>Water return strong: 25,478 m³/d</span>
            <AlertTriangle size={14} />
            <span>Liner theft confirmed in 10 Apr inspection</span>
            <TrendingDown size={14} />
            <span>Lift 1 roller bottleneck (KME2509 long-term breakdown)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
