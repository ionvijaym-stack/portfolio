import { motion as Motion } from 'framer-motion'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ProjectsSection from '../components/ProjectsSection'
import Seo from '../components/Seo'
import ServicesSection from '../components/ServicesSection'
import TeamSection from '../components/TeamSection'
import TestimonialsSection from '../components/TestimonialsSection'

function HomePage() {
  return (
    <Motion.div
      className="min-h-screen"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Seo
        title="Ionora - Enterprise Websites, Platforms, and AI Solutions"
        description="Ionora is a technology company building enterprise-grade websites, business platforms, AI workflows, and mobile products for modern businesses."
        url="https://ionora.studio/"
      />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <TeamSection />
        <ContactSection variant="section" />
      </main>
      <Footer />
    </Motion.div>
  )
}

export default HomePage
