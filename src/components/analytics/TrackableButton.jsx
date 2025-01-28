/**
 * @file TrackableButton.jsx
 * @module TrackableButton
 * @desc A reusable button component for tracking custom events in Google Analytics.
 * This button demonstrates how to use the `useAnalyticsEvent` hook to track user interactions.
 * 
 * @example
 * <TrackableButton />
 * 
 * @requires React
 * @requires useAnalyticsEvent from './useAnalyticsEvent'
 * 
 * @see {@link https://react-ga4.dev/ | React GA Documentation}
 * 
 * @author Chace Nielson
 * @created Jan 22, 2025
 * @updated Jan 22, 2025
 */

import React from 'react';
import useAnalyticsEvent from './useAnalyticsEvent';

const TrackableButton = () => {
  const trackEvent = useAnalyticsEvent();

  const handleClick = () => {
    console.log('Button Clicked - event tracked');
    trackEvent('Button', 'Click', 'TrackableButton', 1); // Example event
  };

  return (
    <button onClick={handleClick} className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-900">
      Click Me
    </button>
  );
};

export default TrackableButton;
