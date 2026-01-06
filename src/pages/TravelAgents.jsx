import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PaymentModal from '../components/PaymentModal'
import { travelAgents } from '../data/travelAgents'
import { isAgentPaid } from '../utils/payment'
import { getCanonicalUrl } from '../config/site'
import './TravelAgents.css'

const TravelAgents = () => {
  const [selectedAgent, setSelectedAgent] = useState(null)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [paidAgents, setPaidAgents] = useState(() => {
    // Initialize with paid agents from localStorage
    return travelAgents.filter(agent => isAgentPaid(agent.id))
  })

  const handlePaymentClick = (agent) => {
    setSelectedAgent(agent)
    setIsPaymentModalOpen(true)
  }

  const handlePaymentSuccess = (agentId) => {
    const agent = travelAgents.find(a => a.id === agentId)
    if (agent && !paidAgents.find(a => a.id === agentId)) {
      setPaidAgents([...paidAgents, agent])
    }
    setIsPaymentModalOpen(false)
    setSelectedAgent(null)
  }

  const getAgentContactInfo = (agent) => {
    const isPaid = isAgentPaid(agent.id) || paidAgents.find(a => a.id === agent.id)
    return isPaid
  }

  return (
    <>
      <SEO
        title="Travel Agents - Find Expert Travel Guides | Travel Web"
        description="Connect with verified travel agents specializing in Karnataka and Goa. Get expert travel guidance, custom itineraries, and personalized tour packages."
        keywords="travel agents, travel guides, Karnataka travel agents, Goa travel agents, tour operators, travel consultants"
        canonicalUrl={getCanonicalUrl('/travel-agents')}
      />
      <div className="travel-agents-page">
        <section className="agents-hero">
          <div className="container">
            <h1>Verified Travel Agents</h1>
            <p>Connect with expert travel agents for personalized Karnataka and Goa tours</p>
          </div>
        </section>

        <section className="agents-intro">
          <div className="container">
            <div className="intro-content">
              <h2>Why Book with Our Travel Agents?</h2>
              <p>
                Our verified travel agents are experienced professionals who specialize in creating 
                memorable travel experiences in Karnataka and Goa. Each agent has been carefully 
                vetted and has excellent ratings from previous travelers.
              </p>
              <div className="benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>Verified and Trusted Agents</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>Custom Itineraries</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>Best Price Guarantee</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="agents-list">
          <div className="container">
            <h2>Available Travel Agents</h2>
            <div className="agents-grid">
              {travelAgents.map((agent) => {
                const isPaid = getAgentContactInfo(agent)
                return (
                  <div key={agent.id} className="agent-card">
                    <div className="agent-header">
                      <div className="agent-avatar">{agent.image}</div>
                      <div className="agent-basic-info">
                        <h3>{agent.name}</h3>
                        <p className="agency-name">{agent.agency}</p>
                        <div className="agent-rating">
                          <span className="stars">⭐</span>
                          <span className="rating-value">{agent.rating}</span>
                          <span className="reviews">({agent.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>

                    <div className="agent-details">
                      <div className="detail-item">
                        <span className="detail-label">📍 Location:</span>
                        <span>{agent.location}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">🎯 Specialization:</span>
                        <span>{agent.specialization}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">⏱️ Experience:</span>
                        <span>{agent.experience}</span>
                      </div>
                      <p className="agent-description">{agent.description}</p>
                    </div>

                    {isPaid ? (
                      <div className="agent-contact">
                        <div className="contact-unlocked">
                          <span className="unlock-icon">🔓</span>
                          <span className="unlock-text">Contact Details Unlocked</span>
                        </div>
                        <div className="contact-info">
                          <div className="contact-item">
                            <span className="contact-icon">📞</span>
                            <a href={`tel:${agent.phone}`}>{agent.phone}</a>
                          </div>
                          <div className="contact-item">
                            <span className="contact-icon">💬</span>
                            <a href={`https://wa.me/${agent.whatsapp.replace(/\s/g, '')}`} target="_blank" rel="noopener noreferrer">
                              WhatsApp
                            </a>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="agent-payment">
                        <div className="payment-info">
                          <span className="lock-icon">🔒</span>
                          <p>Pay ₹{agent.price} to unlock contact details</p>
                        </div>
                        <button
                          className="btn-unlock"
                          onClick={() => handlePaymentClick(agent)}
                        >
                          Unlock Contact Details
                        </button>
                      </div>
                    )}

                    <div className="agent-price">
                      <span className="price-label">Contact Fee:</span>
                      <span className="price-value">₹{agent.price}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Need Help Choosing?</h2>
            <p>Browse our destination guides to learn more about Karnataka and Goa before selecting an agent.</p>
            <div className="cta-buttons">
              <Link to="/karnataka" className="btn btn-primary">
                Explore Karnataka
              </Link>
              <Link to="/goa" className="btn btn-secondary">
                Discover Goa
              </Link>
            </div>
          </div>
        </section>
      </div>

      {selectedAgent && (
        <PaymentModal
          agent={selectedAgent}
          isOpen={isPaymentModalOpen}
          onClose={() => {
            setIsPaymentModalOpen(false)
            setSelectedAgent(null)
          }}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </>
  )
}

export default TravelAgents

