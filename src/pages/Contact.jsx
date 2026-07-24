import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this to Formspree, EmailJS, or a serverless function
    // once hosted, so submissions arrive at an actual inbox.
    setSent(true);
  }

  return (
    <div className="contact-page container">
      <div className="contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">Request a quote</p>
          <h1>Project inquiries.</h1>
          <p className="contact-sub">
            A brief description of the project below results in a
            straightforward quote, typically within one business day.
          </p>
          <a href="mailto:info@kismetcodedigital.com" className="contact-email">
            info@kismetcodedigital.com
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {sent ? (
            <p className="contact-success">
              Inquiry received. A response will follow at the email address provided.
            </p>
          ) : (
            <>
              <label>
                Name
                <input type="text" name="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                Phone number
                <input type="tel" name="phone" required />
              </label>
              <label>
                Project type
                <select name="projectType" required defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option value="new-website">A new website</option>
                  <option value="online-store">An online store</option>
                  <option value="booking-system">A booking or ordering system</option>
                  <option value="business-software">Business management software</option>
                  <option value="fix-existing">An existing site or system</option>
                  <option value="not-sure">Undetermined</option>
                </select>
              </label>
              <label>
                Estimated budget
                <select name="budget" required defaultValue="">
                  <option value="" disabled>Select a range</option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1500">$500 to $1,500</option>
                  <option value="1500-5000">$1,500 to $5,000</option>
                  <option value="not-sure">Undetermined</option>
                </select>
              </label>
              <label>
                Project description
                <textarea name="message" rows="4" placeholder="A brief description of the business and the intended outcome." required />
              </label>
              <button type="submit" className="btn btn--primary">
                Submit inquiry
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
