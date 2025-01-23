/**
 * @file globals.js
 * @module globals
 * @desc Defines global constants and configuration values used throughout the application.
 *       Includes scroll settings, animation parameters, and query parameter names for routing.
 * 
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 23, 2025
 */


/**
 * Global settings object
 * @type {Object}
 * @property {Object} ScrollLink - Configuration settings for react-scroll ScrollLink component.
 * @property {number} ScrollLink.duration - The duration of the scroll animation in milliseconds.
 * @property {number} ScrollLink.offset - The offset to account for fixed headers, etc.
 * @property {Object} project - Configuration settings related to project slides.
 * @property {number} project.slide - The slide value for project animations.
 * @property {number} project.initialSlide - The initial slide value for project animations.
 */
export const globals = {
  ScrollLink: {
    duration: 1000, // Duration of the scroll animation in milliseconds
    offset: -50 // Offset to account for fixed headers
  },
  project: {
    slide: 0.4, // Slide value for project animations
    initialSlide: 0.5 // Initial slide value for project animations
  }
};

// for routing parameters - names to be used in the URL link (ex. to={`?${projectParam}=capstone`})
export const projectParam = "project";
export const skillParam = "specialization";