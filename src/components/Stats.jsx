import React from 'react';
import StatCard from './StatCard';

const Stats = () => {
  const stats = [
    {
      id: 'users',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="10" r="5" fill="#FF385C" />
          <path d="M7 21C7 17.5 10.5 15 14 15C17.5 15 21 17.5 21 21V21H7V21Z" fill="#FF385C" />
        </svg>
      ),
      number: '90+',
      label: 'Users',
    },
    {
      id: 'locations',
      icon: (
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
          <path d="M12 2C7 2 3 6 3 11C3 19 12 26 12 26C12 26 21 19 21 11C21 6 17 2 12 2Z" fill="#FF385C" />
          <circle cx="12" cy="11" r="3" fill="white" />
        </svg>
      ),
      number: '30+',
      label: 'Locations',
    },
    {
      id: 'servers',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="4" y="4" width="20" height="5" rx="1" fill="#FF385C" />
          <rect x="4" y="11.5" width="20" height="5" rx="1" fill="#FF385C" />
          <rect x="4" y="19" width="20" height="5" rx="1" fill="#FF385C" />
        </svg>
      ),
      number: '50+',
      label: 'Servers',
    },
  ];

  return (
    <section className="stats" role="region" aria-label="Statistics">
      <div className="stats-container">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            icon={stat.icon}
            number={stat.number}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;
