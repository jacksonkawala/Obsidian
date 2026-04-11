import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts'
import './ChartPanel.css'

/*
  ChartPanel renders data visualizations based on a chart config object.

  Props:
    config: {
      type: 'line' | 'bar',
      title: string,
      xKey: string,             // key for x-axis in data
      yKeys: [                  // array of y-axis series
        { key: string, color: string, label: string }
      ],
      xLabel: string,
      yLabel: string,
      data: [ { ... }, ... ]    // array of data points
    }

  When new TSF data or other datasets are ingested, I (Claude) will update
  the page component to pass the appropriate config to this panel.
*/

export default function ChartPanel({ config }) {
  if (!config || !config.data || config.data.length === 0) return null

  const { type, title, xKey, yKeys, xLabel, yLabel, data } = config

  const Chart = type === 'bar' ? BarChart : LineChart
  const DataElement = type === 'bar' ? Bar : Line

  return (
    <div className="chart-panel">
      {title && <h3 className="chart-title">{title}</h3>}
      <ResponsiveContainer width="100%" height={360}>
        <Chart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis
            dataKey={xKey}
            stroke="var(--text-muted)"
            tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
            label={xLabel ? { value: xLabel, position: 'bottom', fill: 'var(--text)' } : undefined}
          />
          <YAxis
            stroke="var(--text-muted)"
            tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
            label={yLabel ? { value: yLabel, angle: -90, position: 'insideLeft', fill: 'var(--text)' } : undefined}
          />
          <Tooltip
            contentStyle={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              color: 'var(--text-bright)',
            }}
          />
          <Legend />
          {yKeys.map(yk => (
            <DataElement
              key={yk.key}
              type="monotone"
              dataKey={yk.key}
              stroke={yk.color}
              fill={yk.color}
              name={yk.label}
              strokeWidth={2}
              dot={type !== 'bar' ? { r: 3 } : undefined}
            />
          ))}
        </Chart>
      </ResponsiveContainer>
    </div>
  )
}
