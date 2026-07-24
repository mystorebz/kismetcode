// A single floating hexagonal node with a soft glow, used for the
// five-stage process display. Built as HTML/CSS clip-path rather
// than SVG so the hexagon and its text reflow responsively.

import './AlienNode.css';

export default function AlienNode({ title, body, glowColor, className = '' }) {
  return (
    <div className={`alien-node ${className}`} style={{ '--node-glow': glowColor }}>
      <div className="alien-node__glow" aria-hidden="true" />
      <div className="alien-node__hex">
        <div className="alien-node__content">
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
}