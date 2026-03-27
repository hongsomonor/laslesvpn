import React from 'react';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8L6.5 11.5L13 5" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Pricing = () => {
  const plans = [
    {
      id: 'free',
      name: 'Free Plan',
      image: 'free',
      price: 'Free',
      features: [
        'Unlimited Bandwitch',
        'Encrypted Connection',
        'No Traffic Logs',
        'Works on All Devices',
      ],
      highlighted: false,
    },
    {
      id: 'standard',
      name: 'Standard Plan',
      image: 'standard',
      price: '$9',
      period: '/ mo',
      features: [
        'Unlimited Bandwitch',
        'Encrypted Connection',
        'Yes Traffic Logs',
        'Works on All Devices',
        'Connect Anyware',
      ],
      highlighted: false,
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      image: 'premium',
      price: '$12',
      period: '/ mo',
      features: [
        'Unlimited Bandwitch',
        'Encrypted Connection',
        'Yes Traffic Logs',
        'Works on All Devices',
        'Connect Anyware',
        'Get New Features',
      ],
      highlighted: true,
    },
  ];

  return (
    <section className="pricing" id="pricing" role="region" aria-label="Pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Choose Your Plan</h2>
          <p className="pricing-subtitle">
            Let&apos;s choose the package that is best for you and explore it happily and<br />
            cheerfully.
          </p>
        </div>

        <div className="pricing-cards">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.highlighted ? 'pricing-card-highlighted' : ''}`}
            >
              {/* Plan illustration */}
              <div className="plan-image" aria-hidden="true">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  {/* Box */}
                  <rect x="25" y="50" width="70" height="50" rx="8" fill="#FFE4D6"/>
                  <rect x="25" y="50" width="70" height="35" rx="8" fill="#FFCBB8"/>
                  {/* Lid/flap */}
                  <path d="M25 50 L35 35 L85 35 L95 50" fill="#FFA896"/>
                  {/* Decorative sparkles */}
                  <circle cx="40" cy="25" r="3" fill="#FFD700" opacity="0.7"/>
                  <circle cx="80" cy="20" r="2" fill="#FFD700" opacity="0.7"/>
                  <circle cx="60" cy="15" r="2" fill="#FFD700" opacity="0.7"/>
                  <circle cx="95" cy="40" r="2" fill="#FFD700" opacity="0.7"/>
                  {/* Small lines for sparkles */}
                  <line x1="40" y1="20" x2="40" y2="15" stroke="#FFD700" strokeWidth="1"/>
                  <line x1="35" y1="25" x2="30" y2="25" stroke="#FFD700" strokeWidth="1"/>
                  <line x1="45" y1="25" x2="50" y2="25" stroke="#FFD700" strokeWidth="1"/>
                  <line x1="40" y1="30" x2="40" y2="35" stroke="#FFD700" strokeWidth="1"/>
                </svg>
              </div>

              <h3 className="plan-name">{plan.name}</h3>

              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index} className="plan-feature">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="plan-footer">
                <p className="plan-price">
                  {plan.price}
                  {plan.period && <span className="plan-period">{plan.period}</span>}
                </p>
                <button
                  className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-outline'}`}
                  aria-label={`Select ${plan.name}`}
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
