import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function UserLogin() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // simulate successful login
    navigate('/user');
  }

  return (
    <div className="lp-gradient">
      <div className="lp-hero" style={{ maxWidth: 420 }}>
        <h2 className="lp-title">User Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <input aria-label="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
          <input aria-label="password" type="password" placeholder="Password" />
          <button className="lp-cta" type="submit">Sign in</button>
          <Link to="/" className="lp-cta lp-cta-ghost" style={{ textAlign: 'center', paddingTop: 10 }}>Back</Link>
        </form>
      </div>
    </div>
  );
}
