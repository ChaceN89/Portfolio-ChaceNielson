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
 * @updated jan 26, 2025
 */
import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons

const ProjectImageCarousel = ({ images, id, title, hidePhotos=false }) => {
  // Set up image objects for carousel component/library
  const carouselImages = images.map((image) => ({
    src: `/projects/${id}/${image.src}`,
    alt: `${title} screenshot`,
    // Add any other properties needed by the carousel library
  }));

  if (hidePhotos) {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 border-2 rounded-2xl overflow-hidden">
      {carouselImages.length > 0 && (
        <Carousel
          images={carouselImages}
          isAutoPlaying={true}
          hasMediaButton={false}
          hasThumbnails={true}
          hasIndexBoard={false}
          className="max-h-96 md:max-h-102 lg:max-h-80 xl:max-h-96 2xl:max-h-108"
          objectFit="contain"
          shouldLazyLoad={true} 
          // hasSizeButton={false}
          leftIcon = {<FaChevronLeft size={40} className="text-opacity-45 text-black hover:text-accent" />}
          rightIcon = {<FaChevronRight size={40} className="text-opacity-45 text-black hover:text-accent" />}
        />
      )}
    </div>
  );
}

export default ProjectImageCarousel;
