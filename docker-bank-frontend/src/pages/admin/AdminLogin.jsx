import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // simulate admin authentication
    navigate('/admin');
  }

  return (
    <div className="lp-gradient">
      <div className="lp-hero" style={{ maxWidth: 420 }}>
        <h2 className="lp-title">Admin Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <input aria-label="admin-username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Admin username" />
          <input aria-label="admin-password" type="password" placeholder="Password" />
          <button className="lp-cta" type="submit">Sign in</button>
          <Link to="/" className="lp-cta lp-cta-ghost" style={{ textAlign: 'center', paddingTop: 10 }}>Back</Link>
        </form>
      </div>
    </div>
  );
}
