import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceModal from '../components/ServiceModal';
import './Services.css';

const CORE = [
  {
    title: 'Websites',
    body: 'A professional website, built around a specific business, including a full product catalog where needed.',
    detail:
      'A website establishes an online presence and can include a complete product catalog, allowing customers to browse and place orders directly. Payment gateway integration is set up as part of the build, connecting to a payment processor such as Stripe. A business bank account and merchant processor relationship is arranged directly between the business and its bank, and is required before payment integration can be completed.',
    capabilities: [
      'Product catalogs with categories, search, and filtering',
      'Payment gateway integration (Stripe or equivalent)',
      'Order confirmation and status updates',
      'Mobile-responsive design across all devices',
    ],
  },
  {
    title: 'Business management software',
    body: 'Inventory, orders, staff roles, and daily operations, replacing manual tracking with a dedicated system.',
    detail:
      'Many businesses reach a point where spreadsheets and manual processes no longer scale. This service replaces that manual layer with software designed around the actual workflow, including staff permissions, reporting, and audit history.',
    capabilities: [
      'Staff accounts with role-based access',
      'Inventory and stock level tracking',
      'Order and task management dashboards',
      'Activity logs for accountability',
    ],
  },
  {
    title: 'Booking & customer systems',
    body: 'Direct booking, ordering, or service requests, without manual coordination.',
    detail:
      'This service covers systems where customers interact directly, such as scheduling an appointment, placing an order, or submitting a request, with automatic confirmation and status tracking on both sides.',
    capabilities: [
      'Calendar and appointment scheduling',
      'Automated confirmation notifications',
      'Customer-facing status tracking',
      'Admin dashboard for managing requests',
    ],
  },
  {
    title: 'School & organization platforms',
    body: 'Member, student, or staff systems with defined access for administrators, staff, and end users.',
    detail:
      'Institutions such as schools, churches, and membership organizations require systems where different user types see different information. This service builds that structure with proper access control from the start.',
    capabilities: [
      'Role-based portals for administrators, staff, and members',
      'Secure authentication per user type',
      'Record-keeping with audit history',
      'Reporting dashboards for oversight',
    ],
  },
  {
    title: 'Backend & cloud architecture',
    body: 'Secure authentication, databases, and the infrastructure operating behind the visible product.',
    detail:
      'Every system above depends on infrastructure that is rarely seen but critical: how data is stored, how access is secured, and how the system holds up under real usage. This service covers that layer directly.',
    capabilities: [
      'Authentication and permission systems',
      'Database design and data modeling',
      'Cloud hosting and scaling configuration',
      'Security review of existing systems',
    ],
  },
  {
    title: 'Website management',
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
        <p className="eyebrow">Services</p>
        <h1 className="page-hero__title">A defined scope of work.</h1>
        <p className="page-hero__sub">
          Each service below can be scoped independently or combined
          into a single project.
        </p>
      </section>

      <section className="container services-grid">
        {CORE.map((service) => (
          <button
            className="service-card"
            key={service.title}
            onClick={() => setActiveService(service)}
          >
            <div className="service-card__mark" />
            <h3>{service.title}</h3>
            <p>{service.body}</p>
            <span className="service-card__more">View details →</span>
          </button>
        ))}
      </section>

      <section className="container services-cta">
        <h2>Uncertain which service applies?</h2>
        <p>A brief consultation determines the right scope, at no obligation.</p>
        <Link to="/contact" className="btn btn--primary">
          Request a quote
        </Link>
      </section>

      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
    </div>
  );
}
