import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      
      <div className="links-section">
        <div className="column">
          <h4>Ajio</h4>
          <ul>
            <li>Who We Are</li>
            <li>Join Our Team</li>
            <li>Terms & Conditions</li>
            <li>We Respect Your Privacy</li>
            <li>Fees & Payments</li>
            <li>Returns & Refunds Policy</li>
            <li>Promotions Terms & Conditions</li>
          </ul>
        </div>
        <div className="column">
          <h4>Help</h4>
          <ul>
            <li>Track Your Order</li>
            <li>Frequently Asked Questions</li>
            <li>Returns</li>
            <li>Cancellations</li>
            <li>Payments</li>
            <li>Customer Care</li>
            <li>How Do I Redeem My Coupon</li>
          </ul>
        </div>
        <div className="column">
          <h4>Shop by</h4>
          <ul>
            <li>All</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Indie</li>
            <li>Stores</li>
            <li>New Arrivals</li>
            <li>Brand Directory</li>
            <li>Home</li>
            <li>Collections</li>
          </ul>
        </div>
        <div className="column">
          <h4>Follow us</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram - AJIOlife</li>
            <li>Instagram - AJIO LUXE</li>
            <li>Twitter</li>
            <li>Pinterest</li>
          </ul>
        </div>
      </div>
      <div className="payment-section">
        <p>Payment methods</p>
        <div className="payment-icons">
          <img src="https://www.pngitem.com/pimgs/m/499-4996172_internet-bank-internet-banking-icon-hd-png-download.png" alt="Net Banking" />
          <img src="https://e7.pngegg.com/pngimages/363/177/png-clipart-visa-mastercard-logo-visa-mastercard-computer-icons-visa-text-payment.png" alt="Visa" />
          <img src="https://static-00.iconduck.com/assets.00/visa-icon-1024x656-u9fqgerf.png" alt="MasterCard" />
          <img src="https://img.lovepik.com/element/45009/1931.png_860.png" alt="Cash on Delivery" />
          <img src="https://etimg.etb2bimg.com/thumb/msid-55566520,width-1200,resizemode-4/.jpg" alt="Jio Money" />
        </div>
        <div className="security">
          <p>Secure systems</p>
          <img src="https://jaspermicron.com/assets/frontend/img/ssl-icon-img.png" alt="SSL Secure" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
