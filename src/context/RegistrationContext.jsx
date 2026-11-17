import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialEvents } from '../data/eventsData';

const RegistrationContext = createContext();

const LOCAL_STORAGE_EVENTS_KEY = 'eventora_events_data_v1';
const LOCAL_STORAGE_REG_KEY = 'eventora_user_registrations_v1';

export const RegistrationProvider = ({ children }) => {
  // Load events from localStorage or default
  const [events, setEvents] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_EVENTS_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse saved events:', e);
    }
    return initialEvents;
  });

  // Load user registrations
  const [registrations, setRegistrations] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_REG_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse saved registrations:', e);
    }
    return [];
  });

  // Global Toast notification state
  const [toast, setToast] = useState(null);

  // Sync events to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_EVENTS_KEY, JSON.stringify(events));
    } catch (e) {
      console.error('Failed to save events to localStorage:', e);
    }
  }, [events]);

  // Sync registrations to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_REG_KEY, JSON.stringify(registrations));
    } catch (e) {
      console.error('Failed to save registrations to localStorage:', e);
    }
  }, [registrations]);

  const showToast = (message, type = 'success') => {
    setToast({ id: Date.now(), message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const getEventById = (id) => {
    return events.find((ev) => ev.id === id) || null;
  };

  // Register for an event
  const registerForEvent = (eventId, formData) => {
    const targetEvent = events.find((ev) => ev.id === eventId);
    if (!targetEvent) {
      showToast('Event not found.', 'error');
      return { success: false, error: 'Event not found' };
    }

    const requestedSeats = parseInt(formData.seats || 1, 10);
    if (targetEvent.availableSeats < requestedSeats) {
      showToast(`Only ${targetEvent.availableSeats} seat(s) remaining!`, 'error');
      return { success: false, error: 'Not enough seats available' };
    }

    // Generate unique Ticket ID & Pass Code
    const ticketId = `EVT-PASS-${Math.floor(100000 + Math.random() * 900000)}`;
    const bookingDate = new Date().toISOString();

    const newTicket = {
      ticketId,
      eventId: targetEvent.id,
      eventTitle: targetEvent.title,
      eventCategory: targetEvent.category,
      displayDate: targetEvent.displayDate,
      time: targetEvent.time,
      location: targetEvent.location,
      venueAddress: targetEvent.venueAddress,
      mode: targetEvent.mode,
      image: targetEvent.image,
      organizerName: targetEvent.organizer.name,
      price: targetEvent.isFree ? 0 : targetEvent.price * requestedSeats,
      isFree: targetEvent.isFree,
      // User submission details
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      seats: requestedSeats,
      role: formData.role || 'Attendee',
      specialRequests: formData.specialRequests || '',
      bookingDate,
      status: 'Confirmed'
    };

    // Update remaining seats in event
    setEvents((prev) =>
      prev.map((ev) =>
        ev.id === eventId
          ? { ...ev, availableSeats: Math.max(0, ev.availableSeats - requestedSeats) }
          : ev
      )
    );

    // Save ticket to registrations
    setRegistrations((prev) => [newTicket, ...prev]);

    showToast(`You have successfully registered for ${targetEvent.title}!`, 'success');
    return { success: true, ticket: newTicket };
  };

  // Cancel registration
  const cancelRegistration = (ticketId) => {
    const ticket = registrations.find((t) => t.ticketId === ticketId);
    if (!ticket) return;

    // Restore seats
    setEvents((prev) =>
      prev.map((ev) =>
        ev.id === ticket.eventId
          ? { ...ev, availableSeats: Math.min(ev.totalSeats, ev.availableSeats + ticket.seats) }
          : ev
      )
    );

    // Remove from registrations
    setRegistrations((prev) => prev.filter((t) => t.ticketId !== ticketId));
    showToast(`Registration for "${ticket.eventTitle}" has been cancelled.`, 'info');
  };

  const isUserRegistered = (eventId) => {
    return registrations.some((reg) => reg.eventId === eventId);
  };

  return (
    <RegistrationContext.Provider
      value={{
        events,
        registrations,
        registrationCount: registrations.length,
        registerForEvent,
        cancelRegistration,
        isUserRegistered,
        getEventById,
        toast,
        showToast
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
};

