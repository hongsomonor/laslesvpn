---
inclusion: manual
---

# Quick Start Guide

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── StatCard.jsx    # Stat card component
│   └── Stats.jsx       # Stats section
├── hooks/              # Custom React hooks
│   └── useAuth.js      # Authentication logic
├── utils/              # Utility functions
│   ├── security.js     # Security utilities (OWASP TOP TEN)
│   └── constants.js    # Application constants
├── App.jsx             # Main app component
├── App.css             # Styles
├── index.css           # Global styles
└── main.jsx            # Entry point
```

## Key Features

### 🔒 Security (OWASP TOP TEN)
- Input sanitization
- Email & password validation
- Rate limiting
- CSRF protection
- Secure storage
- Security event logging

### ♿ Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management
- Dark mode support

### 📱 Responsive Design
- Mobile-first approach
- Tablet optimized
- Desktop optimized
- Touch-friendly

### ⚡ Performance
- Minimal dependencies
- Pure CSS (no CSS-in-JS)
- SVG icons
- Optimized bundle

## Common Tasks

### Add a New Component

1. Create component file in `src/components/`
```jsx
// src/components/MyComponent.jsx
import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ prop1, prop2 }) => {
  return (
    <div className="my-component">
      {/* Component content */}
    </div>
  );
};

MyComponent.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.func.isRequired,
};

export default MyComponent;
```

2. Import and use in `App.jsx`
```jsx
import MyComponent from './components/MyComponent';

// In App component
<MyComponent prop1="value" prop2={handleClick} />
```

3. Add styles to `App.css`
```css
.my-component {
  /* Your styles */
}
```

### Add a New Hook

1. Create hook file in `src/hooks/`
```javascript
// src/hooks/useMyHook.js
import { useState, useCallback } from 'react';

export const useMyHook = () => {
  const [state, setState] = useState(null);

  const action = useCallback(() => {
    // Hook logic
  }, []);

  return { state, action };
};
```

2. Use in component
```jsx
import { useMyHook } from '../hooks/useMyHook';

const MyComponent = () => {
  const { state, action } = useMyHook();
  // Use hook
};
```

### Add Security Validation

```javascript
import { 
  sanitizeInput, 
  validateEmail, 
  validatePassword,
  checkRateLimit 
} from '../utils/security';

// Sanitize user input
const safe = sanitizeInput(userInput);

// Validate email
if (validateEmail(email)) {
  // Process email
}

// Validate password
const result = validatePassword(password);
if (result.isValid) {
  // Password meets requirements
}

// Check rate limit
if (checkRateLimit('action', 5, 900000)) {
  // Too many attempts
}
```

## Styling Guide

### Using CSS Variables
```css
.my-element {
  color: var(--text-dark);
  background-color: var(--bg-light);
  padding: 16px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}
```

### Responsive Design
```css
/* Desktop (default) */
.my-element {
  font-size: 1rem;
}

/* Tablet */
@media (max-width: 768px) {
  .my-element {
    font-size: 0.95rem;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .my-element {
    font-size: 0.9rem;
  }
}
```

### Accessibility
```css
/* Focus visible for keyboard navigation */
button:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: