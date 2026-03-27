---
inclusion: auto
---

# Architecture & Component Guide

## Project Overview

LaslesVPN Landing Page is built with a clean, modular architecture emphasizing:
- **Reusability**: Components are self-contained and composable
- **Security**: OWASP TOP TEN principles throughout
- **Performance**: Minimal dependencies, optimized bundle
- **Accessibility**: WCAG 2.1 compliant

## Component Hierarchy

```
App
├── Header
│   ├── Logo
│   ├── Navigation
│   └── Auth Buttons
├── Hero
│   ├── Content
│   └── Illustration
└── Stats
    ├── StatCard (x3)
    │   ├── Icon
    │   └── Content
```

## Component Details

### Header Component
**File**: `src/components/Header.jsx`

**Props**:
- `onSignIn` (function): Callback when Sign In is clicked
- `onSignUp` (function): Callback when Sign Up is clicked

**Features**:
- Sticky positioning
- Responsive navigation
- Logo with gradient
- Auth button group
- Semantic navigation role

**Usage**:
```jsx
<Header 
  onSignIn={handleSignIn} 
  onSignUp={handleSignUp} 
/>
```

### Hero Component
**File**: `src/components/Hero.jsx`

**Props**:
- `onGetStarted` (function): Callback for Get Started button

**Features**:
- Large headline with highlight
- Descriptive text
- Call-to-action button
- SVG illustration
- Semantic section role

**Usage**:
```jsx
<Hero onGetStarted={handleGetStarted} />
```

### StatCard Component
**File**: `src/components/StatCard.jsx`

**Props**:
- `icon` (node): SVG or React element for icon
- `number` (string): Stat number (e.g., "90+")
- `label` (string): Stat label (e.g., "Users")

**Features**:
- Reusable card layout
- Icon container with background
- Hover animation
- Responsive sizing

**Usage**:
```jsx
<StatCard 
  icon={<UserIcon />}
  number="90+"
  label="Users"
/>
```

### Stats Component
**File**: `src/components/Stats.jsx`

**Features**:
- Grid layout with responsive columns
- Renders multiple StatCard components
- Semantic section role
- Automatic responsive behavior

**Usage**:
```jsx
<Stats />
```

## Hooks

### useAuth Hook
**File**: `src/hooks/useAuth.js`

**Returns**:
```javascript
{
  user: null | { email: string },
  loading: boolean,
  error: null | string,
  signUp: async (email, password) => Promise,
  signIn: async (email, password) => Promise,
  signOut: () => void
}
```

**Features**:
- Input validation
- Rate limiting
- Security logging
- Error handling

**Usage**:
```jsx
const { user, loading, error, signUp, signIn, signOut } = useAuth();

const handleSignUp = async (email, password) => {
  const result = await signUp(email, password);
  if (result.success) {
    // Handle success
  }
};
```

## Utilities

### Security Module
**File**: `src/utils/security.js`

**Functions**:

#### `sanitizeInput(input: string): string`
Prevents XSS attacks by escaping HTML characters.

```javascript
const safe = sanitizeInput(userInput);
```

#### `validateEmail(email: string): boolean`
Validates email format and length.

```javascript
if (validateEmail(email)) {
  // Valid email
}
```

#### `validatePassword(password: string): object`
Validates password strength with detailed feedback.

```javascript
const result = validatePassword(password);
// { isValid: boolean, score: number, checks: object }
```

#### `generateCSRFToken(): string`
Generates a cryptographically secure CSRF token.

```javascript
const token = generateCSRFToken();
```

#### `validateCSRFToken(token: string): boolean`
Validates CSRF token format.

```javascript
if (validateCSRFToken(token)) {
  // Valid token
}
```

#### `secureStorage`
Secure wrapper around localStorage.

```javascript
secureStorage.setItem('key', value);
const value = secureStorage.getItem('key');
secureStorage.removeItem('key');
secureStorage.clear();
```

#### `checkRateLimit(key: string, maxAttempts: number, windowMs: number): boolean`
Implements rate limiting.

```javascript
if (checkRateLimit('login', 5, 900000)) {
  // Rate limit exceeded
}
```

#### `logSecurityEvent(eventType: string, details: object): void`
Logs security-relevant events.

```javascript
logSecurityEvent('LOGIN_ATTEMPT', { email: 'user@example.com' });
```

#### `isSafeRedirectUrl(url: string): boolean`
Prevents open redirect attacks.

```javascript
if (isSafeRedirectUrl(url)) {
  window.location.href = url;
}
```

### Constants Module
**File**: `src/utils/constants.js`

**Exports**:
- `API_CONFIG`: API endpoint configuration
- `AUTH_CONFIG`: Authentication storage keys
- `VALIDATION_RULES`: Input validation constraints
- `RATE_LIMITS`: Rate limiting thresholds
- `SECURITY_HEADERS`: Recommended security headers
- `MESSAGES`: User-facing messages

## Styling Architecture

### CSS Variables
Located in `:root` selector in `src/App.css`:

```css
--primary-color: #FF385C
--text-dark: #0F1419
--text-light: #6F7B8C
--bg-light: #F8F9FB
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08)
--transition: all 0.3s ease
--radius-md: 8px
```

### Responsive Breakpoints
- **Desktop**: 1200px max-width
- **Tablet**: 768px breakpoint
- **Mobile**: 480px breakpoint

### Accessibility Features
- Focus visible states
- Reduced motion support
- Dark mode support
- High contrast colors

## State Management

Currently using React's built-in `useState` hook. For larger applications, consider:
- Context API for global state
- Redux for complex state
- Zustand for lightweight state management

## Performance Considerations

1. **Bundle Size**: Minimal dependencies (React + React-DOM only)
2. **CSS**: Pure CSS, no CSS-in-JS overhead
3. **Images**: SVG icons (scalable, no HTTP requests)
4. **Lazy Loading**: Ready for code splitting with React.lazy()
5. **Memoization**: Use React.memo() for expensive components

## Security Checklist

- [x] Input sanitization
- [x] Email validation
- [x] Password strength validation
- [x] Rate limiting
- [x] CSRF token generation
- [x] Secure storage wrapper
- [x] Security event logging
- [x] URL validation
- [x] XSS prevention (React built-in)
- [x] Semantic HTML
- [x] ARIA labels
- [x] Keyboard navigation

## Testing Strategy

### Unit Tests
Test individual functions:
```javascript
describe('sanitizeInput', () => {
  it('should escape HTML characters', () => {
    expect(sanitizeInput('<script>')).toBe('&lt;script&gt;');
  });
});
```

### Component Tests
Test component rendering and interactions:
```javascript
describe('Header', () => {
  it('should call onSignUp when Sign Up is clicked', () => {
    const onSignUp = vi.fn();
    render(<Header onSignIn={() => {}} onSignUp={onSignUp} />);
    fireEvent.click(screen.getByText('Sign Up'));
    expect(onSignUp).toHaveBeenCalled();
  });
});
```

### Integration Tests
Test user flows:
```javascript
describe('Authentication Flow', () => {
  it('should sign up user with valid credentials', async () => {
    // Test complete signup flow
  });
});
```

## Deployment Considerations

1. **Environment Variables**: Use `.env` for configuration
2. **Security Headers**: Configure on server
3. **HTTPS**: Enforce HTTPS only
4. **CSP**: Implement Content Security Policy
5. **CORS**: Configure CORS properly
6. **Monitoring**: Set up error tracking
7. **Analytics**: Add analytics (privacy-respecting)

## Future Enhancements

1. **Features Page**: Detailed feature showcase
2. **Pricing Page**: Pricing tiers and comparison
3. **Testimonials**: Customer testimonials section
4. **Blog**: Blog integration
5. **Contact Form**: Contact form with validation
6. **Newsletter**: Email subscription
7. **Dark Mode Toggle**: User preference toggle
8. **Multi-language**: i18n support
9. **Analytics**: User behavior tracking
10. **A/B Testing**: Conversion optimization

## Code Style Guide

### Naming Conventions
- Components: PascalCase (e.g., `Header.jsx`)
- Functions: camelCase (e.g., `sanitizeInput`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_CONFIG`)
- CSS Classes: kebab-case (e.g., `.btn-primary`)

### File Organization
```
src/
├── components/    # React components
├── hooks/         # Custom hooks
├── utils/         # Utility functions
├── App.jsx        # Main component
├── App.css        # Main styles
├── index.css      # Global styles
└── main.jsx       # Entry point
```

### Comments
- Use JSDoc for functions
- Explain "why", not "what"
- Keep comments up-to-date

### Imports
- Group imports: React, third-party, local
- Use absolute imports when possible
- Avoid circular dependencies
