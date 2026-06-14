import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

gsap.registerPlugin(ScrollTrigger)

const initialForm = {
  schoolName: '',
  principalName: '',
  phone: '',
  email: '',
  city: '',
  currentWebsite: '',
  students: '',
  message: '',
}

export default function LeadForm() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    gsap.fromTo(formRef.current, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: formRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
    })
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const templateParams = {
        school_name: form.schoolName,
        principal_name: form.principalName,
        phone: form.phone,
        email: form.email,
        city: form.city,
        current_website: form.currentWebsite || 'Not provided',
        students: form.students || 'Not provided',
        message: form.message || 'Not provided',
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setSubmitted(true)
      setForm(initialForm)
    } catch (err) {
      setError('Failed to send. Please try again or contact us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="text-center mb-12">
          <span className="text-blue font-semibold text-sm tracking-widest uppercase">Get Started</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-4">
            Book A Free School Website <span className="text-gradient">Consultation</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Fill in your details and our team will reach out within 24 hours with a customized demo.
          </p>
        </div>

        {submitted ? (
          <div ref={formRef} className="text-center p-12 rounded-2xl bg-green-50 border border-green-100">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6">Our team will contact you shortly.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-navy text-white px-6 py-3 rounded-full font-semibold hover:bg-navy/90 transition-colors"
            >
              Submit Another
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-xl">
            <div className="grid md:grid-cols-2 gap-5">
              <InputField label="School Name *" name="schoolName" value={form.schoolName} onChange={handleChange} required />
              <InputField label="Principal Name *" name="principalName" value={form.principalName} onChange={handleChange} required />
              <InputField label="Phone Number *" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
              <InputField label="Email *" name="email" type="email" value={form.email} onChange={handleChange} required />
              <InputField label="City *" name="city" value={form.city} onChange={handleChange} required />
              <InputField label="Current Website" name="currentWebsite" value={form.currentWebsite} onChange={handleChange} placeholder="https://" />
              <InputField label="Number of Students" name="students" type="number" value={form.students} onChange={handleChange} />
              <div className="md:col-span-2">
                <TextArea label="Message" name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Tell us about your school's requirements..." />
              </div>
            </div>

            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm">{error}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full bg-navy text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-navy/90 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
              ) : (
                <><Send className="w-5 h-5" /> Schedule My Demo</>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

function InputField({ label, name, value, onChange, type = 'text', required, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all duration-300 text-sm"
      />
    </div>
  )
}

function TextArea({ label, name, value, onChange, rows, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition-all duration-300 text-sm resize-none"
      />
    </div>
  )
}
