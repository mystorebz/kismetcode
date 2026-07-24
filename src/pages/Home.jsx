import { Link } from 'react-router-dom';
import './Home.css';

const PLATFORMS = [
  {
    title: 'New business launches',
    body: 'A professional website that establishes credibility from the first visit.',
  },
  {
    title: 'Product catalogs',
    body: 'A website built around a product catalog, with browsing, ordering, and payment gateway integration.',
  },
  {
    title: 'An existing site that needs a check-up',
    body: 'A full audit of site performance, functionality, and setup, with a clear list of what to fix.',
  },
  {
    title: 'Booking & customer systems',
    body: 'Direct booking, ordering, or service requests, without manual coordination.',
  },
  {
    title: 'Operations management',
    body: 'Staff access, inventory, and order tracking built around a specific business process.',
  },
  {
    title: 'Schools & organizations',
    body: 'Member and student systems with defined access levels for administrators, staff, and end users.',
  },
  {
    title: 'Website management',
    body: 'Ongoing updates and content changes for a website already in place.',
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
              Custom software for growing businesses.
            </h1>
            <p className="hero__sub">
              Websites, product catalogs, and business management systems,
              engineered end to end for organizations that need
              software built around their actual operations.
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
        <p className="eyebrow">Platform types</p>
        <h2 className="platforms-section__title">
          Software built for a specific stage of business.
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
