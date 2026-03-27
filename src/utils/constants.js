/**
 * Application constants
 */

export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'https://api.example.com',
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
};

export const AUTH_CONFIG = {
  TOKEN_KEY: 'auth_token',
  REFRESH_TOKEN_KEY: 'refresh_token',
  USER_KEY: 'user_data',
  TOKEN_EXPIRY_KEY: 'token_expiry',
};

export const VALIDATION_RULES = {
  EMAIL_MAX_LENGTH: 254,
  PASSWORD_MIN_LENGTH: 12,
  PASSWORD_MAX_LENGTH: 128,
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 32,
};

export const RATE_LIMITS = {
  LOGIN_ATTEMPTS: 5,
  LOGIN_WINDOW_MS: 900000, // 15 minutes
  API_CALLS: 100,
  API_WINDOW_MS: 60000, // 1 minute
};

export const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
};

export const MESSAGES = {
  SUCCESS: {
    SIGNUP: 'Account created successfully. Please check your email to verify.',
    LOGIN: 'Logged in successfully.',
    LOGOUT: 'Logged out successfully.',
  },
  ERROR: {
    INVALID_EMAIL: 'Please enter a valid email address.',
    WEAK_PASSWORD: 'Password must be at least 12 characters with uppercase, lowercase, numbers, and special characters.',
    INVALID_CREDENTIALS: 'Invalid email or password.',
    RATE_LIMITED: 'Too many attempts. Please try again later.',
    NETWORK_ERROR: 'Network error. Please check your connection.',
    UNKNOWN_ERROR: 'An unexpected error occurred. Please try again.',
  },
};

export default {
  API_CONFIG,
  AUTH_CONFIG,
  VALIDATION_RULES,
  RATE_LIMITS,
  SECURITY_HEADERS,
  MESSAGES,
};
