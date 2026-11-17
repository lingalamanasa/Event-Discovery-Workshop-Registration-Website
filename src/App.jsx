import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegistrationProvider } from './context/RegistrationContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';

// Pages
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import EventDetailPage from './pages/EventDetailPage';
import RegistrationsPage from './pages/RegistrationsPage';

function App() {
  return (
    <RegistrationProvider>
      <BrowserRouter>
        <ScrollToTop />
        <CustomCursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<ExplorePage />} />
            <Route path="/events/:id" element={<EventDetailPage />} />
            <Route path="/registrations" element={<RegistrationsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <Toast />
      </BrowserRouter>
    </RegistrationProvider>
  );
}

export default App;

