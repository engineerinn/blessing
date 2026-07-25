import { STEPS } from '../data/site'

export function Approach() {
  return (
    <section className="adno-section adno-section--mist" id="approach">
      <div className="adno-wrap">
        <div className="adno-head adno-reveal">
          <p className="adno-eyebrow">How we work</p>
          <h2 className="adno-h2">A short path from question to something running.</h2>
          <p className="adno-intro">
            Every engagement moves through the same four stages, so you always know where we are and what comes next.
          </p>
        </div>
        <div className="adno-steps adno-reveal">
          {STEPS.map((s) => (
            <div className="adno-step" key={s.n}>
              <span className="adno-step__n">{s.n}</span>
              <h3 className="adno-step__t">{s.t}</h3>
              <p className="adno-step__b">{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}