import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ImagineYourSchool from './components/ImagineYourSchool'
import WhySchoolsNeed from './components/WhySchoolsNeed'
import Features from './components/Features'
import CampusExperience from './components/CampusExperience'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Maintenance from './components/Maintenance'
import LeadForm from './components/LeadForm'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ImagineYourSchool />
      <WhySchoolsNeed />
      <Features />
      <CampusExperience />
      <Stats />
      <Testimonials />
      <Pricing />
      <Maintenance />
      <LeadForm />
      <FinalCTA />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
