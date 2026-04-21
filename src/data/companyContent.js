import heroVisual from '../assets/hero.png'
import teamPhotoOne from '../assets/1.jpg'
import teamPhotoTwo from '../assets/2.jpg'

export const mainNavigation = [
  { id: 'home', label: 'Home', to: '/' },
  { id: 'about', label: 'About', to: '/#about' },
  { id: 'services', label: 'Services', to: '/#services' },
  { id: 'projects', label: 'Projects', to: '/#projects' },
  { id: 'contact', label: 'Contact', to: '/contact' },
]

export const heroContent = {
  eyebrow: 'Enterprise Technology Partner',
  title: 'We design, build, and scale digital systems that move businesses forward.',
  description:
    'Ionora helps companies launch premium websites, internal platforms, AI-powered workflows, and mobile products with strong design systems, reliable engineering, and business-first execution.',
  primaryCta: {
    label: 'View Projects',
    to: '/#projects',
  },
  secondaryCta: {
    label: 'Contact Us',
    to: '/contact',
  },
  capabilityTags: ['Enterprise websites', 'Business platforms', 'AI workflows', 'Mobile apps'],
  featuredCards: [
    {
      title: 'Strategy to execution',
      description: 'Discovery, UX, engineering, QA, and launch support under one delivery team.',
    },
    {
      title: 'Scalable delivery structure',
      description: 'Reusable systems, modular architecture, and process clarity built for growth.',
    },
    {
      title: 'Business-ready outcomes',
      description: 'Every engagement is shaped around trust, performance, and conversion.',
    },
  ],
  image: heroVisual,
}

export const aboutContent = {
  eyebrow: 'About Ionora',
  title: 'A modern technology company built for clarity, speed, and long-term reliability.',
  introduction:
    'Ionora partners with ambitious businesses that need more than attractive screens. We bring together consulting, design thinking, and engineering discipline to create digital systems that look premium, perform consistently, and support measurable business goals.',
  mission:
    'To simplify complex business requirements into elegant digital products that are easy to adopt, maintain, and scale.',
  vision:
    'To become the trusted digital transformation partner for companies that want polished execution without enterprise bureaucracy.',
  whyChooseUs: [
    {
      title: 'Business-first planning',
      description: 'We shape product decisions around growth goals, operations, and user outcomes instead of isolated feature delivery.',
    },
    {
      title: 'Premium UI systems',
      description: 'Interfaces are designed with clean hierarchy, accessibility, responsive structure, and brand confidence from day one.',
    },
    {
      title: 'Reliable engineering',
      description: 'Our builds emphasize maintainable code, modular architecture, and production readiness across the stack.',
    },
  ],
  pillars: [
    {
      label: 'Mission',
      value:
        'Build solutions that reduce friction, improve decision-making, and create trust across every customer touchpoint.',
    },
    {
      label: 'Vision',
      value:
        'Lead with thoughtful strategy and high-quality execution so clients can scale with stronger digital foundations.',
    },
  ],
}

export const serviceItems = [
  {
    id: 'strategy',
    title: 'Digital Strategy',
    description: 'Roadmaps, requirement shaping, UX planning, and delivery prioritization aligned to business goals.',
    icon: 'strategy',
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'Modern user interfaces, design systems, responsive flows, and premium brand-led experiences.',
    icon: 'design',
  },
  {
    id: 'web',
    title: 'Web Engineering',
    description: 'Scalable company websites, internal tools, dashboards, and customer-facing platforms.',
    icon: 'web',
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile products built for service operations, marketplaces, and business workflows.',
    icon: 'mobile',
  },
  {
    id: 'ai',
    title: 'AI Solutions',
    description: 'Intelligent workflows, automation layers, data processing systems, and AI-assisted product features.',
    icon: 'ai',
  },
  {
    id: 'support',
    title: 'Maintenance and Optimization',
    description: 'Performance tuning, iteration support, analytics improvements, and post-launch enhancements.',
    icon: 'support',
  },
]

export const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Founder',
    company: 'B2B SaaS Client',
    feedback:
      'Ionora brought structure to a messy product vision and turned it into a platform our team could confidently present to customers and investors.',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Operations Head',
    company: 'Healthcare Commerce Brand',
    feedback:
      'The team moved fast, stayed organized, and improved both the user experience and the internal workflows behind the scenes.',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Product Lead',
    company: 'Service Platform Client',
    feedback:
      'What stood out most was the quality of thinking. Every screen, interaction, and technical decision felt intentional and ready for scale.',
    rating: 5,
  },
]

export const teamMembers = [
  {
    id: 'vijay',
    name: 'Vijay',
    role: 'Founder and Strategy Lead',
    photo: teamPhotoOne,
  },
  {
    id: 'suresh',
    name: 'Suresh',
    role: 'Head of Experience Design',
    photo: teamPhotoTwo,
  },
  {
    id: 'mahendra',
    name: 'Mahendra',
    role: 'Engineering Director',
    photo:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'Rajakapil Dev',
    name: 'Rajakapil Dev',
    role: 'AI and Data Solutions Lead',
    photo:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
  },
]

export const teamSupportLine = 'Supported by a passionate team of 10+ members'
