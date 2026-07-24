import { Link } from 'react-router-dom';
import CompassMark from '../components/CompassMark';
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
        <div className="container hero__inner">
          <CompassMark size={56} className="hero__mark" />
          <p className="eyebrow">Kismet Code Digital</p>
          <h1 className="hero__headline">
            Enterprise-grade websites,<br />built in Belize.
          </h1>
          <p className="hero__sub">
            Custom websites and business systems engineered end to
            end, for companies that need something built around how
            they actually operate.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary">
              Request a quote
            </Link>
            <Link to="/services" className="btn btn--ghost">
              What we build
            </Link>
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