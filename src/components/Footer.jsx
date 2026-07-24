import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <hr className="hairline" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="" className="footer__logo" />
          <div>
            <p className="footer__name">Kismet Code Digital</p>
            <p className="footer__tagline">Software, built with intention.</p>
          </div>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <p className="eyebrow">Site</p>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer__col">
            <p className="eyebrow">Direct</p>
            <a href="mailto:info@kismetcodedigital.com">
              info@kismetcodedigital.com
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Kismet Code Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
