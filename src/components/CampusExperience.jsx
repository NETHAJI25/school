import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const campusItems = [
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80', label: 'Modern Classrooms' },
  { src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80', label: 'Science Laboratories' },
  { src: 'https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=800&q=80', label: 'Sports & Athletics' },
  { src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80', label: 'Annual Day Celebrations' },
  { src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80', label: 'Student Activities' },
  { src: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80', label: 'School Library' },
  { src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80', label: 'School Auditorium' },
  { src: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=800&q=80', label: 'Computer Labs' },
]

export default function CampusExperience() {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: titleRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
    })

    const cards = containerRef.current?.children
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, x: 50 },
        {
          opacity: 1, x: 0, duration: 0.6, stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div ref={titleRef} className="text-center mb-12">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">Campus Experience</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Cinematic <span className="text-gradient">Campus Tour</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience your school campus like never before with stunning visuals and smooth transitions.
          </p>
        </div>

        <div
          ref={containerRef}
          className="horizontal-scroll-container flex gap-6 pb-4"
          style={{ cursor: 'grab' }}
        >
          {campusItems.map((item) => (
            <div
              key={item.label}
              className="relative flex-shrink-0 w-[300px] sm:w-[380px] lg:w-[420px] h-[320px] rounded-2xl overflow-hidden group"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-lg">{item.label}</h3>
                <div className="w-12 h-0.5 bg-gold mt-2 transition-all duration-300 group-hover:w-20" />
              </div>
              <div className="absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-500 group-hover:border-gold/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
