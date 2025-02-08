import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addToCart } from './Store';
import 'bootstrap/dist/css/bootstrap.min.css';

function NonVeg() {
  const nonvegProducts = useSelector(state => state.products.nonVeg);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div
      className="container-fluid vh-80 p-0"
      style={{
        backgroundImage: 'url(/images/home.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        width: '100vw',
        position: 'relative',
      }}
    >
      <div
        className="nonveg-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          padding: '20px',
          overflowY: 'auto',
        }}
      >
        <h3 className="text-center my-4">Non-Veg Items</h3>

        {/* Display Non-Veg Products */}
        <div className="row">
          {nonvegProducts.length > 0 ? (
            nonvegProducts.map((product, index) => (
              <div key={index} className="col-12 col-md-4 mb-4"> {/* 3 cards per row */}
                <div className="card h-100 shadow-sm border-0 rounded-lg hover-shadow-lg">
                  <img 
                    src={`/images/${product.image}`} 
                    alt={product.name} 
                    className="card-img-top hover-zoom" 
                    style={{ height: '350px', objectFit: 'cover' }} // Adjusted image to fit within card
                  />
                  <div className="card-body p-3">
                    <h6 className="card-title">{product.name}</h6>
                    <p className="card-text mb-1">Category: {product.category}</p>
                    <p className="card-text mb-1">Price: ${product.price.toFixed(2)}</p>
                    <p className="card-text mb-1">Quantity: {product.quantity}</p>
                    <button 
                      onClick={() => dispatch(addToCart(product))} 
                      className="btn btn-primary btn-sm btn-block transition-all hover-btn">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No Non-Veg Products Available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default NonVeg;
