/**
 * @file AppLoading.jsx
 * @module AppLoading
 * @desc Acts as a transition wrapper between the splash screen and the main app routes.
 *       Ensures a smooth fade-out of the splash overlay after initial load is complete.
 *
 * @usage This component renders the splash screen on initial load,
 *        begins a fade-out after 1 second, and fully removes the splash after another second,
 *        revealing the main app without blocking its rendering.
 * 
 * @author Chace Nielson
 * @created May 5, 2025
 * @updated May 5, 2025 by Chace Nielson
 */

import React, { useEffect, useState } from 'react';
import AppRoutes from './AppRoutes';
import SplashScreen from '../uiElements/splashScreen/SplashScreen';

export default function AppLoading() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);


  useEffect(() => {
    const startFade = setTimeout(() => setFadeOut(true), 1000);  // time to wait before starting fade out - splash screen is visible for this time
    const hideSplash = setTimeout(() => setShowSplash(false), 10000); // Time before removing splash screen entirely

    return () => {
      clearTimeout(startFade);
      clearTimeout(hideSplash);
    };
  }, []);

  // return <SplashScreen />

  return(
    <>
    {showSplash && <SplashScreen transitionOut={fadeOut}  />}
    <AppRoutes/>
    </>
  )

}
