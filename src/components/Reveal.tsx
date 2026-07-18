import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section'
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reducedMotion = usePrefersReducedMotion()

  const variants: Variants = reducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.4, delay } },
      }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerGroup({ children, className, staggerDelay = 0.1 }: StaggerProps) {
  const reducedMotion = usePrefersReducedMotion()

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reducedMotion ? 0 : staggerDelay },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={container}
    >
      {children}
    </motion.div>
  )
}

export function useStaggerItemVariants(): Variants {
  const reducedMotion = usePrefersReducedMotion()
  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.4 } },
    }
  }
  return {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  }
}
