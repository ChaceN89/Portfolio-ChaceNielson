/**
 * @file AnalyticsTracker.jsx
 * @module AnalyticsTracker
 * @desc React component for tracking page views using Google Analytics. 
 * This component tracks page views whenever the page changes after the first page load.
 * 
 * @note This component should be used to integrate Google Analytics with your React application.
 *
 * @component AnalyticsTracker
 * 
 * @requires react
 * @requires useEffect, useRef from 'react'
 * @requires useLocation from 'react-router-dom'
 * @requires recordGAPage from './analytics'
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * @see {@link https://developers.google.com/analytics/devguides/collection/analyticsjs | Google Analytics Documentation}
 * 
 * @param none
 * 
 * @returns {null} This component does not render any JSX.
 * 
 * @example
 * // Example usage of AnalyticsTracker in a parent component
 * import AnalyticsTracker from './googleAnalytics/AnalyticsTracker';
 * 
 * function App() {
 *   return (
 *     <div>
 *       <AnalyticsTracker />
 *       // Other components
 *     </div>
 *   );
 * }
 * 
 * @exports AnalyticsTracker
 * 
 * @since 2.1
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { recordGAPage } from './analytics';

/**
 * AnalyticsTracker component to track page views
 * 
 * @returns {null} This component does not render any JSX.
 */
function AnalyticsTracker() {
  const location = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
    } else {
      recordGAPage(location.pathname + location.search);
    }
  }, [location]);

  return null;
}

export default AnalyticsTracker;
