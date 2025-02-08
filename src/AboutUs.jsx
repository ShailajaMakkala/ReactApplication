import React from 'react';

const AboutUs = () => (
  <div
    className="container-fluid vh-100 p-0"
    style={{
      backgroundImage: 'url(/images/home.png)',  // Correct path to the background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',  // Full viewport height
      width: '100vw',   // Full viewport width
      position: 'relative',  // To allow overlay content
    }}
  >
    {/* Overlay Content with Background Color */}
    <div
      className="about-overlay"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent black overlay
        color: '#fff',  // White text color
        padding: '20px',
        overflowY: 'auto',
      }}
    >
      <h1 className="text-danger mb-4 text-center">About MarketBasket</h1>
      <p>
        At MarketBasket, we are dedicated to providing the highest quality products. 
        We source fresh fruits, vegetables, and grocery items directly from trusted farmers 
        and manufacturers, ensuring you receive only the best.
      </p>

      <h2 className="text-primary">Our Offerings</h2>
      <ul className="list-unstyled">
        <li>Fresh Fruits & Vegetables</li>
        <li>Daily Essentials</li>
        <li>Packaged Foods</li>
        <li>Organic Products</li>
        <li>Beverages</li>
        <li>Health & Personal Care</li>
      </ul>

      <p>
        Our commitment is to provide an excellent shopping experience with timely deliveries 
        and exceptional customer service.
      </p>
    </div>
  </div>
);

export default AboutUs;
