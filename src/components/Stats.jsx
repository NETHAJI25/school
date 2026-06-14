import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 5000, suffix: '+', label: 'Students', icon: '🎓' },
  { value: 98, suffix: '%', label: 'Results', icon: '📊' },
  { value: 25, suffix: '+', label: 'Awards', icon: '🏆' },
  { value: 50, suffix: '+', label: 'Faculty', icon: '👨‍🏫' },
  { value: 100, suffix: '%', label: 'Mobile Friendly', icon: '📱' },
]

function AnimatedCounter({ target, suffix, label, icon }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const counted = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        if (counted.current) return
        counted.current = true
        const duration = 2000
        const startTime = Date.now()
        const animate = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * target))
          if (progress < 1) requestAnimationFrame(animate)
        }
        animate()
      },
    })
    return () => trigger.kill()
  }, [target])

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-4xl lg:text-5xl font-bold text-white counter-number">
        {count}{suffix}
      </div>
      <div className="text-gray-400 mt-2 font-medium">{label}</div>
    </div>
  )
}

export default function Stats() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, {
      opacity: 1, duration: 0.8,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue/5 via-transparent to-blue/5" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
