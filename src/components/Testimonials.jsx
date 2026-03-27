import React, { useState } from 'react';
import PropTypes from 'prop-types';

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 0L9.796 5.527H15.608L10.906 8.946L12.702 14.473L8 11.054L3.298 14.473L5.094 8.946L0.392 5.527H6.204L8 0Z" fill="#FFB800"/>
  </svg>
);

const TestimonialCard = ({ name, location, image, rating, text }) => (
  <div className="testimonial-card">
    <div className="testimonial-header">
      <div className="testimonial-avatar">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="24" fill="#E8E8E8"/>
          <circle cx="24" cy="18" r="8" fill="#B8B8B8"/>
          <path d="M10 42C10 34 16 28 24 28C32 28 38 34 38 42" fill="#B8B8B8"/>
        </svg>
      </div>
      <div className="testimonial-info">
        <h4 className="testimonial-name">{name}</h4>
        <p className="testimonial-location">{location}</p>
      </div>
      <div className="testimonial-rating">
        <span className="rating-value">{rating}</span>
        <StarIcon />
      </div>
    </div>
    <p className="testimonial-text">{text}</p>
  </div>
);

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string,
  rating: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

TestimonialCard.defaultProps = {
  image: null,
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Viezh Robert',
      location: 'Warsaw, Poland',
      rating: '4.5',
      text: '"Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best".',
    },
    {
      id: 2,
      name: 'Yessica Christy',
      location: 'Shanxi, China',
      rating: '4.5',
      text: '"I like it because I like to travel far and still can connect with high speed".',
    },
    {
      id: 3,
      name: 'Kim Young Jou',
      location: 'Seoul, South Korea',
      rating: '4.5',
      text: '"This is very unusual for my business that currently requires a virtual private network that has high security".',
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials" id="testimonials" role="region" aria-label="Testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Trusted by Thousands of<br />Happy Customer
          </h2>
          <p className="testimonials-subtitle">
            These are the stories of our customers who have joined us with great<br />
            pleasure when using this crazy feature.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              location={testimonial.location}
              rating={testimonial.rating}
              text={testimonial.text}
            />
          ))}
        </div>

        <div className="testimonials-navigation">
          <div className="pagination-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="navigation-arrows">
            <button
              className="nav-arrow nav-arrow-prev"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 15L7 10L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="nav-arrow nav-arrow-next"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
