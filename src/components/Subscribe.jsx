import React from 'react';

const Subscribe = () => {
  return (
    <section className="subscribe" role="region" aria-label="Subscribe">
      <div className="subscribe-container">
        <div className="subscribe-content">
          <h2 className="subscribe-title">
            Subscribe Now for<br />Get Special Features!
          </h2>
          <p className="subscribe-subtitle">
            Let&apos;s subscribe with us and find the fun.
          </p>
        </div>
        <button
          className="btn btn-primary btn-large subscribe-btn"
          aria-label="Subscribe now"
        >
          Subscribe Now
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
