import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleUser, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../utils/authSlice";
import useOnlineStatus from "../utils/useOnlineStatus";
import ThemeContext from "../utils/ThemeContext";

export const Header = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const cartItems = useSelector((store) => store.cart.items);
  const { isLoggedIn, user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const onlineStatus = useOnlineStatus();

  const totalQty = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const handleAuth = () => {
    if (isLoggedIn) {
      dispatch(logout());
      setShowUserMenu(false);
    } else {
      dispatch(login({ name: "Anjali Kasoudhan", email: "anjali@foodsathi.com" }));
    }
  };

  return (
    <div className="nav-bar">
      {/* Logo */}
      <div className="logo-container">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      {/* Navigation */}
      <div className="nav-items">
        <ul>
          <li>
            <span className="online-status">
              {onlineStatus ? "✅ Online" : "🔴 Offline"}
            </span>
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="user-icons">
          {/* Theme Toggle */}
          <div className="icon-btn theme-toggle" onClick={toggleTheme}>
            <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
          </div>

          {/* Auth Section */}
          <div className="auth-section">
            {isLoggedIn && (
              <div
                className="user-name-label"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                Hi, {user.name.split(" ")[0]}
              </div>
            )}

            <div
              className="icon-btn"
              onClick={() => (isLoggedIn ? setShowUserMenu(!showUserMenu) : handleAuth())}
            >
              <FontAwesomeIcon icon={isLoggedIn ? faCircleUser : faUser} />
            </div>

            {/* User Details Popup */}
            {isLoggedIn && showUserMenu && (
              <div className="user-details-popup">
                <h4>{user.name}</h4>
                <p>{user.email}</p>
                <div className="popup-divider"></div>
                <button className="btn-logout" onClick={handleAuth}>
                  <FontAwesomeIcon icon={faRightFromBracket} /> LOGOUT
                </button>
              </div>
            )}

            {!isLoggedIn && (
              <button className="btn-login" onClick={handleAuth}>
                LOGIN
              </button>
            )}
          </div>

          {/* Cart Icon */}
          <Link to="/cart">
            <div className="icon-btn">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="cart-badge">{totalQty}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};