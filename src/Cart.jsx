import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addPurchase, clearCart, decrement, increment, removeCart } from "./Store";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const itemsList = cartItems.length > 0 ? (
    cartItems.map((item) => (
      <div key={item.name} className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h5>{item.name}</h5>
          <p>Price: ${(item.price * item.quantity).toFixed(2)}, Quantity: {item.quantity}</p>
        </div>
        <div>
          <button className="btn btn-secondary btn-sm me-2" onClick={() => dispatch(increment({ name: item.name }))}>+1</button>
          <button className="btn btn-secondary btn-sm me-2" onClick={() => dispatch(decrement({ name: item.name }))}>-1</button>
          <button className="btn btn-danger btn-sm" onClick={() => dispatch(removeCart({ name: item.name }))}>Remove</button>
        </div>
      </div>
    ))
  ) : (
    <li className="text-center">Cart is empty</li>
  );

  const [discountPerc, setDiscountPerc] = useState(0); // Manual discount percentage
  const [couponCode, setCouponCode] = useState(""); // Coupon code input
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const calculateTotal = () => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = total * (discountPercentage / 100);
    const manualDiscount = total * discountPerc;
    const netAmount = total - discount - manualDiscount;
    return {
      total,
      discount,
      manualDiscount,
      netAmount
    };
  };

  const { total, discount, manualDiscount, netAmount } = calculateTotal();

  const handleDisPercentage = (percentage) => {
    setDiscountPerc(percentage / 100);
  };

  const handleApplyCoupon = () => {
    switch (couponCode.toUpperCase()) {
      case "SHAILU10":
        setDiscountPercentage(10);
        break;
      case "SHAILU20":
        setDiscountPercentage(20);
        break;
      case "SHAILU30":
        setDiscountPercentage(30);
        break;
      default:
        setDiscountPercentage(0);
        alert("Invalid coupon code");
    }
  };

  const handleCompletePurchase = () => {
    const { netAmount } = calculateTotal();
    const purchaseDate = new Date().toLocaleDateString();

    // Making the object by using above values
    const purchaseDetails = {
      date: purchaseDate,
      items: [...cartItems],
      totalAmount: Number(netAmount),
    };
    dispatch(clearCart());

    // Sending the object to addPurchase() reducer input
    dispatch(addPurchase(purchaseDetails));
  };

  return (
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
        className="cart-overlay"
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
        <h2 className="text-center mb-4">Your Cart</h2>

        {/* Cart Items List */}
        <div className="list-group">
          {itemsList}
        </div>

        <div className="mt-4">
          <h4>Total before discount: ${total.toFixed(2)}</h4>

          {/* Manual discount buttons */}
          <div className="mb-3">
            <button className="btn btn-info me-2" onClick={() => handleDisPercentage(10)}>Apply 10% Discount</button>
            <button className="btn btn-info me-2" onClick={() => handleDisPercentage(20)}>Apply 20% Discount</button>
            <button className="btn btn-info" onClick={() => handleDisPercentage(30)}>Apply 30% Discount</button>
          </div>

          {discountPerc > 0 && (
            <>
              <h5>Manual Discount Percentage: {(discountPerc * 100).toFixed(0)}%</h5>
              <h5>Manual Discount Amount: ${manualDiscount.toFixed(2)}</h5>
            </>
          )}

          {/* Coupon code input */}
          <div className="mb-3">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="form-control w-50 d-inline"
              placeholder="Enter coupon code"
            />
            <button className="btn btn-primary ms-2" onClick={handleApplyCoupon}>Apply Coupon</button>
          </div>

          {discountPercentage > 0 && (
            <>
              <h5>Coupon Discount Percentage: {discountPercentage}%</h5>
              <h5>Coupon Discount Amount: ${discount.toFixed(2)}</h5>
            </>
          )}

          <h3>Net Amount after Discounts: ${netAmount.toFixed(2)}</h3>

          <button className="btn btn-success mt-4" onClick={handleCompletePurchase}>Proceed to Order</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
