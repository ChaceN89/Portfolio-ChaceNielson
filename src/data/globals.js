/**
 * @file globals.js
 * @module globals
 * @desc Contains global settings and constants used throughout the application.
 * This file serves as a central location for configuration values that may be needed in multiple places.
 * 
 * @exports globals - An object containing various global settings.
 * 
 * @example
 * // Example usage of globals in a component
 * import { globals } from './globals';
 * 
 * function SomeComponent() {
 *   return (
 *     <ScrollLink
 *       to="someSection"
 *       spy={true}
 *       smooth={true}
 *       duration={globals.ScrollLink.duration}
 *       offset={globals.ScrollLink.offset}
 *     >
 *       Scroll to Section
 *     </ScrollLink>
 *   );
 * }
 * 
 * @example
 * // Example usage of project settings in a component
 * import { globals } from './globals';
 * 
 * function ProjectSlider() {
 *   return (
 *     <Slider
 *       slide={globals.project.slide}
 *       initialSlide={globals.project.initialSlide}
 *     />
 *   );
 * }
 * 
 * @created 2024-07-28
 * @updated 2024-08-05
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
