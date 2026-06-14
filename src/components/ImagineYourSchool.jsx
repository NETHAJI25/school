import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ImagineYourSchool() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const rangeRef = useRef(null)
  const [sliderPos, setSliderPos] = useState(50)

  useEffect(() => {
    const el = sectionRef.current
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1,
        scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none reverse' },
      }
    )
  }, [])

  const handleSlider = (e) => {
    const rect = rangeRef.current.getBoundingClientRect()
    const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPos(pct)
  }

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/80 to-navy" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div ref={textRef} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            This Can Be <span className="text-gradient">Your School</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            This platform can be customized entirely for your institution. See the difference a modern website makes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            ref={rangeRef}
            className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-ew-resize shadow-2xl border border-white/10"
            onMouseMove={handleSlider}
            onTouchMove={handleSlider}
          >
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1200&q=80"
              alt="Old website"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80"
                alt="Modern website"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                Modern Website
              </div>
            </div>
            <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
              Old Website
            </div>
            <div
              className="absolute top-0 bottom-0 w-1 bg-gold shadow-lg shadow-gold/50 cursor-ew-resize"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold shadow-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            Drag the slider to compare old vs modern school websites
          </p>
        </div>
      </div>
    </section>
  )
}
