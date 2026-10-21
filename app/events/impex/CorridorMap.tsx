import { AMBER, mapNodes } from "./data";

// Schematic, not geographic: Lusaka as the junction, six corridor lines out.
export const CorridorMap = () => (
  <svg
    viewBox="0 0 600 370"
    role="img"
    aria-label="Schematic of the six IMPEX corridors radiating from Lusaka"
    className="h-auto w-full"
  >
    {mapNodes.map((n) => (
      <line key={n.label} x1="300" y1="190" x2={n.x} y2={n.y} stroke="#3F8F6A" strokeWidth="2.5" strokeLinecap="round" />
    ))}
    {mapNodes.map((n) => (
      <g key={n.label}>
        <circle cx={n.x} cy={n.y} r="6" fill="#3F8F6A" />
        <text
          x={n.x}
          y={n.y + (n.y < 190 ? -14 : 24)}
          textAnchor="middle"
          fontSize="12"
          fill="#FFFFFF"
          fillOpacity="0.85"
          fontFamily="var(--font-inter), sans-serif"
        >
          {n.label}
        </text>
      </g>
    ))}
    <circle cx="300" cy="190" r="12" fill={AMBER} />
    <circle cx="300" cy="190" r="20" fill="none" stroke={AMBER} strokeOpacity="0.4" />
    <text x="300" y="228" textAnchor="middle" fontSize="13" fontWeight="600" fill={AMBER} fontFamily="var(--font-poppins), sans-serif">
      Lusaka
    </text>
  </svg>
);
