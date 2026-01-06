export const SITE_URL = import.meta.env.VITE_SITE_URL || ''

export const getCanonicalUrl = (path = '/') => {
  const base =
    SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '')

  if (!base) return undefined
  if (path === '/') return base

  return base.replace(/\/$/, '') + path
}
