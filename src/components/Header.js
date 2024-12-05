import React from 'react';
import './Header.css';
import { FaHeart, FaSearch, FaShoppingBag, FaHome } from 'react-icons/fa'; // Importing icons, including FaHome for home icon
import { Link } from 'react-router-dom'; // Importing Link from React Router

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        {/* Home Icon: Clicking it will navigate to the home page */}
        <Link to="/" className="home-icon">
          <FaHome size={24} />
        </Link>
        <h1>AJIO</h1> {/* Logo */}
      </div>
      <nav className="header-nav">
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
        <Link to="/beauty">Beauty</Link>
        <Link to="/home-kitchen">Home & Kitchen</Link>
        <Link to="/cart">Cart </Link>
      </nav>
      <div className="header-search">
        <input type="text" placeholder="Search AJIO" />
        {/* Search Button */}
        <button className="search-btn">
          <FaSearch />
        </button>
        {/* Wishlist Icon */}
        <button className="icon-btn">
          <FaHeart />
        </button>
        {/* Cart Icon */}
        <button className="icon-btn">
          <FaShoppingBag />
        </button>
      </div>
    </header>
  );
};

export default Header;
