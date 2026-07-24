import { useState } from 'react';
import AlienNode from '../components/AlienNode';
import './Contact.css';

// Replace this with the real endpoint URL from your Formspree
// dashboard (formspree.io -> your form -> Integration tab). It looks
// like: https://formspree.io/f/xxxxxxxx
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="contact-page container">
      <div className="contact-intro">
        <AlienNode
          title="Let's talk"
          body="Tell us about the project"
          glowColor="#2f7dfa"
          className="contact-intro__node"
        />
        <p className="eyebrow">Request a quote</p>
        <h1>Start your project.</h1>
        <p className="contact-sub">
          Tell us about the business and the idea. A straightforward
          quote follows within one business day.
        </p>
        <a href="mailto:info@kismetcodedigital.com" className="contact-email">
          info@kismetcodedigital.com
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        {status === 'sent' ? (
          <p className="contact-success">
            Inquiry received. A response will follow at the email address provided.
          </p>
        ) : (
          <>
            <div className="contact-form__row">
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
            </div>

            <div className="contact-form__row contact-form__row--two">
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
            </div>

            <label className="contact-form__full">
              Project description
              <textarea name="message" rows="5" placeholder="A brief description of the business and the intended outcome." required />
            </label>

            {status === 'error' && (
              <p className="contact-error">
                Something went wrong sending the inquiry. Please try again, or email directly at info@kismetcodedigital.com.
              </p>
            )}

            <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Submit inquiry'}
            </button>
          </>
        )}
      </form>
    </div>
  );
}