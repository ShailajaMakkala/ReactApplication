import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import NonVeg from "./NonVeg";
import PurchaseHistory from "./PurchaseHistory";
import Veg from "./Veg";
import { useSelector } from "react-redux";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";
import FacebookLoginComponent from "./FacebookLoginComponent";

function App() {
  // Access the items array from the cart slice
  const cartItems = useSelector((state) => state.cart.items);
  
  // Calculate total items in the cart
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <GoogleOAuthProvider clientId="571030855502-nf8evh4cfuk1vnpat2k22h62skfcepdo.apps.googleusercontent.com">
                
    <GoogleLoginComponent />
    <FacebookLoginComponent />

      <Router>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/veg">Veg Items</Link>
          <Link to="/nonveg">Non-Veg Items</Link>
          <Link to="/cart">Cart ({totalItems})</Link>
          <Link to="/purchase">Purchase History</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/about">About Us</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchase" element={<PurchaseHistory />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
