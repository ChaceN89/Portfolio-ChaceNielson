/**
 * @file callToActionData.js
 * @module callToActionData
 * @desc Contains data for the call-to-action section used in various pages.
 * This data includes the top and bottom text, images, and buttons for the call-to-action section.
 * The button data is used with react-scroll for smooth scrolling to the specified section.
 * 
 * @requires react
 * @requires react-scroll { Link as ScrollLink }
 * @requires globals from '../globals'
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://www.npmjs.com/package/react-scroll | React Scroll Documentation}
 * 
 * @example
 * // Example usage of callToActionData in a component
 * import { callToActionData } from '../data/callToActionData';
 * 
 * function CallToActionSection() {
 *   return (
 *     <section>
 *       <h2>{callToActionData.top}</h2>
 *       <div>{callToActionData.bottom}</div>
 *       <img src={callToActionData.img} alt="Call to Action" />
 *       <div>
 *         {callToActionData.buttons.map(button => (
 *           <button key={button.id}>
 *             <ScrollLink to={button.id} spy={true} smooth={true} offset={globals.ScrollLink.offset} duration={globals.ScrollLink.duration}>
 *               {button.name}
 *             </ScrollLink>
 *           </button>
 *         ))}
 *       </div>
 *     </section>
 *   );
 * }
 * 
 * @exports callToActionData
 * 
 * @author Chace Nielson
 * @since 2.1
 * @created 2024-07-28
 * @updated 2024-07-28
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
  img: process.env.PUBLIC_URL + "/png-portraits/chace-5.png",
  lowResImg: process.env.PUBLIC_URL + "/png-portraits/chace-5-small.png",

  buttons: [
    {
      id: "ContactMe",
      name: "Let's Connect"
    },
  ]
};
