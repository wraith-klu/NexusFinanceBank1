import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Transfer.css';
import API from '../api';

function Transfer() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ recipient: '', amount: '', remarks: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const token = localStorage.getItem('token');
      const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
      const res = await API.post('/transfer', formData, config);
      setSuccess(true);
      // optional: console.log(res.data);
      setTimeout(() => navigate('/user', { replace: true }), 1000);
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Transfer failed';
      alert('Transfer failed: ' + msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="transfer-page">
        <div className="transfer-card card" role="region" aria-labelledby="transfer-heading">
          <h2 id="transfer-heading" className="transfer-title">Fund Transfer & Payments</h2>

          <form className="transfer-form" onSubmit={handleSubmit} noValidate>
            <label className="field-label" htmlFor="recipient">Recipient Account Number</label>
            <input
              id="recipient"
              name="recipient"
              type="text"
              placeholder="e.g. 1234567890"
              value={formData.recipient}
              onChange={handleChange}
              required
              className="input-field"
              disabled={submitting || success}
            />

            <label className="field-label" htmlFor="amount">Amount</label>
            <input
              id="amount"
              name="amount"
              type="number"
              placeholder="e.g. 5000"
              value={formData.amount}
              onChange={handleChange}
              required
              className="input-field"
              disabled={submitting || success}
            />

            <label className="field-label" htmlFor="remarks">Remarks (Optional)</label>
            <input
              id="remarks"
              name="remarks"
              type="text"
              placeholder="e.g. For groceries"
              value={formData.remarks}
              onChange={handleChange}
              className="input-field"
              disabled={submitting || success}
            />

            <button type="submit" className="transfer-btn" disabled={submitting || success} aria-busy={submitting}>
              {submitting ? 'Processing…' : 'Transfer Now'}
            </button>
          </form>
        </div>

        {success && (
          <div className="success-toast" role="status" aria-live="polite">
            Transfer successful — returning to your home page…
          </div>
        )}
      </div>
    </>
  );
}

export default Transfer;