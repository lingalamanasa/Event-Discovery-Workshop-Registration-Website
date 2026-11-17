import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Sparkles, Printer, BookmarkCheck, Calendar, Clock, MapPin, User, Mail, Ticket } from 'lucide-react';
import { gsap } from 'gsap';

const TicketModal = ({ ticket, onClose }) => {
  const navigate = useNavigate();
  const ticketRef = useRef(null);

  useEffect(() => {
    if (ticketRef.current) {
      gsap.fromTo(
        ticketRef.current,
        { scale: 0.8, opacity: 0, rotateY: 20 },
        { scale: 1, opacity: 1, rotateY: 0, duration: 0.5, ease: 'back.out(1.6)' }
      );
    }
  }, []);

  if (!ticket) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleGoToRegistrations = () => {
    onClose();
    navigate('/registrations');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box ticket-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close pass">
          <X size={20} />
        </button>

        <div ref={ticketRef} className="ticket-pass" id="printable-ticket">
          {/* Header */}
          <div className="ticket-header">
            <div className="ticket-brand-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={18} color="var(--accent)" />
                <span style={{ fontWeight: 800, letterSpacing: '0.05em', fontSize: '0.9rem' }}>EVENTORA PASS</span>
              </div>
              <span className="ticket-id-badge">{ticket.ticketId}</span>
            </div>

            <h3 className="ticket-event-title">{ticket.eventTitle}</h3>
            <div className="ticket-event-tag">
              {ticket.eventCategory} • {ticket.mode} Edition
            </div>
          </div>

          {/* Perforated divider */}
          <div className="ticket-divider">
            <div className="ticket-dashed-line" />
          </div>

          {/* Body */}
          <div className="ticket-body">
            <div className="ticket-info-grid">
              <div>
                <div className="ticket-label">Attendee Name</div>
                <div className="ticket-val">{ticket.fullName}</div>
              </div>
              <div>
                <div className="ticket-label">Role</div>
                <div className="ticket-val">{ticket.role}</div>
              </div>

              <div>
                <div className="ticket-label">Date & Time</div>
                <div className="ticket-val">{ticket.displayDate}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{ticket.time}</div>
              </div>
              <div>
                <div className="ticket-label">Seats Booked</div>
                <div className="ticket-val">{ticket.seats} {ticket.seats === 1 ? 'Attendee' : 'Attendees'}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  {ticket.isFree ? 'Free Admission' : `$${ticket.price} Paid`}
                </div>
              </div>

              <div style={{ gridColumn: 'span 2' }}>
                <div className="ticket-label">Location / Stream</div>
                <div className="ticket-val">{ticket.location}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  {ticket.venueAddress}
                </div>
              </div>
            </div>

            {/* Mock QR Code verification */}
            <div className="ticket-qr-section">
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--primary)' }}>Official Entry Barcode</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  Present this QR code or Ticket ID at the check-in desk
                </div>
              </div>
              <div className="mock-qr-code" title="Digital Check-in QR Code" />
            </div>

            {/* Actions */}
            <div className="ticket-actions-bar">
              <button
                type="button"
                className="btn btn-primary"
                style={{ flex: 1 }}
                onClick={handlePrint}
              >
                <Printer size={16} />
                Print Ticket Pass
              </button>
              <button
                type="button"
                className="btn btn-outline"
                style={{ flex: 1 }}
                onClick={handleGoToRegistrations}
              >
                <BookmarkCheck size={16} />
                My Registrations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;

