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
import { projectParam, skillParam } from '../globals';

export const heroData = {
  top: "Hi, my name is",
  name: "CHACE NIELSON",
  description: (
    <p>
      I’m a passionate <Link className="text-accent hover:underline" to={`?${skillParam}=devOps`}>Software Engineer</Link> who loves tackling projects ranging from <Link className="text-accent hover:underline" to={`?${skillParam}=frontend-development`}>Web Applications</Link> to <Link className="text-accent hover:underline" to={`?${skillParam}=game-development`}>Video Games</Link>. When I’m not coding, you can find me immersed in music or exploring the great outdoors.
    </p>
  ),
  
  // List of buttons
  buttons: [
    {
      pdf: "Chace Nielson - Resume.pdf", // This button opens a PDF on the home page
      name: "Resume"
    },
    {
      id: "AboutMe",
      name: "Technical Skills"
    },
    {
      id: "Projects",
      name: "Projects"
    }
  ]
};
