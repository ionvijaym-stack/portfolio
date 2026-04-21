/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0F1F',
      },
      boxShadow: {
        premium:
          '0 20px 40px -12px rgba(10, 15, 31, 0.16), 0 8px 20px -8px rgba(10, 15, 31, 0.08)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(90% 80% at 50% 0%, rgba(59,130,246,0.25) 0%, rgba(14,165,233,0.12) 30%, rgba(255,255,255,0) 80%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
