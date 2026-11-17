import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Send, Twitter, Linkedin, Github, Instagram, CheckCircle2 } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="nav-logo" aria-label="Stackly Home">
              <img
                src="/stackly-logo.png"
                alt="Stackly"
                className="brand-logo-img-footer"
              />
            </Link>
            <p>
              Your premier gateway to world-class conferences, hands-on workshops, masterclasses, and executive networking sessions.
            </p>
            <div className="footer-socials">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/events">Explore Events</Link></li>
              <li><Link to="/registrations">My Registrations</Link></li>
              <li><Link to="/events?mode=Online">Virtual Workshops</Link></li>
              <li><Link to="/events?mode=In-Person">In-Person Summits</Link></li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h4 className="footer-title">Categories</h4>
            <ul className="footer-links">
              <li><Link to="/events?category=Technology">Technology & AI</Link></li>
              <li><Link to="/events?category=Design">UI/UX & Design</Link></li>
              <li><Link to="/events?category=Business">Business & Capital</Link></li>
              <li><Link to="/events?category=Education">Developer Bootcamp</Link></li>
              <li><Link to="/events?category=Marketing">Growth Marketing</Link></li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="footer-newsletter">
            <h4 className="footer-title">Stay Inspired</h4>
            <p>Subscribe for weekly curated event drops, VIP invitations, and early-bird discounts.</p>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontWeight: 600 }}>
                <CheckCircle2 size={20} />
                <span>You're on the VIP list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Stackly. All rights reserved. Built for curious minds.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
            <span style={{ cursor: 'pointer' }}>Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

