import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const navigate = useNavigate();
  const deliveryFee = 50; // Flat delivery fee

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return subtotal - discountAmount + deliveryFee;
  };

  const handleDiscountApply = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (discountCode === 'SAVE10') {
      setDiscountAmount(0.1 * subtotal); // 10% discount
      setDiscountApplied(true);
      alert('10% discount applied!');
    } else if (discountCode === 'SAVE50') {
      setDiscountAmount(50); // Flat ₹50 discount
      setDiscountApplied(true);
      alert('Flat ₹50 discount applied!');
    } else {
      alert('Invalid discount code!');
    }
  };

  const getDeliveryDate = () => {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 7); // Add 7 days for delivery
    return deliveryDate.toDateString();
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    navigate('/checkout');
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => updateQuantity(item, -1)} disabled={item.quantity <= 1}>
                  -
                </button>
                <button onClick={() => updateQuantity(item, 1)}>+</button>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Bag Details</h3>
            <p>
              <strong>Subtotal:</strong> ₹{calculateSubtotal().toFixed(2)}
            </p>
            {discountApplied && (
              <p>
                <strong>Discount:</strong> ₹{discountAmount.toFixed(2)}
              </p>
            )}
            <p>
              <strong>Delivery Fee:</strong> ₹{deliveryFee.toFixed(2)}
            </p>
            <p>
              <strong>Total:</strong> ₹{calculateTotal().toFixed(2)}
            </p>
            <div className="discount-section">
              <input
                type="text"
                placeholder="Enter discount code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <button onClick={handleDiscountApply} disabled={discountApplied}>
                Apply Discount
              </button>
            </div>
            <p>
              <strong>Estimated Delivery Date:</strong> {getDeliveryDate()}
            </p>
          </div>
          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
