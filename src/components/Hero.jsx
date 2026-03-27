import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ onGetStarted }) => {
  return (
    <section className="hero" role="region" aria-label="Hero section">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Want anything to be easy with <strong>LaslesVPN</strong>.
          </h1>
          <p className="hero-description">
            Provide a network for all your needs with ease and fun using <strong>LaslesVPN</strong> discover interesting features from us.
          </p>
          <button
            className="btn btn-primary btn-large"
            onClick={onGetStarted}
            aria-label="Get started with LaslesVPN"
          >
            Get Started
          </button>
        </div>

        {/* Right Illustration */}
        <div className="hero-illustration" aria-hidden="true">
          <svg
            width="500"
            height="400"
            viewBox="0 0 500 400"
            fill="none"
            className="illustration"
          >
            {/* Background decorative elements */}
            <circle cx="420" cy="80" r="25" fill="#FFE5E5" opacity="0.6" />
            <circle cx="80" cy="320" r="20" fill="#E5F0FF" opacity="0.6" />

            {/* Floating icons */}
            {/* Lock icon */}
            <g transform="translate(360, 50)">
              <rect x="0" y="0" width="50" height="50" rx="12" fill="white" stroke="#FFE5E5" strokeWidth="2"/>
              <rect x="15" y="20" width="20" height="16" rx="3" fill="#FFB8B8" opacity="0.5"/>
              <circle cx="25" cy="18" r="5" stroke="#FFB8B8" strokeWidth="2" fill="none"/>
              <rect x="23" y="24" width="4" height="8" fill="#FF6B6B"/>
            </g>

            {/* Play button */}
            <g transform="translate(400, 110)">
              <rect x="0" y="0" width="45" height="45" rx="10" fill="white" stroke="#FFE5E5" strokeWidth="2"/>
              <polygon points="18,12 18,33 32,22.5" fill="#FFB8B8"/>
            </g>

            {/* Chart bars */}
            <g transform="translate(420, 180)">
              <rect x="0" y="0" width="40" height="40" rx="8" fill="white" stroke="#FFE5E5" strokeWidth="2"/>
              <rect x="8" y="22" width="6" height="10" rx="1" fill="#B8E6B8"/>
              <rect x="17" y="14" width="6" height="18" rx="1" fill="#FFB8B8"/>
              <rect x="26" y="8" width="6" height="24" rx="1" fill="#FFE5B8"/>
            </g>

            {/* N icon */}
            <g transform="translate(340, 130)">
              <rect x="0" y="0" width="40" height="40" rx="8" fill="white" stroke="#FFE5E5" strokeWidth="2"/>
              <text x="12" y="28" fontSize="18" fontWeight="bold" fill="#FFB8B8">N</text>
            </g>

            {/* Character - Person with headphones */}
            {/* Headphones band */}
            <path d="M180 100 Q180 60 220 60 Q260 60 260 100" stroke="#4A3F8F" strokeWidth="6" fill="none"/>
            {/* Left ear cup */}
            <rect x="170" y="90" width="16" height="28" rx="8" fill="#3D348B"/>
            {/* Right ear cup with green indicator */}
            <rect x="254" y="90" width="16" height="28" rx="8" fill="#3D348B"/>
            <circle cx="262" cy="104" r="5" fill="#4ADE80"/>

            {/* Head */}
            <ellipse cx="220" cy="115" rx="38" ry="42" fill="#FFDBB8"/>
            {/* Hair */}
            <path d="M182 115 Q175 85 200 75 Q220 65 240 75 Q265 85 258 115" fill="#2D1B69"/>
            <circle cx="195" cy="95" r="12" fill="#2D1B69"/>

            {/* Glasses */}
            <g>
              <rect x="195" y="108" width="22" height="14" rx="3" fill="white" stroke="#2D1B69" strokeWidth="2"/>
              <rect x="223" y="108" width="22" height="14" rx="3" fill="white" stroke="#2D1B69" strokeWidth="2"/>
              <line x1="217" y1="115" x2="223" y2="115" stroke="#2D1B69" strokeWidth="2"/>
              <line x1="195" y1="115" x2="170" y2="110" stroke="#2D1B69" strokeWidth="2"/>
              <line x1="245" y1="115" x2="258" y2="110" stroke="#2D1B69" strokeWidth="2"/>
            </g>

            {/* Eyes (visible through glasses) */}
            <circle cx="206" cy="115" r="3" fill="#2D1B69"/>
            <circle cx="234" cy="115" r="3" fill="#2D1B69"/>

            {/* Smiling mouth */}
            <path d="M210 135 Q220 142 230 135" stroke="#2D1B69" strokeWidth="2" fill="none" strokeLinecap="round"/>

            {/* Neck */}
            <rect x="208" y="155" width="24" height="20" fill="#FFDBB8"/>
            {/* Necklace */}
            <rect x="205" y="165" width="30" height="6" rx="3" fill="#E63946"/>

            {/* Body/Shirt */}
            <path d="M160 175 Q160 165 180 170 L200 175 L240 175 L260 170 Q280 165 280 175 L290 240 Q295 280 285 320 L275 340 L165 340 L155 320 Q145 280 150 240 Z" fill="#FF6B5B"/>

            {/* Left arm with raised hand */}
            <path d="M155 200 Q140 180 130 160 L125 140" stroke="#FFDBB8" strokeWidth="20" strokeLinecap="round" fill="none"/>
            {/* Hand making fist gesture */}
            <circle cx="125" cy="135" r="12" fill="#FFDBB8"/>
            <ellipse cx="120" cy="130" rx="4" ry="6" fill="#FFDBB8"/>
            <ellipse cx="128" cy="128" rx="4" ry="6" fill="#FFDBB8"/>

            {/* Right arm on laptop */}
            <path d="M285 220 Q310 230 320 250" stroke="#FFDBB8" strokeWidth="18" strokeLinecap="round" fill="none"/>
            {/* Watch on wrist */}
            <rect x="280" y="225" width="16" height="8" rx="2" fill="#3D348B"/>

            {/* Coffee cup */}
            <g transform="translate(130, 280)">
              <path d="M0 0 L40 0 L35 50 Q35 55 20 55 Q5 55 5 50 Z" fill="#E8E8E8"/>
              <ellipse cx="20" cy="0" rx="20" ry="5" fill="#D0D0D0"/>
              <path d="M40 15 Q50 15 50 25 Q50 35 38 35" stroke="#E8E8E8" strokeWidth="4" fill="none"/>
              {/* Steam */}
              <path d="M15 -10 Q10 -20 15 -30" stroke="#D0D0D0" strokeWidth="2" fill="none" opacity="0.5"/>
              <path d="M25 -15 Q20 -25 25 -35" stroke="#D0D0D0" strokeWidth="2" fill="none" opacity="0.5"/>
            </g>

            {/* Laptop */}
            <g transform="translate(200, 280)">
              {/* Laptop base */}
              <path d="M0 40 L100 40 L110 50 L-10 50 Z" fill="#C0C0C0"/>
              <rect x="-10" y="50" width="120" height="5" rx="2" fill="#A0A0A0"/>
              {/* Screen */}
              <rect x="5" y="0" width="90" height="40" rx="3" fill="#4A4A4A"/>
              <rect x="8" y="3" width="84" height="34" rx="2" fill="#F5F5F5"/>
              {/* Apple logo */}
              <circle cx="50" cy="20" r="6" fill="#C0C0C0"/>
            </g>

            {/* Desk lamp */}
            <g transform="translate(350, 250)">
              {/* Base */}
              <ellipse cx="50" cy="80" rx="25" ry="8" fill="#4A4A6A"/>
              {/* Arm */}
              <line x1="50" y1="80" x2="30" y2="40" stroke="#C0C0C0" strokeWidth="4"/>
              <circle cx="30" cy="40" r="4" fill="#A0A0A0"/>
              <line x1="30" y1="40" x2="10" y2="20" stroke="#C0C0C0" strokeWidth="4"/>
              {/* Head */}
              <path d="M-5 10 L25 10 L20 25 L0 25 Z" fill="#4A4A6A"/>
              <ellipse cx="10" cy="25" rx="12" ry="6" fill="#6A6A8A"/>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  onGetStarted: PropTypes.func.isRequired,
};

export default Hero;
