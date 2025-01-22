/**
 * @file Photo.jsx
 * @module Photo
 * @desc React component for displaying an individual photo with a lazy loading feature and an animation effect when it comes into view.
 * This component uses LazyLoad for optimizing image loading.
 * 
 * @note This component is part of the photo gallery feature of the application.
 *
 * @component Photo
 * 
 * @requires react
 * @requires LazyLoad from 'react-lazy-load'
 * @requires ImageComponent from '../../wrappers/ImageComponent'
 * @requires ScrollToTop from '../../routing/ScrollToTop'
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://github.com/twobin/react-lazyload | React LazyLoad Documentation}
 * 
 * @param {Object} props - The component props.
 * @param {Object} props.item - The photo item to be displayed.
 * @param {number} props.index - The index of the photo item.
 * @param {function} props.openModal - Function to open the modal for the photo.
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
 * @since 2.1
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React from 'react';
import LazyLoad from 'react-lazy-load';
import ImageComponent from '../../wrappers/ImageComponent';
import ScrollToTop from '../../routing/ScrollToTop';

/**
 * Photo component
 *
 * @param {Object} props - The component props.
 * @param {Object} props.item - The photo item to be displayed.
 * @param {number} props.index - The index of the photo item.
 * @param {function} props.openModal - Function to open the modal for the photo.
 * @returns {JSX.Element} The Photo component.
 */
function Photo({ item, index, openModal }) {
  return (
    <>
      <ScrollToTop />
      <div className='flex flex-col max-w-full'>
        <LazyLoad height={300} offsetVertical={600}>
          <div
            className='relative hover:opacity-70'
            style={{ height: '300px', width: '100%' }}
            onClick={() => openModal(index)}
          >
            <ImageComponent
              src={`${process.env.PUBLIC_URL}/gallery-photos/${item.photo}`}
              alt={`Chace Nielson Photo ${index + 1}`}
              className='object-cover w-full h-full rounded-md sm:cursor-pointer'
              blurHash={item.blurhash}
            />
          </div>
        </LazyLoad>
      </div>
    </>
  );
}

export default Photo;
