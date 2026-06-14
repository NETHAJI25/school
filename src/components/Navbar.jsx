import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-yellow-400 flex items-center justify-center">
              <span className="text-navy font-bold text-sm">S</span>
            </div>
            <span className="text-white font-heading font-bold text-xl tracking-tight">
              School<span className="text-gold">Verse</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="flex items-center gap-2 bg-gold text-navy px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-yellow-400 transition-all duration-300 shadow-lg shadow-gold/20"
            >
              <Phone className="w-4 h-4" />
              Book Demo
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-navy/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-gold transition-colors py-2 text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center bg-gold text-navy px-5 py-3 rounded-full font-semibold text-sm"
            >
              Book Free Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
