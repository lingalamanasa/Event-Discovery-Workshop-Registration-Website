import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  Share2,
  ArrowLeft,
  Sparkles,
  Ticket,
  ShieldCheck,
  FileBadge,
  Video
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useRegistration } from '../context/RegistrationContext';
import RegisterModal from '../components/RegisterModal';
import TicketModal from '../components/TicketModal';
import Magnetic from '../components/Magnetic';
import TiltCard from '../components/TiltCard';
import AnimatedHeading from '../components/AnimatedHeading';
import AnimatedCounter from '../components/AnimatedCounter';
import '../styles/event-detail.css';

gsap.registerPlugin(ScrollTrigger);

const EventDetailPage = () => {
  const { id } = useParams();
  const { getEventById, isUserRegistered, showToast } = useRegistration();

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [confirmedTicket, setConfirmedTicket] = useState(null);

  const heroBackdropRef = useRef(null);
  const timelineRef = useRef(null);
  const sidebarRef = useRef(null);

  const event = getEventById(id);

  // Scroll animations on mount & event load
  useEffect(() => {
    if (!event) return;

    const ctx = gsap.context(() => {
      // Parallax hero image zoom out on scroll
      if (heroBackdropRef.current) {
        gsap.to(heroBackdropRef.current, {
          yPercent: 20,
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: '.event-detail-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }

      // Schedule timeline items animation
      if (timelineRef.current) {
        const items = timelineRef.current.querySelectorAll('.timeline-item');
        gsap.fromTo(
          items,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.15,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 80%',
              once: true
            }
          }
        );
      }

      // Speakers cards stagger
      const speakerCards = document.querySelectorAll('.speakers-grid .speaker-card');
      if (speakerCards.length > 0) {
        gsap.fromTo(
          speakerCards,
          { opacity: 0, y: 35, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.12,
            duration: 0.75,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: '.speakers-grid',
              start: 'top 85%',
              once: true
            }
          }
        );
      }

      // Sticky sidebar entrance
      if (sidebarRef.current) {
        gsap.fromTo(
          sidebarRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: 0.2,
            ease: 'power3.out'
          }
        );
      }
    });

    return () => ctx.revert();
  }, [event]);

  if (!event) {
    return (
      <div className="section" style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2 style={{ marginBottom: '16px' }}>Event Not Found</h2>
        <p style={{ marginBottom: '24px' }}>The event you are looking for doesn't exist or has concluded.</p>
        <Link to="/events" className="btn btn-primary">
          Back to Events Catalog
        </Link>
      </div>
    );
  }

  const registered = isUserRegistered(event.id);
  const isSoldOut = event.availableSeats === 0;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Event link copied to clipboard!', 'info');
    }
  };

  const handleRegistrationSuccess = (ticket) => {
    setIsRegisterOpen(false);
    setConfirmedTicket(ticket);
  };

  return (
    <div className="event-detail-page">
      {/* Top Breadcrumb & Hero */}
      <section className="event-detail-hero">
        <img
          ref={heroBackdropRef}
          src={event.bannerImage || event.image}
          alt={event.title}
          className="event-detail-backdrop-img"
        />
        <div className="hero-overlay-dark" />

        <div className="container event-hero-container">
          <Link
            to="/events"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#B5B5D1',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '24px'
            }}
          >
            <ArrowLeft size={16} />
            Back to Explore Events
          </Link>

          <div className="event-hero-badges">
            <span className={`badge-category badge-${event.category.replace(/\s+/g, '-')}`}>
              {event.category}
            </span>
            <span className="mode-tag">{event.mode} Format</span>
            {event.featured && (
              <span className="featured-star-pill" style={{ background: 'rgba(255, 121, 108, 0.25)' }}>
                ★ Featured Summit
              </span>
            )}
          </div>

          <AnimatedHeading
            tag="h1"
            className="event-hero-title"
            text={event.title}
            scrollTrigger={false}
          />

          <p className="event-hero-tagline">{event.tagline}</p>

          <div className="event-hero-meta-row">
            <div className="event-hero-meta-item">
              <Calendar size={18} />
              <span>{event.displayDate}</span>
            </div>
            <div className="event-hero-meta-item">
              <Clock size={18} />
              <span>{event.time}</span>
            </div>
            <div className="event-hero-meta-item">
              <MapPin size={18} />
              <span>{event.location}</span>
            </div>
          </div>

          {/* Organizer info */}
          {event.organizer && (
            <div className="organizer-strip">
              <img
                src={event.organizer.avatar}
                alt={event.organizer.name}
                className="organizer-avatar"
              />
              <div>
                <div style={{ fontSize: '0.8rem', color: '#A5A5C7', textTransform: 'uppercase' }}>
                  Organized by
                </div>
                <div style={{ fontWeight: 700, color: '#FFFFFF' }}>
                  {event.organizer.name}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Body Layout */}
      <section className="section">
        <div className="container">
          <div className="event-layout-grid">
            {/* Left Content Area */}
            <div className="event-main-content">
              {/* About Event */}
              <div className="content-card">
                <h2 className="content-heading">
                  <Sparkles size={22} />
                  About This Experience
                </h2>
                <p className="event-prose">{event.description}</p>

                <h3 style={{ fontSize: '1.2rem', marginTop: '24px', marginBottom: '12px', color: 'var(--primary)' }}>
                  Key Workshop Takeaways & Highlights
                </h3>
                <ul className="highlights-list">
                  {event.highlights?.map((highlight, index) => (
                    <li key={index} className="highlight-item">
                      <CheckCircle2 size={18} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Schedule / Agenda Timeline */}
              {event.schedule && event.schedule.length > 0 && (
                <div className="content-card">
                  <h2 className="content-heading">
                    <Clock size={22} />
                    Event Agenda & Schedule
                  </h2>
                  <div className="timeline" ref={timelineRef}>
                    {event.schedule.map((slot, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-dot" />
                        <div className="timeline-time">{slot.time}</div>
                        <div className="timeline-title">{slot.title}</div>
                        {slot.speaker && (
                          <div className="timeline-speaker">Lead by: {slot.speaker}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Featured Speakers */}
              {event.speakers && event.speakers.length > 0 && (
                <div className="content-card">
                  <h2 className="content-heading">
                    <Users size={22} />
                    Featured Speakers & Mentors
                  </h2>
                  <div className="speakers-grid">
                    {event.speakers.map((spk, index) => (
                      <TiltCard key={index} maxTilt={6} perspective={900}>
                        <div className="speaker-card">
                          <img src={spk.avatar} alt={spk.name} className="speaker-photo" />
                          <h4 className="speaker-name">{spk.name}</h4>
                          <div className="speaker-role">
                            {spk.role} • {spk.company}
                          </div>
                          <p className="speaker-bio">{spk.bio}</p>
                        </div>
                      </TiltCard>
                    ))}
                  </div>
                </div>
              )}

              {/* Venue & Logistics */}
              <div className="content-card">
                <h2 className="content-heading">
                  <MapPin size={22} />
                  Venue & Access Information
                </h2>
                <p className="event-prose">
                  <strong>Location:</strong> {event.location}
                  <br />
                  <strong>Address / Access:</strong> {event.venueAddress}
                </p>
                {event.prerequisites && (
                  <div style={{ marginTop: '16px', padding: '16px', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)' }}>
                    <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '4px' }}>
                      Prerequisites & Recommendations:
                    </strong>
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      {event.prerequisites}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Sticky Booking Sidebar */}
            <aside className="sticky-sidebar" ref={sidebarRef}>
              <div className="sidebar-price-header">
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                    Admission Fee
                  </span>
                  <div className="sidebar-price-amount">
                    {event.isFree ? 'FREE' : `$${event.price}`}
                  </div>
                </div>
                <Magnetic strength={0.25}>
                  <button
                    onClick={handleShare}
                    className="btn btn-outline btn-sm"
                    title="Share event link"
                  >
                    <Share2 size={16} />
                    Share
                  </button>
                </Magnetic>
              </div>

              {/* Seats Status */}
              <div className="sidebar-seats-status">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Users size={18} color="var(--secondary)" />
                  <span style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--primary)' }}>
                    Remaining Seats
                  </span>
                </div>
                <div style={{ fontWeight: 800, color: event.availableSeats <= 15 ? 'var(--accent)' : 'var(--success)' }}>
                  {isSoldOut ? 'Sold Out' : (
                    <span>
                      <AnimatedCounter end={event.availableSeats} duration={1.2} /> of {event.totalSeats}
                    </span>
                  )}
                </div>
              </div>

              {/* Registration CTA button */}
              {registered ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', borderRadius: 'var(--radius-md)', fontWeight: 700 }}>
                    <CheckCircle2 size={18} />
                    <span>You're Registered for this Event!</span>
                  </div>
                  <Magnetic strength={0.25}>
                    <Link to="/registrations" className="btn btn-outline" style={{ width: '100%' }}>
                      View Your Ticket Pass
                    </Link>
                  </Magnetic>
                </div>
              ) : (
                <Magnetic strength={0.3} style={{ width: '100%' }}>
                  <button
                    onClick={() => setIsRegisterOpen(true)}
                    className="btn btn-accent btn-lg"
                    style={{ width: '100%' }}
                    disabled={isSoldOut}
                  >
                    <Ticket size={20} />
                    <span>{isSoldOut ? 'Event Sold Out' : 'Register for Event'}</span>
                  </button>
                </Magnetic>
              )}

              {/* Included Perks */}
              <div className="sidebar-perks">
                <div className="sidebar-perks-title">What's Included</div>
                <ul className="sidebar-perks-list">
                  <li>
                    <FileBadge size={16} />
                    <span>Official Certificate of Attendance</span>
                  </li>
                  <li>
                    <Video size={16} />
                    <span>Full On-Demand Recording Replay</span>
                  </li>
                  <li>
                    <Users size={16} />
                    <span>Direct Q&A with Industry Speakers</span>
                  </li>
                  <li>
                    <ShieldCheck size={16} />
                    <span>Verified Digital Entry Pass</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {isRegisterOpen && (
        <RegisterModal
          event={event}
          onClose={() => setIsRegisterOpen(false)}
          onSuccess={handleRegistrationSuccess}
        />
      )}

      {/* Ticket Pass Confirmation Modal */}
      {confirmedTicket && (
        <TicketModal
          ticket={confirmedTicket}
          onClose={() => setConfirmedTicket(null)}
        />
      )}
    </div>
  );
};

export default EventDetailPage;
