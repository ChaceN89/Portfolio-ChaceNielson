/**
 * @file HeroText.jsx
 * @module HeroText
 * @desc React component that implements a hero text section using the slide transition animation.
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 23, 2025
 */

// Data and functions
import React from 'react';
import { heroData } from '../../../data/pageData/heroData';

// Components
import SlideTransition from '../../animations/SlideTransition';
import MyButton from '../../buttons/MyButton';
import MediaLinks from '../../footer/MediaLinks';
import { openPdf } from '../../../utils/utils';

function HeroText() {
  return (
    <div className="text-container">
      <SlideTransition delay={0.1} duration={1.2} translationDist={600}>
        <h3>{heroData.top}</h3>
      </SlideTransition>
      <SlideTransition delay={0.3} duration={1.1} translationDist={600}>
        <h1>{heroData.name}</h1>
      </SlideTransition>
      <SlideTransition delay={0.5} duration={1} translationDist={600}>
        {heroData.description}
      </SlideTransition>
      <SlideTransition delay={0.6} duration={1} translationDist={600}>
        <div className='text-buttons'>
          {heroData.buttons.map((button, index) => (
            <MyButton
              key={index}
              className="w-full lg:w-auto"
              to={button.id}
              onClick={button.pdf ? () => openPdf(button.pdf) : undefined}
            >
              {button.name}
            </MyButton>
          ))}
        </div>
      </SlideTransition>
      <SlideTransition delay={0.7} duration={1} translationDist={600}>
        <div className='flex justify-start'>
          <MediaLinks headerLinks={true} />
        </div>
      </SlideTransition>
    </div>
  );
}

export default HeroText;
