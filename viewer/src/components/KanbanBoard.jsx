import { useState, useEffect } from 'react'
import { fetchTaskStatuses, updateTaskStatus } from '../api'
import './KanbanBoard.css'

export default function KanbanBoard({ kanban, domain, slug }) {
  const { tasks } = kanban
  const [statuses, setStatuses] = useState({})

  useEffect(() => {
    fetchTaskStatuses(domain, slug).then(setStatuses)
  }, [domain, slug])

  const toggle = async (taskId) => {
    const current = statuses[taskId]?.done || false
    const result = await updateTaskStatus(domain, slug, taskId, !current)
    if (result.statuses) setStatuses(result.statuses)
  }

  const isDone = (id) => statuses[id]?.done || false

  const todo = tasks.filter(t => !isDone(t.id))
  const done = tasks.filter(t => isDone(t.id))

  const renderCard = (task) => (
    <div key={task.id} className={`kanban-card ${isDone(task.id) ? 'done' : ''}`}>
      <button
        className={`kanban-toggle ${isDone(task.id) ? 'checked' : ''}`}
        onClick={() => toggle(task.id)}
        aria-label={isDone(task.id) ? 'Mark incomplete' : 'Mark complete'}
      >
        {isDone(task.id) ? '\u2713' : ''}
      </button>
      <div className="kanban-card-content">
        <div className="kanban-card-title">{task.title}</div>
        {task.description && <div className="kanban-card-desc">{task.description}</div>}
        {task.date && <div className="kanban-card-date">{task.date}</div>}
        {task.progress && <div className="kanban-card-progress">{task.progress}</div>}
      </div>
    </div>
  )

  return (
    <div className="kanban-board">
      <div className="kanban-column">
        <div className="kanban-column-header todo">
          <span className="kanban-column-dot" />
          To Do
          <span className="kanban-column-count">{todo.length}</span>
        </div>
        <div className="kanban-column-cards">
          {todo.map(renderCard)}
          {todo.length === 0 && <div className="kanban-empty">All done!</div>}
        </div>
      </div>
      <div className="kanban-column">
        <div className="kanban-column-header done">
          <span className="kanban-column-dot" />
          Done
          <span className="kanban-column-count">{done.length}</span>
        </div>
        <div className="kanban-column-cards">
          {done.map(renderCard)}
          {done.length === 0 && <div className="kanban-empty">Nothing yet</div>}
        </div>
      </div>
    </div>
  )
}
