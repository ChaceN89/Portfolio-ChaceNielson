/**
 * @file AppLoading.jsx
 * @module AppLoading
 * @desc Acts as a transition wrapper between the splash screen and the main app routes.
 *       Ensures a smooth fade-out of the splash overlay after initial load is complete.
 *
 * @usage This component renders the splash screen on initial load,
 *        begins a fade-out after a specified loading duration,
 *        and removes the splash screen shortly after the fade completes.
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
  const [removeSplash, setRemoveSplash] = useState(false);
  const [loadPercent, setLoadPercent] = useState(0); 

  const bufferTimeToRemove = 10000;   // Duration of fade animation

  const artificialLoadingTime = 1500; // artificial loading time before he splash screen fades out
  const steps = 4; // how many increments between 0 and 100% the loading bar will have
  const incrementTime = artificialLoadingTime / steps; // time between each increment in milliseconds based on the number of steps
  const percentIncrement = 100 / steps; // percentage increment per step based on the number of steps 
  
  // This effect simulates loading by incrementing the loadPercent state
  useEffect(() => {
    let count = 0;
  
    // udpate an interval to increment the loadPercent state and at end of the loading time, fade out the splash screen
    const interval = setInterval(() => {
      count++; // increase the count of the loading steps
      setLoadPercent(Math.floor(count * percentIncrement)); // Increase load percent by the calculated increment
  
      // If the loading is done, clear the interval and set the splash screen to fade out
      if (count >= steps) {
        clearInterval(interval);
        setRemoveSplash(true);
        setTimeout(() => setShowSplash(false), 1000); // optional fade duration
      }
    }, incrementTime);
    
    // Hard remove the splash screen after the buffer time - to stop it from being rendered now that the loading is done
    setTimeout(() => setShowSplash(false), bufferTimeToRemove);

    return () => {
      clearInterval(interval);
    };
  }, [artificialLoadingTime, steps, showSplash]);


  // return <SplashScreen loadPercent={loadPercent} />;

  // Return the loading screen above the main app content
  return (
    <>
      {showSplash && (
        <SplashScreen
          transitionOut={removeSplash}
          loadPercent={loadPercent}
        />
      )}
      <AppRoutes />
    </>
  );
}
