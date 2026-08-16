import { useEffect } from 'react'
import { getSiteUrl, site } from '../data/site'

export function Seo({ title, description, schema }: { title?: string; description: string; schema?: object }) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : site.name
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    const canonical = getSiteUrl(window.location.pathname)
    let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonicalTag) {
      canonicalTag = document.createElement('link')
      canonicalTag.rel = 'canonical'
      document.head.append(canonicalTag)
    }
    canonicalTag.href = canonical
    const existing = document.querySelector('#structured-data')
    if (existing) existing.remove()
    if (schema) {
      const script = document.createElement('script')
      script.id = 'structured-data'
      script.type = 'application/ld+json'
      script.text = JSON.stringify(schema)
      document.head.append(script)
    }
  }, [title, description, schema])
  return null
}
