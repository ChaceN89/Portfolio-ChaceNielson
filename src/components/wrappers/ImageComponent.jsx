/**
 * @file ImageComponent.jsx
 * @module ImageComponent
 * @desc React component for displaying an image with optional error handling and a Blurhash placeholder.
 * The image source and alternative text can be customized, and an error handler can be provided.
 * Can use a low-resolution image instead of a Blurhash (useful for PNG with transparency).
 *
 * @note The area that the image takes up must have a defined height and width for the blurring effect to work properly.
 *
 * @component ImageComponent
 * 
 * @requires react
 * @requires react-blurhash
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://github.com/woltapp/react-blurhash | React Blurhash Documentation}
 * @see {@link https://blurha.sh/ | Blurhash Generation}
 * 
 * @param {string} className - The class name for the image element.
 * @param {string} src - The source URL of the image.
 * @param {string} alt - The alternative text for the image.
 * @param {string} blurHash - The Blurhash string for the image placeholder.
 * @param {string} lowResSrc - The low-resolution image source URL.
 * 
 * @returns {JSX.Element} The rendered ImageComponent.
 * 
 * @author Chace Nielson
 * @created 2024-07-14
 * @updated 2024-07-26
 * @since 2.1
 */

import React, { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';

const ImageComponent = ({ src, alt, className, blurHash = 'H2SigQ%M_3xu%Mt7xu?b%M~qof%MofM{ofM{Rjay', lowResSrc = null }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [lowResLoaded, setLowResLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageLoaded(true);
  }, [src]);

  useEffect(() => {
    if (lowResSrc) {
      const lowResImg = new Image();
      lowResImg.src = lowResSrc;
      lowResImg.onload = () => setLowResLoaded(true);
    }
  }, [lowResSrc]);

  return (
    <>
      {!imageLoaded && (
        <>
          {lowResSrc ? (
            lowResLoaded && (
              <img
                className={`${className} w-full h-full object-cover opacity-60`}
                src={lowResSrc}
                alt={alt}
              />
            )
          ) : (
            <Blurhash
              hash={blurHash}
              width="100%"
              height="100%"
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          )}
        </>
      )}
      <img
        className={`${className} w-full h-full object-cover`}
        src={src}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
        style={{ display: imageLoaded ? 'block' : 'none' }}
      />
    </>
  );
};

export default ImageComponent;
