import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import OfferSection from './components/OfferSection';
import Footer from './components/Footer';
import ProductSection from './components/ProductSection';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import Beauty from './components/Beauty';
import HomeKitchen from './components/HomeKitchen';
import CartPage from './components/CartPage';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [successMessage, setSuccessMessage] = useState(''); // Track success message

  // Function to add product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    // Set success message and clear it after 2 seconds
    setSuccessMessage(`Added ${product.name} to the cart!`);
    setTimeout(() => {
      setSuccessMessage('');
    }, 2000);
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== product.id));
  };

  const updateQuantity = (product, quantityChange) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantityChange }
          : item
      )
    );
  };

  return (
    <Router>
      <div className="app">
        <Header />

        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}

        <Routes>
          <Route path="/" element={<><Banner /><OfferSection /></>} />
          <Route path="/products" element={<ProductSection />} />
          <Route path="/men" element={<Men addToCart={addToCart} />} />
          <Route path="/women" element={<Women addToCart={addToCart} />} />
          <Route path="/kids" element={<Kids addToCart={addToCart} />} />
          <Route path="/beauty" element={<Beauty addToCart={addToCart} />} />
          <Route path="/home-kitchen" element={<HomeKitchen addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
