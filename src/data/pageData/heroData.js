/**
 * @file heroData.js
 * @module heroData
 * @desc Contains data for the hero section used in various parts of the application. Includes top text, name, description, and buttons for navigation or downloads.
 * 
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * @see {@link https://www.npmjs.com/package/react-scroll | React Scroll Documentation}
 * 
 * @exports heroData
 * @author Chace Nielson
 * @created July 28, 2024
 * @updated Aug 09, 2024
 */

import React from 'react';
import { Link } from 'react-router-dom';

export const heroData = {
  top: "Hi, my name is",
  name: "CHACE NIELSON",
  description: (
    <div>
      I am a <Link className="text-accent hover:underline" to='/skills/engineering'>Software Engineer</Link> with a passion for music and the outdoors. I have worked on various projects, from <Link className="text-accent hover:underline" to='/skills/web-design'>Web Design</Link> to <Link className="text-accent hover:underline" to='/skills/game-design'>Unity Games</Link>.
    </div>
  ),
  
  // List of buttons
  buttons: [
    {
      pdf: "Chace Nielson - CV.pdf", // This button opens a PDF on the home page
      name: "My CV"
    },
    {
      id: "Projects",
      name: "Projects"
    },
    {
      id: "AboutMe",
      name: "Skills"
    }
  ]
};
