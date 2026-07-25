import { useRef, useState } from 'react'
import { Arrow } from './icons/Arrow'

type FormState = { name: string; company: string; message: string }

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', company: '', message: '' })
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const sendEmail = () => {
    if (!form.message.trim()) {
      messageRef.current?.focus()
      return
    }
    const subject = encodeURIComponent(`Project inquiry${form.company ? ' — ' + form.company : ''}`)
    const lines = [
      form.name && `Name: ${form.name}`,
      form.company && `Company: ${form.company}`,
      '',
      form.message,
    ].filter((l): l is string => Boolean(l) || l === '')
    window.location.href = `mailto:hello@adnopara.com?subject=${subject}&body=${encodeURIComponent(lines.join('\n'))}`
  }

  return (
    <section className="adno-section adno-section--mist" id="contact">
      <div className="adno-wrap adno-contact">
        <div className="adno-contact__aside adno-reveal">
          <p className="adno-eyebrow">Start here</p>
          <h2 className="adno-h2">Let&apos;s talk about your project.</h2>
          <p>
            Send a few lines about the problem and where it&apos;s stuck. You&apos;ll get back a short note on how
            we&apos;d approach it and what it would take — no obligation.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            Prefer email?{' '}
            <a className="adno-mail" href="mailto:hello@adnopara.com">
              hello@adnopara.com
            </a>
          </p>
        </div>
        <div className="adno-form adno-reveal">
          <div className="adno-field adno-field--two">
            <div className="adno-field">
              <label className="adno-label" htmlFor="c-name">
                Name
              </label>
              <input
                id="c-name"
                className="adno-input"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="adno-field">
              <label className="adno-label" htmlFor="c-co">
                Company
              </label>
              <input
                id="c-co"
                className="adno-input"
                type="text"
                placeholder="Optional"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </div>
          </div>
          <div className="adno-field">
            <label className="adno-label" htmlFor="c-msg">
              What are you building?
            </label>
            <textarea
              id="c-msg"
              ref={messageRef}
              className="adno-textarea"
              placeholder="A sentence or two about the problem, your data, and where things are stuck."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <div>
            <button className="adno-btn adno-btn--primary" onClick={sendEmail}>
              Send email <Arrow />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}