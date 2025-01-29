/**
 * @file useGoogleAnalytics.js
 * @module useGoogleAnalytics
 * @desc A custom hook for initializing and using Google Analytics in a React application.
 * Provides functions for tracking page views, custom events, and setting user properties.
 * 
 * @example
 * const { trackPageView, trackEvent } = useGoogleAnalytics();
 * trackPageView('/home');
 * trackEvent('Category', 'Action', 'Label', 42);
 * 
 * @requires React
 * @requires react-ga4
 * 
 * @see {@link https://react-ga4.dev/ | React GA Documentation}
 * 
 * @author Chace Nielson
 * @created Jan 22, 2025
 * @updated Jan 22, 2025
 */

import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export const trackingId = import.meta.env.VITE_GOOGLE_MEASUREMENT_ID || "YOUR_GA_ID";
const appVersion = import.meta.env.VITE_APP_VERSION || "No Version Specified";
const id = import.meta.env.VITE_USER_ID || null; // Optional for future use

const useGoogleAnalytics = () => {
  
  // Initialize Google Analytics in production mode
  useEffect(() => {
    if (import.meta.env.VITE_ENVIRONMENT == "development") {
      return; // don't initialize Google Analytics if no tracking ID is provided
    }

    try {
      ReactGA.initialize([
        {
          trackingId,
          gaOptions: {
            anonymizeIp: true,
            clientId: id,
          },
        },
      ]);
      ReactGA.set({ app_version: appVersion });

      console.log("Google Analytics initialized successfully");
    } catch (error) {
      console.error("Error initializing Google Analytics", { Error: error });
    }
  }, [id]);

  const setOption = (key, value) => {
    ReactGA.set({ [key]: value });
  };

  const setUserId = (userId) => {
    setOption("userId", userId);
  };

  const sendData = (type, data) => {
    ReactGA.send({ hitType: type, ...data });
  };

  const trackPageView = (pagePath) => {
    if (!pagePath) {
      pagePath = window.location.href;
    }

    setOption("app_version", appVersion);
    sendData("pageview", { page: pagePath });
  };

  const trackEvent = (category, action, label, value) => {
    setOption("app_version", appVersion);
    ReactGA.event({ category, action, label, value });
  };

  return {
    setOption,
    setUserId,
    trackPageView,
    trackEvent,
  };
};

export default useGoogleAnalytics;
