export function Footer() {
  return (
    <footer className="adno-footer">
      <div className="adno-wrap">
        <div className="adno-footer__grid">
          <div>
            <a className="adno-brand" href="#top">
              <span className="adno-brand__mark">
                adno<span>·</span>para
              </span>
            </a>
            <p className="adno-footer__tag">
              Independent IT &amp; AI consulting — retrieval systems, LLM apps, and the backends behind them.
            </p>
            <p className="adno-footer__meta">
              개인사업자 · Seoul, Korea
              <br />
              hello@adnopara.com
            </p>
          </div>
          <div className="adno-footer__col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">LLM &amp; RAG systems</a>
              </li>
              <li>
                <a href="#services">Backend engineering</a>
              </li>
              <li>
                <a href="#services">AI product advisory</a>
              </li>
              <li>
                <a href="#services">Training &amp; workshops</a>
              </li>
            </ul>
          </div>
          <div className="adno-footer__col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#about">Why Adnopara</a>
              </li>
              <li>
                <a href="#approach">How we work</a>
              </li>
              <li>
                <a href="#work">What we build</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="adno-footer__col">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="mailto:hello@adnopara.com">Email</a>
              </li>
              <li>
                <a href="#top">LinkedIn</a>
              </li>
              <li>
                <a href="#top">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="adno-footer__base">
          <span>© {new Date().getFullYear()} Adnopara. All rights reserved.</span>
          <span>
            <a href="#top">Privacy</a>
            <a href="#contact">Contact</a>
          </span>
        </div>
      </div>
    </footer>
  )
}