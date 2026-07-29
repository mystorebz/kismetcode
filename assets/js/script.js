// Kismet Code Digital — shared site script
// Handles: contact form submission (Formspree), services modal open/close

// Replace this with the real endpoint URL from your Formspree
// dashboard (formspree.io -> your form -> Integration tab). It looks
// like: https://formspree.io/f/xxxxxxxx
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

// ---------- Contact form ----------
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const successMsg = document.getElementById('contact-success');
  const errorMsg = document.getElementById('contact-error');
  const fieldsWrapper = document.getElementById('contact-fields');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    errorMsg.classList.remove('is-visible');

    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        fieldsWrapper.style.display = 'none';
        successMsg.classList.add('is-visible');
        form.reset();
      } else {
        throw new Error('Request failed');
      }
    } catch {
      errorMsg.classList.add('is-visible');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit inquiry';
    }
  });
}

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
  initContactForm();
  initServicesModal();
});
