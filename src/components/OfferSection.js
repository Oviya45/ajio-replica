import React from 'react';
import './OfferSection.css';

const OfferSection = () => {
  return (
    <div className="offer-section">
      <h2>Grab offers on your 1st purchase</h2>
      <div className="offer-cards">
        <div className="offer-card">
          <div className="offer-text">FLAT ₹100 OFF</div>
          <div className="offer-subtext">on orders above ₹500</div>
          <div className="offer-code">
            CODE: <span>NEW100</span>
          </div>
        </div>
        <div className="offer-card">
          <div className="offer-text">FLAT ₹250 OFF</div>
          <div className="offer-subtext">on orders above ₹990</div>
          <div className="offer-code">
            CODE: <span>NEW250</span>
          </div>
        </div>
        <div className="offer-card">
          <div className="offer-text">FLAT ₹400 OFF</div>
          <div className="offer-subtext">on orders above ₹2590</div>
          <div className="offer-code">
            CODE: <span>NEW400</span>
          </div>
        </div>
      </div>
      <div className="app-offers">
        <div className="app-offer-card">₹125 OFF ON APP</div>
        <div className="app-offer-card">₹300 OFF ON APP</div>
        <div className="app-offer-card">₹500 OFF ON APP</div>
      </div>
      <div className="delivery-text">+ ZERO DELIVERY FEE</div>
      <div className="footer-text">Season's Deals, Only A Click Away!</div>
    </div>
  );
};

export default OfferSection;
