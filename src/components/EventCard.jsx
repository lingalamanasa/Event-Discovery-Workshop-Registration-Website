import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight, CheckCircle2, Heart } from 'lucide-react';
import { useRegistration } from '../context/RegistrationContext';
import TiltCard from './TiltCard';
import Magnetic from './Magnetic';

const EventCard = ({ event }) => {
  const { isUserRegistered } = useRegistration();
  const registered = isUserRegistered(event.id);
  const [saved, setSaved] = useState(false);

  const total = event.totalSeats || 100;
  const booked = Math.max(0, total - event.availableSeats);
  const bookedPercent = Math.min(100, Math.max(15, Math.round((booked / total) * 100)));
  const isSeatsLow = event.availableSeats > 0 && event.availableSeats <= 15;
  const isSoldOut = event.availableSeats === 0;

  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSaved(!saved);
  };

  return (
    <TiltCard maxTilt={7} perspective={1100} className="event-card-tilt-wrap">
      <article className="event-card ui-ux-card">
        <div className="event-card-media">
          <img
            src={event.image}
            alt={event.title}
            className="event-card-img"
            loading="lazy"
          />
          <div className="event-card-overlay" />
          <div className="card-shimmer-sweep" />

          {/* Top Floating Badges */}
          <div className="event-card-badges">
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <span className={`badge-category badge-${event.category.replace(/\s+/g, '-')}`}>
                {event.category}
              </span>
              <span className="mode-tag">
                <span className="mode-dot" />
                {event.mode}
              </span>
            </div>

            <button
              className={`card-fav-btn ${saved ? 'active' : ''}`}
              onClick={handleBookmark}
              aria-label="Save Event"
              title="Bookmark"
            >
              <Heart size={16} fill={saved ? 'var(--accent)' : 'none'} color={saved ? 'var(--accent)' : '#FFFFFF'} />
            </button>
          </div>

          {/* Price Tag */}
          <div className={`price-tag ${event.isFree ? 'free' : ''}`}>
            {event.isFree ? '✦ Free Pass' : (
              <>
                <strong>${event.price}</strong>
                <span className="price-suffix">/pass</span>
              </>
            )}
          </div>

          {/* Quick View Hover Overlay Action */}
          <Link to={`/events/${event.id}`} className="card-media-quick-action">
            <span>Quick View Details</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="event-card-body">
          {event.organizer && (
            <div className="event-organizer-row">
              <img src={event.organizer.avatar} alt={event.organizer.name} className="event-organizer-avatar" />
              <div className="event-organizer-info">
                <span className="organizer-label">Verified Host</span>
                <span className="organizer-name">
                  {event.organizer.name} <span className="verified-check">✓</span>
                </span>
              </div>
            </div>
          )}

          <Link to={`/events/${event.id}`} className="card-title-link">
            <h3 className="event-card-title" title={event.title}>
              {event.title}
            </h3>
          </Link>

          {/* Interactive Meta Chips */}
          <div className="event-card-chips">
            <div className="event-chip">
              <Calendar size={13} />
              <span>{event.displayDate?.split(',')[1] || event.displayDate}</span>
            </div>
            <div className="event-chip">
              <Clock size={13} />
              <span>{event.time?.split('-')[0].trim()}</span>
            </div>
            <div className="event-chip">
              <MapPin size={13} />
              <span>{event.location?.split(',')[0]}</span>
            </div>
          </div>

          {/* Dynamic Capacity Visualization Bar */}
          <div className="card-capacity-box">
            <div className="capacity-labels">
              <span className={`capacity-status-text ${isSeatsLow ? 'low' : ''}`}>
                <span className={`pulse-status-dot ${isSeatsLow ? 'low-dot' : ''}`} />
                {isSoldOut ? 'Sold Out' : isSeatsLow ? `Only ${event.availableSeats} spots left!` : `${bookedPercent}% Booked`}
              </span>
              <span className="capacity-count">{event.availableSeats} of {total} open</span>
            </div>
            <div className="capacity-track">
              <div
                className={`capacity-fill ${isSeatsLow ? 'fill-low' : ''}`}
                style={{ width: `${bookedPercent}%` }}
              />
            </div>
          </div>

          {/* Card Footer */}
          <div className="event-card-footer">
            <div className="footer-price-col">
              <span className="footer-price-sub">{event.isFree ? 'Zero Fee' : 'Starting from'}</span>
              <span className="footer-price-val">{event.isFree ? 'Free' : `$${event.price}`}</span>
            </div>

            <Magnetic strength={0.25}>
              <Link
                to={`/events/${event.id}`}
                className={`btn ${registered ? 'btn-outline' : 'btn-primary'} btn-sm card-action-btn`}
              >
                {registered ? (
                  <>
                    <CheckCircle2 size={15} color="var(--success)" />
                    Booked
                  </>
                ) : (
                  <>
                    <span>Reserve Spot</span>
                    <span className="btn-arrow-slide">→</span>
                  </>
                )}
              </Link>
            </Magnetic>
          </div>
        </div>
      </article>
    </TiltCard>
  );
};

export default EventCard;
