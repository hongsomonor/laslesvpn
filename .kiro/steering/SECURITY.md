---
inclusion: auto
---

# Security Guidelines - OWASP TOP TEN Implementation

This project implements security best practices aligned with OWASP TOP TEN vulnerabilities.

## OWASP TOP TEN Coverage

### 1. Injection
- **Implementation**: Input sanitization via `sanitizeInput()` in `src/utils/security.js`
- **Practice**: All user inputs are validated and sanitized before processing
- **API**: Use parameterized queries on backend (not applicable in frontend)

### 2. Broken Authentication
- **Implementation**: Secure token handling in `src/hooks/useAuth.js`
- **Practice**: 
  - Tokens stored in HTTP-only cookies (backend responsibility)
  - Rate limiting on login attempts (5 attempts per 15 minutes)
  - Password validation enforces strong requirements

### 3. Sensitive Data Exposure
- **Implementation**: HTTPS enforcement and secure headers
- **Practice**:
  - All API calls use HTTPS
  - Sensitive data never logged to console in production
  - Security headers configured in `src/utils/constants.js`

### 4. XML External Entities (XXE)
- **Status**: Not applicable - no XML parsing in frontend

### 5. Broken Access Control
- **Implementation**: Role-based access checks
- **Practice**: Implement on backend with JWT validation
- **Frontend**: Conditional rendering based on user roles

### 6. Security Misconfiguration
- **Implementation**: Secure defaults throughout
- **Practice**:
  - CSP headers recommended in `src/utils/security.js`
  - Environment variables for sensitive config
  - No hardcoded secrets

### 7. Cross-Site Scripting (XSS)
- **Implementation**: Multiple layers of protection
- **Practice**:
  - Input sanitization via `sanitizeInput()`
  - React's built-in XSS protection (auto-escapes JSX)
  - Content Security Policy headers (configure on server)
  - No `dangerouslySetInnerHTML` usage

### 8. Insecure Deserialization
- **Implementation**: Safe JSON parsing
- **Practice**:
  - Use `JSON.parse()` with try-catch
  - Validate data structure after parsing
  - Never use `eval()` or `Function()` constructor

### 9. Using Components with Known Vulnerabilities
- **Implementation**: Dependency scanning
- **Practice**:
  - Regular `npm audit` checks
  - Keep dependencies updated
  - Review security advisories

### 10. Insufficient Logging & Monitoring
- **Implementation**: Security event logging
- **Practice**:
  - `logSecurityEvent()` for security-relevant events
  - Log authentication attempts
  - Monitor rate limit violations
  - Send logs to secure backend service

## Security Best Practices

### Input Validation
```javascript
import { sanitizeInput, validateEmail } from './utils/security';

const email = sanitizeInput(userInput);
if (validateEmail(email)) {
  // Process email
}
```

### Password Validation
```javascript
import { validatePassword } from './utils/security';

const result = validatePassword(password);
if (result.isValid) {
  // Password meets requirements
}
```

### Rate Limiting
```javascript
import { checkRateLimit } from './utils/security';

if (checkRateLimit('login', 5, 900000)) {
  // Too many attempts
}
```

### CSRF Protection
```javascript
import { generateCSRFToken, validateCSRFToken } from './utils/security';

const token = generateCSRFToken();
// Send with form submission
```

### Secure Storage
```javascript
import { secureStorage } from './utils/security';

// Store non-sensitive data only
secureStorage.setItem('user_preference', value);
const value = secureStorage.getItem('user_preference');
```

## Environment Configuration

Create `.env` file with:
```
REACT_APP_API_URL=https://api.example.com
REACT_APP_ENV=production
```

Never commit `.env` files with secrets.

## Server-Side Security Headers

Configure these headers on your backend:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-{random}'; style-src 'self' 'nonce-{random}'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://api.example.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## Testing Security

1. **Input Validation**: Test with malicious payloads
2. **Rate Limiting**: Verify limits are enforced
3. **XSS Prevention**: Test with script injection attempts
4. **CSRF**: Verify token validation
5. **Authentication**: Test with invalid credentials

## Deployment Checklist

- [ ] Enable HTTPS/TLS
- [ ] Configure CSP headers
- [ ] Set secure cookie flags (HttpOnly, Secure, SameSite)
- [ ] Enable HSTS
- [ ] Configure CORS properly
- [ ] Remove debug logging
- [ ] Run security audit (`npm audit`)
- [ ] Review environment variables
- [ ] Test with security tools (OWASP ZAP, Burp Suite)
