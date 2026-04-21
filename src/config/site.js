import { contactConfig } from './contact'

export const siteConfig = {
  name: contactConfig.companyName,
  baseUrl: 'https://ionora.studio',
  description:
    'Ionora builds enterprise-grade websites, business platforms, mobile apps, and AI-powered systems for modern companies.',
  contactEndpoint: import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact',
  projectsEndpoint: import.meta.env.VITE_PROJECTS_ENDPOINT || '/api/projects',
}
