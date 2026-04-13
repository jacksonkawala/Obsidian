import React, { useEffect, useState, useRef } from 'react'
import ForceGraph3D from 'react-force-graph-3d'
import { fetchGraph } from '../api'
import { useNavigate } from 'react-router-dom'
import './KnowledgeGraph3D.css'

const domainColors = {
  journal: '#f59e0b',
  tsf: '#ef4444',
  kenmare: '#10b981',
  cssm: '#8b5cf6',
  concepts: '#60a5fa',
  geotech: '#f97316',
  water: '#0ea5e9',
  synthesis: '#ec4899',
}

export default function KnowledgeGraph3D() {
  const [data, setData] = useState({ nodes: [], links: [] })
  const navigate = useNavigate()
  const fgRef = useRef()

  useEffect(() => {
    fetchGraph().then(setData).catch(console.error)
  }, [])

  const handleNodeClick = (node) => {
    const [domain, slug] = node.id.split('/')
    navigate(`/wiki/${domain}/${slug}`)
  }

  return (
    <div className="knowledge-graph-container">
      <ForceGraph3D
        ref={fgRef}
        graphData={data}
        nodeLabel="name"
        nodeColor={n => domainColors[n.domain] || '#666'}
        nodeRelSize={6}
        linkWidth={1.5}
        linkColor={() => 'rgba(255,255,255,0.1)'}
        showNavInfo={false}
        backgroundColor="#0f1117"
        onNodeClick={handleNodeClick}
        enableNodeDrag={false}
      />
      <div className="graph-overlay">
        <h3>Knowledge Mesh</h3>
        <p>Interactive 3D view of all connections</p>
      </div>
    </div>
  )
}
