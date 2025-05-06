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
  const [showSplash, setShowSplash] = useState(true);      // Show the loading screen/splash screen - remove from DOM after fade out (after animation)
  const [removeSplash, setRemoveSplash] = useState(false); // flag to start removing the splash screen in an animation
  const [loadPercent, setLoadPercent] = useState(0);       // percentage of loading - used to animate the loading bar in the splash screen (artificial)


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
        setRemoveSplash(true); // ✅ start fade-out

      }
    }, incrementTime);
    
    return () => clearInterval(interval);
  }, [artificialLoadingTime, steps, showSplash]);
  
  

  // hard fail-safe timer to remove the splash screen fom the DOm after buffer time
  const RemoveFromDOMTime = 10000;   // Duration of fade animation

  useEffect(() => {
    const failsafe = setTimeout(() => setShowSplash(false), RemoveFromDOMTime);
    return () => clearTimeout(failsafe);
  }, [showSplash]);


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
