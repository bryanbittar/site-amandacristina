import { Reveal } from './Reveal'
import { finalCta, whatsappUrl } from '../data/content'
import './final-cta.css'

export function FinalCTA() {
  return (
    <section id="contato" className="final-cta" aria-label="Contato">
      <div className="container final-cta__content">
        <Reveal>
          <h2 className="final-cta__title">
            {finalCta.titleLine} <em>{finalCta.emphasisWord}</em>
          </h2>
          <p className="final-cta__paragraph">{finalCta.paragraph}</p>
          <div className="final-cta__ctas">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn--whatsapp">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.11c-.24.68-1.4 1.3-1.93 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.59-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.38.27-.29.58-.36.77-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.13.63-.05.17-.18.72-.84.91-1.13.19-.29.38-.24.63-.14.26.1 1.65.78 1.93.92.29.15.48.22.55.34.07.13.07.7-.17 1.38z" />
              </svg>
              {finalCta.primaryCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
