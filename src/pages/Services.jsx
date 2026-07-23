import { Link } from 'react-router-dom';
import './Services.css';

const CORE = [
  {
    title: 'Multi-portal web applications',
    body:
      'Systems where different kinds of users — owner, staff, customer, driver, parent — each get their own portal into the same real-time data. This is the core of what I build.',
  },
  {
    title: 'Business & operations software',
    body:
      'Inventory, orders, staff roles, status tracking, refunds — custom-built around how your business actually runs, not a generic template.',
  },
  {
    title: 'Education platforms',
    body:
      'Grading, rosters, parent access, and a full audit trail on every edit. Built and proven on ConnectUs, live today for real schools.',
  },
  {
    title: 'Nonprofit & event sites',
    body:
      'Donation tooling, ticketing, sponsorship pages, and content built to grow with an organization — not a static brochure site.',
  },
  {
    title: 'Firebase backend architecture',
    body:
      'Auth, data modeling, permission rules, and cloud functions — the backend work that makes multi-role systems actually secure.',
  },
  {
    title: 'Domain & hosting setup',
    body:
      'Registration, DNS, and hosting handled end to end through Namecheap or GoDaddy, so you never have to touch the technical side.',
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <section className="page-hero container">
        <p className="eyebrow">Services</p>
        <h1 className="page-hero__title">What I actually build.</h1>
        <p className="page-hero__sub">
          Every service below is something I've already shipped and can
          show you working — not a promise, a track record.
        </p>
      </section>

      <section className="container services-grid">
        {CORE.map((service) => (
          <div className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.body}</p>
          </div>
        ))}
      </section>

      <section className="container extends">
        <hr className="hairline" />
        <div className="extends__inner">
          <p className="eyebrow">Also within reach</p>
          <p className="extends__body">
            AI-powered search and product discovery — built with Gemini
            and Firestore vector search on MyStore — can extend into a
            project where it genuinely fits. Ask, and I'll show you
            exactly how it works before we scope anything.
          </p>
        </div>
      </section>

      <section className="container services-cta">
        <h2>Not sure which of these fits?</h2>
        <p>Tell me what you're trying to run, and I'll tell you honestly what it takes.</p>
        <Link to="/contact" className="btn btn--primary">
          Start a conversation
        </Link>
      </section>
    </div>
  );
}
