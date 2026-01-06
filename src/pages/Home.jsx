import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { getCanonicalUrl } from '../config/site'
import './Home.css'

const Home = () => {
  return (
    <>
      <SEO
        title="Travel Web - Explore Beautiful Destinations in India"
        description="Discover amazing travel destinations across India. Explore Karnataka, Goa, and more beautiful states with our comprehensive travel guides."
        keywords="travel, India, Karnataka, Goa, tourism, destinations, travel guide, Indian states"
        canonicalUrl={getCanonicalUrl('/')}
      />
      <div className="home">
        <section className="hero">
          <div className="hero-content">
            <h1>Discover India's Hidden Gems</h1>
            <p>Explore breathtaking destinations across India's diverse states</p>
            <div className="hero-buttons">
              <Link to="/karnataka" className="btn btn-primary">
                Explore Karnataka
              </Link>
              <Link to="/goa" className="btn btn-secondary">
                Discover Goa
              </Link>
              <Link to="/travel-agents" className="btn btn-secondary">
                Find Travel Agents
              </Link>
            </div>
          </div>
        </section>

        <section className="states-section">
          <div className="container">
            <h2>Explore by State</h2>
            <div className="states-grid">
              <Link to="/karnataka" className="state-card">
                <div className="state-image karnataka-bg"></div>
                <div className="state-content">
                  <h3>Karnataka</h3>
                  <p>From ancient temples to modern tech hubs, experience the perfect blend of tradition and innovation.</p>
                  <span className="explore-link">Explore →</span>
                </div>
              </Link>

              <Link to="/goa" className="state-card">
                <div className="state-image goa-bg"></div>
                <div className="state-content">
                  <h3>Goa</h3>
                  <p>Sun-kissed beaches, vibrant nightlife, and Portuguese heritage await you in India's party capital.</p>
                  <span className="explore-link">Explore →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <h2>Why Choose Travel Web?</h2>
            <div className="features-grid">
              <div className="feature">
                <div className="feature-icon">🗺️</div>
                <h3>Comprehensive Guides</h3>
                <p>Detailed information about destinations, attractions, and local culture</p>
              </div>
              <div className="feature">
                <div className="feature-icon">📸</div>
                <h3>Beautiful Destinations</h3>
                <p>Discover the most picturesque and culturally rich places in India</p>
              </div>
              <div className="feature">
                <div className="feature-icon">✈️</div>
                <h3>Travel Tips</h3>
                <p>Expert advice to make your journey smooth and memorable</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
