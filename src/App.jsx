/**
 * @file App.jsx
 * @module App
 * @desc React component that wraps the application with a Router to handle routing and animations.
 * This component imports necessary routes and styles, and sets up the Router for the application.
 *
 * @note This component is essential for enabling client-side routing within the application.
 *
 * @component AppWithRouter
 * 
 * @requires react
 * @requires react-router-dom
 * @requires AppRoutes from './routing/AppRoutes'
 * @requires TailwindBreakPoints from './testingComponents/TailwindBreakPoints'
 * @requires AnalyticsTracker from './googleAnalytics/AnalyticsTracker'
 * @requires './styles/Layout.css'
 * @requires './styles/Modal.css'
 * @requires './styles/Gallery.css'
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * 
 * @exports AppWithRouter
 * 
 * @author Chace Nielson
 * @created 2024-07-26
 * @updated 2024-07-28
 * @since 2.1
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/Layout.css';
import './styles/Modal.css';
import './styles/Gallery.css';

// Components
import DisplayTesting from './components/testing/DisplayTesting'; // for display testing components in developemtn 
import AnalyticsProvider from './components/analytics/AnalyticsProvider';
import AppRoutes from './components/routing/AppRoutes';

const AppWithRouter = () => (
  <Router>
    <DisplayTesting/>
    <AnalyticsProvider>
      <AppRoutes/>
    </AnalyticsProvider>
  </Router>
);

export default AppWithRouter;
