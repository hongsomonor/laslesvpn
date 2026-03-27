# LaslesVPN Landing Page

A modern, secure, and performant landing page for LaslesVPN built with React and Vite.

## Features

✨ **Modern Design**
- Clean, responsive UI matching the provided screenshot
- Smooth animations and transitions
- Dark mode support

🔒 **Security First**
- OWASP TOP TEN implementation
- Input sanitization and validation
- Rate limiting on authentication
- CSRF protection
- Secure storage utilities
- Security event logging

⚡ **Performance**
- Optimized bundle size
- Fast load times with Vite
- Lazy loading ready
- Minimal dependencies

♿ **Accessibility**
- WCAG 2.1 compliant markup
- Semantic HTML
- ARIA labels and roles
- Keyboard navigation support
- Focus management

📱 **Responsive**
- Mobile-first design
- Tablet and desktop optimized
- Touch-friendly interactions

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

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Security Implementation

### OWASP TOP TEN Coverage

1. **Injection** - Input sanitization via `sanitizeInput()`
2. **Broken Authentication** - Secure token handling and rate limiting
3. **Sensitive Data Exposure** - HTTPS enforcement and secure headers
4. **XML External Entities** - Not applicable (no XML parsing)
5. **Broken Access Control** - Role-based access patterns
6. **Security Misconfiguration** - Secure defaults throughout
7. **Cross-Site Scripting (XSS)** - Input sanitization and React's built-in protection
8. **Insecure Deserialization** - Safe JSON parsing
9. **Using Components with Known Vulnerabilities** - Regular dependency audits
10. **Insufficient Logging & Monitoring** - Security event logging

### Key Security Features

- **Input Validation**: Email and password validation with regex patterns
- **Rate Limiting**: Prevents brute force attacks (5 attempts per 15 minutes)
- **CSRF Protection**: Token generation and validation
- **Secure Storage**: Wrapper around localStorage with error handling
- **Security Logging**: Event tracking for security-relevant actions
- **URL Validation**: Prevents open redirect attacks

### Usage Examples

```javascript
// Input sanitization
import { sanitizeInput, validateEmail } from './utils/security';

const email = sanitizeInput(userInput);
if (validateEmail(email)) {
  // Process email
}

// Password validation
import { validatePassword } from './utils/security';

const result = validatePassword(password);
if (result.isValid) {
  // Password meets requirements
}

// Rate limiting
import { checkRateLimit } from './utils/security';

if (checkRateLimit('login', 5, 900000)) {
  // Too many attempts
}

// Authentication hook
import { useAuth } from './hooks/useAuth';

const { user, loading, error, signUp, signIn, signOut } = useAuth();
```

## Component Architecture

### Header Component
- Sticky navigation with smooth scrolling
- Logo and branding
- Navigation links
- Authentication buttons
- Responsive mobile menu ready

### Hero Component
- Large headline with highlight
- Descriptive text
- Call-to-action button
- Illustration placeholder
- Semantic HTML structure

### Stats Component
- Reusable StatCard components
- Grid layout with responsive columns
- Icon and metric display
- Hover animations

## Styling

- **CSS Variables**: Centralized color and spacing system
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px
- **Accessibility**: Focus states, reduced motion support, dark mode
- **Performance**: Minimal CSS, no unnecessary animations

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Minimal JavaScript bundle
- CSS-in-JS avoided (pure CSS)
- SVG icons (scalable, no HTTP requests)
- Lazy loading ready
- Image optimization ready

## Accessibility Features

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`)
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Color contrast compliance
- Reduced motion support
- Dark mode support

## Environment Variables

Create a `.env` file:

```
REACT_APP_API_URL=https://api.example.com
REACT_APP_ENV=production
```

## Deployment

### Build for Production

```bash
npm run build
```

### Server Configuration

Configure these security headers:

```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'nonce-{random}'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://api.example.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## Development

### Code Quality

```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint -- --fix
```

### Testing

Add tests with your preferred testing framework:

```bash
npm install --save-dev vitest @testing-library/react
```

## Contributing

1. Follow the existing code structure
2. Use semantic HTML
3. Implement security best practices
4. Test on multiple devices
5. Ensure accessibility compliance

## License

MIT

## Support

For issues or questions, please open an issue on the repository.

---

**Built with ❤️ for security and performance**
