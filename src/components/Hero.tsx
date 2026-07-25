import { HeroArt } from './icons/HeroArt'

export function Hero() {
  return (
    <header className="adno-hero" id="top">
      <div className="adno-wrap adno-hero__grid">
        <div>
          <p className="adno-eyebrow">IT &amp; AI Consulting · Seoul</p>
          <h1 className="adno-hero__title">
            Trusted AI, built on <em>your</em> data.
          </h1>
          <p className="adno-hero__sub">
            Adnopara is an independent consulting practice that designs and builds retrieval-augmented systems,
            LLM-powered features, and the backends that run them — accurate, reliable, and ready for production.
          </p>
          <div className="adno-hero__cta">
            <a className="adno-btn adno-btn--primary" href="#contact">
              Book a consult
            </a>
            <a className="adno-btn adno-btn--ghost" href="#services">
              Explore our services
            </a>
          </div>
          <p className="adno-hero__note">
            <b />
            Taking new projects for Q3–Q4 2026
          </p>
        </div>
        <div className="adno-hero__art">
          <HeroArt />
        </div>
      </div>
    </header>
  )
}