import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import Home from "./Home";
import NonVeg from "./NonVeg";
import PurchaseHistory from "./PurchaseHistory";
import Veg from "./Veg";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import NotFound from "./NotFound";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'; // Import the CSS file

function App() {
  const cartItems = useSelector((state) => state.cart?.items || []);
  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/logon.png" alt="Logo" width="50" height="auto" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link home-link" to="/">
                  <i className="fa-solid fa-house"></i> Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link veg-link" to="/veg"><i className="fa-solid fa-leaf"></i> Veg Items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nonveg-link" to="/nonveg"><i className="fa-solid fa-drumstick-bite"></i> Non-Veg Items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link cart-link" to="/cart"><i className="fa-solid fa-cart-shopping"></i> Cart ({totalItems})</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link purchase-link" to="/purchase"><i className="fa-solid fa-bag-shopping"></i> Purchase History</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link contact-link" to="/contact"><i className="fa-solid fa-phone"></i> Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link about-link" to="/about"><i className="fa-solid fa-address-card"></i> About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main content with margin-top to avoid overlap with fixed navbar */}
      <div className="container-fluid fullscreen-background" style={{ marginTop: '70px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchase" element={<PurchaseHistory />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
