import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Nav.css';

const LINKS = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
];

export default function Nav() {
  const location = useLocation();

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="nav__brand">
          <img src={logo} alt="Kismet Code Digital" className="nav__logo" />
          <span className="nav__wordmark">
            Kismet Code <em>Digital</em>
          </span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={
                location.pathname === link.to
                  ? 'nav__link nav__link--active'
                  : 'nav__link'
              }
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="nav__cta">
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
