import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Play, ChevronDown, School, FlaskConical, Trophy, BookOpen, Shield, Bus } from 'lucide-react'
import Particles from './Particles'

const hotspots = [
  { icon: School, label: 'Smart Classrooms', x: '22%', y: '30%' },
  { icon: FlaskConical, label: 'Science Labs', x: '72%', y: '25%' },
  { icon: Trophy, label: 'Sports Arena', x: '80%', y: '60%' },
  { icon: BookOpen, label: 'Library', x: '35%', y: '55%' },
  { icon: Shield, label: 'CCTV Security', x: '15%', y: '65%' },
  { icon: Bus, label: 'GPS Bus Tracking', x: '60%', y: '75%' },
]

const schoolImages = [
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80',
  'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80',
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80',
]

function Hotspot({ icon: Icon, label, x, y }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="absolute hotspot-pulse cursor-pointer"
      style={{ left: x, top: y }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-10 h-10 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-125 hover:bg-gold/40">
        <Icon className="w-5 h-5 text-gold" />
      </div>
      {hovered && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap glass text-white text-xs px-3 py-1.5 rounded-full shadow-lg">
          {label}
        </div>
      )}
    </div>
  )
}

export default function Hero() {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const ctaRef = useRef(null)
  const scrollRef = useRef(null)
  const [currentImg, setCurrentImg] = useState(0)

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % schoolImages.length)
    }, 5000)
    return () => clearInterval(imgInterval)
  }, [])

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(textRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2 })
      .fromTo(ctaRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
      .fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.4')
  }, [])

  return (
    <section id="hero" ref={heroRef} className="relative h-screen overflow-hidden bg-navy">
      {schoolImages.map((url, i) => (
        <div
          key={url}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === currentImg ? 1 : 0 }}
        >
          <img
            src={url}
            alt="School campus"
            className="w-full h-full object-cover scale-110"
            style={{ animation: 'slowZoom 20s ease-in-out infinite alternate' }}
          />
        </div>
      ))}
      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>

      <div className="absolute inset-0 hero-overlay" />

      <Particles />

      <div className="absolute inset-0 z-10">
        {hotspots.map((spot) => (
          <Hotspot key={spot.label} icon={spot.icon} label={spot.label} x={spot.x} y={spot.y} />
        ))}
      </div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <div ref={textRef} className="max-w-5xl">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse-glow" />
            <span className="text-gold text-sm font-medium tracking-wider uppercase">
              Premium School Digital Platform
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6 tracking-tight">
            Transform Your School
            <br />
            <span className="text-gradient">Into A Digital Brand</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Modern premium websites for schools that increase admissions, parent trust, and online visibility.
          </p>
        </div>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 bg-gold text-navy px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 hover:scale-105"
          >
            <span className="relative z-10">Book Free Demo</span>
            <Play className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#features"
            className="glass text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            Explore Features
          </a>
        </div>
      </div>

      <div ref={scrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-gray-400 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-gold animate-bounce" />
      </div>
    </section>
  )
}
