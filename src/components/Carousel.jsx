/**
 * Photo Carousel to display all sizes of photos in a fixed space
 * Used arrow keys to navigate between photos (may not work on some browsers)
 */
import React, { useState, useEffect, useCallback } from 'react';
import { mainPhotoList } from '../data/photoData/mainPhotoList';
import { ImShuffle } from 'react-icons/im';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Carousel() {
    const numOfSlides = mainPhotoList.length;
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent(current => (current === numOfSlides - 1 ? 0 : current + 1));
    }, [numOfSlides]);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [nextSlide]);

    const prevSlide = () => {
        setCurrent(current === 0 ? numOfSlides - 1 : current - 1);
    };

    const randomSlide = () => {
        setCurrent(Math.floor(Math.random() * numOfSlides));
    };

    if (numOfSlides === 0) {
        return null;
    }

    return (
        <div className="carousel-container relative w-full pt-12">
            <div className="carousel-inner relative min-h-[50vh] h-64 md:h-96 lg:h-[36rem] xl:h-[48rem] overflow-hidden rounded-lg">
                {mainPhotoList.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-item absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                            index === current ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={item.image}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>
            <div
                className="carousel-control left absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
                onClick={prevSlide}
            >
                <span className="control-arrow flex items-center justify-center w-12 h-12 rounded-full bg-white/30 hover:bg-white/70 focus:ring-4 focus:ring-white dark:focus:ring-gray-800">
                    <FaArrowLeft className="w-6 h-6 text-white dark:text-gray-800" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </span>
            </div>
            <div
                className="carousel-control right absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
                onClick={nextSlide}
            >
                <span className="control-arrow flex items-center justify-center w-12 h-12 rounded-full bg-white/30 hover:bg-white/70 focus:ring-4 focus:ring-white dark:focus:ring-gray-800">
                    <FaArrowRight className="w-6 h-6 text-white dark:text-gray-800" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </span>
            </div>
            <div className="flex justify-center mt-4">
                <ImShuffle className="control-arrow cursor-pointer flex items-center justify-center w-12 h-12 rounded-full bg-white/30 hover:bg-white/70 focus:ring-4 focus:ring-white dark:focus:ring-gray-800" onClick={randomSlide} />
            </div>
        </div>
    );
}

export default Carousel;