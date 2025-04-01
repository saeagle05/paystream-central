
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

/**
 * Password strength checker
 * @param password - The password to check
 * @returns An object containing the password strength score and feedback
 */
export const checkPasswordStrength = (password: string): {
  score: number; // 0-4 (0 = very weak, 4 = very strong)
  feedback: string;
} => {
  if (!password) {
    return { score: 0, feedback: "Password is empty" };
  }

  let score = 0;
  const feedback: string[] = [];

  // Length check
  if (password.length < 8) {
    feedback.push("Password is too short");
  } else if (password.length >= 12) {
    score += 1;
  }

  // Complexity checks
  if (/[A-Z]/.test(password)) score += 1;
  else feedback.push("Add uppercase letters");

  if (/[a-z]/.test(password)) score += 1;
  else feedback.push("Add lowercase letters");

  if (/[0-9]/.test(password)) score += 1;
  else feedback.push("Add numbers");

  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  else feedback.push("Add special characters");

  // Common passwords check (very simplified)
  const commonPasswords = ["password", "123456", "qwerty", "admin", "welcome"];
  if (commonPasswords.includes(password.toLowerCase())) {
    score = 0;
    feedback.push("This is a commonly used password");
  }

  // Sequential characters check
  if (/(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789)/.test(password.toLowerCase())) {
    score = Math.max(0, score - 1);
    feedback.push("Avoid sequential characters");
  }

  // Repeated characters check
  if (/(.)\1{2,}/.test(password)) {
    score = Math.max(0, score - 1);
    feedback.push("Avoid repeated characters");
  }

  return {
    score,
    feedback: feedback.length ? feedback.join(". ") : "Password is strong"
  };
};

/**
 * Detects potential security threats in user input
 * @param input - The user input to check
 * @returns True if a potential threat is detected
 */
export const detectThreat = (input: string): boolean => {
  if (!input) return false;
  
  // Check for common SQL injection patterns
  const sqlPatterns = [
    /(\s|^)(SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|EXEC|UNION|CREATE|WHERE)(\s|$)/i,
    /(\s|^)(OR|AND)(\s+)('|")(.*?)('|")(\s*)(=|>|<|>=|<=)(\s*)('|")(.*?)('|")/i,
    /--/,
    /;.*/
  ];

  // Check for common XSS patterns
  const xssPatterns = [
    /<script.*?>.*?<\/script>/i,
    /on\w+\s*=\s*(".*?"|'.*?')/i,
    /javascript:/i
  ];

  // Check for path traversal attempts
  const pathTraversalPatterns = [
    /(\.\.|\/\.\.)/
  ];

  const allPatterns = [...sqlPatterns, ...xssPatterns, ...pathTraversalPatterns];
  
  return allPatterns.some(pattern => pattern.test(input));
};

/**
 * GDPR compliance helper - generates privacy policy info
 * @returns Object containing GDPR compliance information
 */
export const getPrivacyInfo = (): {
  dataCollected: string[];
  dataPurpose: string;
  dataRetention: string;
  userRights: string[];
} => {
  return {
    dataCollected: [
      "Personal identification information (Name, email address, phone number, etc.)",
      "Banking information for transactions",
      "Authentication data",
      "Device information and IP addresses"
    ],
    dataPurpose: "To provide banking services, process transactions, enhance security, and improve user experience",
    dataRetention: "Personal data is retained for the duration of account activity plus 5 years for regulatory compliance",
    userRights: [
      "Right to access your personal data",
      "Right to rectify inaccurate data",
      "Right to erasure ('right to be forgotten')",
      "Right to restrict processing",
      "Right to data portability",
      "Right to object to processing",
      "Rights related to automated decision making and profiling"
    ]
  };
};
