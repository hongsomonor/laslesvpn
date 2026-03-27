import { useState, useCallback } from 'react';
import { sanitizeInput, validateEmail, checkRateLimit, logSecurityEvent } from '../utils/security';
import { AUTH_CONFIG, RATE_LIMITS, MESSAGES } from '../utils/constants';

/**
 * Custom hook for authentication logic
 * Implements secure authentication patterns
 */
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Sign up handler with validation
   */
  const signUp = useCallback(async (email, password) => {
    setError(null);
    setLoading(true);

    try {
      // Rate limiting check
      if (checkRateLimit('signup', RATE_LIMITS.LOGIN_ATTEMPTS, RATE_LIMITS.LOGIN_WINDOW_MS)) {
        const message = MESSAGES.ERROR.RATE_LIMITED;
        logSecurityEvent('RATE_LIMIT_EXCEEDED', { action: 'signup' });
        setError(message);
        return { success: false, error: message };
      }

      // Input validation
      const sanitizedEmail = sanitizeInput(email);
      if (!validateEmail(sanitizedEmail)) {
        setError(MESSAGES.ERROR.INVALID_EMAIL);
        return { success: false, error: MESSAGES.ERROR.INVALID_EMAIL };
      }

      // In production, call secure API endpoint
      // const response = await fetch(`${API_CONFIG.BASE_URL}/auth/signup`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'X-CSRF-Token': csrfToken,
      //   },
      //   credentials: 'include',
      //   body: JSON.stringify({ email: sanitizedEmail, password }),
      // });

      logSecurityEvent('SIGNUP_ATTEMPT', { email: sanitizedEmail });

      // Mock success response
      setUser({ email: sanitizedEmail });
      return { success: true };
    } catch (err) {
      const message = MESSAGES.ERROR.UNKNOWN_ERROR;
      logSecurityEvent('SIGNUP_ERROR', { error: err.message });
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Sign in handler with validation
   */
  const signIn = useCallback(async (email, password) => {
    setError(null);
    setLoading(true);

    try {
      // Rate limiting check
      if (checkRateLimit('signin', RATE_LIMITS.LOGIN_ATTEMPTS, RATE_LIMITS.LOGIN_WINDOW_MS)) {
        const message = MESSAGES.ERROR.RATE_LIMITED;
        logSecurityEvent('RATE_LIMIT_EXCEEDED', { action: 'signin' });
        setError(message);
        return { success: false, error: message };
      }

      // Input validation
      const sanitizedEmail = sanitizeInput(email);
      if (!validateEmail(sanitizedEmail)) {
        setError(MESSAGES.ERROR.INVALID_EMAIL);
        return { success: false, error: MESSAGES.ERROR.INVALID_EMAIL };
      }

      // In production, call secure API endpoint
      // const response = await fetch(`${API_CONFIG.BASE_URL}/auth/signin`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'X-CSRF-Token': csrfToken,
      //   },
      //   credentials: 'include',
      //   body: JSON.stringify({ email: sanitizedEmail, password }),
      // });

      logSecurityEvent('SIGNIN_ATTEMPT', { email: sanitizedEmail });

      // Mock success response
      setUser({ email: sanitizedEmail });
      return { success: true };
    } catch (err) {
      const message = MESSAGES.ERROR.UNKNOWN_ERROR;
      logSecurityEvent('SIGNIN_ERROR', { error: err.message });
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Sign out handler
   */
  const signOut = useCallback(() => {
    setUser(null);
    setError(null);
    logSecurityEvent('SIGNOUT');
  }, []);

  return {
    user,
    loading,
    error,
    signUp,
    signIn,
    signOut,
  };
};

export default useAuth;
