import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  BookmarkCheck,
  Calendar,
  Clock,
  MapPin,
  Ticket,
  Trash2,
  ExternalLink,
  ArrowRight,
  AlertTriangle
} from 'lucide-react';
import { gsap } from 'gsap';

import { useRegistration } from '../context/RegistrationContext';
import TicketModal from '../components/TicketModal';
import Magnetic from '../components/Magnetic';
import AnimatedHeading from '../components/AnimatedHeading';
import TiltCard from '../components/TiltCard';
import '../styles/registrations.css';

const RegistrationsPage = () => {
  const { registrations, cancelRegistration } = useRegistration();

  const [activeTicket, setActiveTicket] = useState(null);
  const [cancellingTicket, setCancellingTicket] = useState(null);
  const cardsListRef = useRef(null);

  useEffect(() => {
    if (cardsListRef.current && registrations.length > 0) {
      const cards = cardsListRef.current.querySelectorAll('.reg-card-wrapper');
      gsap.fromTo(
        cards,
        { opacity: 0, x: -40, scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, stagger: 0.1, duration: 0.65, ease: 'power3.out' }
      );
    }
  }, [registrations.length]);

  const confirmCancel = () => {
    if (cancellingTicket) {
      cancelRegistration(cancellingTicket.ticketId);
      setCancellingTicket(null);
    }
  };

  return (
    <div className="registrations-page">
      {/* Hero Header */}
      <section className="reg-page-hero">
        <div className="container">
          <span className="section-badge">
            <BookmarkCheck size={14} /> My Bookings
          </span>
          <AnimatedHeading
            tag="h1"
            className="section-title"
            text="My Event Registrations"
            scrollTrigger={false}
          />
          <p style={{ maxWidth: '560px' }}>
            Manage your confirmed event tickets, download digital passes, or review session logistics.
          </p>
        </div>
      </section>

      {/* Bookings List */}
      <section className="section">
        <div className="container">
          {registrations.length === 0 ? (
            <div className="empty-state-box">
              <div className="empty-icon-circle">
                <Ticket size={32} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>No Event Registrations Yet</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                You haven't reserved tickets for any upcoming events. Discover inspiring workshops and summits to get started!
              </p>
              <Magnetic strength={0.3}>
                <Link to="/events" className="btn btn-primary btn-lg">
                  <span>Explore Events & Workshops</span>
                  <ArrowRight size={18} />
                </Link>
              </Magnetic>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)' }}>
                  Confirmed Reservations ({registrations.length})
                </div>
                <Magnetic strength={0.25}>
                  <Link to="/events" className="btn btn-outline btn-sm">
                    Discover More Events
                  </Link>
                </Magnetic>
              </div>

              <div ref={cardsListRef}>
                {registrations.map((ticket) => (
                  <div key={ticket.ticketId} className="reg-card-wrapper">
                    <TiltCard maxTilt={4} perspective={1400}>
                      <div className="reg-card">
                        {/* Thumbnail */}
                        <div className="reg-card-thumb-wrapper">
                          <img src={ticket.image} alt={ticket.eventTitle} className="reg-card-thumb" />
                        </div>

                        {/* Details */}
                        <div className="reg-card-info">
                          <div className="reg-card-top-row">
                            <span className={`badge-category badge-${ticket.eventCategory.replace(/\s+/g, '-')}`}>
                              {ticket.eventCategory}
                            </span>
                            <span className="mode-tag">{ticket.mode}</span>
                            <span className="reg-ticket-code">{ticket.ticketId}</span>
                          </div>

                          <h3 className="reg-card-title">{ticket.eventTitle}</h3>

                          <div className="reg-card-meta">
                            <div className="reg-card-meta-item">
                              <Calendar size={16} />
                              <span>{ticket.displayDate}</span>
                            </div>
                            <div className="reg-card-meta-item">
                              <Clock size={16} />
                              <span>{ticket.time}</span>
                            </div>
                            <div className="reg-card-meta-item">
                              <MapPin size={16} />
                              <span>{ticket.location}</span>
                            </div>
                          </div>

                          <div className="reg-attendee-details">
                            Registered for: <strong>{ticket.fullName}</strong> ({ticket.seats} {ticket.seats === 1 ? 'ticket' : 'tickets'}) • {ticket.isFree ? 'Free Admission' : `$${ticket.price} Paid`}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="reg-card-actions">
                          <Magnetic strength={0.25}>
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={() => setActiveTicket(ticket)}
                            >
                              <Ticket size={16} />
                              View Ticket Pass
                            </button>
                          </Magnetic>

                          <Magnetic strength={0.2}>
                            <Link
                              to={`/events/${ticket.eventId}`}
                              className="btn btn-outline btn-sm"
                            >
                              <ExternalLink size={15} />
                              Event Page
                            </Link>
                          </Magnetic>

                          <Magnetic strength={0.2}>
                            <button
                              className="btn btn-outline btn-sm"
                              style={{ color: 'var(--danger)', borderColor: 'rgba(239, 68, 68, 0.3)' }}
                              onClick={() => setCancellingTicket(ticket)}
                            >
                              <Trash2 size={15} />
                              Cancel Booking
                            </button>
                          </Magnetic>
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Ticket Pass View Modal */}
      {activeTicket && (
        <TicketModal
          ticket={activeTicket}
          onClose={() => setActiveTicket(null)}
        />
      )}

      {/* Cancel Confirmation Dialog */}
      {cancellingTicket && (
        <div className="modal-backdrop" onClick={() => setCancellingTicket(null)}>
          <div className="modal-box cancel-dialog-box" onClick={(e) => e.stopPropagation()}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(239, 68, 68, 0.12)',
                color: 'var(--danger)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}
            >
              <AlertTriangle size={28} />
            </div>

            <h3 style={{ fontSize: '1.35rem', marginBottom: '8px', color: 'var(--primary)' }}>
              Cancel Registration?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '24px' }}>
              Are you sure you want to cancel your registration for <strong>"{cancellingTicket.eventTitle}"</strong>? Your {cancellingTicket.seats} seat(s) will be released back to the event pool.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                className="btn btn-outline"
                style={{ flex: 1 }}
                onClick={() => setCancellingTicket(null)}
              >
                Keep Booking
              </button>
              <button
                className="btn btn-accent"
                style={{ flex: 1, backgroundColor: 'var(--danger)' }}
                onClick={confirmCancel}
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationsPage;
