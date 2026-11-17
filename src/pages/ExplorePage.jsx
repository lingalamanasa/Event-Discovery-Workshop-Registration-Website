import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, RotateCcw, Calendar, AlertCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useRegistration } from '../context/RegistrationContext';
import EventCard from '../components/EventCard';
import AnimatedHeading from '../components/AnimatedHeading';
import Magnetic from '../components/Magnetic';
import '../styles/explore.css';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  'All Categories',
  'Technology',
  'Design',
  'Business',
  'Education',
  'Marketing',
  'Photography',
  'Health & Wellness'
];

const ExplorePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { events } = useRegistration();

  // Search query & filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedMode, setSelectedMode] = useState('All Modes');
  const [selectedPrice, setSelectedPrice] = useState('All Prices');
  const [sortBy, setSortBy] = useState('upcoming');

  const filterPanelRef = useRef(null);
  const gridRef = useRef(null);

  // Entrance animations for filter panel
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        filterPanelRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.category-pill',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, stagger: 0.05, duration: 0.4, delay: 0.2, ease: 'back.out(1.4)' }
      );
    });

    return () => ctx.revert();
  }, []);

  // Sync state with URL params
  useEffect(() => {
    const catParam = searchParams.get('category');
    if (catParam) {
      const match = categories.find((c) => c.toLowerCase() === catParam.toLowerCase());
      if (match) setSelectedCategory(match);
    }
    const modeParam = searchParams.get('mode');
    if (modeParam) {
      setSelectedMode(modeParam);
    }
  }, [searchParams]);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All Categories') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All Categories');
    setSelectedMode('All Modes');
    setSelectedPrice('All Prices');
    setSortBy('upcoming');
    setSearchParams({});
  };

  // Filtered and sorted events
  const filteredEvents = useMemo(() => {
    return events
      .filter((ev) => {
        // Search
        if (searchTerm.trim()) {
          const q = searchTerm.toLowerCase();
          const matchTitle = ev.title.toLowerCase().includes(q);
          const matchSpeaker = ev.speakers.some((s) => s.name.toLowerCase().includes(q));
          const matchLocation = ev.location.toLowerCase().includes(q);
          const matchTag = ev.tags.some((t) => t.toLowerCase().includes(q));
          if (!matchTitle && !matchSpeaker && !matchLocation && !matchTag) return false;
        }

        // Category
        if (selectedCategory !== 'All Categories' && ev.category !== selectedCategory) {
          return false;
        }

        // Mode (In-Person, Online, Hybrid)
        if (selectedMode !== 'All Modes' && ev.mode !== selectedMode) {
          return false;
        }

        // Price
        if (selectedPrice === 'Free' && !ev.isFree) return false;
        if (selectedPrice === 'Paid' && ev.isFree) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'upcoming') {
          return new Date(a.date) - new Date(b.date);
        }
        if (sortBy === 'price-low') {
          return (a.isFree ? 0 : a.price) - (b.isFree ? 0 : b.price);
        }
        if (sortBy === 'price-high') {
          return (b.isFree ? 0 : b.price) - (a.isFree ? 0 : a.price);
        }
        if (sortBy === 'seats') {
          return b.availableSeats - a.availableSeats;
        }
        if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
  }, [events, searchTerm, selectedCategory, selectedMode, selectedPrice, sortBy]);

  // Animate grid cards when filtered list updates
  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.event-card-tilt-wrap');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [filteredEvents]);

  const isFiltered =
    searchTerm !== '' ||
    selectedCategory !== 'All Categories' ||
    selectedMode !== 'All Modes' ||
    selectedPrice !== 'All Prices';

  return (
    <div className="explore-page">
      {/* Header Banner */}
      <section className="explore-hero">
        <div className="container">
          <div className="explore-header-row">
            <div>
              <span className="section-badge">
                <Calendar size={14} /> Full Event Catalog
              </span>
              <AnimatedHeading
                tag="h1"
                className="section-title"
                text="Explore Events & Workshops"
                scrollTrigger={false}
              />
              <p style={{ maxWidth: '560px' }}>
                Discover transformative conferences, intensive technical masterclasses, and hands-on professional experiences.
              </p>
            </div>

            {isFiltered && (
              <Magnetic strength={0.3}>
                <button onClick={handleResetFilters} className="btn btn-outline btn-sm">
                  <RotateCcw size={15} />
                  Reset Filters
                </button>
              </Magnetic>
            )}
          </div>

          {/* Filters Panel */}
            <div className="explore-filters-panel" ref={filterPanelRef}>
              <div className="filters-top-row">
                {/* Search Box */}
                <div className="explore-search-box">
                  <Search size={18} className="explore-search-icon" />
                  <input
                    type="text"
                    placeholder="Search by title, speaker, topic, or location..."
                    className="explore-search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Mode Dropdown */}
                <select
                  className="filter-select"
                  value={selectedMode}
                  onChange={(e) => setSelectedMode(e.target.value)}
                >
                  <option value="All Modes">All Formats</option>
                  <option value="In-Person">In-Person Only</option>
                  <option value="Online">Online / Virtual</option>
                  <option value="Hybrid">Hybrid (Both)</option>
                </select>

                {/* Price Dropdown */}
                <select
                  className="filter-select"
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                >
                  <option value="All Prices">All Pricing</option>
                  <option value="Free">Free Admission</option>
                  <option value="Paid">Paid / VIP Passes</option>
                </select>

                {/* Sort By Dropdown */}
                <select
                  className="filter-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="upcoming">Sort by: Soonest Date</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="seats">Seats: Most Available</option>
                  <option value="title">Alphabetical (A-Z)</option>
                </select>
              </div>

              {/* Category Pills */}
              <div className="category-pills-row">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => handleCategorySelect(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
      </section>

      {/* Main Content Area */}
      <section className="section" style={{ paddingTop: '32px' }}>
        <div className="container">
          <div className="results-summary-bar">
            <div className="results-count">
              Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'Event' : 'Events'}
            </div>
            {selectedCategory !== 'All Categories' && (
              <span className="section-badge" style={{ margin: 0 }}>
                {selectedCategory}
              </span>
            )}
          </div>

          {filteredEvents.length === 0 ? (
            <div className="empty-state-box">
              <div className="empty-icon-circle">
                <AlertCircle size={32} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>No matching events found</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                We couldn't find any events matching your selected criteria. Try adjusting your search keywords or resetting filters.
              </p>
              <Magnetic strength={0.3}>
                <button onClick={handleResetFilters} className="btn btn-primary">
                  <RotateCcw size={16} />
                  Clear All Filters
                </button>
              </Magnetic>
            </div>
          ) : (
              <div className="events-grid" ref={gridRef}>
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
          )}
            </div>
      </section>
    </div>
  );
};

export default ExplorePage;
