// src/components/Checkout.jsx

import React, { useState } from 'react';
import './Checkout.css';

const Checkout = ({ cartItems, onPlaceOrder }) => {
  const [address, setAddress] = useState('');

  const handlePlaceOrder = () => {
    onPlaceOrder(address);
  };

  return (
    <div className="Checkout">
      <h1>Checkout</h1>
      <div>
        <h2>Order Summary</h2>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.medicine_name} - ${item.price}</p>
          </div>
        ))}
        <h3>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</h3>
      </div>
      <div>
        <h2>Delivery Address</h2>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
          rows="4"
          cols="50"
        />
      </div>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;
