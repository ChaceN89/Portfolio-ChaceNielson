/**
 * @file ProjectImageCarousel.jsx
 * @module ProjectImageCarousel
 * @desc Component to display a carousel of project images using react-gallery-carousel.
 * 
 * @component ProjectImageCarousel
 * 
 * @requires react
 * @requires react-gallery-carousel
 * @requires ../../styles/ProjectImageCarousel.css
 * 
 * @param {Array<Object>} images - Array of image objects to display in the carousel.
 * @param {string} id - The unique identifier for the project.
 * @param {string} title - The title of the project for which images are shown.
 * 
 * @returns {JSX.Element} The component displaying a carousel of project images.
 * 
 * @example
 * // Example usage of ProjectImageCarousel component
 * const images = [
 *   { src: 'image1.png', blurhash: 'LEHV6nWB2yk8pyo0adR*.7kCMdnj' },
 *   { src: 'image2.png', blurhash: 'L5H2EC=PM+yV0g-mq.wG9c010J}I' }
 * ];
 * const id = 'project123';
 * const title = 'Project Title';
 * 
 * <ProjectImageCarousel images={images} id={id} title={title} />
 * 
 * @see {@link https://www.npmjs.com/package/react-gallery-carousel|react-gallery-carousel}
 * @see {@link https://github.com/yifaneye/react-gallery-carousel|GitHub Repository}
 * 
 * @author Chace Nielson
 * @created 2024-07-26
 * @updated 2024-08-06
 * @since 2.1
 */

import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import './ImageCarousel.css';

function ProjectImageCarousel({ images, id, title }) {

  // Set up image objects for carousel component/library
  const carouselImages = images.map((image) => ({
    src: `${process.env.PUBLIC_URL}/projects/${id}/${image.src}`,
    alt: `${title} screenshot`,
    // Add any other properties needed by the carousel library
  }));

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      {carouselImages.length > 0 ? (
        <Carousel
          images={carouselImages}
          isAutoPlaying={true}
          hasThumbnails={true}
          hasIndexBoard={false}
          className="carousel-container"
          objectFit="contain"
          shouldLazyLoad={true} 
          hasSizeButton={false}
        />
      ) : (
        null
      )}
    </div>
  );
}

export default ProjectImageCarousel;
