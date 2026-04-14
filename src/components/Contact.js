import { useState } from "react";
import {
  FaPaperPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <div className="contact-grid">
        {/* Left Side — Contact Info */}
        <div>
          <h1>Get in <span>Touch</span></h1>
          <p className="contact-intro">
            Have a question about your order or want to partner with us? Drop us
            a line and we'll get back to you within 24 hours.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-info-icon"><FaPhoneAlt /></div>
              <div>
                <p className="label">Call Us</p>
                <p className="value">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon"><FaEnvelope /></div>
              <div>
                <p className="label">Email Us</p>
                <p className="value">support@foodsathi.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon"><FaMapMarkerAlt /></div>
              <div>
                <p className="label">Visit Us</p>
                <p className="value">123 Culinary Ave, Foodie City, FC 90210</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-section">
            <p className="social-label">Follow the flavor</p>
            <div className="social-links">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebookF /></a>
            </div>
          </div>
        </div>

        {/* Right Side — Form */}
        <div className="contact-form-card">
          {submitted ? (
            <div className="contact-success">
              <div className="contact-success-icon">✉️</div>
              <h2>Message Sent!</h2>
              <p>Thank you for reaching out. Our team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows="5"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you?"
                />
              </div>

              <button type="submit" className="add-button btn-send">
                <FaPaperPlane /> SEND MESSAGE
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};