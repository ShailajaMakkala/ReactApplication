import React from 'react';

function Home() {
  return (
    <div
      className="container-fluid vh-100 p-0"
      style={{
        backgroundImage: 'url(/images/home.png)', // Ensure this path is correct
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Full viewport height
        width: '100vw',  // Full viewport width
        filter: 'blur(3px)', // Apply blur effect to the background
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center h-100"
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <div className="text-center text-white p-4" style={{ maxWidth: '600px' }}>
          <h1 className="display-3 fw-bold">Welcome to Our Website</h1>
          <p className="lead">
            Discover amazing content and explore new possibilities. Join us on this incredible journey.
          </p>
          <a href="#explore" className="btn btn-primary btn-lg">
            Explore More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
