import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ onSignIn, onSignUp }) => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Help', href: '#help' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="LaslesVPN Logo">
            <circle cx="16" cy="16" r="14" fill="#FF385C" />
            <path d="M16 8L20 14H12L16 8Z" fill="white" />
          </svg>
          <span className="logo-text">LaslesVPN</span>
        </div>

        {/* Navigation */}
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <button
            className="btn btn-text"
            onClick={onSignIn}
            aria-label="Sign in to your account"
          >
            Sign In
          </button>
          <button
            className="btn btn-outline"
            onClick={onSignUp}
            aria-label="Create a new account"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};

export default Header;
