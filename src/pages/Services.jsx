import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceModal from '../components/ServiceModal';
import AlienNode from '../components/AlienNode';
import './Services.css';

const CORE = [
  {
    title: 'Auditing',
    body: 'A full review of an existing website and the server it runs on, covering performance, setup, and security.',
    detail:
      'An audit examines a site from two directions: how it performs (page speed, mobile-friendliness, broken links, basic search visibility) and how the underlying server and hosting are configured (domain setup, security, and whether everything is running the way it should). The result is a clear report of what is working, what needs attention, and what to prioritize.',
    capabilities: [
      'Page speed and mobile-responsiveness review',
      'Broken link and basic SEO check',
      'Server, hosting, and domain configuration review',
      'A prioritized list of recommended fixes',
    ],
  },
  {
    title: 'Building',
    body: 'A custom website built from the ground up, structured around a specific business rather than a template.',
    detail:
      'This is the initial build: structure, pages, and core functionality, designed around what the business actually needs rather than adapted from a generic template. This includes systems for managing incoming client requests and a portal experience for clients to interact with, where the project calls for it.',
    capabilities: [
      'Custom site structure and page architecture',
      'Client intake and request-handling forms',
      'Client-facing portal experiences where needed',
      'Mobile-responsive design across all devices',
    ],
  },
  {
    title: 'Customizing',
    body: 'Branding, features, and functionality tailored specifically to the business, on a new build or an existing one.',
    detail:
      'Once the core structure exists, this service shapes it around the specific business: brand colors and typography, feature additions, and adjustments that make a site feel built for one business rather than assembled from parts.',
    capabilities: [
      'Brand-specific design and styling',
      'Feature additions and adjustments',
      'Content structure tailored to the business',
      'Integration with existing tools or systems',
    ],
  },
  {
    title: 'Deploying',
    body: 'Taking a finished site live, including domain, hosting, and everything required to get it on the internet.',
    detail:
      'A finished website still needs to actually go live: registering or connecting a domain, setting up hosting, and configuring everything required for the site to be reachable, secure, and stable from day one.',
    capabilities: [
      'Domain registration and DNS configuration',
      'Hosting setup and deployment',
      'SSL and security configuration',
      'Launch-day checks before going live',
    ],
  },
  {
    title: 'Managing',
    body: 'Ongoing updates, content changes, and maintenance for a website already in place.',
    detail:
      'Once a website launches, it requires periodic updates: new content, product changes, seasonal promotions, or general maintenance. This service covers ongoing management, so changes are handled without requiring in-house technical staff.',
    capabilities: [
      'Content and product updates',
      'Routine maintenance and monitoring',
      'Minor design and layout adjustments',
      'Scheduled or on-demand update requests',
    ],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="services-page">
      <section className="page-hero container">
        <p className="eyebrow">What we build</p>
        <h1 className="page-hero__title">Five stages, one website.</h1>
        <p className="page-hero__sub">
          Every project moves through the same process, and each stage
          can be scoped on its own or as part of a full build.
        </p>
      </section>

      <section className="container services-field-section">
        <div className="services-field">
          {CORE.map((service, i) => (
            <button
              key={service.title}
              className={`services-field__node services-field__node--${i + 1}`}
              onClick={() => setActiveService(service)}
            >
              <AlienNode title={service.title} body={service.body} glowColor="#22d3ee" />
            </button>
          ))}
        </div>
      </section>

      <section className="container services-cta">
        <h2>Uncertain which stage applies?</h2>
        <p>A brief consultation determines the right scope, at no obligation.</p>
        <Link to="/contact" className="btn btn--primary">
          Request a quote
        </Link>
      </section>

      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
    </div>
  );
}