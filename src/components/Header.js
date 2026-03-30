 import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
 import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
 export const Header=()=>{
    return(
        <div className="nav-bar">
            <div className="logo-container">
                <img  className="logo"src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=appetizer-bowl-delicious-1640772.jpg&fm=jpg" alt="logo" />
            </div>
            
              
                
                <div className="nav-items">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                         <li><Link to="/about">About</Link></li>
                          <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div className="user-icons">
                    <FontAwesomeIcon icon={faUser} />
                   <FontAwesomeIcon icon={faCartShopping} />
                   </div>
                </div>
        
        </div>
    )
}