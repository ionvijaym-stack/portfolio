import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    const scrollTarget = location.hash ? document.getElementById(location.hash.slice(1)) : null

    if (scrollTarget) {
      requestAnimationFrame(() => {
        scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return
    }

    window.scrollTo({ top: 0, left: 0 })
  }, [location.hash, location.pathname])

  return null
}

export default ScrollToHash
