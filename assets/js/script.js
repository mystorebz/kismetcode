// Kismet Code Digital — shared site script
// Handles: shared header/footer, contact form submission (Formspree),
// services modal open/close

// ==========================================================
// SHARED HEADER & FOOTER
// ==========================================================
// The nav bar and footer used to be copy-pasted into every HTML
// file. That meant changing a single link meant editing 7+ files
// by hand. Now they exist ONCE, right here, as plain strings. Every
// page just needs two empty placeholder elements in its markup:
//   <div id="site-header"></div>   (right after <body>)
//   <div id="site-footer"></div>   (right before </body>)
// and this script fills them in on load.
//
// TO ADD SOMETHING THAT SHOULD APPEAR ON EVERY PAGE (a new nav
// link, a new footer column, a newsletter signup block, etc.):
// edit SITE_HEADER_HTML or SITE_FOOTER_HTML below, ONE TIME. Every
// page picks up the change automatically. Nothing else needs to
// change, on any page, ever, for that kind of update.

const SITE_HEADER_HTML = `
  <header class="nav">
    <div class="container nav__inner">
      <a href="/index.html" class="nav__brand">
        <img src="/assets/images/logo.png" alt="Kismet Code Digital" class="nav__logo" />
        <span class="nav__wordmark">Kismet Code Digital</span>
      </a>
      <nav class="nav__links" aria-label="Primary">
        <a href="/index.html" class="nav__link" data-nav-key="index">Home</a>
        <a href="/services.html" class="nav__link" data-nav-key="services">Services</a>
        <a href="/about.html" class="nav__link" data-nav-key="about">About</a>
        <a href="/contact.html" class="nav__cta">Start a project</a>
      </nav>
    </div>
  </header>
`;

const SITE_FOOTER_HTML = `
  <footer class="footer">
    <hr class="hairline" />
    <div class="container footer__inner">
      <div class="footer__brand">
        <img src="/assets/images/logo.png" alt="" class="footer__logo" />
        <div>
          <p class="footer__name">Kismet Code Digital</p>
          <p class="footer__tagline">Software, built with intention.</p>
        </div>
      </div>
      <div class="footer__cols">
        <div class="footer__col">
          <p class="eyebrow">Site</p>
          <a href="/services.html">Services</a>
          <a href="/about.html">About</a>
          <a href="/contact.html">Contact</a>
        </div>
        <div class="footer__col">
          <p class="eyebrow">Legal</p>
          <a href="/terms.html">Terms of Service</a>
          <a href="/privacy.html">Privacy Policy</a>
        </div>
        <div class="footer__col">
          <p class="eyebrow">Direct</p>
          <a href="mailto:info@kismetcodedigital.com">info@kismetcodedigital.com</a>
        </div>
      </div>
    </div>
    <div class="container">
      <p class="footer__copyright">&copy; 2026 Kismet Code Digital. All rights reserved.</p>
    </div>
  </footer>
`;

// Figures out which page is currently open, by filename, so the
// matching nav link can get the active-state underline. The root
// path ("/", no filename) counts as the home page.
function getCurrentPageKey() {
  const filename = window.location.pathname.split('/').pop();
  if (!filename || filename === '') return 'index';
  return filename.replace('.html', '');
}

function injectSharedHeaderFooter() {
  const headerSlot = document.getElementById('site-header');
  const footerSlot = document.getElementById('site-footer');

  if (headerSlot) {
    headerSlot.innerHTML = SITE_HEADER_HTML;

    // Mark the current page's nav link active, matching whatever
    // page is actually loaded.
    const currentKey = getCurrentPageKey();
    const activeLink = headerSlot.querySelector(`[data-nav-key="${currentKey}"]`);
    if (activeLink) activeLink.classList.add('nav__link--active');
  }

  if (footerSlot) {
    footerSlot.innerHTML = SITE_FOOTER_HTML;
  }
}

// NOTE: contact.html has its own inline contact-form submission
// logic (EmailJS-based, initContactFormEmailJS), since that page
// needs project-specific field handling (phone, project type,
// budget) folded into the message before sending. That logic stays
// on that page rather than living here, to avoid two different
// submit handlers both trying to attach to the same #contact-form.

// ---------- Services modal ----------
const SERVICE_DETAILS = {
  auditing: {
    title: 'Auditing',
    body: 'An audit examines a site from two directions: how it performs (page speed, mobile-friendliness, broken links, basic search visibility) and how the underlying server and hosting are configured (domain setup, security, and whether everything is running the way it should). The result is a clear report of what is working, what needs attention, and what to prioritize.',
    capabilities: [
      'Page speed and mobile-responsiveness review',
      'Broken link and basic SEO check',
      'Server, hosting, and domain configuration review',
      'A prioritized list of recommended fixes',
    ],
  },
  building: {
    title: 'Building Websites & Platforms',
    body: 'This is the initial build: structure, pages, and core functionality, designed around what the business actually needs rather than adapted from a generic template. For businesses that need more than a single site, this also covers full platforms — multi-portal systems with separate admin, staff, and customer-facing experiences, all built on the same underlying foundation.',
    capabilities: [
      'Custom site structure and page architecture',
      'Multi-portal platforms (admin, staff, and customer-facing)',
      'Client intake and request-handling forms',
      'Client-facing portal experiences where needed',
      'Mobile-responsive design across all devices',
    ],
  },
  customizing: {
    title: 'Customizing',
    body: 'Once the core structure exists, this service shapes it around the specific business: brand colors and typography, feature additions, and adjustments that make a site feel built for one business rather than assembled from parts.',
    capabilities: [
      'Brand-specific design and styling',
      'Feature additions and adjustments',
      'Content structure tailored to the business',
      'Integration with existing tools or systems',
    ],
  },
  deploying: {
    title: 'Deploying',
    body: 'A finished website still needs to actually go live: registering or connecting a domain, setting up hosting, and configuring everything required for the site to be reachable, secure, and stable from day one.',
    capabilities: [
      'Domain registration and DNS configuration',
      'Hosting setup and deployment',
      'SSL and security configuration',
      'Launch-day checks before going live',
    ],
  },
  managing: {
    title: 'Managing',
    body: 'Once a website launches, it requires periodic updates: new content, product changes, seasonal promotions, or general maintenance. This service covers ongoing management, so changes are handled without requiring in-house technical staff.',
    capabilities: [
      'Content and product updates',
      'Routine maintenance and monitoring',
      'Minor design and layout adjustments',
      'Scheduled or on-demand update requests',
    ],
  },
};

function openServiceModal(key) {
  const detail = SERVICE_DETAILS[key];
  if (!detail) return;

  document.getElementById('modal-title').textContent = detail.title;
  document.getElementById('modal-body').textContent = detail.body;

  const list = document.getElementById('modal-list');
  list.innerHTML = '';
  detail.capabilities.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });

  const overlay = document.getElementById('service-modal');
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
  const overlay = document.getElementById('service-modal');
  overlay.classList.remove('is-open');
  document.body.style.overflow = '';
}

function initServicesModal() {
  const overlay = document.getElementById('service-modal');
  if (!overlay) return;

  document.querySelectorAll('[data-service-key]').forEach((btn) => {
    btn.addEventListener('click', () => openServiceModal(btn.dataset.serviceKey));
  });

  document.getElementById('modal-close').addEventListener('click', closeServiceModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeServiceModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeServiceModal();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  injectSharedHeaderFooter();
  initServicesModal();
});
