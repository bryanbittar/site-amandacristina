import { footer, nav } from '../data/content'
import './footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <img
            src="/media/logo.png"
            alt="Amanda Cristina Storymaker"
            className="site-footer__logo"
          />
        </div>

        <nav className="site-footer__nav" aria-label="Navegação do rodapé">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="container site-footer__bottom">
        <hr className="hairline" />
        <div className="site-footer__bottom-row">
          <span>{footer.copyright}</span>
        </div>
      </div>
    </footer>
  )
}
