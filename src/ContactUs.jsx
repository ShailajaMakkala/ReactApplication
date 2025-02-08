import React from 'react';

const ContactUs = () => (
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
      className="contact-overlay"
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
      <h1 className="mb-4 text-center">Contact Us</h1>

      <h2>Get in Touch</h2>
      <p>
        📧 <strong>Email:</strong> <a href="mailto:info@foodmenu.com" className="text-decoration-none">info@foodmenu.com</a>
      </p>
      <p>
        📞 <strong>Phone:</strong> <a href="tel:+11234567890" className="text-decoration-none">(123) 456-7890</a>
      </p>
      <p>
        🕒 <strong>Business Hours:</strong> Monday to Friday, 9 AM to 6 PM
      </p>

      <h2>Follow Us</h2>
      <p>Stay updated with our latest offers and updates on social media!</p>
      <ul className="list-unstyled">
        <li><a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Facebook</a></li>
        <li><a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Twitter</a></li>
        <li><a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Instagram</a></li>
        <li><a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="text-decoration-none">LinkedIn</a></li>
      </ul>
    </div>
  </div>
);

export default ContactUs;
