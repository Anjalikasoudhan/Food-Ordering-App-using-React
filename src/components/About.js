import { FaUtensils, FaTruck, FaAward } from "react-icons/fa";

export const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>Our Story</h1>
        <p>
          Redefining the way you experience food. From local hidden gems to
          world-class cuisines, we bring the best to your doorstep.
        </p>
      </section>

      {/* Content Section */}
      <section className="about-content">
        <div className="about-content-grid">
          <div>
            <h2>Crafting Culinary <span>Connections</span></h2>
            <p>
              Founded in 2024, FoodSathi started with a simple mission: to bridge
              the gap between hungry diners and the most passionate kitchens in the
              city. We believe that every meal is an opportunity for a memory.
            </p>
            <p>
              Our platform isn't just about delivery; it's about the artisan baker
              who wakes up at 4 AM, the family-run trattoria, and the modern fusion
              chef pushing boundaries. We are your partners in culinary exploration.
            </p>
          </div>

          <div className="about-image-wrapper">
            <div className="about-image-box">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
                alt="Restaurant"
              />
            </div>
            <div className="about-stat-badge">
              <h3>10+</h3>
              <p>Cities Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <div className="about-features-grid">
          <div className="feature-card">
            <div className="feature-icon gold"><FaUtensils /></div>
            <h3>Gourmet Selection</h3>
            <p>Only the highest-rated restaurants make it to our curated list.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon purple"><FaTruck /></div>
            <h3>Swift Delivery</h3>
            <p>Our logistics network ensures your food arrives hot and fresh.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon gold"><FaAward /></div>
            <h3>Best in Class</h3>
            <p>Award-winning service recognized for excellence in customer care.</p>
          </div>
        </div>
      </section>
    </div>
  );
};