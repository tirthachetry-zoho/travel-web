import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import FAQSchema from '../components/FAQSchema'
import { getCanonicalUrl } from '../config/site'
import './Goa.css'

const goaFAQs = [
  {
    question: 'What is the best time to visit Goa?',
    answer: 'November to February is the best time to visit Goa, with perfect weather for beach activities, water sports, and sightseeing. The peak tourist season offers clear skies and comfortable temperatures.'
  },
  {
    question: 'How many days are enough for Goa?',
    answer: 'For a complete Goa experience, plan for 4-5 days. This allows you to explore both North Goa (beaches and nightlife) and South Goa (tranquil beaches and heritage sites). A weekend trip of 2-3 days is also popular.'
  },
  {
    question: 'What is the difference between North Goa and South Goa?',
    answer: 'North Goa is known for its vibrant nightlife, bustling beaches like Calangute and Baga, and water sports. South Goa offers more tranquil, upscale resorts, pristine beaches like Palolem, and Portuguese heritage sites.'
  },
  {
    question: 'Is Goa safe for solo female travelers?',
    answer: 'Goa is generally safe for solo female travelers, especially in popular tourist areas. However, it\'s advisable to avoid isolated beaches at night and follow standard travel safety precautions.'
  }
]

const Goa = () => {
  return (
    <>
      <SEO
        title="Goa Travel Guide - Beaches, Nightlife & Portuguese Heritage | Travel Web"
        description="Experience Goa's pristine beaches, vibrant nightlife, Portuguese architecture, and rich culture. Complete travel guide to North Goa, South Goa, beaches, forts, and more."
        keywords="Goa travel, Goa tourism, Goa beaches, North Goa, South Goa, Goa nightlife, Goa attractions, Goa destinations, Portuguese heritage Goa, Goa forts"
        canonicalUrl={getCanonicalUrl('/goa')}
        ogImage={getCanonicalUrl('/images/goa-og.jpg')}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'TouristDestination',
          name: 'Goa',
          description: 'Experience Goa\'s pristine beaches, vibrant nightlife, Portuguese architecture, and rich culture. Complete travel guide to North Goa, South Goa, beaches, forts, and more.',
          url: getCanonicalUrl('/goa'),
          image: getCanonicalUrl('/images/goa-og.jpg'),
          address: {
            '@type': 'PostalAddress',
            addressRegion: 'Goa',
            addressCountry: 'IN'
          },
          containsPlace: [
            { '@type': 'City', name: 'Panaji' },
            { '@type': 'Place', name: 'North Goa' },
            { '@type': 'Place', name: 'South Goa' }
          ],
          touristType: ['Family', 'Solo', 'Couple', 'Party', 'Adventure'],
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: getCanonicalUrl('/') },
              { '@type': 'ListItem', position: 2, name: 'Goa', item: getCanonicalUrl('/goa') }
            ]
          }
        }}
      />
      <FAQSchema faqs={goaFAQs} canonicalUrl={getCanonicalUrl('/goa')} />
      <div className="state-page">
        <section className="state-hero goa-hero">
          <div className="hero-overlay">
            <div className="container">
              <h1>Goa</h1>
              <p className="hero-subtitle">Sun, Sand, and Serenity</p>
            </div>
          </div>
        </section>

        <section className="state-intro">
          <div className="container">
            <div className="intro-content">
              <h2>Welcome to Goa</h2>
              <p>
                Goa, India's smallest state, is a tropical paradise known for its stunning beaches, 
                vibrant nightlife, and unique blend of Indian and Portuguese cultures. With over 
                100 kilometers of coastline, Goa offers everything from bustling beach shacks to 
                secluded coves, from ancient churches to modern resorts.
              </p>
              <p>
                Whether you're looking to party at beach clubs, explore Portuguese heritage, 
                indulge in water sports, or simply relax on pristine beaches, Goa has something 
                for everyone. The state is divided into North Goa (known for its nightlife and 
                bustling beaches) and South Goa (famous for its tranquil, upscale resorts).
              </p>
            </div>
          </div>
        </section>

        <section className="attractions-section">
          <div className="container">
            <h2>Top Attractions</h2>
            <div className="attractions-grid">
              <div className="attraction-card">
                <div className="attraction-icon">🏖️</div>
                <h3>Calangute Beach</h3>
                <p>
                  Known as the "Queen of Beaches," Calangute is one of Goa's most popular beaches. 
                  It offers water sports, beach shacks, and a vibrant atmosphere. Perfect for 
                  families and adventure seekers.
                </p>
                <div className="attraction-details">
                  <span className="tag">Beach</span>
                  <span className="tag">Water Sports</span>
                </div>
              </div>

              <div className="attraction-card">
                <div className="attraction-icon">⛪</div>
                <h3>Basilica of Bom Jesus</h3>
                <p>
                  A UNESCO World Heritage Site, this 16th-century church houses the mortal remains 
                  of St. Francis Xavier. It's a masterpiece of baroque architecture and a significant 
                  pilgrimage site.
                </p>
                <div className="attraction-details">
                  <span className="tag">UNESCO</span>
                  <span className="tag">Heritage</span>
                </div>
              </div>

              <div className="attraction-card">
                <div className="attraction-icon">🏖️</div>
                <h3>Palolem Beach</h3>
                <p>
                  A crescent-shaped beach in South Goa, Palolem is known for its calm waters and 
                  laid-back atmosphere. It's perfect for swimming, kayaking, and watching beautiful 
                  sunsets.
                </p>
                <div className="attraction-details">
                  <span className="tag">Beach</span>
                  <span className="tag">Relaxation</span>
                </div>
              </div>

              <div className="attraction-card">
                <div className="attraction-icon">🏰</div>
                <h3>Aguada Fort</h3>
                <p>
                  A 17th-century Portuguese fort overlooking the Arabian Sea, Aguada Fort offers 
                  stunning views and historical significance. The lighthouse here is one of the 
                  oldest in Asia.
                </p>
                <div className="attraction-details">
                  <span className="tag">Fort</span>
                  <span className="tag">History</span>
                </div>
              </div>

              <div className="attraction-card">
                <div className="attraction-icon">🌊</div>
                <h3>Dudhsagar Falls</h3>
                <p>
                  One of India's tallest waterfalls, Dudhsagar (Sea of Milk) is a spectacular 
                  four-tiered waterfall surrounded by lush forests. Best visited during monsoon 
                  when it's at its most magnificent.
                </p>
                <div className="attraction-details">
                  <span className="tag">Waterfall</span>
                  <span className="tag">Nature</span>
                </div>
              </div>

              <div className="attraction-card">
                <div className="attraction-icon">🏖️</div>
                <h3>Anjuna Beach</h3>
                <p>
                  Famous for its Wednesday flea market and vibrant nightlife, Anjuna Beach attracts 
                  backpackers and party-goers. The beach is also known for its trance parties and 
                  bohemian vibe.
                </p>
                <div className="attraction-details">
                  <span className="tag">Beach</span>
                  <span className="tag">Nightlife</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="culture-section">
          <div className="container">
            <h2>Culture & Heritage</h2>
            <div className="culture-content">
              <div className="culture-item">
                <h3>🏛️ Portuguese Influence</h3>
                <p>
                  Goa's 450 years of Portuguese rule have left an indelible mark on its architecture, 
                  cuisine, and culture. Explore colonial churches, colorful houses, and experience 
                  the unique Goan-Portuguese fusion.
                </p>
              </div>
              <div className="culture-item">
                <h3>🍛 Goan Cuisine</h3>
                <p>
                  Goan food is a delightful blend of Konkan, Portuguese, and other influences. 
                  Don't miss seafood curries, vindaloo, xacuti, bebinca, and the famous Goan 
                  fish curry with rice.
                </p>
              </div>
              <div className="culture-item">
                <h3>🎉 Festivals</h3>
                <p>
                  Goa celebrates festivals with great enthusiasm. Carnival, Christmas, Shigmo, 
                  and the Feast of St. Francis Xavier are major celebrations that showcase the 
                  state's vibrant culture.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="travel-tips">
          <div className="container">
            <h2>Travel Tips</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <h3>Best Time to Visit</h3>
                <p>November to February is the peak season with perfect weather. Monsoon (June-September) is great for waterfalls and lush greenery, but many beach activities are limited.</p>
              </div>
              <div className="tip-card">
                <h3>How to Reach</h3>
                <p>Goa has an international airport (Dabolim). It's well-connected by road and rail. The Konkan Railway offers scenic train journeys to Goa.</p>
              </div>
              <div className="tip-card">
                <h3>Getting Around</h3>
                <p>Rent a scooter or bike for the best experience. Taxis and auto-rickshaws are available. Public buses connect major beaches and towns.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>What is the best time to visit Goa?</h3>
                <p>November to February is the best time to visit Goa, with perfect weather for beach activities, water sports, and sightseeing. The peak tourist season offers clear skies and comfortable temperatures.</p>
              </div>
              <div className="faq-item">
                <h3>How many days are enough for Goa?</h3>
                <p>For a complete Goa experience, plan for 4-5 days. This allows you to explore both North Goa (beaches and nightlife) and South Goa (tranquil beaches and heritage sites). A weekend trip of 2-3 days is also popular.</p>
              </div>
              <div className="faq-item">
                <h3>What is the difference between North Goa and South Goa?</h3>
                <p>North Goa is known for its vibrant nightlife, bustling beaches like Calangute and Baga, and water sports. South Goa offers more tranquil, upscale resorts, pristine beaches like Palolem, and Portuguese heritage sites.</p>
              </div>
              <div className="faq-item">
                <h3>Is Goa safe for solo female travelers?</h3>
                <p>Goa is generally safe for solo female travelers, especially in popular tourist areas. However, it's advisable to avoid isolated beaches at night and follow standard travel safety precautions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Ready to Experience Goa?</h2>
            <p>Plan your perfect Goan getaway and discover why it's called the "Pearl of the Orient."</p>
            <div className="cta-buttons">
              <Link to="/" className="btn btn-primary">
                Back to Home
              </Link>
              <Link to="/karnataka" className="btn btn-secondary">
                Explore Karnataka
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Goa

