/**
 * @file Hero.jsx
 * @module Hero
 * @desc React component that implements the hero section of the webpage.
 * This component contains the hero text, hero image, and parallax mountain effect.
 *
 * @component Hero
 * 
 * @requires React
 * @requires ParallaxMountains from './ParallaxMountains'
 * @requires ScrollWheel from '../../components/uiElements/ScrollWheel'
 * @requires HeroImg from './HeroImg'
 * @requires HeroText from './HeroText'
 * @requires FadeTransition from '../../animations/FadeTransition'
 * @requires './Hero.css'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @example
 * // Example usage of Hero component
 * import Hero from './Hero';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <Hero />
 *     </div>
 *   );
 * }
 * 
 * @exports Hero
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-06
 * @since 2.1
 */

import React from 'react';
import ParallaxMountains from './ParallaxMountains';
import ScrollWheel from '../../components/uiElements/ScrollWheel';
import HeroImg from './HeroImg';
import HeroText from './HeroText';
import FadeTransition from '../../animations/FadeTransition';
import './Hero.css';

function Hero() {
  return (
    <FadeTransition>
      <section className="hero">
        <HeroText />
        <HeroImg />
        <ParallaxMountains />
        <ScrollWheel to="CallToAction" />
      </section>
    </FadeTransition>
  );
}

export default Hero;
