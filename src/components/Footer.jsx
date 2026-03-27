import React from 'react';

const Footer = () => {
  const productLinks = ['Download', 'Pricing', 'Locations', 'Server', 'Countries', 'Blog'];
  const engageLinks = ['LaslesVPN ?', 'FAQ', 'Tutorials', 'About Us', 'Privacy Policy', 'Terms of Service'];
  const earnLinks = ['Affiliate', 'Become Partner'];

  const socialLinks = [
    { name: 'Facebook', icon: 'f' },
    { name: 'Twitter', icon: 't' },
    { name: 'Instagram', icon: 'ig' },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="LaslesVPN Logo">
              <circle cx="16" cy="16" r="14" fill="#FF385C" />
              <path d="M16 8L20 14H12L16 8Z" fill="white" />
            </svg>
            <span className="logo-text">LaslesVPN</span>
          </div>
          <p className="footer-description">
            LaslesVPN is a private virtual network that<br />
            has unique features and has high security.
          </p>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href="#"
                className="social-link"
                aria-label={social.name}
              >
                <span className="social-icon">{social.icon}</span>
              </a>
            ))}
          </div>
          <p className="footer-copyright">©2020LaslesVPN</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-column-title">Product</h4>
            <ul className="footer-link-list">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Engage</h4>
            <ul className="footer-link-list">
              {engageLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Earn Money</h4>
            <ul className="footer-link-list">
              {earnLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
