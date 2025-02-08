import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

function PurchaseHistory() {
  // Access the purchase history from Redux store
  const purchaseHistory = useSelector((state) => state.purchaseHistory);

  return (
    <div
      className="container-fluid vh-100 p-0"
      style={{
        backgroundImage: 'url(/images/home.png)',  // Ensure this path is correct
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',  // Full viewport height
        width: '100vw',   // Full viewport width
        position: 'relative',  // To allow overlay content
      }}
    >
      {/* Overlay Content with Background Color */}
      <div
        className="purchase-history-overlay"
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
        <h2 className="text-center text-white mb-4">Purchase History</h2>

        {purchaseHistory.length === 0 ? (
          <p className="text-center text-white">No past purchases available.</p>
        ) : (
          <ul className="list-unstyled">
            {purchaseHistory.map((purchase, index) => (
              <li key={index} className="mb-4">
                <div className="card p-3 bg-dark text-white">
                  <p><strong>Date:</strong> {purchase.date}</p>
                  <p><strong>Total Amount:</strong> ${purchase.totalAmount.toFixed(2)}</p>

                  <h3>Items:</h3>
                  <ul className="list-unstyled">
                    {purchase.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <p><strong>Product:</strong> {item.name}</p>
                        <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
                        <p><strong>Quantity:</strong> {item.quantity}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <hr />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default PurchaseHistory;
