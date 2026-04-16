import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <Logo />
                    <p className="footer-tagline">
                        Bringing your favorite meals straight to your doorstep with love and care. 
                        Join the FoodSathi community today!
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="link-group">
                        <h3>Company</h3>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/">Careers</Link></li>
                        </ul>
                    </div>
                    <div className="link-group">
                        <h3>Legal</h3>
                        <ul>
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Terms of Service</Link></li>
                            <li><Link to="/">Cookie Policy</Link></li>
                        </ul>
                    </div>
                    <div className="link-group">
                        <h3>Support</h3>
                        <ul>
                            <li><Link to="/contact">Help Center</Link></li>
                            <li><Link to="/">FAQ</Link></li>
                            <li><Link to="/">Partner with us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} FoodSathi Pro. All rights reserved.</p>
                <p>Made with ❤️ by Anjali Kasoudhan</p>
            </div>
        </footer>
    );
};
