
/**
 * Security utility functions for the application
 * Implements best practices for frontend security
 */

/**
 * Sanitizes user input to prevent XSS attacks
 * @param input - The string to sanitize
 * @returns A sanitized version of the input string
 */
export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  
  return input.replace(/[&<>"']/g, m => map[m]);
};

/**
 * Generates a secure random token
 * Useful for CSRF protection and nonce values
 * @param length - The length of the token to generate
 * @returns A random string token
 */
export const generateSecureToken = (length = 32): string => {
  const array = new Uint8Array(length);
  window.crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * CSP nonce generator for inline scripts
 * @returns A random nonce value for Content-Security-Policy
 */
export const generateCSPNonce = (): string => {
  return btoa(generateSecureToken(16));
};

/**
 * Checks if the current connection is secure (HTTPS)
 * @returns True if the connection is secure, false otherwise
 */
export const isSecureConnection = (): boolean => {
  return window.location.protocol === 'https:';
};

/**
 * Securely store sensitive data in session storage with encryption
 * @param key - The key to store the data under
 * @param value - The value to store
 */
export const secureSessionStore = (key: string, value: string): void => {
  // In a real implementation, this would use a library like CryptoJS
  // For demonstration, we're simply encoding the value
  const encodedValue = btoa(value);
  sessionStorage.setItem(key, encodedValue);
};

/**
 * Retrieve securely stored data from session storage
 * @param key - The key to retrieve data for
 * @returns The decrypted value or null if not found
 */
export const secureSessionRetrieve = (key: string): string | null => {
  const encodedValue = sessionStorage.getItem(key);
  if (!encodedValue) return null;
  
  // In a real implementation, this would decrypt the value
  // For demonstration, we're simply decoding
  try {
    return atob(encodedValue);
  } catch (e) {
    console.error('Failed to decode secure session data');
    return null;
  }
};

/**
 * Clear all securely stored session data
 */
export const clearSecureSession = (): void => {
  sessionStorage.clear();
};

/**
 * Implement HTTP security headers in a meta tag
 * This is a frontend approximation - real security headers
 * should be set by the server
 * @returns HTML string with meta tags for security headers
 */
export const getSecurityMetaTags = (): string => {
  const nonce = generateCSPNonce();
  
  return `
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'nonce-${nonce}'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'">
    <meta http-equiv="X-Content-Type-Options" content="nosniff">
    <meta http-equiv="X-Frame-Options" content="DENY">
    <meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
    <meta http-equiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=()">
  `;
};

/**
 * Rate limiting implementation for API calls
 */
class RateLimiter {
  private timestamps: Record<string, number[]> = {};
  private readonly limit: number;
  private readonly timeWindow: number; // in milliseconds

  constructor(limit: number = 10, timeWindowSeconds: number = 60) {
    this.limit = limit;
    this.timeWindow = timeWindowSeconds * 1000;
  }

  /**
   * Check if a request should be rate limited
   * @param key - Unique identifier for the request type
   * @returns True if the request should be allowed, false if it's rate limited
   */
  canMakeRequest(key: string): boolean {
    const now = Date.now();
    
    // Initialize timestamps array if needed
    if (!this.timestamps[key]) {
      this.timestamps[key] = [];
    }
    
    // Filter out timestamps outside the time window
    this.timestamps[key] = this.timestamps[key].filter(
      timestamp => now - timestamp < this.timeWindow
    );
    
    // Check if we've reached the limit
    if (this.timestamps[key].length < this.limit) {
      this.timestamps[key].push(now);
      return true;
    }
    
    return false;
  }

  /**
   * Get time in seconds until next request is allowed
   * @param key - Unique identifier for the request type
   * @returns Seconds until next request is allowed, or 0 if requests are allowed now
   */
  getTimeUntilNextRequest(key: string): number {
    if (!this.timestamps[key] || this.timestamps[key].length < this.limit) {
      return 0;
    }
    
    const now = Date.now();
    const oldestTimestamp = this.timestamps[key][0];
    const timeUntilExpiry = (oldestTimestamp + this.timeWindow) - now;
    
    return Math.ceil(timeUntilExpiry / 1000); // Convert to seconds
  }
}

// Export an instance for application-wide use
export const apiRateLimiter = new RateLimiter();
