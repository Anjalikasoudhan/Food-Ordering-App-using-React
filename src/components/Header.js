 import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
 import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import FoodLogo from "../assets/FoodLogo.png";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";
 export const Header=()=>{
    const cartItems = useSelector((store) => store.cart.items);
    const onlineStatus=useOnlineStatus();
   console.log(FoodLogo);
    return(
        <div className="nav-bar">
            <div className="logo-container">
              
               <img src={FoodLogo.default} alt="Food Saathi" className="logo-img" />
              
            </div>
            
            <div className="nav-items">
                    <ul>
                        <li>Online Status: {onlineStatus?"✅":"🔴"} </li>
                        <li><Link to="/">Home</Link></li>
                         <li><Link to="/about">About</Link></li>
                          <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div className="user-icons">
                      <div className="icon-btn">
                         <FontAwesomeIcon icon={faUser} />
                      </div>
                      <div className="icon-btn">
                          <FontAwesomeIcon icon={faCartShopping} />
                            <span className="cart-badge">{cartItems.length}</span>
                         </div>
                   </div>
                </div>
        
        </div>
    )
}