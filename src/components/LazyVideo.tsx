import { useEffect, useRef, useState } from 'react'

interface LazyVideoProps {
  src: string
  poster?: string
  className?: string
  videoRef?: (el: HTMLVideoElement | null) => void
}

export function LazyVideo({ src, poster, className, videoRef }: LazyVideoProps) {
  const wrapperRef = useRef<HTMLVideoElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={(el) => {
        wrapperRef.current = el
        videoRef?.(el)
      }}
      className={className}
      src={inView ? src : undefined}
      poster={poster}
      autoPlay={inView}
      muted
      loop
      playsInline
      preload={inView ? 'auto' : 'none'}
      aria-hidden="true"
    />
  )
}
