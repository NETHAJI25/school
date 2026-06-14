import { Mail, Phone, MapPin, Globe, Play, MessageCircle } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-yellow-400 flex items-center justify-center">
                <span className="text-navy font-bold text-sm">S</span>
              </div>
              <span className="text-white font-heading font-bold text-xl">
                School<span className="text-gold">Verse</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Premium school website design platform. We help schools transform into digital brands
              with stunning websites that increase admissions, parent trust, and online visibility.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-navy transition-all duration-300">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-navy transition-all duration-300">
                <Play className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-navy transition-all duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-gold text-sm transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>hello@schoolverse.in</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>+91 99999 99999</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} SchoolVerse. All rights reserved.
          </p>
          <p className="text-gold text-xs font-semibold tracking-wider">
            Built For Future-Ready Schools
          </p>
        </div>
      </div>
    </footer>
  )
}
