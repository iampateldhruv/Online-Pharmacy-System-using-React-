import React from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="ProductItem">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
