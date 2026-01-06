import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

const Layout = ({ children }) => {
  const location = useLocation()

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">
            <h1>🌴 Travel Web</h1>
          </Link>
          <nav className="nav">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
            <Link
              to="/karnataka"
              className={location.pathname === '/karnataka' ? 'active' : ''}
            >
              Karnataka
            </Link>
            <Link
              to="/goa"
              className={location.pathname === '/goa' ? 'active' : ''}
            >
              Goa
            </Link>
            <Link
              to="/travel-agents"
              className={location.pathname === '/travel-agents' ? 'active' : ''}
            >
              Travel Agents
            </Link>
          </nav>
        </div>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Travel Web. All rights reserved.</p>
          <p>Explore the beauty of India, one state at a time.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
