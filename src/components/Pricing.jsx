import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, ArrowRight, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const plans = [
  {
    name: 'Basic',
    price: '₹15,000',
    range: '₹15,000 – ₹25,000',
    desc: 'Perfect for schools taking their first step into digital presence.',
    features: ['Responsive website', 'Home/About/Contact pages', 'Inquiry form', 'Gallery', 'Mobile optimization', 'Basic SEO', 'Hosting setup'],
    cta: 'Get Started',
    popular: false,
    href: '#contact',
  },
  {
    name: 'Professional',
    price: '₹35,000',
    range: '₹35,000 – ₹60,000',
    desc: 'Most popular choice for schools wanting a complete digital makeover.',
    features: ['Premium UI/UX', 'Animated sections', 'Dynamic gallery', 'CMS dashboard', 'WhatsApp integration', 'Admissions form', 'SEO optimization', 'Event updates'],
    cta: 'Book Consultation',
    popular: true,
    href: '#contact',
  },
  {
    name: 'Premium Digital',
    price: '₹80,000',
    range: '₹80,000 – ₹2,50,000+',
    desc: 'The ultimate cinematic digital transformation for visionary schools.',
    features: ['Cinematic website', 'Drone video integration', 'AI chatbot', 'ERP integration', 'Virtual tour', 'Bus tracking', 'Student dashboard', 'Premium animations', 'Advanced SEO'],
    cta: 'Schedule Demo',
    popular: false,
    href: '#contact',
  },
]

export default function Pricing() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    cardsRef.current.forEach((el, i) => {
      if (!el) return
      gsap.fromTo(el, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.7, delay: i * 0.15,
        scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none reverse' },
      })
    })
  }, [])

  return (
    <section id="pricing" ref={sectionRef} className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-blue font-semibold text-sm tracking-widest uppercase">Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-4">
            Choose Your School's <span className="text-gradient">Digital Package</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Transparent pricing. Premium quality. Transform your school's digital presence today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`relative rounded-2xl p-8 border-2 transition-all duration-500 card-hover ${
                plan.popular
                  ? 'bg-navy border-gold shadow-2xl shadow-gold/10 scale-105 md:scale-110'
                  : 'bg-white border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-navy'}`}>{plan.name}</h3>
                <p className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>{plan.desc}</p>
              </div>

              <div className="mb-6">
                <div className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-navy'}`}>{plan.price}</div>
                <div className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-400'}`}>{plan.range}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-gold' : 'text-green-500'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gold text-navy hover:bg-yellow-400 shadow-lg shadow-gold/30'
                    : 'bg-navy text-white hover:bg-navy/90'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
