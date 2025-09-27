import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AccountCard from '../components/AccountCard';
import './Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();
  // default to hidden (masked) balance
  const [showBalance, setShowBalance] = useState(false);
  const [username, setUsername] = useState('User');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('bank_username');
      if (stored && stored.trim()) setUsername(stored);
    } catch (err) {
      /* ignore storage errors */
    }
  }, []);

  const user = { name: username, currency: '₹', current: '1,50,000', savings: '50,000' };

  // helper to produce a (display) "encrypted" string
  function encryptedString(input) {
    try {
      // basic Base64 encoding as a readable "encrypted" placeholder
      return btoa(String(input));
    } catch (e) {
      // fallback: show a simple obfuscated hex-like string
      return Array.from(String(input)).map(c => c.charCodeAt(0).toString(16)).join('');
    }
  }

  const primaryActions = [
    { key: 'balance', title: 'Check Balance', icon: '💼', subtitle: 'Quick balance', action: () => {} },
    { key: 'transfer', title: 'Transfer Money', icon: '✈️', subtitle: 'Send to favourites', action: () => navigate('/transfer') },
    { key: 'scan', title: 'Scanner Payments', icon: '📷', subtitle: 'Scan & Pay', action: () => navigate('/transfer') /* placeholder */ },
    { key: 'recharge', title: 'Mobile Recharge', icon: '📱', subtitle: 'Top-up saved numbers', action: () => navigate('/transfer') /* placeholder */ }
  ];

  const services = [
    { key: 'loans', title: 'Apply for Loans', icon: '🤝', desc: 'Loan offers & calculator', cta: 'Apply Now' },
    { key: 'sip', title: 'Start SIP', icon: '📈', desc: 'Popular SIP plans', cta: 'Invest Now' },
    { key: 'bills', title: 'Bill Payments', icon: '🧾', desc: 'Upcoming bills preview', cta: 'Pay Bills' },
    { key: 'cards', title: 'Card Management', icon: '💳', desc: 'Block / unblock cards', cta: 'Manage Cards' },
    { key: 'statements', title: 'Account Statements', icon: '📄', desc: 'Download statements', cta: 'View Statements' },
    { key: 'support', title: 'Customer Support', icon: '🎧', desc: '24/7 support', cta: 'Contact Us' },
    { key: 'offers', title: 'Offers & Rewards', icon: '🎁', desc: 'Latest offers for you', cta: 'View Offers' },
    { key: 'atm', title: 'ATM Locator', icon: '📍', desc: 'Nearest ATM & distance', cta: 'Find ATM' }
  ];

  return (
    <>
      <Navbar />

      <main className="dashboard-page" aria-labelledby="dashboard-heading">
        <div className="content-wrap page-container">

          {/* Page header stays the same */}
          <header className="dashboard-header" role="banner">
           <div className="greeting">
             <h1 id="dashboard-heading" className="greeting-title">Welcome back, <span className="user-name">{user.name}</span></h1>
             <p className="greeting-sub">Here’s a quick overview of your accounts</p>
           </div>

           <div className="header-actions" role="group" aria-label="Account actions">
             <div className="balance-card" aria-live="polite">
               <div className="balance-row">
                 <div>
                   <div className="balance-label">Current Balance</div>

                  {/* show actual amount or masked + encrypted text */}
                  {showBalance ? (
                    <div className="balance-amount balance-visible">{`${user.currency} ${user.current}`}</div>
                  ) : (
                    <div>
                      <div className="balance-amount balance-masked">{`${user.currency} ••••••`}</div>
                      <div className="balance-encrypted" title="Encrypted representation">
                        Encrypted: <span className="mono">{encryptedString(user.current)}</span>
                      </div>
                    </div>
                  )}
                 </div>

                 <div className="balance-controls">
                  {/* textual toggle for clarity and accessibility */}
                  <button
                    className="balance-toggle"
                    aria-pressed={showBalance}
                    onClick={() => setShowBalance(prev => !prev)}
                  >
                    {showBalance ? 'Hide Balance' : 'Show Balance'}
                  </button>
                 </div>
               </div>

               <div className="account-snapshot">
                 <div className="snapshot-item">
                   <div className="snapshot-label">Savings</div>
                   <div className="snapshot-value">{showBalance ? `${user.currency} ${user.savings}` : '••••'}</div>
                 </div>
                 <div className="snapshot-item">
                   <div className="snapshot-label">Accounts</div>
                   <div className="snapshot-value">2</div>
                 </div>
               </div>
             </div>

             <div className="notif-profile">
               <button className="icon-btn" aria-label="Notifications" title="Notifications">
                 🔔
                 <span className="notif-badge" aria-hidden>3</span>
               </button>
               <button className="profile-btn" aria-label="Open profile settings">
                 <img src="/src/assets/profile-placeholder.jpg" alt="Profile avatar" className="avatar" />
               </button>
             </div>
           </div>
         </header>

         {/* New responsive grid: left column (controls) + right column (content) */}
         <div className="dashboard-grid">
           <aside className="dashboard-left">
             {/* Balance card + quick-actions stacked in the left column */}
             <div className="left-stack">
               <div className="balance-card card">
                 <div className="balance-row">
                   <div>
                     <div className="balance-label">Current Balance</div>

                    {/* show actual amount or masked + encrypted text */}
                    {showBalance ? (
                      <div className="balance-amount balance-visible">{`${user.currency} ${user.current}`}</div>
                    ) : (
                      <div>
                        <div className="balance-amount balance-masked">{`${user.currency} ••••••`}</div>
                        <div className="balance-encrypted" title="Encrypted representation">
                          Encrypted: <span className="mono">{encryptedString(user.current)}</span>
                        </div>
                      </div>
                    )}
                   </div>

                   <div className="balance-controls">
                    {/* textual toggle for clarity and accessibility */}
                    <button
                      className="balance-toggle"
                      aria-pressed={showBalance}
                      onClick={() => setShowBalance(prev => !prev)}
                    >
                      {showBalance ? 'Hide Balance' : 'Show Balance'}
                    </button>
                   </div>
                 </div>

                 <div className="account-snapshot">
                   <div className="snapshot-item">
                     <div className="snapshot-label">Savings</div>
                     <div className="snapshot-value">{showBalance ? `${user.currency} ${user.savings}` : '••••'}</div>
                   </div>
                   <div className="snapshot-item">
                     <div className="snapshot-label">Accounts</div>
                     <div className="snapshot-value">2</div>
                   </div>
                 </div>
               </div>

               <section className="quick-actions card-stack" aria-label="Quick actions">
                 {primaryActions.map(a => (
                   <button key={a.key} className="action-card card" onClick={a.action} aria-label={a.title}>
                     <div className="action-icon" aria-hidden>{a.icon}</div>
                     <div className="action-content">
                       <div className="action-title">{a.title}</div>
                       <div className="action-sub">{a.subtitle}</div>
                     </div>
                   </button>
                 ))}
               </section>
             </div>
           </aside>

           <section className="dashboard-right">
             {/* Accounts + Services (main content) */}
             <section className="account-section">
               <h2 className="section-title">Your Accounts</h2>
               <div className="accounts-grid">
                 <AccountCard title="Current Account" balance={user.current} currency={user.currency} showBalance={showBalance} />
                 <AccountCard title="Savings Account" balance={user.savings} currency={user.currency} showBalance={showBalance} />
               </div>
             </section>

             <section className="services-section" aria-label="All services">
               <h2 className="section-title">Services</h2>
               <div className="services-grid">
                 {services.map(s => (
                   <article key={s.key} className="service-card card" tabIndex="0" aria-labelledby={`svc-${s.key}`}>
                     <div className="service-icon" aria-hidden>{s.icon}</div>
                     <div className="service-body">
                       <h3 id={`svc-${s.key}`} className="service-title">{s.title}</h3>
                       <p className="service-desc">{s.desc}</p>
                       <div className="service-cta">
                         <button className="btn btn-primary" onClick={() => {
                           if (s.key === 'loans') navigate('/'); else if (s.key === 'atm') navigate('/'); else navigate('/transfer');
                         }}>{s.cta}</button>
                       </div>
                     </div>
                   </article>
                 ))}
               </div>
             </section>
           </section>
         </div>
         {/* End dashboard-grid */}

        {/* Shared site footer */}
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
                <ul><li>Overview</li><li>History</li><li>Initiative</li><li>Compliance</li></ul>
              </div>
              <div className="footer-col">
                <h4>Shareholder’s Corner</h4>
                <ul><li>Annual Reports</li><li>Financial Reports</li><li>Shareholding Pattern</li></ul>
              </div>
              <div className="footer-col">
                <h4>Customer Corner</h4>
                <ul><li>Report suspicious/fraud transaction</li><li>Online Complaints/Track Status</li><li>Holidays in India</li></ul>
              </div>
              <div className="footer-col">
                <h4>Locate &amp; Media</h4>
                <ul><li>Branches</li><li>ATMs</li><li>Photo Gallery</li><li>News Coverage</li></ul>
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
      </main>
     </>
   );
}