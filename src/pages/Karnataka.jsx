import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { getCanonicalUrl } from '../config/site'
import './Karnataka.css'

const Karnataka = () => {
  return (
    <>
      <SEO
        title="Karnataka Travel Guide - Explore Heritage, Nature & Culture | Travel Web"
        description="Discover Karnataka's rich heritage, stunning landscapes, ancient temples, and modern tech hubs. Complete travel guide to Mysore, Bangalore, Hampi, Coorg, and more."
        keywords="Karnataka travel, Karnataka tourism, Bangalore, Mysore, Hampi, Coorg, Karnataka destinations, Karnataka attractions, Karnataka heritage, Karnataka temples"
        canonicalUrl={getCanonicalUrl('/karnataka')}
        ogImage={getCanonicalUrl('/images/karnataka-og.jpg')}
      />
      <div className="state-page">
        <section className="state-hero karnataka-hero">
          <div className="hero-overlay">
            <div className="container">
              <h1>Karnataka</h1>
              <p className="hero-subtitle">Where Heritage Meets Innovation</p>
            </div>
          </div>
        </section>

        <section className="state-intro">
          <div className="container">
            <div className="intro-content">
              <h2>Welcome to Karnataka</h2>
              <p>
                Karnataka, located in the southwestern region of India, is a state that beautifully 
                blends ancient traditions with modern innovation. From the tech hub of Bangalore to 
                the royal heritage of Mysore, from the ancient ruins of Hampi to the coffee plantations 
                of Coorg, Karnataka offers a diverse range of experiences for every traveler.
              </p>
              <p>
                The state is home to UNESCO World Heritage Sites, stunning hill stations, pristine 
                beaches, and some of India's most magnificent temples and palaces. Whether you're 
                seeking adventure, spirituality, history, or natural beauty, Karnataka has something 
                special for you.
              </p>
            </div>
          </div>
        </section>

        <section className="attractions-section">
          <div className="container">
            <h2>Top Attractions</h2>
            <div className="attractions-grid">
              <div className="attraction-card">
                <div className="attraction-icon">🏛️</div>
                <h3>Mysore Palace</h3>
                <p>
                  The magnificent Mysore Palace is one of India's most visited monuments. 
                  This royal residence showcases Indo-Saracenic architecture and is illuminated 
                  beautifully during the Dasara festival.
                </p>
                <div className="attraction-details">
                  <span className="tag">Heritage</span>
                  <span className="tag">Architecture</span>
                </div>
              </div>

              <div className="attraction-card">
                <div className="attraction-icon">🏛️</div>
                <h3>Hampi</h3>
                <p>
                  A UNESCO World Heritage Site, Hampi is an ancient city with stunning ruins 
                  of the Vijayanagara Empire. Explore temples, palaces, and bazaars that tell 
                  stories of a glorious past.
                </p>
                <div className="attraction-details">
                  <span className="tag">UNESCO</span>
                  <span className="tag">History</span>
                </div>
              </div>

              <div className="attraction-card">
                <div className="attraction-icon">☕</div>
                <h3>Coorg (Kodagu)</h3>
                <p>
                  Known as the "Scotland of India," Coorg is a hill station famous for its 
                  coffee plantations, misty mountains, and lush greenery. Perfect for nature 
                  lovers and adventure enthusiasts.
                </p>
                <div className="attraction-details">
                  <span className="tag">Hill Station</span>
                  <span className="tag">Nature</span>
                </div>
              </div>

              <div className="attraction-card">
                <div className="attraction-icon">🌆</div>
                <h3>Bangalore</h3>
                <p>
                  India's Silicon Valley, Bangalore is a vibrant city known for its tech industry, 
                  beautiful parks, nightlife, and diverse cuisine. Visit Lalbagh Botanical Garden, 
                  Cubbon Park, and the innovative museums.
                </p>
                <div className="attraction-details">
                  <span className="tag">City</span>
                  <span className="tag">Modern</span>
                </div>
              </div>

              <div className="attraction-card">
                <div className="attraction-icon">🏔️</div>
                <h3>Chikmagalur</h3>
                <p>
                  A paradise for coffee lovers, Chikmagalur offers scenic landscapes, trekking 
                  opportunities, and serene hill stations. Visit Mullayanagiri, the highest peak 
                  in Karnataka.
                </p>
                <div className="attraction-details">
                  <span className="tag">Trekking</span>
                  <span className="tag">Coffee</span>
                </div>
              </div>

              <div className="attraction-card">
                <div className="attraction-icon">🌊</div>
                <h3>Gokarna</h3>
                <p>
                  A small temple town with pristine beaches, Gokarna is perfect for those seeking 
                  peace and spirituality. The beaches here are less crowded and offer a tranquil 
                  escape from city life.
                </p>
                <div className="attraction-details">
                  <span className="tag">Beach</span>
                  <span className="tag">Spiritual</span>
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
                <h3>🎭 Traditional Arts</h3>
                <p>
                  Karnataka is renowned for its classical dance forms like Yakshagana, 
                  Bharatanatyam, and Kathak. The state also has a rich tradition of 
                  Carnatic music and folk arts.
                </p>
              </div>
              <div className="culture-item">
                <h3>🍛 Cuisine</h3>
                <p>
                  Karnataka cuisine is diverse and flavorful. Don't miss Bisi Bele Bath, 
                  Mysore Pak, Dosa varieties, and the famous filter coffee. Each region 
                  has its own culinary specialties.
                </p>
              </div>
              <div className="culture-item">
                <h3>🏛️ Architecture</h3>
                <p>
                  The state showcases various architectural styles from Hoysala temples 
                  to Islamic monuments, from Dravidian architecture to colonial buildings, 
                  reflecting its rich historical heritage.
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
                <p>October to March is ideal for most destinations. Monsoon (June-September) is perfect for hill stations like Coorg and Chikmagalur.</p>
              </div>
              <div className="tip-card">
                <h3>How to Reach</h3>
                <p>Bangalore has an international airport. The state has excellent road and rail connectivity. Major cities are well-connected by highways.</p>
              </div>
              <div className="tip-card">
                <h3>Local Transport</h3>
                <p>KSRTC buses connect all major cities. Auto-rickshaws and taxis are available in cities. Renting a car is recommended for exploring.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Ready to Explore Karnataka?</h2>
            <p>Plan your perfect Karnataka itinerary and discover the magic of this incredible state.</p>
            <div className="cta-buttons">
              <Link to="/" className="btn btn-primary">
                Back to Home
              </Link>
              <Link to="/goa" className="btn btn-secondary">
                Explore Goa Next
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Karnataka

