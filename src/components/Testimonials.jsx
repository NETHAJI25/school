import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    name: 'Mrs. Priya Sharma',
    role: 'Parent',
    text: 'The school website has completely transformed how we receive updates. The bus tracking feature gives us so much peace of mind every single day.',
    rating: 5,
  },
  {
    name: 'Mr. Rajesh Kumar',
    role: 'School Principal',
    text: 'Our new website increased admissions by 40% in the first quarter. The professional look has significantly improved parent confidence in our institution.',
    rating: 5,
  },
  {
    name: 'Ananya Patel',
    role: 'Student',
    text: "I love my student dashboard! I can check my grades, attendance, and upcoming events all in one place. It's super easy to use and looks amazing.",
    rating: 5,
  },
  {
    name: 'Dr. S. Venkatesh',
    role: 'School Owner',
    text: 'The digital transformation was seamless. From ERP integration to the AI chatbot, everything works perfectly. Best decision we made for our school.',
    rating: 5,
  },
  {
    name: 'Ms. Neha Gupta',
    role: 'Parent',
    text: 'Online fee payment and instant notifications have made our lives so much easier. The website is beautiful and extremely functional at the same time.',
    rating: 5,
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
    })

    const cards = trackRef.current?.children
    if (cards) {
      gsap.fromTo(cards, { opacity: 0, x: 30 }, {
        opacity: 1, x: 0, duration: 0.6, stagger: 0.1,
        scrollTrigger: { trigger: trackRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue font-semibold text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-4">
            Trusted By Schools & Parents
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Hear from school leaders, parents, and students who have experienced the digital transformation.
          </p>
        </div>

        <div ref={trackRef} className="flex gap-6 horizontal-scroll-container pb-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex-shrink-0 w-[380px] p-8 rounded-2xl border border-gray-100 bg-white card-hover"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
            >
              <Quote className="w-8 h-8 text-gold mb-4" />
              <p className="text-gray-600 leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-gold text-lg">★</span>
                ))}
              </div>
              <div>
                <div className="font-bold text-navy">{t.name}</div>
                <div className="text-sm text-gray-400">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
