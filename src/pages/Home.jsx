import { Link } from 'react-router-dom';
import CompassMark from '../components/CompassMark';
import './Home.css';

export default function Home() {
  return (
    <>
      <section className="hero">
        <span className="hero__orient hero__orient--n">
          <Link to="/work">N · Work</Link>
        </span>
        <span className="hero__orient hero__orient--e">
          <Link to="/services">E · Services</Link>
        </span>
        <span className="hero__orient hero__orient--w">
          <Link to="/about">W · About</Link>
        </span>
        <span className="hero__orient hero__orient--s">
          <Link to="/contact">S · Contact</Link>
        </span>

        <div className="hero__center">
          <CompassMark size={72} settle className="hero__mark" />
          <p className="eyebrow">Kismet Code Digital</p>
          <h1 className="hero__headline">
            Software, built<br />with intention.
          </h1>
          <p className="hero__sub">
            Custom multi-portal web applications for schools, marketplaces,
            and growing organizations — designed, built, and shipped by
            one developer in Belize.
          </p>
          <div className="hero__actions">
            <Link to="/work" className="btn btn--primary">
              See the work
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Start a project
            </Link>
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="container strip__inner">
          <div className="strip__item">
            <p className="strip__num">3</p>
            <p className="strip__label">Live platforms in production</p>
          </div>
          <div className="strip__item">
            <p className="strip__num">4+</p>
            <p className="strip__label">Distinct user roles built and shipped</p>
          </div>
          <div className="strip__item">
            <p className="strip__num">1</p>
            <p className="strip__label">Developer, start to finish</p>
          </div>
        </div>
      </section>

      <section className="intro container">
        <hr className="hairline" />
        <div className="intro__grid">
          <p className="eyebrow">Why kismet</p>
          <div className="intro__copy">
            <p>
              <em>Kismet</em> — from the Arabic <em>qisma</em>, "portion" or
              "lot" — means fate, destiny, the good fortune that arrives
              like it was always meant to. Our mark carries that alongside
              a compass for direction and a key for what gets unlocked
              along the way.
            </p>
            <Link to="/about" className="text-link">
              Read the full story →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
