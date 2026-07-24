import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ServiceModal.css';

export default function ServiceModal({ service, onClose }) {
  useEffect(() => {
    if (!service) return;

    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="modal-mark" />
        <h2 id="modal-title">{service.title}</h2>
        <p className="modal-body">{service.detail}</p>
        <h3 className="modal-subhead">Typical capabilities</h3>
        <ul className="modal-list">
          {service.capabilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link to="/contact" className="btn btn--primary modal-cta" onClick={onClose}>
          Request a quote
        </Link>
      </div>
    </div>
  );
}
