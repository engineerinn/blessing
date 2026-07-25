import { SERVICES } from '../data/site'
import { Arrow } from './icons/Arrow'

export function Services() {
  return (
    <section className="adno-section adno-section--mist" id="services">
      <div className="adno-wrap">
        <div className="adno-head adno-reveal">
          <p className="adno-eyebrow">Services</p>
          <h2 className="adno-h2">How we help, concretely.</h2>
          <p className="adno-intro">
            Pick a piece or the whole build — the work fits the shape of what you&apos;re trying to ship.
          </p>
        </div>
        <div className="adno-grid adno-reveal">
          {SERVICES.map((s) => (
            <article className="adno-card" key={s.t}>
              <h3 className="adno-card__t">{s.t}</h3>
              <p className="adno-card__b">{s.b}</p>
              <a className="adno-arrow adno-card__link" href="#contact">
                Talk to us <Arrow />
              </a>
            </article>
          ))}
        </div>
        <div className="adno-cta-row adno-reveal">
          <a className="adno-btn adno-btn--primary" href="#contact">
            Book a consult
          </a>
          <a className="adno-btn adno-btn--ghost" href="#approach">
            See how we work
          </a>
        </div>
      </div>
    </section>
  )
}