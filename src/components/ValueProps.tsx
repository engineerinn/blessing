import type { ReactNode } from 'react'
import { Arrow } from './icons/Arrow'

type Value = { t: string; b: string; ico: ReactNode }

const VALUES: Value[] = [
  {
    t: 'Get AI-ready',
    b: 'Turn scattered documents and data into something a model can actually use — cleaned, chunked, embedded, and searchable, with governance you can defend.',
    ico: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 5.5 C4 4 7 3 11 3 C15 3 18 4 18 5.5 L18 16.5 C18 18 15 19 11 19 C7 19 4 18 4 16.5 Z" />
        <path d="M4 5.5 C4 7 7 8 11 8 C15 8 18 7 18 5.5 M4 11 C4 12.5 7 13.5 11 13.5 C15 13.5 18 12.5 18 11" />
      </svg>
    ),
  },
  {
    t: 'Build the product',
    b: 'RAG pipelines and LLM features wired into your app, backed by FastAPI services designed to stay fast and reliable under real traffic.',
    ico: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M8 6 L4 11 L8 16 M14 6 L18 11 L14 16" />
      </svg>
    ),
  },
  {
    t: 'Keep it trustworthy',
    b: 'Evaluation, guardrails, and observability so answers stay accurate, traceable, and safe in front of real users — not just in the demo.',
    ico: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M11 3 L18 6 V11 C18 15 15 18 11 19.5 C7 18 4 15 4 11 V6 Z" />
        <path d="M8 11 L10.5 13.5 L14.5 8.5" />
      </svg>
    ),
  },
]

export function ValueProps() {
  return (
    <section className="adno-section">
      <div className="adno-wrap">
        <div className="adno-head adno-reveal">
          <p className="adno-eyebrow">What we do</p>
          <h2 className="adno-h2">Everything you need to put AI into production.</h2>
          <p className="adno-intro">
            From raw data to a running system, we cover the whole path — and hand it back to your team ready to
            maintain.
          </p>
        </div>
        <div className="adno-values adno-reveal">
          {VALUES.map((v) => (
            <article className="adno-value" key={v.t}>
              <span className="adno-value__ico">{v.ico}</span>
              <h3 className="adno-value__t">{v.t}</h3>
              <p className="adno-value__b">{v.b}</p>
              <a className="adno-arrow" href="#services">
                Learn more <Arrow />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}