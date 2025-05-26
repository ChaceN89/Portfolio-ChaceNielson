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

  // no animations on small screens and a vairbale
  const [prefersReducedMotion] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const [animationsEnabled] = useState(() =>
    window.innerWidth >= 640 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  return (
    <AnimationContext.Provider value={{ animationsEnabled, prefersReducedMotion }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimationSettings() {
  const context = useContext(AnimationContext);
  if (!context) throw new Error("useAnimationSettings must be used within an AnimationProvider");
  return context;
}
