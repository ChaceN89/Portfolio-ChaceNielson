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
  return (
    <div className={` overflow-hidden
      fixed inset-0 z-50 flex flex-col justify-between min-h-screen bg-primary 
      ${transitionOut && 'splash-exit'}`}
  
    >
      {/* SVG Filter for Noise */}
      <div
        className="absolute inset-0 pointer-events-none z-[999] "
        style={{
          filter: 'url(#noiseFilter)',
          mixBlendMode: 'multiply',
          opacity: 0.8,
        }}
      />
   
      {/* Top Hex Separator */}
      <HexSeparator 
        rows={6}
        hexClass="bg-secondary opacity-10"
        bottom={false}
      />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow ">
      <img
        src="/logos/logoFull-outline.png"
        alt="Site Logo"

        className="min-w-[300px] overflow-hidden"
      />
        <div className="text-xl text-gray-600 text-center">
          {errorInfo ? (
            <ErrorDisplay errorInfo={errorInfo} />
          ):(
            <>
            <HexLoader animate={animateLoader} />
            <h3 className='mt-2'>{loadPercent}%</h3>
            </>
          )}
        </div>
      </div>

      {/* Bottom Hex Separator */}
      <HexSeparator 
        rows={6}
        hexClass="bg-secondary opacity-10"
        bottom={true}
      />
    </div>
  );
}




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
