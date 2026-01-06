import { useEffect } from 'react'

const StructuredData = ({ type, data }) => {
  useEffect(() => {
    if (!data) return

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = `structured-data-${type}`
    
    // Remove existing script if present
    const existing = document.getElementById(`structured-data-${type}`)
    if (existing) {
      existing.remove()
    }
    
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.getElementById(`structured-data-${type}`)
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [type, data])

  return null
}

export default StructuredData

