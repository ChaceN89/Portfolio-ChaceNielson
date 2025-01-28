/**
 * @file callToActionData.jsx
 * @module callToActionData
 * @desc Contains data for the call-to-action section. All data in the call to action section can be found in this file, including imaged and text 
 * 
 * Need to be JSX to work with React Components
 * 
 * @see {@link https://www.npmjs.com/package/react-scroll | React Scroll Documentation}
 * 
 * @exports callToActionData
 * @author Chace Nielson
 * @created July 28, 2024
 * @updated Jan 22, 2025
 */

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { globals } from '../globals';

export const callToActionData = {
  top: "Ready to Start Your Next Adventure?",
  bottom: (
    <>
      <p>
        I'm always open to new opportunities. Let's <ScrollLink to="ContactMe" className="text-accent hover:underline hover:cursor-pointer" spy={true} smooth={true} offset={globals.ScrollLink.offset} duration={globals.ScrollLink.duration}>collaborate</ScrollLink> and create something amazing.
      </p>
      <p>
        Check out my portfolio to see how I can meet your needs.
      </p>
    </>
  ),
  img: "/png-portraits/chace-5.png",
  lowResImg: "/png-portraits/chace-5-small.png",

  buttons: [
    {
      id: "ContactMe",
      name: "Let's Connect"
    },
  ]
};
