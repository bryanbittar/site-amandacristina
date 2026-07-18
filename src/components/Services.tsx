import { lazy, Suspense, useRef, useState } from 'react'
import { Reveal } from './Reveal'
import { portfolioReels } from '../data/content'
import './services.css'

const ReelModal = lazy(() => import('./ReelModal').then((m) => ({ default: m.ReelModal })))

export function Services() {
  const [activeReel, setActiveReel] = useState<string | null>(null)
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([])

  return (
    <section id="servicos" className="services" aria-label="Portfólio em vídeo">
      <div className="container">
        <div className="services__reels-grid">
          {portfolioReels.map((src, i) => (
            <Reveal key={src} delay={i * 0.08} className="services__reel-item">
              <button
                className="services__reel-btn"
                onClick={() => {
                  videoRefs.current[i]?.pause()
                  setActiveReel(src)
                }}
                aria-label="Assistir vídeo em tela maior, com som"
              >
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el
                  }}
                  className="services__reel-video"
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
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
