import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import API from '../api';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // call backend login endpoint - ensure backend implements /auth/login and returns { token: '...' }
      const res = await API.post('/auth/login', formData);
      const token = res.data?.token;
      if (token) {
        localStorage.setItem('token', token);
      }
      // keep username for greeting
      try { localStorage.setItem('bank_username', formData.username || ''); } catch {}
      navigate('/dashboard', { replace: true });
    } catch (err) {
      alert('Login failed: ' + (err.response?.data?.message || err.message || 'unknown error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <header className="auth-header">
        <div>Internet Banking</div>
        <div>❓ FAQs</div>
        <div>Language</div>
      </header>

      <main className="auth-main">
        <div className="auth-box">
          <h2>LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? 'Logging in…' : 'Login'}
            </button>
          </form>

          <div className="register-prompt">
            <p>Not registered yet? Join Nexus Finance Bank.</p>
            <Link to="/register" className="register-btn">Register Now</Link>
          </div>
        </div>
      </main>

      <footer className="auth-footer">
        <div>🔒 Safe</div>
        <div>🌐 Anywhere, Anytime</div>
        <div>⏳ No More Waiting</div>
      </footer>
    </div>
  );
}

export default Login;