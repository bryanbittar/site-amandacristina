import { useEffect, useState } from 'react'
import { Reveal } from './Reveal'
import { testimonials } from '../data/content'
import './testimonials.css'

const CHANGE_INTERVAL = 4000

function useColumnCount() {
  const [columns, setColumns] = useState(4)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w < 640) setColumns(2)
      else if (w < 1100) setColumns(2)
      else setColumns(4)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return columns
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return isMobile
}

function splitImages(images: string[], columns: number) {
  const columnsArr: string[][] = Array.from({ length: columns }, () => [])
  images.forEach((src, i) => columnsArr[i % columns].push(src))
  return columnsArr
}

function TestimonialCard({ images, offset }: { images: string[]; offset: number }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, CHANGE_INTERVAL)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="testimonials__card" style={{ animationDelay: `${offset * 0.15}s` }}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Print de depoimento de cliente no WhatsApp"
          loading="lazy"
          className={i === index ? 'is-active' : ''}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  const columnCount = useColumnCount()
  const isMobile = useIsMobile()
  const columns = splitImages(testimonials.images, columnCount)
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    setSlide(0)
  }, [columns.length])

  useEffect(() => {
    if (!isMobile || columns.length === 0) return
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % columns.length)
    }, CHANGE_INTERVAL)
    return () => clearInterval(timer)
  }, [isMobile, columns.length])

  return (
    <section className="testimonials section" aria-label="Depoimentos">
      <div className="container">
        <Reveal className="testimonials__header">
          <p className="eyebrow testimonials__eyebrow">{testimonials.eyebrow}</p>
          <h2 className="testimonials__title">
            {testimonials.titleLine} <em>{testimonials.emphasisWord}</em>
          </h2>
        </Reveal>

        {isMobile ? (
          <div className="testimonials__slider">
            <div
              className="testimonials__track"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              {columns.map((images, i) => (
                <div className="testimonials__slide" key={i}>
                  <TestimonialCard images={images} offset={i} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="testimonials__grid">
            {columns.map((images, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <TestimonialCard images={images} offset={i} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
