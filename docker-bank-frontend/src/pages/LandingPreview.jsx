import React from 'react';

// Use placeholder URLs instead of missing image imports
const placeholderUrls = {
  user: {
    recharge: 'https://placehold.co/300x200?text=Recharge',
    bill: 'https://placehold.co/300x200?text=Bill+Payments',
    insurance: 'https://placehold.co/300x200?text=Insurance',
  },
  admin: {
    transactions: 'https://placehold.co/300x200?text=Transactions',
    users: 'https://placehold.co/300x200?text=Users',
    settings: 'https://placehold.co/300x200?text=Settings',
  }
};

export default function LandingPreview({ variant = 'user' }) {
  const isAdmin = variant === 'admin';

  const promptText = `A clean and modern web UI/UX design for a mobile payment application landing page. The primary color scheme is a gradient of deep purple and royal blue, with white as a dominant secondary color for text and cards. The layout is mobile-first and responsive. The main hero section features a large, bold headline in white text, a prominent call-to-action button, and a QR code for app download. Below the hero section, there are clean, card-based content blocks with simple, minimalist icons representing various services like 'Recharge', 'Bill Payments', and 'Insurance'. The typography is clear and easy to read. The overall style is flat design with subtle shadows and a focus on user-friendliness and security.`;

  // Titles / copy change slightly by variant
  const title = isAdmin ? 'Admin Dashboard Preview' : 'Pay, Recharge & Manage Money';
  const subtitle = isAdmin
    ? 'Overview of transactions, users and system health — admin tools at a glance.'
    : 'Secure payments, instant recharges and easy bill management — all in one app.';

  const ctaPrimary = isAdmin ? 'Open Dashboard' : 'Get the App';
  const ctaSecondary = isAdmin ? 'Manage Users' : 'How it works';

  const cards = isAdmin
    ? [
        { img: placeholderUrls.admin.transactions, label: 'Transactions', desc: 'View and filter transactions in real time.' },
        { img: placeholderUrls.admin.users, label: 'Users', desc: 'Manage customers, KYC and account status.' },
        { img: placeholderUrls.admin.settings, label: 'Settings', desc: 'Configure system preferences and security.' }
      ]
    : [
        { img: placeholderUrls.user.recharge, label: 'Recharge', desc: 'Fast mobile & DTH recharges with offers.' },
        { img: placeholderUrls.user.bill, label: 'Bill Payments', desc: 'Pay electricity, water and other bills instantly.' },
        { img: placeholderUrls.user.insurance, label: 'Insurance', desc: 'Explore simple, affordable protection plans.' }
      ];

  return (
    <div className="lp-gradient">
      <div className="lp-hero" aria-label="hero">
        <div className="lp-hero-row">
          <div className="lp-hero-content">
            <h1 className="lp-title">{title}</h1>
            <p className="lp-sub">{subtitle}</p>
            <div className="lp-actions">
              <button className="lp-cta">{ctaPrimary}</button>
              <button className="lp-cta lp-cta-ghost">{ctaSecondary}</button>
            </div>
          </div>

          <div className="lp-hero-qr">
            <div className="lp-qr" aria-hidden>{isAdmin ? 'ADM' : 'QR'}</div>
            <small className="lp-qr-label">{isAdmin ? 'Admin tools' : 'Scan to download'}</small>
          </div>
        </div>

        <div className="lp-card-row" aria-label="services">
          {cards.map((c) => (
            <div className="lp-card" key={c.label} title={c.label}>
              <img src={c.img} alt={c.label} className="lp-service-img" />
              <div className="lp-card-overlay">
                <div className="lp-card-title">{c.label}</div>
                <div className="lp-card-desc">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lp-promptBox">
        <strong className="lp-prompt-title">Image-generation prompt (copy &amp; paste):</strong>
        <pre className="lp-prompt-pre">{promptText}</pre>
      </div>

      <small className="lp-note">
        {isAdmin
          ? 'Admin preview only — this shows admin-facing modules.'
          : 'This preview is for visual guidance only — use the prompt above with your preferred image generation tool.'}
      </small>

      {/* Shared site footer (preview) */}
      <footer className="site-footer" aria-label="Site footer">
        <div className="footer-top">
          <div className="footer-brand" aria-hidden>
            <img src="/src/assets/logo.jpg" alt="Nexus Finance Bank logo" className="footer-logo" />
            <div className="footer-brand-name">Nexus Finance Bank</div>
          </div>
          <div className="footer-columns" role="navigation" aria-label="Footer links">
            <div className="footer-col"><h4>About Us</h4><ul><li>Overview</li><li>History</li></ul></div>
            <div className="footer-col"><h4>Customer Corner</h4><ul><li>Report Fraud</li><li>Help</li></ul></div>
            <div className="footer-col"><h4>Locate Us</h4><ul><li>Branches</li><li>ATMs</li></ul></div>
            <div className="footer-col"><h4>Resources</h4><ul><li>Calculators</li><li>FAQs</li></ul></div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-legal">Copyright © {new Date().getFullYear()} Nexus Finance Bank. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
