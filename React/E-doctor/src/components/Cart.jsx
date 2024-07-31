// src/components/Cart.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/checkout');
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No products in the cart</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h2>{item.medicine_name}</h2>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => onRemoveFromCart(item)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</h3>
          <button onClick={handleOrderNow}>Order Now</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
