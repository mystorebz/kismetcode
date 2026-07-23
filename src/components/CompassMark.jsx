// The signature element: a thin-line compass rose with a key at its
// center, echoing the logo's core symbolism (guidance + unlocking)
// without reusing the logo file itself. Used sparingly — hero and
// as a marker before each case study.

export default function CompassMark({ size = 64, className = '', settle = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={`${className} ${settle ? 'compass-mark--settle' : ''}`}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="46" stroke="var(--gold)" strokeWidth="1" opacity="0.55" />
      <circle cx="50" cy="50" r="34" stroke="var(--ink-navy)" strokeWidth="0.75" opacity="0.4" />

      {/* cardinal points */}
      <path d="M50 6 L54 26 L50 22 L46 26 Z" fill="var(--ink-navy)" />
      <path d="M50 94 L54 74 L50 78 L46 74 Z" fill="var(--ink-navy)" opacity="0.65" />
      <path d="M6 50 L26 46 L22 50 L26 54 Z" fill="var(--gold)" opacity="0.75" />
      <path d="M94 50 L74 46 L78 50 L74 54 Z" fill="var(--gold)" opacity="0.75" />

      {/* key at center */}
      <circle cx="50" cy="42" r="6" stroke="var(--copper)" strokeWidth="2" />
      <line x1="50" y1="48" x2="50" y2="66" stroke="var(--copper)" strokeWidth="2" />
      <line x1="50" y1="58" x2="57" y2="58" stroke="var(--copper)" strokeWidth="2" />
      <line x1="50" y1="64" x2="55" y2="64" stroke="var(--copper)" strokeWidth="2" />
    </svg>
  );
}
