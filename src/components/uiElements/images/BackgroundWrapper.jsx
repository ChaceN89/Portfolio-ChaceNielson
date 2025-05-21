/**
 * @file BackgroundWrapper.jsx
 * @module BackgroundWrapper
 * @description Reusable wrapper for sections with high-res and low-res background image support.
 *              Handles blur, fixed scroll, responsive mobile switching, and optional noise overlay.
 *
 * @props {string} background - High-resolution image URL.
 * @props {string} backgroundSm - Low-resolution image URL for blur preload.
 * @props {boolean} [fixed=false] - Applies fixed positioning if screen size allows.
 * @props {boolean} [blur=false] - Adds blur to background layers.
 * @props {boolean} [noise=false] - Applies SVG noise filter (must be declared in index.html).
 * @props {string} [className] - Additional wrapper styles.
 * @props {ReactNode} children - Content to display over background.
 *
 * @author Chace Nielson
 * @created Jul 26, 2024
 * @updated Aug 9, 2024
 */

import React, { useEffect, useState } from 'react';

export default function BackgroundWrapper({ 
  id=null,
  
  children,  // the that will be in front of the background
  overlay = null, // a component absolutly positioned over the background - options
  
  // Class for backgroudna and children
  backgroundClass = "",  // the class specifically affecting the background - also contains the children div
  childClass = "",  // the class affecting all the children
  
  // Srcs
  background,  // the high-res image URL
  backgroundSm,  // a low res image URL for blur preload - optional 
  
  // Fixed position settings
  fixed = false,  // background is fixed in place

  // visual effects
  blur = 0, // blur amount for the background
  noise = false, // apply SVG noise filter 
  opacity = 1,  // the opactity of the background
}) {
  
  // Load state for the background image (high-res)
  const [loaded, setLoaded] = useState(false);

  // Preload the high-res image and set loaded state when complete (use the low-res image as a placeholder)
  useEffect(() => {
    const img = new Image();
    img.src = background;
    img.onload = () => setLoaded(true);
  }, [background]);

  // states for screen size and allowing fixed background
  const [screenSize, setScreenSize] = useState({
    allowFixed: false,
    isLargeScreen: false
  });
  
  // check screen size and set allowFixed and isLargeScreen states
  useEffect(() => {
    const checkScreen = () => {
      setScreenSize({
        allowFixed: window.innerWidth >= 450,
        isLargeScreen: window.innerWidth >= 1024
      });
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Set background attachment and position based on fixed prop and screen size
  const backgroundAttachment = fixed && screenSize.allowFixed ? 'fixed' : 'scroll';

  // Base background styles
  const baseBackgroundStyle = {
    backgroundAttachment,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: 0,
    backgroundPosition: 'center',
  };

  return (
    <div className={`relative overflow-hidden ${backgroundClass}`} id={id}>
    
      {/* SVG Filter for Noise */}
      {noise && (
        <div
          className="absolute inset-0 pointer-events-none z-2"
          style={{
            filter: 'url(#noiseFilter)',
            mixBlendMode: 'multiply',
            opacity: 0.5,
          }}
        />
      )}

      {/* Overlay blur as a separate layer */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none transition-all duration-500 ease-in-out"
        style={{
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
        }}
      />



            {/* 👇 Overlay elements like ScrollWheelBtn */}
      {overlay && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {overlay}
        </div>
      )}


      {/* Blurry low-res background */}
      {backgroundSm && (
        <div
          className="absolute inset-0 filter transition-opacity duration-1000"
          style={{
            ...baseBackgroundStyle,
            backgroundImage: `url(${backgroundSm})`,
            opacity: loaded ? 0 : opacity,
            filter: 'blur(2px)', // small always has a blur effect
          }}
        />
      )}

      {/* Sharp high-res background */}
      <div
        className="absolute inset-0 transition-opacity duration-1000 "
        style={{
          ...baseBackgroundStyle,
          backgroundImage: `url(${background})`,
          opacity: loaded ? opacity : 0,
          color: 'transparent',
        }}
      />

      {/* Foreground content */}
      <div className={` ${childClass} relative z-2  `}>
        {children}
      </div>
    </div>
  );
}

