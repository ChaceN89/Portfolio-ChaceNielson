/**
 * @file heroData.js
 * @module heroData
 * @desc Contains data for the hero section used in various parts of the application.
 * This data includes the top text, name, description, and buttons for the hero section.
 * The buttons can either link to a PDF file or use an ID for React Scroll navigation.
 * 
 * @requires react
 * @requires Link from 'react-router-dom'
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * @see {@link https://www.npmjs.com/package/react-scroll | React Scroll Documentation}
 * 
 * @example
 * // Example usage of heroData in a component
 * import { heroData } from './heroData';
 * 
 * function HeroSection() {
 *   return (
 *     <div>
 *       <h1>{heroData.top}</h1>
 *       <h2>{heroData.name}</h2>
 *       <div>{heroData.description}</div>
 *       <div>
 *         {heroData.buttons.map((button, index) => (
 *           button.pdf ? (
 *             <a key={index} href={`${process.env.PUBLIC_URL}/pdfs/${button.pdf}`} target="_blank" rel="noopener noreferrer">
 *               {button.name}
 *             </a>
 *           ) : (
 *             <ScrollLink key={index} to={button.id} spy={true} smooth={true} offset={-70} duration={500}>
 *               {button.name}
 *             </ScrollLink>
 *           )
 *         ))}
 *       </div>
 *     </div>
 *   );
 * }
 * 
 * @exports heroData
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-09
 * @since 2.1
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
