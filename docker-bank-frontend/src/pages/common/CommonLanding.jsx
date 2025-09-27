import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CommonLanding.css';

export const servicesList = [
  { key: 'upi-lite', title: 'UPI Lite', sub: 'Fast low-value payments' },
  { key: 'credit-line-upi', title: 'Credit Line on UPI', sub: 'Buy now, pay later' },
  { key: 'rupay-upi', title: 'RuPay Credit Card on UPI', sub: 'Cardless credit on UPI' },
  { key: 'split-expenses', title: 'Split Expenses', sub: 'Share bills with friends' },
  { key: 'gift-cards', title: 'Gift Cards', sub: 'Send instant gift cards' }
];

export const convenienceList = [
  'Mobile Recharge',
  'Electricity',
  'Book a Cylinder',
  'Insurance',
  'Loan Repayment',
  'Broadband / Landline',
  'FASTag Recharge',
  'Piped Gas',
  'Municipal Tax'
];

export const travelList = [
  { key: 'flights', title: 'Flights' },
  { key: 'bus', title: 'Bus' },
  { key: 'train', title: 'Train' },
  { key: 'stays', title: 'Stays & Hotels' }
];

export default function CommonLanding() {
  const navigate = useNavigate();

  function notifyAndRedirect() {
    // brief popup then redirect to login
    // using alert for simple, cross-browser popup per request
    alert('Login first to use this service');
    navigate('/login');
  }

  function onKeyActivate(e, handler) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handler();
    }
  }

  function serviceIcon(key) {
    // simple emoji/icon map — can be replaced with SVGs if desired
    const map = {
      'upi-lite': '⚡',
      'credit-line-upi': '💳',
      'rupay-upi': '🏧',
      'split-expenses': '👥',
      'gift-cards': '🎁'
    };
    return map[key] || '🔷';
  }

  function pillIcon(name) {
    const n = name.toLowerCase();
    if (n.includes('mobile') || n.includes('recharge')) return '📱';
    if (n.includes('electric')) return '⚡';
    if (n.includes('cylinder') || n.includes('gas')) return '🛢️';
    if (n.includes('insurance')) return '🛡️';
    if (n.includes('loan')) return '💸';
    if (n.includes('broadband') || n.includes('landline')) return '📶';
    if (n.includes('fastag')) return '🚗';
    if (n.includes('piped')) return '🛁';
    if (n.includes('municipal')) return '🏛️';
    return '🔘';
  }

  function travelIcon(key) {
    const map = {
      flights: '✈️',
      bus: '🚌',
      train: '🚆',
      stays: '🏨'
    };
    return map[key] || '🧭';
  }

  return (
    <div className="common-landing-root" role="main">
      <div className="common-landing-container">
        <header className="header" aria-label="Nexus Finance Bank header">
          <div className="title">Nexus Finance Bank</div>
          <div className="tagline">Simple, fast & secure transactions</div>

          <div className="header-actions" role="navigation" aria-label="header actions">
            <Link to="/login" className="btn primary" aria-label="Login">Login</Link>
            <Link to="/register" className="btn ghost" aria-label="Register">Register</Link>
          </div>
        </header>

        <section className="services-section" aria-label="Featured services">
          <div className="services-grid">
            {servicesList.map(s => (
              <article
                key={s.key}
                className="service-card"
                tabIndex="0"
                role="button"
                aria-label={s.title}
                onClick={() => notifyAndRedirect()}
                onKeyDown={(e) => onKeyActivate(e, notifyAndRedirect)}
              >
                <div className="icon-placeholder" aria-hidden>
                  <span className="icon" aria-hidden>{serviceIcon(s.key)}</span>
                </div>
                <div>
                  <div className="service-title">{s.title}</div>
                  <div className="service-sub">{s.sub}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="convenience-section" aria-label="Convenience actions">
          <div className="convenience-row" role="list">
            {convenienceList.map((pill) => (
              <button
                key={pill}
                className="convenience-pill"
                aria-label={pill}
                role="listitem"
                type="button"
                onClick={() => notifyAndRedirect()}
                onKeyDown={(e) => onKeyActivate(e, notifyAndRedirect)}
              >
                <div className="icon-placeholder" aria-hidden>
                  <span className="icon" aria-hidden>{pillIcon(pill)}</span>
                </div>
                <span>{pill}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="travel-section" aria-label="Travel services">
          <div className="travel-header">
            <div className="travel-title">Travel</div>
          </div>

          <div className="travel-grid">
            {travelList.map(t => (
              <article
                key={t.key}
                className="travel-card"
                tabIndex="0"
                role="button"
                aria-label={t.title}
                onClick={() => notifyAndRedirect()}
                onKeyDown={(e) => onKeyActivate(e, notifyAndRedirect)}
              >
                <div className="icon-placeholder" aria-hidden>
                  <span className="icon" aria-hidden>{travelIcon(t.key)}</span>
                </div>
                <div className="travel-label">{t.title}</div>
              </article>
            ))}
          </div>

          <div className="travel-cta">
            <Link to="/login" className="btn-cta" aria-label="Explore travel options">Explore Now</Link>
          </div>
        </section>

        {/* Site footer (shared) */}
        <footer className="site-footer" aria-label="Site footer">
          <div className="footer-top">
            <div className="footer-brand" aria-hidden>
              <img src="/src/assets/logo.jpg" alt="Nexus Finance Bank logo" className="footer-logo" />
              <div className="footer-brand-name">Nexus Finance Bank</div>
              <div className="footer-tag">Simple, fast & secure transactions</div>
            </div>

            <div className="footer-columns" role="navigation" aria-label="Footer links">
              <div className="footer-col">
                <h4>About Us</h4>
                <ul>
                  <li>Overview</li>
                  <li>History</li>
                  <li>Initiative</li>
                  <li>Compliance</li>
                  <li>Board of Directors</li>
                  <li>Our Global Brand Ambassador</li>
                  <li>Amalgamation</li>
                  <li>Offices &amp; Branches</li>
                  <li>Social Commitment</li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Shareholder’s Corner</h4>
                <ul>
                  <li>Overview</li>
                  <li>Shareholders Meeting (AGM/EGM)</li>
                  <li>Annual Reports</li>
                  <li>Financial Reports</li>
                  <li>Shareholding Pattern</li>
                  <li>Policies &amp; Disclosures</li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Customer Corner</h4>
                <ul>
                  <li>Find Important Customer Information</li>
                  <li>Report suspicious/fraud transaction</li>
                  <li>Online Complaints / Track Status</li>
                  <li>Holidays in India</li>
                  <li>Right to Information Act</li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Media &amp; Resources</h4>
                <ul>
                  <li>News &amp; Press Releases</li>
                  <li>Events &amp; Awards</li>
                  <li>Photo &amp; Video Gallery</li>
                  <li>Locate Us (Branches / ATMs)</li>
                  <li>Calculators &amp; Forms</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-legal">Copyright © {new Date().getFullYear()} Nexus Finance Bank. All rights reserved.</div>
            <div className="footer-logos">
              <img src="/src/assets/logo.jpg" alt="Nexus Finance Bank logo" className="footer-mini-logo" />
              <span className="footer-powered">Powered by Nexus Finance</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}