import { lazy, Suspense, useRef, useState } from 'react'
import { Reveal } from './Reveal'
import { selectedWorks, services } from '../data/content'
import './selected-works.css'
import './services.css'

const ReelModal = lazy(() => import('./ReelModal').then((m) => ({ default: m.ReelModal })))

export function SelectedWorks() {
  const [activeReel, setActiveReel] = useState<string | null>(null)
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([])

  return (
    <section id="trabalhos" className="works section" aria-label="Trabalhos selecionados">
      <div className="container">
        <Reveal className="services__header">
          <p className="eyebrow services__eyebrow">SERVIÇOS</p>
          <h2 className="services__title">{services.title}</h2>
        </Reveal>

        <div className="services__list">
          {services.items.map((item) => (
            <div key={item.number} className="services__item">
              <span className="services__item-number">{item.number}</span>
              <h3 className="services__item-title">{item.title}</h3>
              <p className="services__item-description">{item.description}</p>
              {item.extra && <p className="services__item-extra">{item.extra}</p>}
            </div>
          ))}
        </div>

        <div className="works__grid">
          {selectedWorks.items.map((work, i) => (
            <Reveal
              key={work.id}
              delay={i * 0.08}
              className={`works__item works__item--${work.layout}`}
            >
              <button
                className="works__media-btn"
                onClick={() => {
                  videoRefs.current[i]?.pause()
                  setActiveReel(work.video)
                }}
                aria-label="Assistir vídeo em tela maior, com som"
              >
                <span className="aspect-box works__aspect">
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el
                    }}
                    className="works__video"
                    src={work.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                  />
                  <span className="works__scrim" aria-hidden="true" />
                  <span className="works__play" aria-hidden="true" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeReel && (
        <Suspense fallback={null}>
          <ReelModal src={activeReel} onClose={() => setActiveReel(null)} />
        </Suspense>
      )}
    </section>
  )
}
