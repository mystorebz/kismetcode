import CompassMark from '../components/CompassMark';
import './Work.css';

const PROJECTS = [
  {
    name: 'ConnectUs',
    domain: 'connectusonline.org',
    href: 'https://connectusonline.org',
    summary:
      'A multi-school education platform giving admins, teachers, and families real-time access to grades and progress.',
    proves:
      'Multi-tenant data isolation, PIN-based role auth, and a full audit trail — every grade edit logged with a reason and timestamp.',
    roles: ['Admin', 'Teacher', 'Student & Parent'],
  },
  {
    name: 'MyStore',
    domain: 'mystore.bz',
    href: 'https://mystore.bz',
    summary:
      "Belize's grocery and household delivery marketplace, connecting shoppers, local stores, and delivery drivers.",
    proves:
      'A shared architecture serving three distinct portals, live order tracking, driver reassignment logic, and AI-powered product search.',
    roles: ['Customer', 'Store', 'Delivery Driver'],
  },
  {
    name: 'Hope Gala',
    domain: 'hopegala.bz',
    href: 'https://hopegala.bz',
    summary:
      'The digital home of The Belize Project, a community ministry, and its annual fundraising gala.',
    proves:
      'Donation and event tooling — ticketing, sponsorship, and a content architecture built for a growing nonprofit.',
    roles: ['Visitor', 'Donor', 'Sponsor'],
  },
];

export default function Work() {
  return (
    <div className="work-page">
      <section className="page-hero container">
        <p className="eyebrow">Work</p>
        <h1 className="page-hero__title">Three platforms, live and running.</h1>
        <p className="page-hero__sub">
          Each one built end to end — architecture, auth, and every
          portal a different kind of user actually uses.
        </p>
      </section>

      <section className="container projects">
        {PROJECTS.map((project) => (
          <article className="project" key={project.name}>
            <div className="project__mark">
              <CompassMark size={40} />
            </div>
            <div className="project__body">
              <div className="project__head">
                <h2>{project.name}</h2>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__link"
                >
                  {project.domain} ↗
                </a>
              </div>
              <p className="project__summary">{project.summary}</p>
              <div className="project__roles">
                {project.roles.map((role) => (
                  <span className="chip" key={role}>
                    {role}
                  </span>
                ))}
              </div>
              <p className="project__proves">
                <span className="eyebrow">What it proves</span>
                {project.proves}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
