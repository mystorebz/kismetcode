import logo from '../assets/logo.png';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <section className="page-hero container">
        <p className="eyebrow">About</p>
        <h1 className="page-hero__title">The name, and what it means.</h1>
      </section>

      <section className="container about-grid">
        <div className="about-mark">
          <img src={logo} alt="Kismet Code Digital emblem" />
        </div>

        <div className="about-copy">
          <h2>Kismet</h2>
          <p>
            The word comes from the Arabic <em>qisma</em> — "portion," or
            "lot" — carried into English through Turkish in the early
            1800s as a word for fate, destiny, the good fortune that
            arrives feeling like it was always meant to happen. It's a
            plain, centuries-old word. No occult tradition behind it —
            just a name for the moments that feel like they lined up on
            their own.
          </p>
          <p>
            That's the feeling I want a client to have when the right
            project meets the right build: not luck exactly, but close
            enough to it.
          </p>

          <h2>The mark</h2>
          <p>
            The compass at the center is for direction — the sense of
            being guided somewhere, not just handed a product. The
            knotwork woven through it doesn't have a clean start or end;
            it's meant to read as care and continuity, the kind of
            attention that goes into something built to last.
          </p>
          <p>
            At the very center sits a key, with the binary <em>0110</em>
            beside it — the plainest part of the whole design.
            A key unlocks. That's the job: taking whatever is closed —
            a broken process, a business running on spreadsheets, an
            idea with nowhere to live yet — and opening it into
            something that works.
          </p>

          <h2>The work itself</h2>
          <p>
            Kismet Code Digital is a Belize-registered software
            practice. Every project on the <a href="/work">Work</a> page
            is live, in production, and something I built end to end —
            architecture, backend, every portal. One developer, real
            software, built with intention.
          </p>
        </div>
      </section>
    </div>
  );
}
