/**
 * @file BackgroundWrapper.jsx
 * @module BackgroundWrapper
 * @desc React component for displaying a background image with optional low resolution placeholder and scaling.
 * This component allows setting various background properties and renders child elements over the background.
 * It also includes support for automatically selecting a mobile-specific background image based on screen width.
 * the lowResSRC is displayed with reduced opacity until the high resolution image is fully loaded. It is the same for the src and the mobile src since its just a blur effect of the main img which ideally is the same img just resized
 * 
 * @component BackgroundWrapper
 *
 * @param {string} id - The id for the element.
 * @param {string} className - Additional classes to apply to the wrapper.
 * @param {string} src - The path to the high resolution background image.
 * @param {string} lowResSrc - The path to the low resolution background image.
 * @param {string} mobileSrc - The path to the mobile-specific background image (optional). Defaults to `src`.
 * @param {string} backgroundSize - How the background image should be scaled. Options: auto, cover, contain, initial, inherit. Defaults to "cover".
 * @param {string} backgroundPosition - How the background image should be positioned. Options: center, top, right, bottom, left, top right, top left, bottom right, bottom left, initial, inherit. Defaults to "center".
 * @param {string} backgroundRepeat - How the background image should be repeated. Options: repeat, no-repeat, repeat-x, repeat-y, initial, inherit. Defaults to "no-repeat".
 * @param {string} backgroundAttachment - How the background image should scroll with the page. Options: fixed, scroll, local, initial, inherit. Defaults to "fixed".
 * @param {number} bgOpacity - Opacity of the background image (uses Tailwind, should be a number between 0 and 100 by multiples of 5). Defaults to 100.
 * @param {number} blurAmount - The pixels to blur in the background image.
 * @param {JSX.Element} children - Child elements to be rendered inside the wrapper.
 *
 * @returns {JSX.Element} The rendered BackgroundWrapper component.
 *
 * @example
 * <BackgroundWrapper
 *   id="my-background"
 *   className="custom-class"
 *   src="/path/to/high-res.jpg"
 *   lowResSrc="/path/to/low-res.jpg"
 *   mobileSrc="/path/to/mobile-res.jpg"
 *   backgroundSize="cover"
 *   backgroundPosition="center"
 *   backgroundRepeat="no-repeat"
 *   backgroundAttachment="fixed"
 *   bgOpacity={80}
 *   blurAmount={0}
 * >
 *   <div>Content goes here</div>
 * </BackgroundWrapper>
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background | CSS Background Documentation}
 * 
 * @exports BackgroundWrapper
 * 
 * @requires react
 * 
 * @note The component uses a `useEffect` hook to load the high resolution background image and switch to it once it's fully loaded.
 * @note The `lowResSrc` is displayed with reduced opacity until the high resolution image is fully loaded.
 * @note The component automatically selects the mobile-specific background image if the screen width is 768px or less.
 * 
 * @author Chace Nielson
 * @created 2024-07-26
 * @updated 2024-08-09
 * @since 2.1
 */

import React, { useEffect, useState } from 'react';

function BackgroundWrapper({
  id = '',
  className = '',
  src = '',
  lowResSrc = '',
  mobileSrc = '',
  backgroundSize = "cover",
  backgroundPosition = "center",
  backgroundRepeat = "no-repeat",
  backgroundAttachment = "scroll",
  bgOpacity = 100,
  blurAmount = 0,
  children
}) {

  // set the src based on the window width ( mobileSrc is optional  default to src) will be set and not change is window is resized
  const currentSrc = window.innerWidth <= 768 ? mobileSrc || src : src;

  // the laoding state of the currentSRC
  const [highResLoaded, setHighResLoaded] = useState(false);

  useEffect(() => {
    const highResImg = new Image();
    highResImg.src = currentSrc;
    highResImg.onload = () => setHighResLoaded(true);
  }, [currentSrc]);

  return (
    <div
      id={id}
      className={`${className} relative`}
      style={{
        backgroundSize: backgroundSize,
        backgroundPosition: backgroundPosition,
        backgroundRepeat: backgroundRepeat,
        backgroundAttachment: backgroundAttachment,
      }}
    >
      {/* Low resolution background image */}
      <div
        className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${lowResSrc})`,
          backgroundSize: backgroundSize,
          backgroundPosition: backgroundPosition,
          backgroundRepeat: backgroundRepeat,
          backgroundAttachment: backgroundAttachment,
          opacity: highResLoaded ? 0 : bgOpacity / 100,
          filter: `blur(${blurAmount}px)`,
          zIndex: 0,
        }}
      />
      {/* High resolution background image */}
      <div
        className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${currentSrc})`,
          backgroundSize: backgroundSize,
          backgroundPosition: backgroundPosition,
          backgroundRepeat: backgroundRepeat,
          backgroundAttachment: backgroundAttachment,
          opacity: highResLoaded ? bgOpacity / 100 : 0,
          filter: `blur(${blurAmount}px)`,
          zIndex: 0,
        }}
      />
      {/* Content wrapper */}
      <div className={`${className} relative z-10`}>
        {children}
      </div>
    </div>
  );
}

export default BackgroundWrapper;
