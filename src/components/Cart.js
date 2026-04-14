import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, addItem, decrementItem, removeSpecificItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../utils/constants";
import { FaTrashAlt, FaPlus, FaMinus, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => dispatch(clearCart());
  const handleAddItem = (item) => dispatch(addItem(item));
  const handleDecrementItem = (id) => dispatch(decrementItem(id));
  const handleRemoveItem = (id) => dispatch(removeSpecificItem(id));

  const handleCheckout = () => {
    setIsOrderPlaced(true);
    dispatch(clearCart());
  };

  const subtotal =
    cartItems.reduce(
      (acc, item) =>
        acc + (item?.card?.info?.price || item?.card?.info?.defaultPrice || 0) * item.quantity,
      0
    ) / 100;

  const deliveryFee = subtotal > 0 ? 40 : 0;
  const gst = subtotal * 0.05;
  const total = subtotal + deliveryFee + gst;

  /* ── Order Success Screen ── */
  if (isOrderPlaced) {
    return (
      <div className="order-success">
        <div className="order-success-card">
          <div className="order-success-icon"><FaCheckCircle /></div>
          <h1>Order Placed!</h1>
          <p>
            Hang tight! Our chefs are already prepared to craft your delicious
            meal. You'll receive a confirmation SMS shortly.
          </p>
          <Link to="/">
            <button className="add-button btn-checkout">EXPLORE MORE</button>
          </Link>
        </div>
      </div>
    );
  }

  /* ── Main Cart View ── */
  return (
    <div className="cart-page">
      {/* Header */}
      <div className="cart-header">
        <h1>Your Feast</h1>
        {cartItems.length > 0 && (
          <button className="filter-btn btn-empty-cart" onClick={handleClearCart}>
            Empty Cart
          </button>
        )}
      </div>

      {/* Empty State */}
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <div className="cart-empty-icon">🍽️</div>
          <h2>Your plate is empty!</h2>
          <p>Looks like you haven't added anything yet. Explore our top restaurants!</p>
          <Link to="/">
            <button className="add-button">GO TO HOME</button>
          </Link>
        </div>
      ) : (
        /* Cart Content */
        <div className="cart-layout">
          {/* Items List */}
          <div className="cart-items-list">
            {cartItems.map((item) => {
              const { id, name, price, defaultPrice, imageId } = item?.card?.info;
              return (
                <div key={id} className="cart-item">
                  <div className="cart-item-img">
                    {imageId ? (
                      <img src={IMG_CDN_URL + imageId} alt={name} />
                    ) : (
                      <div className="cart-item-img-placeholder">🥘</div>
                    )}
                  </div>

                  <div className="cart-item-info">
                    <h3>{name}</h3>
                    <span className="price">₹{(price || defaultPrice) / 100}</span>
                  </div>

                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => handleDecrementItem(id)}>
                      <FaMinus size={12} />
                    </button>
                    <span className="qty-count">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => handleAddItem(item)}>
                      <FaPlus size={12} />
                    </button>
                  </div>

                  <button className="btn-remove-item" onClick={() => handleRemoveItem(id)}>
                    <FaTrashAlt size={16} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Bill Summary */}
          <div className="bill-summary">
            <h2>Bill Details</h2>
            <div className="bill-rows">
              <div className="bill-row">
                <span>Item Total</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="bill-row">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee.toFixed(2)}</span>
              </div>
              <div className="bill-row">
                <span>GST (5%)</span>
                <span>₹{gst.toFixed(2)}</span>
              </div>
              <div className="bill-total">
                <span>TO PAY</span>
                <span className="total-amount">₹{total.toFixed(2)}</span>
              </div>
            </div>
            <button className="add-button btn-checkout" onClick={handleCheckout}>
              PROCEED TO PAY
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
