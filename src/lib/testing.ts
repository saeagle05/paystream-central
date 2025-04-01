
/**
 * Testing utilities for the PayStream application
 * Provides helper functions for unit and integration testing
 */

import { ReactElement } from 'react';

/**
 * Mock user data for testing authentication flows
 */
export const mockUsers = [
  {
    id: '1',
    email: 'test@example.com',
    firstName: 'Test',
    lastName: 'User',
    role: 'user'
  },
  {
    id: '2',
    email: 'admin@example.com',
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin'
  }
];

/**
 * Mock account data for testing account management
 */
export const mockAccounts = [
  {
    id: '101',
    userId: '1',
    accountNumber: '1234567890',
    accountType: 'Checking',
    balance: 2500.75,
    currency: 'USD',
    isActive: true,
    createdAt: '2023-01-15T08:30:00Z'
  },
  {
    id: '102',
    userId: '1',
    accountNumber: '0987654321',
    accountType: 'Savings',
    balance: 15000.50,
    currency: 'USD',
    isActive: true,
    createdAt: '2023-01-15T08:35:00Z'
  }
];

/**
 * Mock transaction data for testing transaction history
 */
export const mockTransactions = [
  {
    id: 't1',
    accountId: '101',
    type: 'debit',
    amount: 50.00,
    currency: 'USD',
    description: 'Coffee Shop',
    category: 'Food & Dining',
    date: '2023-06-15T14:30:00Z',
    status: 'completed'
  },
  {
    id: 't2',
    accountId: '101',
    type: 'credit',
    amount: 1500.00,
    currency: 'USD',
    description: 'Salary Deposit',
    category: 'Income',
    date: '2023-06-01T09:00:00Z',
    status: 'completed'
  }
];

/**
 * Wait for a specified amount of time
 * Useful for testing async operations
 * @param ms - Milliseconds to wait
 * @returns A promise that resolves after the specified time
 */
export const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Mock API response function
 * @param data - The data to return
 * @param delay - Optional delay in milliseconds
 * @param shouldFail - Whether the API call should simulate failure
 * @returns A promise that resolves with the data or rejects with an error
 */
export const mockApiResponse = <T>(
  data: T, 
  delay: number = 100, 
  shouldFail: boolean = false
): Promise<T> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('API request failed'));
      } else {
        resolve(data);
      }
    }, delay);
  });
};

/**
 * Helper function to test form validation
 * @param formData - The form data to validate
 * @param validationFn - The validation function to test
 * @returns Object containing validation results
 */
export const testFormValidation = (
  formData: Record<string, any>,
  validationFn: (data: Record<string, any>) => Record<string, string>
): {
  isValid: boolean;
  errors: Record<string, string>;
} => {
  const errors = validationFn(formData);
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Helper function to mock local storage for testing
 * @returns Object with methods to interact with the mock storage
 */
export const mockLocalStorage = () => {
  let store: Record<string, string> = {};
  
  return {
    getItem: (key: string): string | null => {
      return store[key] || null;
    },
    setItem: (key: string, value: string): void => {
      store[key] = value.toString();
    },
    removeItem: (key: string): void => {
      delete store[key];
    },
    clear: (): void => {
      store = {};
    }
  };
};

/**
 * Helper function to simulate user events
 */
export const userEvents = {
  /**
   * Simulate typing in an input field
   * @param element - The input element
   * @param value - The value to type
   */
  type: (element: HTMLElement, value: string): void => {
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
      const originalValue = element.value;
      element.value = value;
      
      // Dispatch events
      element.dispatchEvent(new Event('change', { bubbles: true }));
      element.dispatchEvent(new Event('input', { bubbles: true }));
    }
  },
  
  /**
   * Simulate clicking an element
   * @param element - The element to click
   */
  click: (element: HTMLElement): void => {
    element.click();
  }
};

/**
 * Type guard to check if a value is not null or undefined
 * @param value - The value to check
 * @returns True if the value is not null or undefined
 */
export function isPresent<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

/**
 * Timer function for performance testing
 * @param name - Name of the operation being timed
 * @returns Object with start and end methods
 */
export const timer = (name: string) => {
  const start = performance.now();
  
  return {
    end: () => {
      const end = performance.now();
      const duration = end - start;
      console.log(`[${name}] took ${duration.toFixed(2)}ms`);
      return duration;
    }
  };
};
