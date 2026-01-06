import StructuredData from './StructuredData'

const FAQSchema = ({ faqs, canonicalUrl }) => {
  if (!faqs || faqs.length === 0) return null

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq, index) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return <StructuredData type="faq" data={faqStructuredData} />
}

export default FAQSchema

