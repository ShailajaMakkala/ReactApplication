// Veg.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './store';

function Veg() {
  const vegProducts = useSelector(state => state.products.veg);
  const dispatch = useDispatch();

  // Get unique brands for the checkboxes
  const brands = [...new Set(vegProducts.map(product => product.brand))];

  // State to track selected brands for filtering
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Handle brand checkbox selection
  const handleBrandChange = (brand) => {
    setSelectedBrands((prevSelected) =>
      prevSelected.includes(brand)
        ? prevSelected.filter(b => b !== brand)
        : [...prevSelected, brand]
    );
  };

  // Filter products based on selected brands
  const filteredProducts = selectedBrands.length
    ? vegProducts.filter(product => selectedBrands.includes(product.brand))
    : vegProducts;

  // Map filtered products to display
  const items = filteredProducts.map((product, index) => (
    <li key={index}>
      Item: {product.name} <br />
      Brand: {product.brand} <br />
      Price: ${product.price.toFixed(2)}
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </li>
  ));

  return (
    <>
      <h3 style={{ color: "purple" }}>Veg Items:</h3>
      
      {/* Brand Checkboxes */}
      <div className="brand-checkbox-container">
        <h4>Filter by Brand:</h4>
        {brands.map((brand, index) => (
          <label key={index}>
            <input
              type="checkbox"
              value={brand}
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            {brand}
          </label>
        ))}
      </div>

      {/* Display Filtered Products */}
      <ul>{items.length ? items : "No products available for the selected brand(s)"}</ul>
    </>
  );
}

export default Veg;
