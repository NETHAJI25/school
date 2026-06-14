import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Play, MessageCircle, Phone } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function FinalCTA() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(contentRef.current, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 1,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
    })
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/90" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue/10 rounded-full blur-3xl" />

      <div ref={contentRef} className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
          Your School Deserves A Strong<br />
          <span className="text-gradient">Digital Presence</span>
        </h2>

        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Parents search online before admissions. Your website becomes their first impression.
          Make it count with a premium digital experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-gold text-navy px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-yellow-400 hover:shadow-2xl hover:shadow-gold/30 hover:scale-105"
          >
            <Play className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            Book Free Demo
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 glass text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Contact Us
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-green-500 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  )
}
