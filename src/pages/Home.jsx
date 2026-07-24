import { Link } from 'react-router-dom';
import './Home.css';

const PLATFORMS = [
  {
    title: 'Auditing',
    body: 'A full review of an existing site and server, with a clear list of what to fix.',
  },
  {
    title: 'Building',
    body: 'A custom website built from the ground up, around a specific business.',
  },
  {
    title: 'Customizing',
    body: 'Branding, features, and functionality tailored to the business.',
  },
  {
    title: 'Deploying',
    body: 'Domain, hosting, and everything required to take a finished site live.',
  },
  {
    title: 'Managing',
    body: 'Ongoing updates and maintenance for a website already in place.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Kismet Code Digital</p>
            <h1 className="hero__headline">
              Custom websites for growing businesses.
            </h1>
            <p className="hero__sub">
              Every project moves through the same five stages: audited,
              built, customized, deployed, and managed, end to end.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary">
                Request a quote
              </Link>
              <Link to="/services" className="btn btn--ghost">
                View services
              </Link>
            </div>
          </div>

          <div className="hero__panel" aria-hidden="true">
            <div className="panel-card">
              <div className="panel-card__dot" />
              <div className="panel-card__row panel-card__row--wide" />
              <div className="panel-card__row" />
              <div className="panel-card__stats">
                <div className="panel-stat">
                  <span className="panel-stat__bar" style={{ height: '60%' }} />
                </div>
                <div className="panel-stat">
                  <span className="panel-stat__bar" style={{ height: '85%' }} />
                </div>
                <div className="panel-stat">
                  <span className="panel-stat__bar" style={{ height: '40%' }} />
                </div>
                <div className="panel-stat">
                  <span className="panel-stat__bar" style={{ height: '95%' }} />
                </div>
              </div>
            </div>
            <div className="panel-card panel-card--small">
              <div className="panel-card__row panel-card__row--wide" />
              <div className="panel-card__row" />
              <div className="panel-card__row" style={{ width: '60%' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="container platforms-section">
        <p className="eyebrow">The process</p>
        <h2 className="platforms-section__title">
          Five stages, one website, start to finish.
        </h2>

        <div className="platforms-grid">
          {PLATFORMS.map((platform) => (
            <div className="platform-card" key={platform.title}>
              <div className="platform-card__mark" />
              <h3>{platform.title}</h3>
              <p>{platform.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <h2>Every project starts with a conversation.</h2>
          <p>A straightforward quote, with no obligation.</p>
          <Link to="/contact" className="btn btn--primary">
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}
