import { useEffect, useState } from 'react'
import './header.css'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__bar">
        <a href="#inicio" className="site-header__logo" aria-label="Amanda Cristina Storymaker">
          <img src="/media/logo-pink.png" alt="Amanda Cristina Storymaker" />
        </a>
      </div>
    </header>
  )
}
