# EVENTORA — Event Discovery & Workshop Registration Platform

> **Discover. Connect. Experience.**  
> A premium, modern, fully-responsive event discovery and workshop registration website crafted with React, Vite, ES6+, and CSS3.

---

## 🌟 Key Highlights & Architecture

### 1. Design System & Color Palette
- **Primary:** Deep Navy (`#171B3B`)
- **Secondary:** Electric Purple (`#7357E8`)
- **Accent:** Vibrant Coral (`#FF796C`)
- **Background:** Soft Lavender (`#F7F6FC`)
- **Cards:** Pure White (`#FFFFFF`)
- **Text:** Dark Charcoal (`#24243A`)
- **Secondary Text:** Muted Grey (`#77778B`)
- **Typography:** Outfit (Display Headings) & Plus Jakarta Sans (Body)

### 2. Pages & Features

#### 🏠 Home Page (`/`)
- **Sticky Navigation Bar:**
  - Custom Eventora logo with sparkling badge.
  - Quick links (Home, Explore Events, My Registrations).
  - Quick Search Modal with real-time keyword matching across titles, speakers, and topics.
  - Dynamic "My Bookings" pill displaying current registration count in real-time.
  - Fully responsive mobile drawer navigation with auto-closing on link selection.
- **Hero Section:**
  - Badge: *"Discover What's Happening Around You"*
  - Main Heading: *"Find Your Next Experience. Learn Something New. Meet Amazing People."*
  - Floating badge showing date, floating avatar stack indicating 1,400+ attendees.
  - Dual action CTAs: "Explore Events" & "Discover Upcoming Events".
- **Featured Event Showcase:**
  - Highlighted banner for the *Global AI & Next-Gen Machine Learning Summit 2026*.
  - Category, date, time, location, available seats counter, and direct booking button.
- **Upcoming Events:**
  - Responsive cards with high-resolution photography, category pill, date, time, location, live seats status, pricing, and "View Details".
- **Explore Event Categories:**
  - Interactive category cards with hover micro-animations: Technology, Business, Design, Education, Marketing, Photography, Health & Wellness.
  - Clicking any category navigates to `/events?category=...` with the filter pre-selected.
- **Why Choose Eventora?**
  - 4 feature cards: Discover Amazing Events, Learn from Industry Experts, Connect with Professionals, and Easy Event Registration.
- **Call-to-Action Section:**
  - High-impact dark gradient CTA block with direct links to browse events or manage registrations.

#### 🔍 Explore Events Page (`/events`)
- Real-time search query across event title, speaker name, description, tags, and location.
- Category pills with active indicator and URL sync (`?category=...`).
- Mode selector (`All Modes`, `In-Person`, `Online`, `Hybrid`).
- Pricing selector (`All Prices`, `Free Admission`, `Paid / VIP`).
- Sort dropdown (`Soonest Date`, `Price Low to High`, `Price High to Low`, `Most Seats Available`, `Alphabetical`).
- Dynamic results counter and empty state with "Clear All Filters" button.

#### 🎟️ Event Details Page (`/events/:id`)
- Immersive hero banner with organizer profile, badges, date, and venue details.
- Comprehensive overview:
  - Deep-dive description & key takeaways.
  - Full schedule / agenda timeline with timestamps and session leads.
  - Featured speakers directory with avatars, titles, and bios.
  - Venue location and logistics.
- Sticky Booking Sidebar:
  - Live seat availability tracker (decrements when booked!).
  - "Register for Event" modal trigger with validation.
  - Share link button with clipboard toast notification.
  - "What's Included" feature checklist.

#### 🎫 My Registrations Page (`/registrations`)
- Real-time list of all user bookings backed by `localStorage`.
- Digital Ticket Pass:
  - Perforated ticket styling with dashed cut-line.
  - Unique Ticket ID (`EVT-PASS-XXXXXX`).
  - Attendee details, seats booked, pricing, venue info, and mock digital barcode/QR.
  - Print / Save Ticket Pass feature (`window.print()`).
- Cancellation workflow:
  - Confirmation dialog.
  - Restores released seats back to the event pool.
  - Instant toast feedback.
- Empty state with CTA when no registrations exist.

---

## 🚀 Running the Project

```bash
# Install dependencies
npm run install (or npm.cmd install)

# Start Vite Development Server
npm run dev

# Build for Production
npm run build
```
The application will be served at `http://127.0.0.1:3000/`.

# Event-Discovery-Workshop-Registration-Website
