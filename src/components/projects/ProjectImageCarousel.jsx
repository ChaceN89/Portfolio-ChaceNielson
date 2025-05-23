/**
 * @file ProjectImageCarousel.jsx
 * @module ProjectImageCarousel
 * @desc Component to display a carousel of project images using react-multi-carousel.
 *       Each image is displayed using the custom ImageComponent.
 * 
 * @author Chace Nielson
 * @created Jul 26, 2024
 * @updated May 23, 2025
 */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ImageComponent from '@/components/uiElements/images/ImageComponent';

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/50 dark:bg-black/50 rounded-full hover:bg-accent cursor-pointer"
  >
    <FaChevronLeft className="text-black dark:text-white" size={20} />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/50 dark:bg-black/50 rounded-full hover:bg-accent cursor-pointer"
  >
    <FaChevronRight className="text-black dark:text-white" size={20} />
  </button>
);

export default function ProjectImageCarousel({ images = [], id, title, hidePhotos = false }) {
 
  if (hidePhotos || images.length === 0) return null;
  
  return (
    <div className=" rounded-2xl overflow-hidden">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={2500}
        keyBoardControl
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        arrows
        itemClass="px-1"
        containerClass="w-full h-full"
      >
        {images.map((image, idx) => (
        <div className="relative w-full aspect-[16/9] max-w-full mx-auto">
          <ImageComponent
            src={`/projects/${id}/${image.src}`}
            blurHash={image.blurhash}
            alt={`${title} screenshot ${idx + 1}`}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
        ))}
      </Carousel>
    </div>
  );
}
