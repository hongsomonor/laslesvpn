import React from 'react';
import PropTypes from 'prop-types';

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#4ADE80" />
    <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Features = () => {
  const features = [
    'Powerful online protection.',
    'Internet without borders.',
    'Supercharged VPN.',
    'No specific time limits.',
  ];

  return (
    <section className="features" id="features" role="region" aria-label="Features">
      <div className="features-container">
        {/* Left Illustration */}
        <div className="features-illustration" aria-hidden="true">
          <svg
            width="400"
            height="350"
            viewBox="0 0 400 350"
            fill="none"
            className="illustration"
          >
            {/* Background sparkles */}
            <g fill="#FFD700" opacity="0.6">
              <path d="M50 80 L52 85 L57 87 L52 89 L50 94 L48 89 L43 87 L48 85 Z" />
              <path d="M350 60 L352 65 L357 67 L352 69 L350 74 L348 69 L343 67 L348 65 Z" />
              <path d="M30 200 L32 205 L37 207 L32 209 L30 214 L28 209 L23 207 L28 205 Z" />
              <path d="M370 180 L372 185 L377 187 L372 189 L370 194 L368 189 L363 187 L368 185 Z" />
            </g>

            {/* Plus signs */}
            <g fill="#FF6B6B" opacity="0.4">
              <path d="M120 40 L122 40 L122 48 L130 48 L130 50 L122 50 L122 58 L120 58 L120 50 L112 50 L112 48 L120 48 Z" />
              <path d="M280 120 L282 120 L282 128 L290 128 L290 130 L282 130 L282 138 L280 138 L280 130 L272 130 L272 128 L280 128 Z" />
              <path d="M60 280 L62 280 L62 288 L70 288 L70 290 L62 290 L62 298 L60 298 L60 290 L52 290 L52 288 L60 288 Z" />
            </g>

            {/* Character with laptop */}
            {/* Headphones band */}
            <path d="M150 60 Q150 30 185 30 Q220 30 220 60" stroke="#4A3F8F" strokeWidth="5" fill="none"/>
            {/* Ear cups */}
            <rect x="142" y="55" width="12" height="22" rx="6" fill="#3D348B"/>
            <rect x="216" y="55" width="12" height="22" rx="6" fill="#3D348B"/>
            <circle cx="222" cy="66" r="4" fill="#4ADE80"/>

            {/* Head */}
            <ellipse cx="185" cy="70" rx="32" ry="36" fill="#FFDBB8"/>
            {/* Hair */}
            <path d="M153 70 Q147 45 168 37 Q185 28 202 37 Q223 45 217 70" fill="#2D1B69"/>
            <circle cx="162" cy="50" r="10" fill="#2D1B69"/>

            {/* Glasses */}
            <g>
              <rect x="165" y="65" width="18" height="12" rx="2" fill="white" stroke="#2D1B69" strokeWidth="1.5"/>
              <rect x="187" y="65" width="18" height="12" rx="2" fill="white" stroke="#2D1B69" strokeWidth="1.5"/>
              <line x1="183" y1="71" x2="187" y2="71" stroke="#2D1B69" strokeWidth="1.5"/>
            </g>

            {/* Eyes */}
            <circle cx="174" cy="71" r="2.5" fill="#2D1B69"/>
            <circle cx="196" cy="71" r="2.5" fill="#2D1B69"/>

            {/* Smile */}
            <path d="M175 82 Q185 88 195 82" stroke="#2D1B69" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

            {/* Body/Shirt */}
            <path d="M135 105 Q135 98 150 102 L165 106 L205 106 L220 102 Q235 98 235 105 L242 158 Q246 190 238 220 L230 235 L140 235 L132 220 Q124 190 128 158 Z" fill="#FF6B5B"/>

            {/* Right arm gesturing */}
            <path d="M235 140 Q260 130 280 120 Q300 110 320 105" stroke="#FFDBB8" strokeWidth="16" strokeLinecap="round" fill="none"/>
            {/* Hand */}
            <circle cx="325" cy="102" r="10" fill="#FFDBB8"/>

            {/* Left arm on laptop */}
            <path d="M130 150 Q115 170 105 185" stroke="#FFDBB8" strokeWidth="14" strokeLinecap="round" fill="none"/>

            {/* Laptop */}
            <g transform="translate(145, 185)">
              <rect x="0" y="0" width="80" height="55" rx="4" fill="#E8E8E8"/>
              <rect x="4" y="4" width="72" height="42" rx="2" fill="#F5F5F5"/>
              <circle cx="40" cy="28" r="5" fill="#C0C0C0"/>
            </g>
          </svg>
        </div>

        {/* Right Content */}
        <div className="features-content">
          <h2 className="features-title">
            We Provide Many<br />Features You Can Use
          </h2>
          <p className="features-description">
            You can explore the features that we provide with fun and<br />
            have their own functions each feature.
          </p>
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index} className="feature-item">
                <CheckIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
