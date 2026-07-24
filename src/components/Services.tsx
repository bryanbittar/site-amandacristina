import { lazy, Suspense, useRef, useState } from 'react'
import { Play } from 'lucide-react'
import { Reveal } from './Reveal'
import { LazyVideo } from './LazyVideo'
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
          {portfolioReels.map((reel, i) => (
            <Reveal key={reel.video} delay={i * 0.08} className="services__reel-item">
              <button
                className="services__reel-btn"
                onClick={() => {
                  videoRefs.current[i]?.pause()
                  setActiveReel(reel.video)
                }}
                aria-label="Assistir vídeo em tela maior, com som"
              >
                <LazyVideo
                  videoRef={(el) => {
                    videoRefs.current[i] = el
                  }}
                  className="services__reel-video"
                  src={reel.video}
                  poster={reel.poster}
                />
                <span className="services__reel-play" aria-hidden="true">
                  <Play size={20} fill="currentColor" />
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
