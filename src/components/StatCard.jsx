import React from 'react';
import PropTypes from 'prop-types';

const StatCard = ({ icon, number, label }) => {
  return (
    <div className="stat-card">
      <div className="stat-icon" aria-hidden="true">
        {icon}
      </div>
      <div className="stat-content">
        <p className="stat-number">{number}</p>
        <p className="stat-label">{label}</p>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  icon: PropTypes.node.isRequired,
  number: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default StatCard;
