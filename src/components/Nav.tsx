import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const sections = navLinks
        .map((link) => document.getElementById(link.id))
        .filter(Boolean) as HTMLElement[]
      const offset = window.scrollY + 120
      let current = 'home'
      for (const section of sections) {
        if (section.offsetTop <= offset) current = section.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="nav-logo" href="#home" onClick={(e) => { e.preventDefault(); go('home') }}>
          Khaja<span>.</span>
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={active === link.id ? 'active' : undefined}
                  onClick={(e) => {
                    e.preventDefault()
                    go(link.id)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`nav-mobile${open ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault()
              go(link.id)
            }}
          >
            {link.label}
          </a>
        ))}
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </header>
  )
}
