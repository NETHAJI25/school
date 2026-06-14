import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  GraduationCap, Bot, Image, Map, LayoutGrid, CreditCard,
  Bus, Bell, Smartphone, Search, Megaphone, UserRound,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  { icon: GraduationCap, title: 'Smart Admission Portal', desc: 'Online applications, document uploads, and real-time admission status tracking.' },
  { icon: Bot, title: 'AI Chatbot', desc: '24/7 intelligent assistant that answers parent queries instantly.' },
  { icon: Image, title: 'Event Gallery', desc: 'Beautiful photo and video galleries showcasing school events and achievements.' },
  { icon: Map, title: 'Virtual Campus Tour', desc: '360 virtual tours that let parents explore your campus from anywhere.' },
  { icon: LayoutGrid, title: 'School ERP Integration', desc: 'Seamless integration with existing school management systems.' },
  { icon: CreditCard, title: 'Online Fee Payments', desc: 'Secure payment gateway for hassle-free fee collection.' },
  { icon: Bus, title: 'Bus Tracking', desc: 'Real-time GPS tracking so parents know their child\'s location.' },
  { icon: Bell, title: 'Notice Board', desc: 'Instant announcements and notifications for parents and staff.' },
  { icon: Smartphone, title: 'Mobile Responsive', desc: 'Flawless experience across all devices — phone, tablet, desktop.' },
  { icon: Search, title: 'SEO Optimization', desc: 'Rank higher on Google and get discovered by parents in your area.' },
  { icon: Megaphone, title: 'Dynamic Announcements', desc: 'Share achievements, updates, and events with a single click.' },
  { icon: UserRound, title: 'Student Dashboard', desc: 'Personalized portals for students to track grades, attendance, and more.' },
]

export default function Features() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: titleRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
    })
    cardsRef.current.forEach((el, i) => {
      if (!el) return
      gsap.fromTo(el, { opacity: 0, scale: 0.9 }, {
        opacity: 1, scale: 1, duration: 0.6, delay: i * 0.05,
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
      })
    })
  }, [])

  return (
    <section id="features" ref={sectionRef} className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-blue font-semibold text-sm tracking-widest uppercase">Premium Features</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-4">
            Everything Your School Needs
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A complete digital transformation package designed specifically for modern schools.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <div
                key={feat.title}
                ref={(el) => (cardsRef.current[i] = el)}
                className="group relative bg-white rounded-xl p-6 border border-gray-100 card-hover overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-blue group-hover:shadow-lg group-hover:shadow-blue/30">
                    <Icon className="w-6 h-6 text-gold transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-base font-bold text-navy mb-2">{feat.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue/5 to-gold/5 rounded-full transition-all duration-500 group-hover:scale-150" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
