import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import API from '../api';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountNo: '',
    ifscCode: '',
    atmNo: '',
    phone: '',
    address: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    setSubmitting(true);

    try {
      // call backend register endpoint
      await API.post('/auth/register', formData);
      setRegistered(true);
      // redirect shortly after success
      setTimeout(() => navigate('/login', { replace: true }), 1000);
    } catch (err) {
      console.error('Registration error:', err);
      // network / CORS errors often show as "Network Error"
      if (!err.response) {
        alert('Registration failed: Network Error — backend may be unreachable or CORS is blocking the request. Ensure the backend is running on http://localhost:2020 and CORS allows http://localhost:5173.');
      } else {
        const msg = err.response?.data?.message || err.message || 'Registration failed';
        alert('Registration failed: ' + msg);
      }
    } finally {
      setSubmitting(false);
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
          <h2>Register Your Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username*</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Choose a username"
                required
                disabled={submitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                disabled={submitting}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">Password*</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                  disabled={submitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password*</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                  disabled={submitting}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="accountNo">Account Number*</label>
              <input
                type="text"
                id="accountNo"
                name="accountNo"
                value={formData.accountNo}
                onChange={handleChange}
                placeholder="Enter your account number"
                required
                disabled={submitting}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="ifscCode">IFSC Code*</label>
                <input
                  type="text"
                  id="ifscCode"
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleChange}
                  placeholder="Enter IFSC code"
                  required
                  disabled={submitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="atmNo">ATM Card Number*</label>
                <input
                  type="text"
                  id="atmNo"
                  name="atmNo"
                  value={formData.atmNo}
                  onChange={handleChange}
                  placeholder="Enter ATM card number"
                  required
                  disabled={submitting}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                disabled={submitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                rows="3"
                disabled={submitting}
              />
            </div>

            <button type="submit" className="login-btn" disabled={submitting}>
              {submitting ? 'Registering…' : 'Register'}
            </button>
          </form>

          <div className="register-prompt">
            <p>Already have an account?</p>
            <Link to="/login" className="register-btn">Login Here</Link>
          </div>
        </div>
      </main>

      <footer className="auth-footer">
        <div>🔒 Safe</div>
        <div>🌐 Anywhere, Anytime</div>
        <div>⏳ No More Waiting</div>
      </footer>

      {registered && (
        <div className="success-toast" role="status" aria-live="polite">
          Registration successful — redirecting to login…
        </div>
      )}
    </div>
  );
}

export default Register;