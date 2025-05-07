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
import './SplashScreen.styles.css'; // Import the CSS file for hexagon styles

export default function SplashScreen({ 
  loadPercent = 0,
  transitionOut = false, 
  animateLoader = true,
  errorInfo = null,
}) {
  // z index for the splash screen is above the rest of the app
  return (
    <div className={` overflow-hidden
      fixed inset-0 z-50 flex flex-col justify-between min-h-screen bg-primary 
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
          hexClass="bg-black opacity-85"
          bottom={false}
        />
      </div>

      {/* 🟢 Main Content - medium */}
      <div className="z-[10] flex flex-col items-center justify-center flex-grow">
        <img
          src="/logos/logoFull-outline.png"
          alt="Site Logo"
          className="min-w-[300px] overflow-hidden"
        />
        <div className="text-xl text-center">
          {errorInfo ? (
            <ErrorDisplay errorInfo={errorInfo} />
          ) : (
            <>
              <HexLoader animate={animateLoader} />
              <PercentLoader loadPercent={loadPercent} />
            </>
          )}
        </div>
      </div>

      {/* 🔵 Bottom Separator - high */}
      <div className="z-[30]">
        <HexSeparator 
          rows={6}
          hexClass="bg-black opacity-85"
          bottom={true}
        />
      </div>
    </div>
  );
}

// PercentLoader component for the perentage bar 
function PercentLoader({ loadPercent }) {

  var percentText = loadPercent.toString();
  if (loadPercent === 0) {
    loadPercent = 1;
  }

  return (
    <div className="flex items-center justify-center  gap-2 px-4 w-screen">
      <div
        className="h-[7px] bg-secondary transition-all duration-300 w-full rounded-full"
        style={{ flex: loadPercent / 200 }}
      />

      {/* Percent */}
      <h3 className="whitespace-nowrap text-lg font-medium w-16">
        {percentText}
      </h3>

      {/* Right Line */}
      <div
        className="h-[7px] bg-secondary transition-all duration-300 w-full rounded-full"
        style={{ flex: loadPercent / 200 }}
      />
    </div>
  );
}


// Function to diapl error message is splash is used for error handling
function ErrorDisplay({ errorInfo }) {
  return (
    <div className="flex flex-col items-center text-gray-200">
      <FiAlertCircle className="w-12 h-12 mb-2" />
      <span >{errorInfo.errorText}</span>
      {errorInfo?.errorLocation && (
        <span className="text-sm mt-2">📍 {errorInfo.errorLocation}</span>
      )}
    </div>
  );
}
