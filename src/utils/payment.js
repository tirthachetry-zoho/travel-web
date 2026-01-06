// Simple local payment tracking for UPI / QR code flows (no gateway)

export const PAYMENT_STORAGE_KEY = 'travel_web_payments'

// Get all paid agent IDs
export const getPaidAgents = () => {
  try {
    const paid = localStorage.getItem(PAYMENT_STORAGE_KEY)
    return paid ? JSON.parse(paid) : []
  } catch (error) {
    console.error('Error reading payment data:', error)
    return []
  }
}

// Check if an agent is paid for
export const isAgentPaid = (agentId) => {
  const paidAgents = getPaidAgents()
  return paidAgents.includes(agentId)
}

// Mark an agent as paid (after manual UPI / QR payment confirmation)
export const markAgentAsPaid = (agentId) => {
  try {
    const paidAgents = getPaidAgents()
    if (!paidAgents.includes(agentId)) {
      paidAgents.push(agentId)
      localStorage.setItem(PAYMENT_STORAGE_KEY, JSON.stringify(paidAgents))
    }
    return true
  } catch (error) {
    console.error('Error saving payment data:', error)
    return false
  }
}

