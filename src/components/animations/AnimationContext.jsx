/**
 * @file AnimationContext.jsx
 * @module AnimationContext
 * @desc Global context to control animation logic based on screen size.
 *       Disables or simplifies animations for small/mobile devices using Tailwind's `sm` breakpoint (640px).
 *    Also respects user preferences for reduced motion.  
 *
 * @author Chace Nielson
 * @created May 23, 2025
 */

import React, { createContext, useContext, useState } from 'react';

const AnimationContext = createContext();

export function AnimationProvider({ children }) {

  // Ifif a user have a small screen, we will not show the animation 
  // or if the user has requested reduced motion, we will not show the animations
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [animationsEnabled] = useState(() => window.innerWidth >= 640 && !prefersReducedMotion);

  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimationSettings() {
  const context = useContext(AnimationContext);
  if (!context) throw new Error("useAnimationSettings must be used within an AnimationProvider");
  return context;
}
