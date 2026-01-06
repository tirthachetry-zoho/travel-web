import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Karnataka from './pages/Karnataka'
import Goa from './pages/Goa'
import TravelAgents from './pages/TravelAgents'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/karnataka" element={<Karnataka />} />
          <Route path="/goa" element={<Goa />} />
          <Route path="/travel-agents" element={<TravelAgents />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
