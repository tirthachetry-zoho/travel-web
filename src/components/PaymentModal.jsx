import { useState, useEffect } from 'react'
import { markAgentAsPaid } from '../utils/payment'
import './PaymentModal.css'

const PaymentModal = ({ agent, isOpen, onClose, onSuccess }) => {
  const [isConfirming, setIsConfirming] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Reset state when modal opens/closes
    if (isOpen) {
      setError('')
      setIsConfirming(false)
    }
  }, [isOpen])

  const handleConfirmPayment = () => {
    setError('')
    setIsConfirming(true)

    // Since this is a manual UPI / QR payment, we trust the user confirmation
    const success = markAgentAsPaid(agent.id)

    if (success) {
      onSuccess(agent.id)
      setTimeout(() => {
        onClose()
      }, 1000)
    } else {
      setError('Could not save payment status. Please try again.')
      setIsConfirming(false)
    }
  }

  if (!isOpen) return null

  const upiId = 'tirthachetry@ybl'
  const upiPayeeName = 'Travel Web'
  const upiUri = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
    upiPayeeName,
  )}&cu=INR&am=${agent.price}`
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
    upiUri,
  )}`

  return (
    <div className="payment-modal-overlay" onClick={onClose}>
      <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="payment-header">
          <h2>Complete Payment</h2>
          <p className="agent-name">{agent.name} - {agent.agency}</p>
          <p className="payment-amount">₹{agent.price}</p>
        </div>

        <div className="payment-content">
          <div className="payment-methods">
            <h3>Pay using UPI</h3>
            <div className="upi-section">
              <div className="upi-id-box">
                <span className="upi-label">UPI ID:</span>
                <span className="upi-value">{upiId}</span>
              </div>
              <p className="upi-help">
                Scan the QR code below or tap the button to pay using your UPI app (PhonePe, Google
                Pay, Paytm, BHIM, etc.).
              </p>

              <div className="upi-qr-wrapper">
                <img src={qrUrl} alt={`UPI QR for ${upiId}`} className="upi-qr" />
              </div>

              <a href={upiUri} className="btn-upi-link">
                Pay ₹{agent.price} with UPI App
              </a>
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          {isConfirming && (
            <div className="processing">
              <div className="spinner"></div>
              <p>Saving payment and unlocking contact details...</p>
            </div>
          )}

          <div className="payment-info">
            <p className="info-text">
              <strong>Note:</strong> This flow does not verify the payment with your bank. After you
              complete the UPI payment in your app, click the confirmation button below to unlock
              contact details.
            </p>
            <p className="info-text-small">
              Always verify the UPI ID before paying. This site does not store your card or UPI
              credentials.
            </p>
          </div>

          <div className="payment-actions">
            <button
              className="btn-pay"
              onClick={handleConfirmPayment}
              disabled={isConfirming}
            >
              {isConfirming ? 'Confirming...' : 'I have completed the payment'}
            </button>
            <button className="btn-cancel" onClick={onClose} disabled={isConfirming}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentModal

