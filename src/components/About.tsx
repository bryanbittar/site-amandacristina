import { Reveal } from './Reveal'
import { about, site } from '../data/content'
import './about.css'

const icons: Record<string, JSX.Element> = {
  camera: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 20s-7-4.35-9.5-8.5C.8 8.2 2.3 5 5.6 5c1.9 0 3.3 1 4.4 2.6C11.1 6 12.5 5 14.4 5c3.3 0 4.8 3.2 3.1 6.5C19 15.65 12 20 12 20Z" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M13 3 5 13h5l-1 8 8-10h-5l1-8Z" />
    </svg>
  ),
  film: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M7 4v16M17 4v16M3 9h4M17 9h4M3 15h4M17 15h4" />
    </svg>
  ),
}

export function About() {
  return (
    <section id="sobre" className="about section" aria-label="Sobre">
      <div className="container about__grid">
        <Reveal className="about__media">
          <div className="aspect-box about__portrait">
            <img
              src={about.portrait}
              alt="Retrato de Amanda Cristina, storymaker e videomaker mobile"
            />
          </div>
        </Reveal>

        <div className="about__text">
          <Reveal>
            <p className="eyebrow about__eyebrow">SOBRE</p>
            <h2 className="about__title">
              {about.titleLine} <em>{about.emphasisWord}</em>
            </h2>
          </Reveal>

          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08}>
              <p className="about__paragraph">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.3} className="about__badges">
            {about.badges.map((badge) => (
              <div key={badge.label} className="about__badge">
                <span className="about__badge-icon">{icons[badge.icon]}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.4}>
            <hr className="hairline about__divider" />
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline about__cta"
            >
              {about.cta}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
