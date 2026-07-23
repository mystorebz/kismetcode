import { useState } from 'react';
import CompassMark from '../components/CompassMark';
import './Contact.css';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Static-form note: wire this to Formspree, EmailJS, or a
    // serverless function once hosted — same pattern as the
    // EmailJS setup already used on ConnectUs.
    setSent(true);
  }

  return (
    <div className="contact-page container">
      <div className="contact-grid">
        <div className="contact-intro">
          <CompassMark size={48} />
          <p className="eyebrow">Contact</p>
          <h1>Tell me what you're building.</h1>
          <p className="contact-sub">
            A school system, a marketplace, an idea that doesn't have a
            home yet — send the shape of it and I'll tell you honestly
            what it takes.
          </p>
          <a href="mailto:hello@kismetcodedigital.com" className="contact-email">
            hello@kismetcodedigital.com
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {sent ? (
            <p className="contact-success">
              Sent. I'll get back to you directly at the email you gave.
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
                What are you building?
                <textarea name="message" rows="5" required />
              </label>
              <button type="submit" className="btn btn--primary">
                Send
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
