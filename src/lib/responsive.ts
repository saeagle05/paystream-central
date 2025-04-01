
/**
 * Responsive utilities for PayStream application
 * Provides helpers for responsive design and device detection
 */

import { useEffect, useState } from 'react';

/**
 * Type for common device types
 */
export type DeviceType = 'mobile' | 'tablet' | 'desktop';

/**
 * Breakpoint values in pixels
 */
export const breakpoints = {
  mobile: 640,   // Max width for mobile devices
  tablet: 1024,  // Max width for tablet devices
  desktop: 1280, // Min width for larger desktops
  widescreen: 1536 // Min width for ultrawide screens
};

/**
 * Hook to get the current window dimensions
 * @returns Object containing width and height of the window
 */
export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

/**
 * Hook to detect current device type based on screen width
 * @returns The current device type
 */
export const useDeviceDetect = (): DeviceType => {
  const { width } = useWindowDimensions();
  
  if (width < breakpoints.mobile) {
    return 'mobile';
  } else if (width < breakpoints.tablet) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};

/**
 * Hook to check if the current device is mobile
 * @returns True if the current device is mobile
 */
export const useIsMobile = (): boolean => {
  const { width } = useWindowDimensions();
  return width < breakpoints.mobile;
};

/**
 * Hook to check if the current device is a tablet
 * @returns True if the current device is a tablet
 */
export const useIsTablet = (): boolean => {
  const { width } = useWindowDimensions();
  return width >= breakpoints.mobile && width < breakpoints.tablet;
};

/**
 * Hook to check if the current device is a desktop
 * @returns True if the current device is a desktop
 */
export const useIsDesktop = (): boolean => {
  const { width } = useWindowDimensions();
  return width >= breakpoints.tablet;
};

/**
 * Hook to check if the current device has a touchscreen
 * @returns True if the current device has touch capabilities
 */
export const useIsTouchDevice = (): boolean => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const hasTouch = 'ontouchstart' in window || 
                    navigator.maxTouchPoints > 0 ||
                    ('msMaxTouchPoints' in navigator && (navigator as any).msMaxTouchPoints > 0);
    
    setIsTouch(hasTouch);
  }, []);

  return isTouch;
};

/**
 * Hook to handle orientation changes
 * @returns Current orientation ('portrait' or 'landscape')
 */
export const useOrientation = (): 'portrait' | 'landscape' => {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    window.innerHeight > window.innerWidth ? 'portrait' : 'landscape'
  );

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation(
        window.innerHeight > window.innerWidth ? 'portrait' : 'landscape'
      );
    };

    window.addEventListener('resize', handleOrientationChange);
    
    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  return orientation;
};

/**
 * Function to generate responsive font sizes based on screen width
 * @param baseSize - Base font size in pixels
 * @param minSize - Minimum font size in pixels
 * @param maxSize - Maximum font size in pixels
 * @returns CSS value for font size that scales with viewport width
 */
export const responsiveFontSize = (
  baseSize: number,
  minSize: number = baseSize * 0.75,
  maxSize: number = baseSize * 1.5
): string => {
  // Calculate viewport scaling using CSS clamp
  return `clamp(${minSize}px, ${baseSize}px + 0.5vw, ${maxSize}px)`;
};

/**
 * Calculate responsive spacing based on screen size
 * @param baseSize - Base size in pixels
 * @param factor - Factor to multiply by for different screen sizes
 * @returns Object with sizes for different breakpoints
 */
export const responsiveSpacing = (
  baseSize: number = 16,
  factor: number = 0.5
): { mobile: number; tablet: number; desktop: number } => {
  return {
    mobile: baseSize * factor,
    tablet: baseSize,
    desktop: baseSize * (1 + factor)
  };
};

/**
 * Utility to generate responsive grid templates
 * @param mobileColumns - Number of columns for mobile devices
 * @param tabletColumns - Number of columns for tablet devices
 * @param desktopColumns - Number of columns for desktop devices
 * @returns CSS grid-template-columns value
 */
export const responsiveGrid = (
  mobileColumns: number = 1,
  tabletColumns: number = 2,
  desktopColumns: number = 4
): string => {
  return `
    grid-template-columns: repeat(${mobileColumns}, 1fr);
    @media (min-width: ${breakpoints.mobile}px) {
      grid-template-columns: repeat(${tabletColumns}, 1fr);
    }
    @media (min-width: ${breakpoints.tablet}px) {
      grid-template-columns: repeat(${desktopColumns}, 1fr);
    }
  `;
};

/**
 * Check if the user has enabled reduced motion preference
 * @returns True if the user prefers reduced motion
 */
export const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
};

/**
 * Check if the user has enabled dark mode preference
 * @returns True if the user prefers dark mode
 */
export const usePrefersDarkMode = (): boolean => {
  const [prefersDarkMode, setPrefersDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      setPrefersDarkMode(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersDarkMode;
};
