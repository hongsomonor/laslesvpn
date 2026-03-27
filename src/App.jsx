import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Network from './components/Network';
import Testimonials from './components/Testimonials';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(null);

  const handleSignIn = () => {
    setShowAuthModal('signin');
  };

  const handleSignUp = () => {
    setShowAuthModal('signup');
  };

  const handleGetStarted = () => {
    setShowAuthModal('signup');
  };

  const closeModal = () => {
    setShowAuthModal(null);
  };

  return (
    <div className="app">
      <Header onSignIn={handleSignIn} onSignUp={handleSignUp} />
      <main>
        <Hero onGetStarted={handleGetStarted} />
        <Stats />
        <Features />
        <Pricing />
        <Network />
        <Testimonials />
        <Subscribe />
      </main>
      <Footer />

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="modal-overlay" onClick={closeModal} role="presentation">
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>
            <h2>{showAuthModal === 'signin' ? 'Sign In' : 'Sign Up'}</h2>
            <p>Modal content coming soon...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
