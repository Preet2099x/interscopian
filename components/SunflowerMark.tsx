export function SunflowerMark({ className = "" }: { className?: string }) {
  const petals = Array.from({ length: 12 });

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
    >
      <g transform="translate(100,100)">
        {petals.map((_, i) => {
          const angle = (360 / petals.length) * i;
          return (
            <ellipse
              key={i}
              cx="0"
              cy="-62"
              rx="16"
              ry="38"
              fill={i % 2 === 0 ? "#f5b700" : "#eea420"}
              stroke="#16130f"
              strokeWidth="4"
              transform={`rotate(${angle})`}
            />
          );
        })}
        <circle r="34" fill="#6e4a1f" stroke="#16130f" strokeWidth="5" />
        <circle r="34" fill="url(#seedPattern)" stroke="#16130f" strokeWidth="5" />
      </g>
      <defs>
        <pattern id="seedPattern" width="9" height="9" patternUnits="userSpaceOnUse">
          <rect width="9" height="9" fill="#5a3a18" />
          <circle cx="4.5" cy="4.5" r="2.1" fill="#16130f" />
        </pattern>
      </defs>
    </svg>
  );
}
