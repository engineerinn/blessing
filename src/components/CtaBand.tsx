
import { Arrow } from './icons/Arrow'

export function CtaBand() {
  return (
    <section className="adno-section adno-section--ink">
      <div className="adno-wrap adno-ctaband adno-reveal">
        <div>
          <h2 className="adno-ctaband__t">Have a problem that needs AI — done right?</h2>
          <p className="adno-ctaband__p">
            Tell us what you&apos;re building. You&apos;ll get a clear, honest take on how to approach it and what it
            would take.
          </p>
        </div>
        <a className="adno-btn adno-btn--amber" href="#contact">
          Book a consult <Arrow />
        </a>
      </div>
    </section>
  )
}