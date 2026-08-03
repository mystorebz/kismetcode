// Kismet Code Digital — shared site script
// Handles: shared header/footer, contact form submission (Formspree),
// services modal open/close, CMS-editable page content

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
//
// NOTE: header/footer aren't wired into the CMS content system yet —
// they're still hand-edited strings here. Same pattern (a list widget
// for nav links and footer columns) can be applied to these later,
// the same way it's applied to the homepage's capability cards below.

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

// ==========================================================
// PAGE CONTENT (CMS-EDITABLE)
// ==========================================================
// Each page's editable content — headlines, paragraphs, cards, and
// whether an optional section is shown at all — lives in its own
// JSON file under assets/content/ (e.g. assets/content/index.json
// for the homepage). On load, this fetches that page's JSON (using
// getCurrentPageKey() above to know which file) and drops the
// values into the matching elements.
//
// The HTML on every page keeps its ORIGINAL hardcoded text as a
// fallback. If the JSON ever fails to load, the page still displays
// correctly — it just won't reflect the latest edit until that's
// fixed. Nothing ever renders blank.
//
// Two small reusable helpers do most of the work:
//   setText(id, value)            — fills in one field's text
//   setLink(id, text, href)       — fills in a link's text + href
//   toggleSection(id, shouldShow) — shows/hides an entire optional
//                                   block (a "Show this section?"
//                                   switch in the CMS)
// Each page then gets its own render function (e.g. renderHomePage)
// that maps THAT page's JSON fields onto THAT page's element ids,
// using the three helpers above. As each additional page gets this
// treatment, add its render function and one line to PAGE_RENDERERS.

function setText(elementId, value) {
  const el = document.getElementById(elementId);
  if (el && value !== undefined && value !== null) {
    el.textContent = value;
  }
}

function setLink(elementId, text, href) {
  const el = document.getElementById(elementId);
  if (!el) return;
  if (text !== undefined && text !== null) el.textContent = text;
  if (href !== undefined && href !== null) el.setAttribute('href', href);
}

function toggleSection(elementId, shouldShow) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.style.display = shouldShow === false ? 'none' : '';
}

function renderHomePage(content) {
  if (!content) return;

  // ---- Hero (always visible; text fields only, no show/hide) ----
  if (content.hero) {
    setText('hero-eyebrow', content.hero.eyebrow);
    setText('hero-headline-line1', content.hero.headlineLine1);
    setText('hero-headline-line2', content.hero.headlineLine2);
    setText('hero-subtext', content.hero.subtext);
    setLink('hero-btn-primary', content.hero.primaryButtonText, content.hero.primaryButtonLink);
    setLink('hero-btn-secondary', content.hero.secondaryButtonText, content.hero.secondaryButtonLink);
  }

  // ---- "The difference" intro heading (always visible; text only —
  // it introduces the two blocks below, so it isn't independently
  // hideable the way those two are) ----
  if (content.platformsIntro) {
    setText('platforms-eyebrow', content.platformsIntro.eyebrow);
    setText('platforms-title', content.platformsIntro.title);
  }

  // ---- Contrast block: removable as a whole section ----
  if (content.contrast) {
    toggleSection('section-contrast', content.contrast.show);
    setText('contrast-old-label', content.contrast.oldLabel);
    setText('contrast-old-heading', content.contrast.oldHeading);
    setText('contrast-old-body', content.contrast.oldBody);
    setText('contrast-new-label', content.contrast.newLabel);
    setText('contrast-new-heading', content.contrast.newHeading);
    setText('contrast-new-body', content.contrast.newBody);
  }

  // ---- Capability grid: removable as a whole section, AND its
  // cards are a real list (each one deletable/addable on its own),
  // not three fixed slots. The icon letter isn't stored anywhere —
  // it's just the card title's first letter, so there's one less
  // field for an editor to worry about getting right. ----
  if (content.capabilityGrid) {
    const gridEl = document.getElementById('section-capability-grid');
    const cards = Array.isArray(content.capabilityGrid.cards) ? content.capabilityGrid.cards : [];
    const shouldShow = content.capabilityGrid.show !== false && cards.length > 0;
    toggleSection('section-capability-grid', shouldShow);

    if (gridEl && shouldShow) {
      gridEl.innerHTML = cards.map((card) => {
        const icon = (card.title || '?').trim().charAt(0).toUpperCase();
        return `
          <div class="capability-card">
            <div class="capability-card__icon">${icon}</div>
            <h3 class="capability-card__title">${card.title || ''}</h3>
            <p class="capability-card__body">${card.body || ''}</p>
          </div>
        `;
      }).join('');
    }
  }

  // ---- Link beneath the grid (always visible; text only) ----
  if (content.platformsLink) {
    setLink('platforms-link', content.platformsLink.text, content.platformsLink.link);
  }

  // ---- CTA band: removable as a whole section ----
  if (content.ctaBand) {
    toggleSection('section-cta-band', content.ctaBand.show);
    setText('cta-heading', content.ctaBand.heading);
    setText('cta-body', content.ctaBand.body);
    setLink('cta-button', content.ctaBand.buttonText, content.ctaBand.buttonLink);
  }
}

// Maps a page key (from getCurrentPageKey()) to the render function
// that knows how to apply that page's JSON to that page's DOM. Add
// one entry here for each page as it gets the same treatment —
// e.g. services: renderServicesPage, about: renderAboutPage, etc.
const PAGE_RENDERERS = {
  index: renderHomePage,
};

async function loadPageContent() {
  const pageKey = getCurrentPageKey();
  const renderer = PAGE_RENDERERS[pageKey];
  if (!renderer) return; // this page doesn't have CMS-editable content yet

  try {
    const response = await fetch(`/assets/content/${pageKey}.json`);
    if (!response.ok) return; // fallback text already on the page stays as-is
    const content = await response.json();
    renderer(content);
  } catch (err) {
    // Fetch or parsing failed — silently keep the fallback text
    // that's already hardcoded in the HTML rather than breaking
    // the page.
    console.warn('Could not load page content JSON:', err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  injectSharedHeaderFooter();
  initServicesModal();
  loadPageContent();
});
