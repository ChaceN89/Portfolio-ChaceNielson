/**
 * @file Hero.jsx
 * @module Hero
 * @desc React component that implements the hero section of the webpage.
 * This component contains the hero text, hero image, and parallax mountain effect.
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 23, 2025
 */

import React from 'react';
// Animation and background components
import FadeTransition from '../../animations/FadeTransition';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';

// Content components
import HeroText from './HeroText';
import HeroImg from './HeroImg';
import ScrollWheel from '../../uiElements/ScrollWheel';

// Style
import './Hero.css';

function Hero() {
  return (
    <BackgroundWrapper 
      id="Interests" 
      className=''
      // src="/png-backgrounds/detailed/hero.png"
      src="/png-backgrounds/detailed/pexels-mayday.jpg"
      lowResSrc="/png-backgrounds/detailed/hero-blur.png"
      mobileSrc="/png-backgrounds/detailed/hero-mobile.png"
      bgOpacity={60}
    >
      <FadeTransition duration={1.3}>
        <section className="hero">
          <HeroText />
          <ScrollWheel to="CallToAction" />
        </section>
        <HeroImg />
      </FadeTransition>
    </BackgroundWrapper>
  );
}

export default Hero;
