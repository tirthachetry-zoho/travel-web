import { useEffect } from 'react'

const SEO = ({ title, description, keywords, ogImage, canonicalUrl }) => {
  useEffect(() => {
    // Update document title
    document.title = title

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      
      element.setAttribute('content', content)
    }

    // Update description
    updateMetaTag('description', description)
    updateMetaTag('og:description', description, true)
    updateMetaTag('twitter:description', description)

    // Update keywords
    if (keywords) {
      updateMetaTag('keywords', keywords)
    }

    // Update OG tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('twitter:title', title)
    
    if (ogImage) {
      updateMetaTag('og:image', ogImage, true)
      updateMetaTag('twitter:image', ogImage)
    }

    // Update canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', canonicalUrl)
    }

    // Add structured data (JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: title,
      description: description,
      url: canonicalUrl || window.location.href,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: (canonicalUrl || window.location.origin) + '/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    }

    let script = document.querySelector('script[type="application/ld+json"]')
    if (!script) {
      script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(structuredData)

    // Add og:url
    updateMetaTag('og:url', canonicalUrl || window.location.href, true)
    
    // Add og:type
    updateMetaTag('og:type', 'website', true)
    
    // Add twitter:card if not already set
    let twitterCard = document.querySelector('meta[name="twitter:card"]')
    if (!twitterCard) {
      updateMetaTag('twitter:card', 'summary_large_image')
    }
  }, [title, description, keywords, ogImage, canonicalUrl])

  return null
}

export default SEO
