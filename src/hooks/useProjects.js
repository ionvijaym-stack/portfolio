import { useEffect, useMemo, useState } from 'react'
import { siteConfig } from '../config/site'
import { projectCatalog } from '../data/projectsCatalog'

function normalizeProjects(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.projects)) return payload.projects
  return []
}

export function useProjects() {
  const [projects, setProjects] = useState([])
  const [status, setStatus] = useState('loading')
  const [source, setSource] = useState('api')

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    async function loadProjects() {
      setStatus('loading')

      try {
        const response = await fetch(siteConfig.projectsEndpoint, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error('Failed to fetch projects')
        }

        const payload = await response.json()
        const nextProjects = normalizeProjects(payload)

        if (!nextProjects.length) {
          throw new Error('No project data returned')
        }

        if (!isMounted) return
        setProjects(nextProjects)
        setSource('api')
        setStatus('success')
      } catch {
        if (!isMounted || controller.signal.aborted) return
        setProjects(projectCatalog)
        setSource('fallback')
        setStatus('success')
      }
    }

    loadProjects()

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])

  return useMemo(
    () => ({
      projects,
      source,
      isLoading: status === 'loading',
    }),
    [projects, source, status],
  )
}
