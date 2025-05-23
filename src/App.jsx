/**
 * @file App.jsx
 * @module App
 * @desc React component that wraps the application with a Router to handle routing and animations.
 * This component imports necessary routes and styles, and sets up the Router for the application.
 *
 * @note This component is essential for enabling client-side routing within the application.
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * 
 * @exports AppWithRouter
 * 
 * @author Chace Nielson
 * @created 2024-07-26
 * @updated Jan 23rd 2025
 */

import React, { Suspense, lazy, memo} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import DisplayTesting from './components/testing/DisplayTesting'; // for display testing components in developemtn 
import AnalyticsProvider from './components/analytics/AnalyticsProvider';
import ErrorBoundary from './components/routing/ErrorBoundary';
import SplashScreen from './components/uiElements/splashScreen/SplashScreen';
import { InitialLoadingProvider } from './components/routing/InitialLoadingContext';

const AppLoading = memo(lazy(() => import("./components/routing/AppLoading"))); // Memoized Home component

const AppWithRouter = () => (
  <ErrorBoundary>
    <Suspense fallback={<SplashScreen animateLoader={false} />}>
      <Router>
        <DisplayTesting />
        <AnalyticsProvider>
          <InitialLoadingProvider>
            <AppLoading/>  
          </InitialLoadingProvider>
        </AnalyticsProvider>
      </Router>
    </Suspense>
  </ErrorBoundary>
);

export default AppWithRouter;
