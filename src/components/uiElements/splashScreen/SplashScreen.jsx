/**
 * @file SplashScreen.jsx
 * @module SplashScreen
 * @desc Displays a loading state with a logo while the site content is being loaded, or an error message.
 *
 * @author Chace Nielson
 * @created Mar 15, 2025
 * @updated Mar 16, 2025 by Chace Nielson
 */

import React from 'react';
import { FiAlertCircle } from "react-icons/fi"; // Import error icon from react-icons
import HexSeparator from '../hexSparator/HexSeparator';
import HexLoader from '../hexLoader/HexLoader';
import PercentLoader from '../percentLoader/PercentLoader';
import './SplashScreen.styles.css'; // Import the CSS file for hexagon styles

export default function SplashScreen({ 
  loadPercent = 0,
  transitionOut = false, 
  errorInfo = null,
}) {
  // z index for the splash screen is above the rest of the app
  return (
    <div className={` overflow-hidden
      fixed inset-0 z-50 flex flex-col justify-between min-h-screen bg-accent
      ${transitionOut && 'splash-exit'}`}
    >
      {/* SVG Filter for Noise */}
      <div
        className="absolute inset-0 pointer-events-none z-[0]"
        style={{
          filter: 'url(#noiseFilter)',
          mixBlendMode: 'multiply',
          opacity: 0.7,
        }}
      />

      {/* 🔵 Top Separator - high */}
      <div className="z-[30]">
        <HexSeparator 
          rows={6}
          hexClass="bg-black opacity-65"
          bottom={false}
        />
      </div>

      {/* 🟢 Main Content - medium */}
      <div className="z-[10] flex flex-col items-center justify-center flex-grow">
        <img
          src="/logos/my-logos/logoFull-tight.png"
          alt="Site Logo"
          className="min-w-[300px] overflow-hidden px-4"
        />
        <div className="text-xl text-center">
          {errorInfo ? (
            <ErrorDisplay errorInfo={errorInfo} />
          ) : (
            <>
            {/* <div className="mt-0 sm:-mt-8 flex flex-col items-center">
              <HexLoader animate={animateLoader} />
            </div> */}
              <PercentLoader loadPercent={loadPercent} />
            </>
          )}
        </div>
      </div>

      {/* 🔵 Bottom Separator - high */}
      <div className="z-[30]">
        <HexSeparator 
          rows={6}
          hexClass="bg-black opacity-65"
          bottom={true}
        />
      </div>
    </div>
  );
}

// PercentLoader component for the perentage bar 


// Function to diapl error message is splash is used for error handling
function ErrorDisplay({ errorInfo }) {
  return (
    <div className="flex flex-col items-center">
      <FiAlertCircle className="w-12 h-12 mb-2" />
      <span >{errorInfo.errorText}</span>
      {errorInfo?.errorLocation && (
        <span className="text-sm mt-2">📍 {errorInfo.errorLocation}</span>
      )}
    </div>
  );
}
