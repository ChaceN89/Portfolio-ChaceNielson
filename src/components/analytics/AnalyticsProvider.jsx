/**
 * @file AnalyticsProvider.jsx
 * @module AnalyticsProvider
 * @desc A provider component for tracking page views in Google Analytics.
 * This component listens for route changes using `react-router-dom`'s `useLocation` and automatically tracks page views in Google Analytics.
 * 
 * @example
 * <AnalyticsProvider>
 *   <AppRoutes />
 * </AnalyticsProvider>
 * 
 * @requires React
 * @requires useGoogleAnalytics from './useGoogleAnalytics'
 * @requires react-router-dom
 * 
 * @see {@link https://react-ga4.dev/ | React GA Documentation}
 * 
 * @author Chace Nielson
 * @created Jan 22, 2025
 * @updated Jan 22, 2025
 */

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useGoogleAnalytics, { trackingId } from './useGoogleAnalytics';

const AnalyticsProvider = ({ children }) => {
  const { trackPageView } = useGoogleAnalytics();
  const location = useLocation();

  useEffect(() => {
    if (trackingId) {
      try {
        trackPageView(location.pathname + location.search);
      } catch (error) {
        console.error("Error executing trackPageView for Google Analytics", { Error: error });
      }
    }
  }, [location, trackPageView]);

  return <>{children}</>;
};

export default AnalyticsProvider;
