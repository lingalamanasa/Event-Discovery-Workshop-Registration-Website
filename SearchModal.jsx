import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { useRegistration } from '../context/RegistrationContext';

const SearchModal = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const { events } = useRegistration();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const modalBoxRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    if (modalBoxRef.current) {
      gsap.fromTo(
        modalBoxRef.current,
        { scale: 0.9, opacity: 0, y: -20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
      );
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const filteredEvents = query.trim()
    ? events.filter((ev) => {
        const q = query.toLowerCase();
        return (
          ev.title.toLowerCase().includes(q) ||
          ev.category.toLowerCase().includes(q) ||
          ev.location.toLowerCase().includes(q) ||
          ev.speakers.some((s) => s.name.toLowerCase().includes(q)) ||
          ev.tags.some((t) => t.toLowerCase().includes(q))
        );
      })
    : [];

  const handleSelectEvent = (id) => {
    onClose();
    navigate(`/events/${id}`);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div ref={modalBoxRef} className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close search">
          <X size={20} />
        </button>

        <div className="search-modal-header">
          <div className="search-input-wrapper">
            <Search size={20} color="var(--secondary)" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search by topic, speaker, category, or city..."
              className="search-input-field"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="search-results-list">
          {query.trim() === '' ? (
            <div style={{ textAlign: 'center', padding: '32px 16px', color: 'var(--text-secondary)' }}>
              <p style={{ fontWeight: 600, marginBottom: '8px' }}>Popular Searches</p>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['Artificial Intelligence', 'Figma', 'Startup', 'React', 'Photography'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="btn btn-sm btn-outline"
                    style={{ borderRadius: 'var(--radius-full)' }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredEvents.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '36px 16px', color: 'var(--text-secondary)' }}>
              <p style={{ fontWeight: 600, color: 'var(--primary)', marginBottom: '4px' }}>No events found</p>
              <p style={{ fontSize: '0.88rem' }}>Try searching for "AI", "Design", "Bootcamp", or "Marketing".</p>
            </div>
          ) : (
            filteredEvents.map((ev) => (
              <div
                key={ev.id}
                className="search-result-item"
                onClick={() => handleSelectEvent(ev.id)}
              >
                <img src={ev.image} alt={ev.title} className="search-thumb" />
                <div className="search-info">
                  <span className={`badge-category badge-${ev.category.replace(/\s+/g, '-')}`} style={{ fontSize: '0.7rem', padding: '2px 8px', marginBottom: '4px' }}>
                    {ev.category}
                  </span>
                  <div className="search-title">{ev.title}</div>
                  <div className="search-sub">
                    <span>{ev.displayDate}</span>
                    <span>•</span>
                    <span>{ev.isFree ? 'Free' : `$${ev.price}`}</span>
                  </div>
                </div>
                <ArrowRight size={18} color="var(--secondary)" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;

