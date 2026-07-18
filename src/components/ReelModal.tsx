import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import './reel-modal.css'

interface ReelModalProps {
  src: string
  onClose: () => void
}

export function ReelModal({ src, onClose }: ReelModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), video, [tabindex]:not([tabindex="-1"])',
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return createPortal(
    <motion.div
      className="reel-modal__backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <motion.div
        className="reel-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Vídeo em destaque"
        ref={dialogRef}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          className="reel-modal__close"
          onClick={onClose}
          aria-label="Fechar vídeo"
          ref={closeBtnRef}
        >
          <X size={24} aria-hidden="true" />
        </button>

        <div className="reel-modal__media">
          <video src={src} controls autoPlay playsInline preload="none">
            <track kind="captions" />
          </video>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  )
}
