/**
 * @file analytics.js
 * @module Analytics
 * @desc Provides functions for initializing and recording events with Google Analytics.
 * 
 * @requires react-ga4
 * 
 * @see {@link https://developers.google.com/analytics|Google Analytics Documentation}
 * 
 * @example
 * // Example usage of Analytics functions
 * import { initializeGA, recordGAPage, recordGAEvent } from './analytics';
 * 
 * // Initialize Google Analytics
 * initializeGA();
 * 
 * // Record a page visit
 * recordGAPage('/home');
 * 
 * // Record an event
 * recordGAEvent({
 *   category: 'User',
 *   action: 'Login',
 *   label: 'Homepage'
 * });
 * 
 * @created 2024-07-11
 * @updated 2024-07-12
 */

import ReactGA from 'react-ga4';

// The tracking ID value for Google Analytics
const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

/**
 * Initialization function for Google Analytics
 */
export function initializeGA() {
  ReactGA.initialize(TRACKING_ID);
}

/**
 * Function to record visit to page
 * 
 * @param {string} path - The path of the page being visited.
 */
export function recordGAPage(path) {
  ReactGA.send({ hitType: 'pageview', page: path });
}

/**
 * Function to record a specific event with more details
 * 
 * @param {Object} eventDetails - The details of the event.
 * @param {string} eventDetails.category - The category of the event.
 * @param {string} eventDetails.action - The action of the event.
 * @param {string} [eventDetails.label] - The label of the event.
 * @param {number} [eventDetails.value] - The value associated with the event.
 * @param {Object} [eventDetails.additionalParams] - Additional parameters to be included with the event.
 */
export function recordGAEvent(eventDetails) {
  const { category, action, label, value, additionalParams } = eventDetails;

  if (typeof category !== 'string' || typeof action !== 'string') {
    console.error('Category and action must be strings');
    return;
  }

  ReactGA.event({
    category,
    action,
    label,
    value,
    ...additionalParams,
  });
}
