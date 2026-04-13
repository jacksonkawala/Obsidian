import {
  LineChart, Line, BarChart, Bar, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, ReferenceLine
} from 'recharts'
import './ChartPanel.css'

export default function ChartPanel({ config }) {
  if (!config || !config.data || config.data.length === 0) return null

  const { type, title, xKey, yKeys, xLabel, yLabel, data } = config

  const Chart = type === 'bar' ? BarChart : LineChart
  const DataElement = type === 'bar' ? Bar : Line

  // Angle x-axis labels when there are many categories or long labels
  const needsAngle = data.length > 6 ||
    data.some(d => String(d[xKey]).length > 8)
  const xTickAngle = needsAngle ? -35 : 0
  const bottomMargin = needsAngle ? 80 : 50

  // Detect freeboard charts — has a freeboard key + min_required key
  const freeboardYk = yKeys.find(yk => /freeboard/i.test(yk.key))
  const minRequiredYk = yKeys.find(yk => /min.*(required|req)/i.test(yk.key))
  const isFreeboardChart = type === 'bar' && freeboardYk && minRequiredYk

  return (
    <div className="chart-panel">
      {title && <h3 className="chart-title">{title}</h3>}
      <ResponsiveContainer width="100%" height={400}>
        <Chart data={data} margin={{ top: 10, right: 30, left: 20, bottom: bottomMargin }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis
            dataKey={xKey}
            stroke="var(--text-muted)"
            tick={{ fill: 'var(--text-muted)', fontSize: 11, angle: xTickAngle, textAnchor: needsAngle ? 'end' : 'middle' }}
            interval={0}
            height={needsAngle ? 60 : 30}
            label={xLabel ? { value: xLabel, position: 'insideBottom', offset: needsAngle ? -15 : -10, fill: 'var(--text)', fontSize: 12 } : undefined}
          />
          <YAxis
            stroke="var(--text-muted)"
            tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
            label={yLabel ? { value: yLabel, angle: -90, position: 'insideLeft', fill: 'var(--text)', style: { textAnchor: 'middle' } } : undefined}
          />
          <Tooltip
            contentStyle={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              color: 'var(--text-bright)',
            }}
          />
          <Legend
            verticalAlign="bottom"
            wrapperStyle={{ paddingTop: 16 }}
          />

          {isFreeboardChart ? (
            <>
              {/* Freeboard bars with conditional red coloring */}
              <Bar
                dataKey={freeboardYk.key}
                name={freeboardYk.label}
                strokeWidth={0}
              >
                {data.map((entry, i) => {
                  const fb = entry[freeboardYk.key]
                  const min = entry[minRequiredYk.key]
                  const isBreach = fb < min
                  return (
                    <Cell
                      key={i}
                      fill={isBreach ? '#ef4444' : freeboardYk.color}
                      style={isBreach ? { filter: 'drop-shadow(0 0 6px rgba(239, 68, 68, 0.7))' } : undefined}
                    />
                  )
                })}
              </Bar>
              {/* Min required as a reference line instead of bars */}
              <ReferenceLine
                y={data[0]?.[minRequiredYk.key]}
                stroke="#ef4444"
                strokeDasharray="6 3"
                strokeWidth={2}
                label={{
                  value: minRequiredYk.label,
                  position: 'right',
                  fill: '#ef4444',
                  fontSize: 11,
                }}
              />
            </>
          ) : (
            yKeys.map(yk => (
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
            ))
          )}
        </Chart>
      </ResponsiveContainer>
    </div>
  )
}
