import React, { useState, useEffect, useRef } from 'react';
import { X, User, Mail, Phone, Ticket, Briefcase, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { gsap } from 'gsap';
import { useRegistration } from '../context/RegistrationContext';

const RegisterModal = ({ event, onClose, onSuccess }) => {
  const { registerForEvent } = useRegistration();
  const modalBoxRef = useRef(null);

  useEffect(() => {
    if (modalBoxRef.current) {
      gsap.fromTo(
        modalBoxRef.current,
        { scale: 0.85, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.5)' }
      );
    }
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    seats: 1,
    role: 'Engineer / Developer',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const maxSelectableSeats = Math.min(5, Math.max(1, event.availableSeats));

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = 'Please enter at least 3 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    const phoneRegex = /^[\d\s+\-()]{7,15}$/;
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(formData.phone)) {
      errs.phone = 'Please provide a valid phone number.';
    }

    if (formData.seats < 1 || formData.seats > event.availableSeats) {
      errs.seats = `Please select between 1 and ${event.availableSeats} tickets.`;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'seats' ? parseInt(value, 10) : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const result = registerForEvent(event.id, formData);
      setIsSubmitting(false);

      if (result.success) {
        // Trigger celebratory confetti
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (err) {
          console.warn('Confetti error:', err);
        }

        if (onSuccess) {
          onSuccess(result.ticket);
        } else {
          onClose();
        }
      }
    }, 400);
  };

  const totalPrice = event.isFree ? 0 : event.price * formData.seats;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div ref={modalBoxRef} className="modal-box reg-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close registration form">
          <X size={20} />
        </button>

        <div className="reg-modal-header">
          <span className={`badge-category badge-${event.category.replace(/\s+/g, '-')}`} style={{ marginBottom: '8px' }}>
            {event.category}
          </span>
          <h2 className="reg-modal-title">Event Registration</h2>
          <div className="reg-modal-event-name">{event.title}</div>
        </div>

        <form onSubmit={handleSubmit} className="reg-form" noValidate>
          {/* Row 1: Full Name & Email */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="fullName">
                <User size={15} />
                <span>Full Name</span>
                <span className="required">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="e.g. Alex Morgan"
                className="form-input"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <span className="form-error">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                <Mail size={15} />
                <span>Work / Personal Email</span>
                <span className="required">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="alex@domain.com"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>
          </div>

          {/* Row 2: Phone & Seats */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="phone">
                <Phone size={15} />
                <span>Contact Phone</span>
                <span className="required">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 019-2834"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="seats">
                <Ticket size={15} />
                <span>Number of Seats</span>
                <span className="required">*</span>
              </label>
              <select
                id="seats"
                name="seats"
                className="form-select"
                value={formData.seats}
                onChange={handleChange}
              >
                {Array.from({ length: maxSelectableSeats }, (_, idx) => idx + 1).map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Seat' : 'Seats'}
                  </option>
                ))}
              </select>
              {errors.seats && <span className="form-error">{errors.seats}</span>}
            </div>
          </div>

          {/* Row 3: Role / Designation */}
          <div className="form-group">
            <label className="form-label" htmlFor="role">
              <Briefcase size={15} />
              <span>Professional Role / Background</span>
            </label>
            <select
              id="role"
              name="role"
              className="form-select"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="Software Engineer / Architect">Software Engineer / Architect</option>
              <option value="UI/UX / Product Designer">UI/UX / Product Designer</option>
              <option value="Startup Founder / Executive">Startup Founder / Executive</option>
              <option value="Product / Project Manager">Product / Project Manager</option>
              <option value="Growth & Marketing Specialist">Growth & Marketing Specialist</option>
              <option value="Student / Researcher">Student / Researcher</option>
              <option value="Creative / Photographer">Creative / Photographer</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Row 4: Special notes */}
          <div className="form-group">
            <label className="form-label" htmlFor="specialRequests">
              <FileText size={15} />
              <span>Dietary or Accessibility Requests (Optional)</span>
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              rows={2}
              placeholder="e.g. Vegetarian meal, wheelchair access, closed captions needed..."
              className="form-textarea"
              value={formData.specialRequests}
              onChange={handleChange}
            />
          </div>

          {/* Pricing Summary */}
          <div className="order-summary-box">
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Total Investment</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)' }}>
                {formData.seats} × {event.isFree ? 'Free Admission' : `$${event.price} per seat`}
              </div>
            </div>
            <div className="order-summary-price">
              {event.isFree ? 'FREE' : `$${totalPrice}`}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-accent btn-lg"
            style={{ width: '100%', marginTop: '6px' }}
            disabled={isSubmitting || event.availableSeats === 0}
          >
            {isSubmitting ? (
              'Confirming Reservation...'
            ) : event.availableSeats === 0 ? (
              'Event Sold Out'
            ) : (
              <>
                <CheckCircle2 size={18} />
                Complete Registration
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;

