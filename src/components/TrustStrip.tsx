import { TOOLS } from '../data/site'

export function TrustStrip() {
  return (
    <section className="adno-ticker-sec" aria-label="Technology stack">
      <div className="adno-wrap">
        <p className="adno-ticker-label">The stack we build on</p>
        <div className="adno-ticker">
          <div className="adno-ticker__track">
            {[...TOOLS, ...TOOLS].map((t, i) => (
              <span className="adno-tool" key={i}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}