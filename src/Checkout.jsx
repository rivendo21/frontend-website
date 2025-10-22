import { useState, useEffect } from "react";
import { getCart, saveCart } from "./localstorage";
import "./admin.css";
import "./checkout.css";
export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  const placeOrder = () => {
    setShowPayment(true);
  };

  const confirmPayment = () => {
    alert("Payment successful! Order placed.");
    setCart([]);
    saveCart([]);
    setShowPayment(false);
    window.dispatchEvent(new Event("storage"));
  };

  const removeItem = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
    saveCart(updatedCart);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-total">Total: ${total.toFixed(2)}</div>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  {item.name} - ${item.price}
                </div>
                <button
                  className="delete-btn"
                  onClick={() => removeItem(index)}
                >
                  ❌ Remove
                </button>
              </li>
            ))}
          </ul>
          <button className="checkout" onClick={placeOrder}>
            Place Order
          </button>
        </>
      )}

      {showPayment && (
        <div className="payment-modal">
          <div className="payment-box">
            <h3>Stripe Payment Simulation</h3>
            <p>Card Number: **** **** **** 4242</p>
            <p>Total: ${total.toFixed(2)}</p>
            <button onClick={confirmPayment}>Confirm Payment</button>
            <button onClick={() => setShowPayment(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
