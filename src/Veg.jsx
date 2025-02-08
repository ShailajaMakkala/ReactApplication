import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addToCart } from './Store';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is imported

function Veg() {
  const vegProducts = useSelector(state => state.products.veg);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
<br></br>
  // Map products to display
  const items = vegProducts.map((product, index) => (
    <div key={index} className="col-12 col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0 rounded-lg">
        <img 
          src={`/images/${product.image}`} 
          alt={product.name} 
          className="card-img-top hover-zoom" 
          style={{height:'210px',width:'300px',objectFit:'cover'}}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Category: {product.category}</p>
          <p className="card-text">Price: ${product.price.toFixed(2)}</p>
          <p className="card-text">Quantity: {product.quantity}</p>
          <button 
            onClick={() => dispatch(addToCart(product))} 
            className="btn btn-primary btn-block transition-all hover-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div
      className="container-fluid p-0"
      style={{
        backgroundImage: 'url(/images/home.png)',  // Ensure the correct path to the image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',  // Full viewport height
        width: '100vw',   // Full viewport width
        position: 'relative',  // To allow overlay content
      }}
    >
      {/* Overlay Content with Background Color */}
      <div
        className="d-flex flex-column justify-content-center align-items-center text-white"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent black overlay
          padding: '20px',
          overflowY: 'auto',
        }}
      >
        <h3 className="text-center my-4">Veg Items</h3>

        {/* Display Veg Products */}
        <div className="row">
          {items.length ? items : <p>No products available</p>}
        </div>
      </div>
    </div>
  );
}

export default Veg;
