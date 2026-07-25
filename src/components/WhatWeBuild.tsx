import { BUILDS } from '../data/site'

export function WhatWeBuild() {
  return (
    <section className="adno-section" id="work">
      <div className="adno-wrap">
        <div className="adno-head adno-reveal">
          <p className="adno-eyebrow">What we build</p>
          <h2 className="adno-h2">The kind of systems we&apos;re brought in for.</h2>
          <p className="adno-intro">
            A few of the shapes AI work tends to take. Yours will look a little different — that&apos;s the point of
            starting with a conversation.
          </p>
        </div>
        <div className="adno-build adno-reveal">
          {BUILDS.map((b) => (
            <div className="adno-build__item" key={b.t}>
              <h3 className="adno-build__t">{b.t}</h3>
              <p className="adno-build__b">{b.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}