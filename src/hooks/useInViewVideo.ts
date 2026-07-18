import { useEffect, useRef } from 'react'

/**
 * Retorna um ref para anexar a um <video>. O vídeo é pausado automaticamente
 * quando sai da viewport e retomado quando volta a ficar visível,
 * evitando consumo desnecessário de recursos fora de tela.
 */
export function useInViewVideo<T extends HTMLVideoElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.play().catch(() => {})
          } else {
            el.pause()
          }
        })
      },
      { threshold: 0.25 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
