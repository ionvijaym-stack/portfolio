import { motion as Motion } from 'framer-motion'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import { contactConfig } from '../config/contact'
import { siteConfig } from '../config/site'

function ContactPage() {
  return (
    <Motion.div
      className="min-h-screen bg-slate-50 dark:bg-slate-950"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Seo
        title="Contact"
        description={`Contact ${contactConfig.companyName} to discuss your next product, website, or digital experience.`}
        url={`${siteConfig.baseUrl}/contact`}
      />
      <Navbar />
      <main>
        <ContactSection variant="page" />
      </main>
      <Footer />
    </Motion.div>
  )
}

export default ContactPage
