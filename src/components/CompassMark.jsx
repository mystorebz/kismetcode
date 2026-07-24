// Signature element: a thin-line compass rose echoing the logo's
// cardinal points and center mark, refined for the dark theme.
// Used once in the hero, and as a small static node marker elsewhere.

export default function CompassMark({ size = 56, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="46" stroke="url(#compassRing)" strokeWidth="1" opacity="0.6" />
      <circle cx="50" cy="50" r="30" stroke="var(--slate)" strokeWidth="0.5" opacity="0.35" />

      <path d="M50 6 L54 26 L50 22 L46 26 Z" fill="var(--blue)" />
      <path d="M50 94 L54 74 L50 78 L46 74 Z" fill="var(--slate)" opacity="0.5" />
      <path d="M6 50 L26 46 L22 50 L26 54 Z" fill="var(--emerald)" opacity="0.85" />
      <path d="M94 50 L74 46 L78 50 L74 54 Z" fill="var(--emerald)" opacity="0.85" />

      <circle cx="50" cy="50" r="4" fill="var(--ink)" />

      <defs>
        <linearGradient id="compassRing" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="var(--blue)" />
          <stop offset="100%" stopColor="var(--emerald)" />
        </linearGradient>
      </defs>
    </svg>
  );
}