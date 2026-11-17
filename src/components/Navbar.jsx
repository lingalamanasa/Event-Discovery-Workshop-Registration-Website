import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sparkles, Search, BookmarkCheck, Menu, X, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { useRegistration } from '../context/RegistrationContext';
import SearchModal from './SearchModal';
import Magnetic from './Magnetic';
import '../styles/navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { registrationCount } = useRegistration();
  const location = useLocation();

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const badgeRef = useRef(null);
  const mobileDrawerRef = useRef(null);
  const mobileBackdropRef = useRef(null);
  const mobileLinksRef = useRef(null);

  // Initial Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slide-down navbar
      gsap.fromTo(
        navRef.current,
        { y: -90, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }
      );

      // Logo scale-in with spring
      gsap.fromTo(
        logoRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.75, delay: 0.2, ease: 'back.out(1.8)' }
      );

      // Staggered desktop navigation links
      gsap.fromTo(
        '.nav-menu li',
        { opacity: 0, y: -18 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, delay: 0.35, ease: 'power2.out' }
      );

      // Right action pills
      gsap.fromTo(
        '.nav-actions > *',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, stagger: 0.1, duration: 0.5, delay: 0.45, ease: 'back.out(1.5)' }
      );
    });

    return () => ctx.revert();
  }, []);

  // Pop animation whenever registration count changes
  const prevCountRef = useRef(registrationCount);
  useEffect(() => {
    if (prevCountRef.current !== registrationCount && badgeRef.current) {
      gsap.fromTo(
        badgeRef.current,
        { scale: 0.6, backgroundColor: '#7357E8' },
        {
          scale: 1.35,
          backgroundColor: '#FF796C',
          duration: 0.25,
          yoyo: true,
          repeat: 1,
          ease: 'back.out(2)'
        }
      );
    }
    prevCountRef.current = registrationCount;
  }, [registrationCount]);

  // Sticky Navbar listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile Drawer animation with spring timeline
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const drawer = mobileDrawerRef.current;
      const links = mobileLinksRef.current?.querySelectorAll('.mobile-nav-item');

      gsap.to(mobileBackdropRef.current, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.3,
        ease: 'power2.out'
      });

      gsap.fromTo(
        drawer,
        { x: '100%' },
        { x: '0%', duration: 0.5, ease: 'power4.out' }
      );

      if (links) {
        gsap.fromTo(
          links,
          { x: 40, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.08, duration: 0.4, delay: 0.15, ease: 'back.out(1.4)' }
        );
      }
    } else {
      document.body.style.overflow = '';
      if (mobileDrawerRef.current) {
        gsap.to(mobileDrawerRef.current, {
          x: '100%',
          duration: 0.35,
          ease: 'power3.in'
        });
      }
      if (mobileBackdropRef.current) {
        gsap.to(mobileBackdropRef.current, {
          opacity: 0,
          pointerEvents: 'none',
          duration: 0.3
        });
      }
    }
  }, [isMobileMenuOpen]);

  // Close drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        ref={navRef}
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      >
        <div className="container nav-container">
          {/* Logo with magnetic effect */}
          <Magnetic strength={0.2}>
            <Link to="/" className="nav-logo" ref={logoRef} aria-label="Stackly Home">
              <img
                src="/stackly-logo.png"
                alt="Stackly"
                className="brand-logo-img"
              />
            </Link>
          </Magnetic>

          {/* Center Navigation Links */}
          <nav>
            <ul className="nav-menu">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Explore Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/registrations"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  My Registrations
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Right Action buttons */}
          <div className="nav-actions">
            {/* Quick Search */}
            <Magnetic strength={0.3}>
              <button
                className="nav-search-btn"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search events"
                title="Search events"
              >
                <Search size={18} />
              </button>
            </Magnetic>

            {/* Registrations shortcut */}
            <Magnetic strength={0.25}>
              <Link
                to="/registrations"
                className={`nav-registrations-pill ${location.pathname === '/registrations' ? 'active' : ''}`}
                title="View your registered events"
              >
                <BookmarkCheck size={18} />
                <span className="reg-text">My Bookings</span>
                <span ref={badgeRef} className="reg-counter-badge">{registrationCount}</span>
              </Link>
            </Magnetic>

            {/* Mobile hamburger button */}
            <button
              className="hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        ref={mobileBackdropRef}
        className="mobile-nav-backdrop"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside ref={mobileDrawerRef} className="mobile-drawer">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="nav-logo">
            <img
              src="/stackly-logo.png"
              alt="Stackly"
              className="brand-logo-img-mobile"
            />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <ul ref={mobileLinksRef} className="mobile-menu-links">
          <li className="mobile-nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Home</span>
              <ArrowRight size={16} />
            </NavLink>
          </li>
          <li className="mobile-nav-item">
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Explore Events</span>
              <ArrowRight size={16} />
            </NavLink>
          </li>
          <li className="mobile-nav-item">
            <NavLink
              to="/registrations"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>My Registrations</span>
                <span className="reg-counter-badge">{registrationCount}</span>
              </div>
              <ArrowRight size={16} />
            </NavLink>
          </li>
        </ul>

        <div className="mobile-drawer-footer">
          <button
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsSearchOpen(true);
            }}
          >
            <Search size={18} />
            Search Events
          </button>
        </div>
      </aside>

      {/* Global Quick Search Modal */}
      {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
    </>
  );
};

export default Navbar;
