import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeItem } from "./store"; // Adjust path based on your file structure
import { useState } from "react";

function Cart() {
    // Get cart items from the Redux store
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    // Map through items to display them or show a message if the cart is empty
    const itemsList = cartItems.length > 0 ? (
        cartItems.map((item) => (
            <li key={item.name}>
                {item.name}, ${(item.price * item.quantity).toFixed(2)}, Quantity: {item.quantity}
                <button onClick={() => dispatch(increment({ name: item.name }))}>+1</button>
                <button onClick={() => dispatch(decrement({ name: item.name }))}>-1</button>
                <button onClick={() => dispatch(removeItem({ name: item.name }))}>Remove</button>
            </li>
        ))
    ) : (
        "Cart is empty"
    );

    // Discount state variables
    const [disperce, setDisPerc] = useState(0); // Manual discount percentage buttons
    const [couponCode, setCouponCode] = useState(""); // Coupon code input
    const [discountPercentage, setDiscountPercentage] = useState(0);

    // Calculate totals based on current cart and discount amount
    const calculateTotal = () => {
        const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const discount = total * (discountPercentage / 100);
        const discountByButton = total * disperce;
        const netAmount = total - discount - discountByButton;
        return {
            total,
            discount,
            discountByButton,
            netAmount
        };
    };

    const { total, discount, discountByButton, netAmount } = calculateTotal();

    // Handle applying discount by button percentage
    const handleDisPercentage = (percentage) => {
        setDisPerc(percentage / 100);
    };

    // Handle applying discount by coupon code
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

    return (
        <>
            <h2>This is the cart page</h2>
            <ul>{itemsList}</ul>
            <h2>Total before discount: ${total.toFixed(2)}</h2>

            {/* Manual discount buttons */}
            <button onClick={() => handleDisPercentage(10)}>Apply 10%</button>
            <button onClick={() => handleDisPercentage(20)}>Apply 20%</button>
            <button onClick={() => handleDisPercentage(30)}>Apply 30%</button>

            <h2>Manual Discount Percentage: {(disperce * 100).toFixed(0)}%</h2>
            <h2>Manual Discount Amount: ${discountByButton.toFixed(2)}</h2>

            {/* Coupon code input */}
            <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon code"
            />
            <button onClick={handleApplyCoupon}>Apply Coupon</button>

            <h2>Coupon Discount Percentage: {discountPercentage}%</h2>
            <h2>Coupon Discount Amount: ${discount.toFixed(2)}</h2>

            <h2>Net Amount after Discounts: ${netAmount.toFixed(2)}</h2>
        </>
    );
}

export default Cart;
