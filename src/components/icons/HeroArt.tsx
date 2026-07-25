type Doc = { x: number; y: number; on: boolean }

const DOCS: Doc[] = [
  { x: 300, y: 78, on: true },
  { x: 250, y: 150, on: true },
  { x: 372, y: 138, on: false },
  { x: 342, y: 214, on: true },
  { x: 438, y: 200, on: false },
  { x: 300, y: 286, on: true },
  { x: 404, y: 300, on: false },
]

const QUERY = { x: 116, y: 200 }

export function HeroArt() {
  return (
    <svg
      width="500"
      height="400"
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <rect x="8" y="16" width="484" height="368" rx="20" fill="#eef4f5" stroke="#d7e3e5" />
      {DOCS.map((d, i) => (
        <line
          key={'l' + i}
          x1={QUERY.x}
          y1={QUERY.y}
          x2={d.x + 15}
          y2={d.y + 11}
          stroke={d.on ? '#e0912f' : '#c2ced0'}
          strokeWidth={d.on ? 1.6 : 1}
          strokeOpacity={d.on ? 0.6 : 0.5}
        />
      ))}
      {DOCS.map((d, i) => (
        <g key={'d' + i}>
          {d.on && (
            <rect
              x={d.x - 4}
              y={d.y - 4}
              width="38"
              height="30"
              rx="7"
              fill="none"
              stroke="#e0912f"
              strokeOpacity="0.28"
            />
          )}
          <rect
            x={d.x}
            y={d.y}
            width="30"
            height="22"
            rx="4.5"
            fill={d.on ? '#fbeed9' : '#ffffff'}
            stroke={d.on ? '#e0912f' : '#c4d0d2'}
            strokeWidth="1.4"
          />
          <line
            x1={d.x + 6}
            y1={d.y + 8}
            x2={d.x + 24}
            y2={d.y + 8}
            stroke={d.on ? '#c9821f' : '#c4d0d2'}
            strokeWidth="1.4"
          />
          <line
            x1={d.x + 6}
            y1={d.y + 14}
            x2={d.x + 19}
            y2={d.y + 14}
            stroke={d.on ? '#c9821f' : '#c4d0d2'}
            strokeWidth="1.4"
          />
        </g>
      ))}
      <circle cx={QUERY.x} cy={QUERY.y} r="20" fill="#e0912f" fillOpacity="0.12" />
      <circle cx={QUERY.x} cy={QUERY.y} r="9" fill="#e0912f" />
      <circle cx={QUERY.x} cy={QUERY.y} r="3.4" fill="#fff" />
      <text
        x={QUERY.x}
        y={QUERY.y + 40}
        textAnchor="middle"
        fontFamily="'IBM Plex Mono', monospace"
        fontSize="11"
        fill="#45595f"
      >
        query
      </text>
      <text x="352" y="352" textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize="11" fill="#a65e14">
        retrieved · ranked
      </text>
    </svg>
  )
}