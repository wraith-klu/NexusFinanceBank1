import React from 'react';
import './AccountCard.css';

function AccountCard({ title, balance, currency = '₹', showBalance = false }) {
  // lightweight display-only "encryption" helper (Base64 with hex fallback)
  function encryptedString(input) {
    try {
      return btoa(String(input));
    } catch (e) {
      return Array.from(String(input)).map(c => c.charCodeAt(0).toString(16)).join('');
    }
  }

  const visible = showBalance ? `${currency} ${balance}` : `${currency} ••••••`;

  return (
    <div className="account-card card">
      <h3 className="account-title">{title}</h3>
      <div className="account-balance">
        <p className="balance-label">Current Balance</p>

        {showBalance ? (
          <p className="balance-amount">{visible}</p>
        ) : (
          <>
            <p className="balance-amount balance-masked">{visible}</p>
            <div className="balance-encrypted" title="Encrypted representation">
              Encrypted: <span className="mono">{encryptedString(balance)}</span>
            </div>
          </>
        )}
      </div>
      <button className="btn btn-secondary view-details-btn">View Details</button>
    </div>
  );
}

export default AccountCard;