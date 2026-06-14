import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TrendingUp, ShieldCheck, Sparkles, Globe, Award, MessageCircle, ClipboardCheck, Smartphone } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  { icon: TrendingUp, title: 'Admissions Growth', desc: 'Attract more parents with a professional digital presence that builds confidence.', color: 'from-blue-500 to-blue-600' },
  { icon: ShieldCheck, title: 'Better Parent Trust', desc: 'A premium website signals reliability, transparency, and institutional credibility.', color: 'from-emerald-500 to-emerald-600' },
  { icon: Sparkles, title: 'Stronger Branding', desc: 'Stand out from competing schools with a unique, memorable digital identity.', color: 'from-purple-500 to-purple-600' },
  { icon: Globe, title: 'Google Visibility', desc: 'SEO-optimized sites rank higher, making your school discoverable to local parents.', color: 'from-sky-500 to-sky-600' },
  { icon: Award, title: 'Modern Reputation', desc: 'Position your school as forward-thinking and technologically advanced.', color: 'from-amber-500 to-amber-600' },
  { icon: MessageCircle, title: 'Easy Communication', desc: 'Direct inquiry forms, WhatsApp integration, and instant parent engagement.', color: 'from-rose-500 to-rose-600' },
  { icon: ClipboardCheck, title: 'Online Admission System', desc: 'Streamline the entire admission process with digital forms and tracking.', color: 'from-indigo-500 to-indigo-600' },
  { icon: Smartphone, title: 'Mobile-Friendly Access', desc: 'Parents browse on phones. A responsive site ensures they never miss out.', color: 'from-teal-500 to-teal-600' },
]

export default function WhySchoolsNeed() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    cardsRef.current.forEach((el, i) => {
      if (!el) return
      gsap.fromTo(el, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.7, delay: i * 0.1,
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
      })
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-blue to-gold" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue font-semibold text-sm tracking-widest uppercase">Why Digital Presence Matters</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-4">
            Why Schools Need A <span className="text-gradient">Digital Presence</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            In today's digital-first world, your school's website is the first impression parents have.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                ref={(el) => (cardsRef.current[i] = el)}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 card-hover hover:border-transparent"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-navy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
