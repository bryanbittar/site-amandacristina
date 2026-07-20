import { motion } from 'framer-motion'
import { MessageCircle, Play } from 'lucide-react'
import { hero, whatsappUrl } from '../data/content'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import './hero.css'

export function Hero() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section id="inicio" className="hero" aria-label="Abertura">
      <div className="hero__media">
        {hero.videos.map((src) => (
          <video
            key={src}
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container">
        <motion.h1
          className="hero__title"
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {hero.titleLines[0]}
          <br />
          {hero.titleLines[1].split(hero.emphasisWord)[0]}
          <em>{hero.emphasisWord}</em>
        </motion.h1>

        <motion.p
          className="hero__subtext"
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
        >
          {hero.subtext}
        </motion.p>

        <motion.div
          className="hero__ctas"
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
        >
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn--primary">
            <MessageCircle size={18} aria-hidden="true" />
            {hero.primaryCta.label}
          </a>
          <a href={hero.secondaryCta.target} className="btn btn--outline-light">
            <Play size={16} aria-hidden="true" />
            {hero.secondaryCta.label}
          </a>
        </motion.div>
      </div>

      <a href="#trabalhos" className="hero__scroll" aria-label="Rolar para a próxima seção">
        <span className="hero__scroll-dot" />
      </a>
    </section>
  )
}
