import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bankLogo from '../assets/logo.jpg';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    try {
      localStorage.removeItem('bank_username');
    } catch (e) {
      // ignore storage errors
    }
    navigate('/', { replace: true });
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={bankLogo} alt="Nexus Finance Bank logo" />
        <span className="navbar-title">Nexus Finance Bank</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/transfer">Transfer</Link></li>
        <li><a href="#">Loans</a></li>
        <li><a href="#">ATM Card</a></li>
      </ul>
      <div className="nav-profile">
        <button className="btn nav-btn-logout" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;