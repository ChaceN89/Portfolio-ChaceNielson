/**
 * @file ImageComponent.jsx
 * @module ImageComponent
 * @description React component for displaying an image with a Blurhash placeholder during loading.
 *              Includes optional shimmer overlay effect and fade-in transition.
 *
 * @props {string} src - Image source URL.
 * @props {string} alt - Image alt text for accessibility.
 * @props {string} [className] - Optional class names for outer wrapper.
 * @props {string} [blurHash] - Optional Blurhash string shown while image loads.
 *
 * @notes
 * - The component uses a Blurhash as a placeholder and fades in the high-res image.
 * - Works best when the container has an explicit height/width set externally.
 * - The shimmer overlay is styled via `ImageComponent.styles.css`.
 *
 * @see {@link https://blurha.sh/ | Blurhash Generator}
 * @see {@link https://github.com/woltapp/react-blurhash | react-blurhash}
 *
 * @author Chace Nielson
 * @created Jul 14, 2024
 * @updated Jul 26, 2024
 * @since 2.1
 */

import React, { useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';
import './ImageComponent.styles.css';

export default function ImageComponent ({ 
  src, 
  alt, 
  className = '', 
  imgClass = '',
  blurHash = "LMRC[6009F-;~qt7RjD%Rj%MRjM{",
  onLoad // ✅ callback support
}) {

  // Load state for the image
  const [loaded, setLoaded] = useState(false);

  // State to control the visibility of the blurhash
  const [showBlur, setShowBlur] = useState(true);

  useEffect(() => {

    // ONce the image is loaded, set the loaded state to true and then set a timer to hide the blurhash after 300ms
    if (loaded) {
      if (onLoad) onLoad(); // ✅ trigger callback
      const timeout = setTimeout(() => setShowBlur(false), 1000); // allow image opacity transition to finish
      return () => clearTimeout(timeout);
    }
  }, [loaded]);

  return (
    <div className={`relative overflow-hidden bg-secondary ${className}`}>
      {showBlur && (
        <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${loaded ? 'opacity-0' : 'opacity-100'}`}>
          <Blurhash
            hash={blurHash}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
          <div className="absolute inset-0 shimmer-overlay" />
        </div>
      )}

      <img
        loading="lazy"
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`z-1 transition-opacity duration-1000 ease-in-out w-full h-full object-cover ${imgClass} ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

