import logo from '../assets/logo.png';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <section className="page-hero container">
        <p className="eyebrow">About</p>
        <h1 className="page-hero__title">A software practice built for growing businesses.</h1>
      </section>

      <section className="container about-grid">
        <div className="about-mark">
          <img src={logo} alt="Kismet Code Digital emblem" />
        </div>

        <div className="about-copy">
          <p>
            Kismet Code Digital is a Belize-registered software practice
            specializing in custom web applications. Every engagement
            covers the full scope of a project: architecture, backend
            systems, and every user-facing screen, built around the
            operational needs of the business rather than adapted from
            a generic template.
          </p>
          <p>
            Client engagements typically involve businesses in early
            growth stages, or organizations transitioning away from
            manual processes and spreadsheets. Each project begins with
            an assessment of the actual operational requirement, with
            software scoped to match, avoiding unnecessary complexity
            or scope.
          </p>
          <p>
            Every project is scoped with a clear timeline and delivered
            directly, with no handoffs between teams and no account
            managers relaying information secondhand.
          </p>
        </div>
      </section>
    </div>
  );
}
