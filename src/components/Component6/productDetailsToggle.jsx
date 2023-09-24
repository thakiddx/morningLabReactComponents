import React, { useState } from 'react';

function ProductDetailsToggle({ product }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h2>Product Details</h2>
      <div>
        <p>Title: {product.title}</p>
        <button onClick={handleVisibleToggle}>Toggle Description</button>
        {isVisible && (
          <div>
            <p>Description: {product.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetailsToggle;