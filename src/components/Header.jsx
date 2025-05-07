import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/BNSLOGO.png" alt="BHARAT NAVODAYA SHIKSHA" style={{ height: '48px' }} />
            <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#1a202c', letterSpacing: '1px' }}>BHARAT NAVODAYA SHIKSHA</span>
          </Link>
          
          <nav className="main-nav">
            <ul>
              <li><Link to="/stages">Stages</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/membership">Membership</Link></li>
            </ul>
          </nav>

          <div className="header-actions flex gap-2">
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/signup" className="btn btn-secondary">Register</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 