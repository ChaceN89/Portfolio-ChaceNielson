/**
 * @file heroData.jsx
 * @module heroData
 * @desc Contains data for the hero section used in various parts of the application. Includes top text, name, description, and buttons for navigation or downloads.
 * 
 * needs to be jsx to allow for the use of React components in the description
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
    <p>
      I am a <Link className="text-accent hover:underline" to='/skills/engineering'>Software Engineer</Link> with a passion for music and the outdoors. I have worked on various projects, from <Link className="text-accent hover:underline" to='/skills/web-design'>Web Design</Link> to <Link className="text-accent hover:underline" to='/skills/game-design'>Unity Games</Link>.
    </p>
  ),
  
  // List of buttons
  buttons: [
    {
      link: "/pdf/Chace Nielson - CV.pdf", // This button opens a PDF on the home page
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
