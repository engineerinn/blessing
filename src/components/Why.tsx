import { WHY } from '../data/site'

export function Why() {
  return (
    <section className="adno-section" id="about">
      <div className="adno-wrap">
        <div className="adno-head adno-reveal">
          <p className="adno-eyebrow">Why Adnopara</p>
          <h2 className="adno-h2">A senior engineer, not an agency.</h2>
          <p className="adno-intro">
            Small by design. You work directly with the person building the thing — grounded in real engineering, and
            equally at home with Korean and international teams.
          </p>
        </div>
        <div className="adno-why adno-reveal">
          {WHY.map((w) => (
            <div className="adno-why__item" key={w.lead}>
              <p className="adno-why__lead">{w.lead}</p>
              <p className="adno-why__b">{w.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}