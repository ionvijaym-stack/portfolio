import { motion as Motion } from 'framer-motion'

const socialPlatforms = {
  linkedin: {
    label: 'LinkedIn',
    Icon: LinkedInIcon,
  },
  twitter: {
    label: 'Twitter X',
    Icon: XIcon,
  },
  instagram: {
    label: 'Instagram',
    Icon: InstagramIcon,
  },
  github: {
    label: 'GitHub',
    Icon: GitHubIcon,
  },
}

function SocialLinks({
  socials,
  listClassName = 'flex flex-wrap gap-3',
  linkClassName = '',
  iconClassName = 'h-5 w-5',
}) {
  const availableSocials = Object.entries(socialPlatforms).filter(([key]) => socials?.[key]?.trim())

  if (!availableSocials.length) return null

  return (
    <div className={listClassName}>
      {availableSocials.map(([key, social]) => (
        <Motion.a
          key={key}
          href={socials[key]}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={linkClassName}
        >
          <social.Icon className={iconClassName} />
          <span className="sr-only">{social.label}</span>
        </Motion.a>
      ))}
    </div>
  )
}

function LinkedInIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.75h2.88V18H5.5V9.75Zm4.69 0h2.76v1.13h.04c.38-.73 1.32-1.5 2.71-1.5 2.9 0 3.43 1.9 3.43 4.37V18h-2.87v-3.75c0-.9-.01-2.05-1.25-2.05-1.26 0-1.46.98-1.46 1.99V18h-2.86V9.75Z" />
    </svg>
  )
}

function XIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.9 3H21l-4.59 5.24L21.8 21h-4.61l-3.6-4.7L9.48 21H7.37l4.91-5.6L3 3h4.73l3.25 4.3L18.9 3Zm-1.62 15.21h1.17L7.1 5.7H5.84l11.44 12.51Z" />
    </svg>
  )
}

function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M7.75 3h8.5A4.75 4.75 0 0 1 21 7.75v8.5A4.75 4.75 0 0 1 16.25 21h-8.5A4.75 4.75 0 0 1 3 16.25v-8.5A4.75 4.75 0 0 1 7.75 3Zm0 1.8A2.95 2.95 0 0 0 4.8 7.75v8.5a2.95 2.95 0 0 0 2.95 2.95h8.5a2.95 2.95 0 0 0 2.95-2.95v-8.5a2.95 2.95 0 0 0-2.95-2.95h-8.5Zm8.96 1.35a1.09 1.09 0 1 1 0 2.18 1.09 1.09 0 0 1 0-2.18ZM12 7.4A4.6 4.6 0 1 1 7.4 12 4.6 4.6 0 0 1 12 7.4Zm0 1.8A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Z" />
    </svg>
  )
}

function GitHubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2.5A9.5 9.5 0 0 0 9 21.02c.47.08.64-.2.64-.46 0-.22-.01-.96-.01-1.75-2.36.43-2.98-.58-3.17-1.11-.1-.26-.5-1.1-.85-1.32-.29-.16-.7-.56-.01-.57.65-.01 1.12.6 1.28.86.74 1.24 1.93.89 2.4.68.07-.54.29-.9.52-1.11-2.1-.24-4.29-1.05-4.29-4.68 0-1.03.37-1.88.98-2.54-.1-.24-.43-1.23.1-2.56 0 0 .8-.26 2.62.97a9.06 9.06 0 0 1 4.78 0c1.82-1.24 2.62-.97 2.62-.97.52 1.33.2 2.32.1 2.56.61.66.98 1.5.98 2.54 0 3.64-2.2 4.44-4.3 4.68.33.29.63.86.63 1.75 0 1.26-.01 2.27-.01 2.58 0 .26.17.55.64.46A9.5 9.5 0 0 0 12 2.5Z" />
    </svg>
  )
}

export default SocialLinks
