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
 * @updated May 21, 2025
 */

import React, { useEffect, useState } from 'react';
import AppRoutes from './AppRoutes';
import SplashScreen from '@/components/uiElements/splashScreen/SplashScreen';
import { useInitialLoading } from './InitialLoadingContext';

export default function AppLoading() {
  const [showSplash, setShowSplash] = useState(true);      // Show the loading screen/splash screen - remove from DOM after fade out (after animation)
  const [removeSplash, setRemoveSplash] = useState(false); // flag to start removing the splash screen in an animation
  const [loadPercent, setLoadPercent] = useState(0);       // percentage of loading - used to animate the loading bar in the splash screen (artificial)

  // context to set the splash screen to done
  const { setInitialLoadingDone } = useInitialLoading();

  const artificialLoadingTime = 1000; // artificial loading time before he splash screen fades out
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
        setRemoveSplash(true); // ✅ start fade-out of the splash Screen
      }
    }, incrementTime);
    
    return () => clearInterval(interval);
  }, [artificialLoadingTime, steps, showSplash]);
  
  // hard fail-safe timer to remove the splash screen fom the DOm after buffer time
  const RemoveFromDOMTime = 5000;   // after 10 seconds, remove the splash screen from the DOM

  useEffect(() => {
    const failsafe = setTimeout(() => {
      setShowSplash(false);         // Remove splash from DOM
      setInitialLoadingDone(true);  // Set global context of initial Loading to done- spalsh screen won't be shown again
    }, RemoveFromDOMTime);

    return () => clearTimeout(failsafe);
  }, [showSplash]);


  // Debug line to just show the splash screen to work on it
  // return <SplashScreen loadPercent={loadPercent} />;

  // Return the loading screen above the main app content
  return (
    <>
      {true && (
        <SplashScreen
          transitionOut={removeSplash}
          loadPercent={loadPercent}
        />
      )}
      <AppRoutes />
    </>
  );
}
