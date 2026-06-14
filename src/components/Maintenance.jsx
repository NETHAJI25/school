import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, RefreshCw, HardDrive, Lock, BarChart3, Image, HeadphonesIcon, Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const includes = [
  { icon: RefreshCw, label: 'Regular Updates' },
  { icon: Lock, label: 'Security Patches' },
  { icon: HardDrive, label: 'Hosting & Backups' },
  { icon: BarChart3, label: 'SEO Monitoring' },
  { icon: Image, label: 'Gallery Updates' },
  { icon: HeadphonesIcon, label: 'Technical Support' },
]

export default function Maintenance() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue/5 via-transparent to-gold/5" />
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-1.5 mb-4">
                <Shield className="w-4 h-4 text-gold" />
                <span className="text-gold text-xs font-semibold tracking-wider uppercase">Maintenance Plans</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Monthly Maintenance Plans
              </h3>
              <p className="text-gray-400 mb-2">
                Keep your school website running smoothly with our comprehensive maintenance packages.
              </p>
              <div className="text-3xl md:text-4xl font-bold text-gold mb-6">
                ₹2,000 – ₹15,000<span className="text-lg text-gray-400 font-normal">/month</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {includes.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-center gap-2 text-gray-300 text-sm">
                      <Icon className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>{item.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#contact"
                className="flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg hover:shadow-gold/30"
              >
                <Check className="w-5 h-5" />
                Get Maintenance
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
