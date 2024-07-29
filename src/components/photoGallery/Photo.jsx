/**
 * @file Photo.jsx
 * @module Photo
 * @desc React component for displaying an individual photo with a lazy loading feature and an animation effect when it comes into view.
 * This component uses Framer Motion for animations and LazyLoad for optimizing image loading.
 * 
 * @note This component is part of the photo gallery feature of the application.
 *
 * @component Photo
 * 
 * @requires react
 * @requires useRef, useEffect from 'react'
 * @requires LazyLoad from 'react-lazy-load'
 * @requires ImageComponent from '../../wrappers/ImageComponent'
 * @requires ElevateOnView from '../../animations/ElevateOnView'
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://www.framer.com/docs/ | Framer Motion Documentation}
 * @see {@link https://github.com/twobin/react-lazyload | React LazyLoad Documentation}
 * 
 * @param {Object} item - The photo item to be displayed.
 * @param {number} index - The index of the photo item.
 * @param {function} openModal - Function to open the modal for the photo.
 * 
 * @returns {JSX.Element} The Photo component that displays an individual photo with lazy loading and animation.
 * 
 * @example
 * // Example usage of Photo in a parent component
 * import Photo from './Photo';
 * 
 * <Photo 
 *   item={photoItem} 
 *   index={index} 
 *   openModal={openModalFunction}
 * />
 * 
 * @exports Photo
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React from 'react';
import LazyLoad from 'react-lazy-load';
import ImageComponent from '../../wrappers/ImageComponent';
import ElevateOnView from '../../animations/ElevateOnView';

function Photo({ item, index, openModal }) {
  return (
    <ElevateOnView>
      <div className='flex flex-col max-w-full'>
        <LazyLoad height={300} offsetVertical={600}>
          <div
            className='relative hover:opacity-70'
            style={{ height: '300px', width: '100%' }}
            onClick={() => openModal(index)}
          >
            <ImageComponent
              src={`${process.env.PUBLIC_URL}/gallery-photos/${item.photo}`}
              alt={`Photo ${index + 1}`}
              className='object-cover w-full h-full rounded-sm sm:cursor-pointer'
              blurHash={item.blurhash}
            />
          </div>
        </LazyLoad>
      </div>
    </ElevateOnView>
  );
}

export default Photo;
