import { useState, useEffect } from 'react'
import { Menu, X, Mail } from 'lucide-react'
import { personal } from '../data'

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled,  setScrolled] = useState(false)
  const [menuOpen,  setMenuOpen] = useState(false)
  const [activeSection, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      navLinks.forEach((link) => {
        const sec = document.getElementById(link.toLowerCase())
        if (sec) {
          const { top, bottom } = sec.getBoundingClientRect()
          if (top <= 80 && bottom > 80) setActive(link.toLowerCase())
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 px-8 h-16 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'shadow-[0_4px_32px_rgba(37,99,235,0.08)]' : ''
        }`}
      >
        {/* Logo */}
        <a href="#home" className="text-xl font-black text-blue-600 tracking-tight no-underline">
          S<span className="text-slate-800">aikiran</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`text-sm font-semibold no-underline transition-colors duration-200 ${
                  activeSection === link.toLowerCase()
                    ? 'text-blue-600'
                    : 'text-slate-500 hover:text-blue-600'
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`mailto:${personal.email}`}
          className="hidden md:inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-bold no-underline transition-all duration-200 hover:bg-blue-700 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)]"
        >
          <Mail size={14} />
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-1 border-none bg-transparent cursor-pointer text-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white border-b border-slate-200 px-8 py-4 z-40 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={close}
              className="block py-3 text-base font-semibold text-slate-700 no-underline border-b border-slate-100 last:border-0"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
