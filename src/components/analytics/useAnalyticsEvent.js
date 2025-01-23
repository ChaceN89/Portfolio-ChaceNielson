/**
 * @file useAnalyticsEvent.js
 * @module useAnalyticsEvent
 * @desc A custom hook to simplify tracking custom events in Google Analytics.
 * Designed for single-use events like button clicks, form submissions, or other user interactions.
 * 
 * @example
 * const trackEvent = useAnalyticsEvent();
 * trackEvent('Category', 'Action', 'Label', 42);
 * 
 * @requires useGoogleAnalytics from './useGoogleAnalytics'
 * 
 * @see {@link https://react-ga4.dev/ | React GA Documentation}
 * 
 * @author Chace Nielson
 * @created Jan 22, 2025
 * @updated Jan 22, 2025
 */

import useGoogleAnalytics from './useGoogleAnalytics';

const useAnalyticsEvent = () => {
  const { trackEvent } = useGoogleAnalytics();

  return (category, action, label, value) => {
    if (!category || !action) {
      console.warn("Missing required event fields: category or action.");
      return;
    }
    trackEvent(category, action, label, value);
  };
};

export default useAnalyticsEvent;
