import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  Compass,
  Award,
  Zap,
  TrendingUp,
  CheckCircle2,
  Star,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Quote
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useRegistration } from '../context/RegistrationContext';
import { categoriesList, whyChooseFeatures, platformStats, testimonialsData, momentsGalleryData, featuredSpeakersData } from '../data/eventsData';
import EventCard from '../components/EventCard';
import CategoryCard from '../components/CategoryCard';
import Magnetic from '../components/Magnetic';
import TiltCard from '../components/TiltCard';
import AnimatedHeading from '../components/AnimatedHeading';
import AnimatedCounter from '../components/AnimatedCounter';
import '../styles/hero.css';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const { events } = useRegistration();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [upcomingFilter, setUpcomingFilter] = useState('all');
  const [heroSearchText, setHeroSearchText] = useState('');
  const [heroCategory, setHeroCategory] = useState('');
  const [heroMode, setHeroMode] = useState('');
  const navigate = useNavigate();

  const heroVisualRef = useRef(null);
  const statsSectionRef = useRef(null);
  const featuredSectionRef = useRef(null);
  const upcomingGridRef = useRef(null);
  const categoriesGridRef = useRef(null);
  const featuresGridRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaBoxRef = useRef(null);

  // Find featured event or fallback to first
  const featuredEvent = events.find((ev) => ev.featured) || events[0];

  const filteredUpcoming = events.filter((e) => {
    if (upcomingFilter === 'trending') return e.featured || e.availableSeats <= 20;
    if (upcomingFilter === 'free') return e.isFree;
    if (upcomingFilter === 'hybrid') return e.mode === 'Hybrid';
    if (upcomingFilter === 'tech') return e.category === 'Technology';
    return true;
  }).slice(0, 6);

  const handleHeroSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (heroSearchText) params.set('q', heroSearchText);
    if (heroCategory) params.set('category', heroCategory);
    if (heroMode) params.set('mode', heroMode);
    navigate(`/events?${params.toString()}`);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero visual parallax floating on scroll
      if (heroVisualRef.current) {
        gsap.to(heroVisualRef.current.querySelector('.hero-main-card'), {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
          }
        });

        // Floating Badge Wobble animation
        gsap.to('.floating-badge-top', {
          y: -12,
          rotate: -2,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });

        gsap.to('.floating-attendees-badge', {
          y: -10,
          rotate: 1.5,
          duration: 3.4,
          repeat: -1,
          yoyo: true,
          delay: 0.5,
          ease: 'sine.inOut'
        });
      }

      // Stats Section Entrance
      if (statsSectionRef.current) {
        const statCards = statsSectionRef.current.querySelectorAll('.stat-item-card');
        gsap.fromTo(
          statCards,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: statsSectionRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }

      // 2. Featured Section Entrance
      if (featuredSectionRef.current) {
        gsap.fromTo(
          featuredSectionRef.current.querySelector('.featured-card-wrapper'),
          { opacity: 0, y: 60, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: featuredSectionRef.current,
              start: 'top 80%',
              once: true
            }
          }
        );

        gsap.fromTo(
          featuredSectionRef.current.querySelectorAll('.featured-detail-item'),
          { opacity: 0, x: -25 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: featuredSectionRef.current,
              start: 'top 75%',
              once: true
            }
          }
        );
      }

      // 3. Upcoming Events Stagger
      if (upcomingGridRef.current) {
        const cards = upcomingGridRef.current.querySelectorAll('.event-card-tilt-wrap');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: upcomingGridRef.current,
              start: 'top 82%',
              once: true
            }
          }
        );
      }

      // 4. Categories Cards Stagger
      if (categoriesGridRef.current) {
        const catCards = categoriesGridRef.current.children;
        gsap.fromTo(
          catCards,
          { opacity: 0, y: 40, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.09,
            duration: 0.75,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: categoriesGridRef.current,
              start: 'top 82%',
              once: true
            }
          }
        );
      }

      // 5. Why Choose Eventora Features Stagger
      if (featuresGridRef.current) {
        const feats = featuresGridRef.current.children;
        gsap.fromTo(
          feats,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: featuresGridRef.current,
              start: 'top 82%',
              once: true
            }
          }
        );
      }

      // Testimonials Section Entrance
      if (testimonialsRef.current) {
        const testCards = testimonialsRef.current.querySelectorAll('.testimonial-card');
        gsap.fromTo(
          testCards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: testimonialsRef.current,
              start: 'top 82%',
              once: true
            }
          }
        );
      }

      // 6. CTA Box Parallax Scale
      if (ctaBoxRef.current) {
        gsap.fromTo(
          ctaBoxRef.current,
          { scale: 0.92, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: ctaBoxRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, [events]);

  return (
    <div className="home-page">
      {/* ========================================================
          A & B. HERO SECTION
          ======================================================== */}
      <section className="hero-section">
        <div className="hero-glow-orb-1" />
        <div className="hero-glow-orb-2" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-content">
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                <Sparkles size={16} className="badge-sparkle" />
                <span>Discover What's Happening Around You</span>
              </div>

              {/* SplitText Word-by-Word Reveal */}
              <AnimatedHeading
                tag="h1"
                className="hero-heading"
                text="Find Your Next Experience. Learn Something New. Meet Amazing People."
                scrollTrigger={false}
                delay={0.1}
              />

              <p className="hero-description">
                Explore inspiring events, hands-on workshops, and unforgettable experiences. Find your community and book your next adventure.
              </p>

              <div className="hero-cta-group">
                <Magnetic strength={0.3}>
                  <Link to="/events" className="btn btn-primary btn-lg">
                    <span>Explore Events</span>
                    <ArrowRight size={18} />
                  </Link>
                </Magnetic>

                <Magnetic strength={0.25}>
                  <a href="#upcoming-events" className="btn btn-outline btn-lg">
                    <Calendar size={18} />
                    <span>Discover Upcoming Events</span>
                  </a>
                </Magnetic>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hero-visual-wrapper" ref={heroVisualRef}>
              {/* Floating top date badge */}
              <div className="floating-badge-top">
                <span className="floating-date-month">Dec</span>
                <span className="floating-date-day">05</span>
              </div>

              {/* Floating Attendee count with animated counter */}
              <div className="floating-attendees-badge">
                <div className="attendee-avatar-stack">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Attendee 1" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Attendee 2" />
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" alt="Attendee 3" />
                </div>
                <div className="attendees-text">
                  <span style={{ color: 'var(--secondary)' }}>
                    +<AnimatedCounter end={1420} duration={2} />
                  </span> Attending
                </div>
              </div>

              {/* Hero Image Card with 3D Tilt */}
              <TiltCard maxTilt={6} perspective={1400}>
                <div className="hero-main-card">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
                    alt="Excited attendees at Global Tech and AI Summit"
                    className="hero-main-img"
                  />
                  <div className="hero-img-gradient" />

                  {/* Floating Bottom Card */}
                  <div className="floating-card-info">
                    <div className="floating-info-text">
                      <h4>Global AI & ML Summit 2026</h4>
                      <p>San Francisco, CA & Live Stream</p>
                    </div>
                    <Magnetic strength={0.25}>
                      <Link to={`/events/${featuredEvent.id}`} className="btn btn-accent btn-sm">
                        Book Now
                      </Link>
                    </Magnetic>
                  </div>
                </div>
              </TiltCard>

              {/* Floating Live Workshop Pill with Real Photography */}
              <div className="floating-live-workshop">
                <img
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=160&q=80"
                  alt="Live Workshop Session"
                  className="floating-live-img"
                />
                <div>
                  <div className="live-pill"><span className="live-dot" /> LIVE WORKSHOP</div>
                  <div className="floating-card-mini-title">AI Design Sprint</div>
                  <div className="floating-card-mini-sub">420 Attendees in room</div>
                </div>
              </div>
            </div>
          </div>

          {/* FIGMA HERO SEARCH DOCK */}
          <form className="hero-search-dock" onSubmit={handleHeroSearch}>
            <div className="dock-field">
              <div className="dock-label">Looking For</div>
              <div className="dock-input-wrap">
                <Sparkles size={18} />
                <input
                  type="text"
                  placeholder="Search summits, topics, mentors..."
                  value={heroSearchText}
                  onChange={(e) => setHeroSearchText(e.target.value)}
                  className="dock-input"
                />
              </div>
            </div>

            <div className="dock-divider" />

            <div className="dock-field">
              <div className="dock-label">Category Track</div>
              <div className="dock-input-wrap">
                <Compass size={18} />
                <select
                  value={heroCategory}
                  onChange={(e) => setHeroCategory(e.target.value)}
                  className="dock-select"
                >
                  <option value="">All Tracks</option>
                  <option value="Technology">Technology & AI</option>
                  <option value="Design">UI/UX & Design</option>
                  <option value="Business">Venture & Business</option>
                  <option value="Education">Masterclasses</option>
                  <option value="Marketing">Growth & Marketing</option>
                  <option value="Photography">Photography</option>
                  <option value="Health & Wellness">Health & Wellness</option>
                </select>
              </div>
            </div>

            <div className="dock-divider" />

            <div className="dock-field">
              <div className="dock-label">Format / Mode</div>
              <div className="dock-input-wrap">
                <Clock size={18} />
                <select
                  value={heroMode}
                  onChange={(e) => setHeroMode(e.target.value)}
                  className="dock-select"
                >
                  <option value="">Any Format</option>
                  <option value="In-Person">In-Person Only</option>
                  <option value="Online">Virtual / Stream</option>
                  <option value="Hybrid">Hybrid Experience</option>
                </select>
              </div>
            </div>

            <div className="dock-action">
              <Magnetic strength={0.3}>
                <button type="submit" className="btn btn-primary btn-lg dock-btn">
                  <span>Find Experiences</span>
                  <ArrowRight size={16} />
                </button>
              </Magnetic>
            </div>
          </form>

          {/* FIGMA TRUSTED BRAND STRIP */}
          <div className="trusted-brands-strip">
            <span className="trusted-label">Trusted by engineers & designers from</span>
            <div className="trusted-logos-row">
              <span className="trusted-brand-logo">GOOGLE</span>
              <span className="trusted-brand-logo">FIGMA</span>
              <span className="trusted-brand-logo">STRIPE</span>
              <span className="trusted-brand-logo">OPENAI</span>
              <span className="trusted-brand-logo">APPLE</span>
              <span className="trusted-brand-logo">SPOTIFY</span>
              <span className="trusted-brand-logo">MICROSOFT</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          INFINITE LIVE MARQUEE STRIP
          ======================================================== */}
      <div className="marquee-strip">
        <div className="marquee-track">
          <span>✦ 45,000+ TECH LEADERS & CREATORS</span>
          <span className="bullet">•</span>
          <span className="highlight">⚡ LIVE SILICON VALLEY AI SUMMIT</span>
          <span className="bullet">•</span>
          <span>🎟️ INSTANT DIGITAL TICKET PASSES</span>
          <span className="bullet">•</span>
          <span className="highlight">✦ FIGMA DESIGN CLINICS & CODE LABS</span>
          <span className="bullet">•</span>
          <span>🔥 100% VERIFIED KEYNOTE PRACTITIONERS</span>
          <span className="bullet">•</span>
          <span className="highlight">✦ ZERO-FEE EVENT DISCOVERY</span>
          <span className="bullet">•</span>
          <span>✦ 45,000+ TECH LEADERS & CREATORS</span>
          <span className="bullet">•</span>
          <span className="highlight">⚡ LIVE SILICON VALLEY AI SUMMIT</span>
          <span className="bullet">•</span>
          <span>🎟️ INSTANT DIGITAL TICKET PASSES</span>
          <span className="bullet">•</span>
          <span className="highlight">✦ FIGMA DESIGN CLINICS & CODE LABS</span>
          <span className="bullet">•</span>
          <span>🔥 100% VERIFIED KEYNOTE PRACTITIONERS</span>
          <span className="bullet">•</span>
          <span className="highlight">✦ ZERO-FEE EVENT DISCOVERY</span>
        </div>
      </div>

      {/* ========================================================
          PLATFORM METRICS & STATS SECTION
          ======================================================== */}
      <section className="stats-section" ref={statsSectionRef}>
        <div className="container">
          <div className="stats-grid">
            {platformStats.map((st) => (
              <div key={st.id} className="stat-item-card">
                <div className="stat-num-display">
                  <AnimatedCounter end={st.number} suffix={st.suffix} decimals={st.decimals || 0} />
                </div>
                <div className="stat-label-text">{st.label}</div>
                <div className="stat-sub-text">{st.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          C. FEATURED EXPERIENCE BENTO GRID (FIGMA DESIGN)
          ======================================================== */}
      {featuredEvent && (
        <section className="featured-section" ref={featuredSectionRef}>
          <div className="container">
            <div className="section-header">
              <span className="section-badge">
                <Sparkles size={14} /> Spotlight of the Month
              </span>
              <AnimatedHeading
                tag="h2"
                className="section-title"
                text="Featured Experience Bento"
              />
              <p className="section-subtitle">
                An exceptional gathering of visionary minds, groundbreaking workshops, and unmatched networking.
              </p>
            </div>

            <div className="bento-grid-wrapper">
              {/* Main Bento Card */}
              <TiltCard maxTilt={4} perspective={1400} className="bento-card bento-card-main">
                <div className="bento-main-media">
                  <img
                    src={featuredEvent.bannerImage || featuredEvent.image}
                    alt={featuredEvent.title}
                    className="bento-main-img"
                  />
                  <div className="bento-main-overlay" />
                  <div className="bento-badge-floating">
                    <span className="featured-star-pill">★ Featured Summit</span>
                    <span className={`badge-category badge-${featuredEvent.category.replace(/\s+/g, '-')}`}>
                      {featuredEvent.category}
                    </span>
                    <span className="mode-tag">{featuredEvent.mode}</span>
                  </div>
                </div>
                <div className="bento-main-body">
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--primary)', marginBottom: '10px', fontWeight: 800 }}>
                    {featuredEvent.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {featuredEvent.shortDescription}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border-color)', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary)' }}>
                        {featuredEvent.isFree ? 'FREE' : `$${featuredEvent.price}`}
                      </span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>/ Early Bird Pass</span>
                    </div>
                    <Magnetic strength={0.25}>
                      <Link to={`/events/${featuredEvent.id}`} className="btn btn-accent btn-lg">
                        <span>Explore Summit Details</span>
                        <ArrowRight size={16} />
                      </Link>
                    </Magnetic>
                  </div>
                </div>
              </TiltCard>

              {/* Bento Card 2: Live Countdown */}
              <TiltCard maxTilt={5} perspective={1200} className="bento-card bento-card-countdown">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)' }}>
                  <span className="live-dot" style={{ background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }} />
                  <span>Summit Starts In</span>
                </div>
                <div className="bento-countdown-display">
                  <div className="countdown-box">
                    <div className="countdown-num">18</div>
                    <div className="countdown-lbl">Days</div>
                  </div>
                  <div className="countdown-box">
                    <div className="countdown-num">14</div>
                    <div className="countdown-lbl">Hours</div>
                  </div>
                  <div className="countdown-box">
                    <div className="countdown-num">32</div>
                    <div className="countdown-lbl">Mins</div>
                  </div>
                  <div className="countdown-box">
                    <div className="countdown-num">08</div>
                    <div className="countdown-lbl">Secs</div>
                  </div>
                </div>
                <div style={{ fontSize: '0.84rem', color: '#B5B5D1', display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                  <span>Location: San Francisco & Global Stream</span>
                  <span style={{ color: '#FFF', fontWeight: 700 }}>{featuredEvent.availableSeats} Seats Left</span>
                </div>
              </TiltCard>

              {/* Bento Card 3: Keynote Mentor Spotlight */}
              <TiltCard maxTilt={5} perspective={1200} className="bento-card bento-card-mentor">
                <div className="speaker-avatar-wrap" style={{ width: '68px', height: '68px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                    alt="Dr. Elena Vance"
                    className="speaker-avatar-img"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <span className="speaker-badge-pill" style={{ marginBottom: '2px' }}>Keynote Lead</span>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '2px' }}>Dr. Elena Vance</h4>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Chief AI Scientist • <strong>DeepNeural Labs</strong></div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--secondary)', fontWeight: 600, marginTop: '4px' }}>Session: Autonomous Agent Swarms</div>
                </div>
              </TiltCard>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================
          D. UPCOMING EVENTS SECTION WITH FIGMA QUICK TABS
          ======================================================== */}
      <section className="section" id="upcoming-events">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <Calendar size={14} /> Mark Your Calendar
            </span>
            <AnimatedHeading
              tag="h2"
              className="section-title"
              text="Upcoming Events & Workshops"
            />
            <p className="section-subtitle">
              Choose from interactive bootcamps, executive summits, creative clinics, and networking retreats.
            </p>
          </div>

          {/* FIGMA QUICK FILTER TABS */}
          <div className="figma-filter-tabs">
            <button
              className={`figma-tab-btn ${upcomingFilter === 'all' ? 'active' : ''}`}
              onClick={() => setUpcomingFilter('all')}
            >
              All Experiences
            </button>
            <button
              className={`figma-tab-btn ${upcomingFilter === 'trending' ? 'active' : ''}`}
              onClick={() => setUpcomingFilter('trending')}
            >
              🔥 Trending
            </button>
            <button
              className={`figma-tab-btn ${upcomingFilter === 'free' ? 'active' : ''}`}
              onClick={() => setUpcomingFilter('free')}
            >
              🎟️ Free Workshops
            </button>
            <button
              className={`figma-tab-btn ${upcomingFilter === 'hybrid' ? 'active' : ''}`}
              onClick={() => setUpcomingFilter('hybrid')}
            >
              ⚡ Hybrid / Global
            </button>
            <button
              className={`figma-tab-btn ${upcomingFilter === 'tech' ? 'active' : ''}`}
              onClick={() => setUpcomingFilter('tech')}
            >
              💻 AI & Tech
            </button>
          </div>

          <div className="events-grid" ref={upcomingGridRef}>
            {filteredUpcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '54px' }}>
            <Magnetic strength={0.3}>
              <Link to="/events" className="btn btn-primary btn-lg">
                <span>See All Events</span>
                <ArrowRight size={18} />
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* ========================================================
          E. EXPLORE EVENT CATEGORIES
          ======================================================== */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <TrendingUp size={14} /> Curated Tracks
            </span>
            <AnimatedHeading
              tag="h2"
              className="section-title"
              text="Explore Event Categories"
            />
            <p className="section-subtitle">
              Filter by your area of interest and uncover high-impact learning opportunities led by industry specialists.
            </p>
          </div>

          <div className="categories-grid" ref={categoriesGridRef}>
            {categoriesList.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          F. WHY CHOOSE EVENTORA?
          ======================================================== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <Award size={14} /> The Eventora Advantage
            </span>
            <AnimatedHeading
              tag="h2"
              className="section-title"
              text="Why Choose Eventora?"
            />
            <p className="section-subtitle">
              We design transformative event discovery experiences with zero friction and guaranteed value.
            </p>
          </div>

          <div className="features-grid" ref={featuresGridRef}>
            {whyChooseFeatures.map((feat, idx) => {
              const iconMap = {
                Compass: <Compass size={22} />,
                Award: <Award size={22} />,
                Users: <Users size={22} />,
                Zap: <Zap size={22} />
              };

              const featurePhotos = [
                "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              ];

              const statsMap = [
                { num: 50, suffix: '+ Tracks', label: 'Curated Summits' },
                { num: 120, suffix: '+ Leaders', label: 'Vetted Instructors' },
                { num: 25, suffix: 'k+ Members', label: 'Global Network' },
                { num: 99.8, suffix: '%', label: 'Satisfaction Rate', decimals: 1 }
              ];

              const stat = statsMap[idx] || statsMap[0];

              return (
                <TiltCard key={feat.id} maxTilt={8} perspective={1100}>
                  <div className="feature-card">
                    <div className="feature-card-thumb-wrap">
                      <img src={featurePhotos[idx]} alt={feat.title} className="feature-card-thumb" loading="lazy" />
                    </div>
                    <div className="feature-card-content">
                      <div className="feature-icon-wrapper">
                        {iconMap[feat.icon] || <Award size={22} />}
                      </div>
                      <h3 className="feature-title">{feat.title}</h3>
                      <p className="feature-description">{feat.description}</p>

                      {/* Stat Highlight Counter */}
                      <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                        <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--secondary)' }}>
                          <AnimatedCounter end={stat.num} suffix={stat.suffix} decimals={stat.decimals || 0} />
                        </span>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          EVENT MOMENTS & HIGHLIGHTS PHOTO GALLERY
          ======================================================== */}
      <section className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <Sparkles size={14} /> Experience the Energy
            </span>
            <AnimatedHeading
              tag="h2"
              className="section-title"
              text="Capturing Unforgettable Moments"
            />
            <p className="section-subtitle">
              Take a glimpse inside previous summits, creative hackathons, and transformative masterclasses.
            </p>
          </div>

          <div className="moments-grid">
            {momentsGalleryData.map((m) => (
              <TiltCard key={m.id} maxTilt={6} perspective={1000}>
                <div className="moment-card">
                  <img src={m.image} alt={m.title} className="moment-img" loading="lazy" />
                  <div className="moment-overlay">
                    <span className="moment-tag">{m.tag}</span>
                    <h4 className="moment-title">{m.title}</h4>
                    <div className="moment-location">
                      <MapPin size={13} />
                      <span>{m.location}</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          FEATURED KEYNOTE SPEAKERS & MENTORS
          ======================================================== */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <Award size={14} /> World-Class Mentors
            </span>
            <AnimatedHeading
              tag="h2"
              className="section-title"
              text="Learn from Renowned Industry Leaders"
            />
            <p className="section-subtitle">
              Direct access to visionary founders, principal engineers, and design heads from top companies.
            </p>
          </div>

          <div className="speakers-grid">
            {featuredSpeakersData.map((s) => (
              <TiltCard key={s.id} maxTilt={6} perspective={1000}>
                <div className="speaker-card">
                  <div className="speaker-avatar-wrap">
                    <img src={s.avatar} alt={s.name} className="speaker-avatar-img" loading="lazy" />
                  </div>
                  <div className="speaker-details">
                    <span className="speaker-badge-pill">{s.badge}</span>
                    <h4 className="speaker-name">{s.name}</h4>
                    <div className="speaker-role">{s.role} • <strong>{s.company}</strong></div>
                    <div className="speaker-topic">
                      <span style={{ color: 'var(--accent)' }}>✦</span>
                      <span>{s.topic}</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
        </div>
      </section>

      {/* ========================================================
          COMMUNITY REVIEWS & TESTIMONIALS SECTION
          ======================================================== */}
      <section className="testimonials-section" ref={testimonialsRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <Star size={14} /> Community Stories
            </span>
            <AnimatedHeading
              tag="h2"
              className="section-title"
              text="Loved by Innovators & Learners Worldwide"
            />
            <p className="section-subtitle">
              Hear directly from attendees who accelerated their careers, scaled products, and forged lifelong connections through Eventora.
            </p>
          </div>

          {/* Desktop & Tablet Grid / Mobile Single Card Slider */}
          <div className="testimonials-grid">
            {testimonialsData.map((test, index) => (
              <div
                key={test.id}
                className={`testimonial-card-slide ${activeTestimonial === index ? 'active-mobile-slide' : ''}`}
              >
                <TiltCard maxTilt={6} perspective={1100} style={{ height: '100%' }}>
                  <div className="testimonial-card">
                    <div>
                      <div className="testimonial-stars">
                        {Array.from({ length: test.rating }).map((_, i) => (
                          <Star key={i} size={16} fill="#F59E0B" />
                        ))}
                      </div>
                      <p className="testimonial-quote">"{test.quote}"</p>
                    </div>

                    <div className="testimonial-author-row">
                      <img src={test.avatar} alt={test.name} className="testimonial-avatar" />
                      <div>
                        <div className="testimonial-author-name">{test.name}</div>
                        <div className="testimonial-author-role">{test.role}</div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--secondary)', marginTop: '2px', fontWeight: 600 }}>
                          Attended: {test.eventAttended}
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>

          {/* Touch-Friendly Mobile Carousel Controls */}
          <div className="testimonial-nav-controls">
            <button
              onClick={() => setActiveTestimonial((prev) => (prev > 0 ? prev - 1 : testimonialsData.length - 1))}
              className="testimonial-nav-btn"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="testimonial-dots">
              {testimonialsData.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveTestimonial(dotIdx)}
                  className={`testimonial-dot ${activeTestimonial === dotIdx ? 'active' : ''}`}
                  aria-label={`Go to testimonial ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveTestimonial((prev) => (prev < testimonialsData.length - 1 ? prev + 1 : 0))}
              className="testimonial-nav-btn"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          G. CALL-TO-ACTION SECTION
          ======================================================== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box" ref={ctaBoxRef}>
            <div className="cta-badge">
              <Sparkles size={15} /> Your Next Breakthrough Awaits
            </div>
            <AnimatedHeading
              tag="h2"
              className="cta-title"
              text="Ready to Learn, Connect, and Grow Your Network?"
            />
            <p className="cta-subtitle">
              Join thousands of enthusiastic creators, developers, designers, and entrepreneurs discovering remarkable experiences on Eventora.
            </p>
            <div className="cta-buttons">
              <Magnetic strength={0.35}>
                <Link to="/events" className="btn btn-accent btn-lg">
                  <span>Browse All Events</span>
                  <ArrowRight size={18} />
                </Link>
              </Magnetic>

              <Magnetic strength={0.25}>
                <Link to="/registrations" className="btn btn-outline btn-lg" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}>
                  <span>View My Bookings</span>
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
