/**
 * @file MediaLinks.jsx
 * @module MediaLinks
 * @desc Component representing a list of social media links with icons.
 * Each icon is wrapped with a Tooltip component for displaying the name of the social media platform.
 * The icon size adjusts based on the screen size.
 * 
 * includes an option for the head links using same links infomation
 * 
 * @component MediaLinks
 * 
 * @requires react
 * @requires useMediaQuery from 'react-responsive'
 * @requires Tooltip from '../uiElements/Tooltip'
 * @requires IconSkills from '../../data/iconSkills'
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://github.com/contra/react-responsive | React Responsive Documentation}
 * 
 * @returns {JSX.Element} The MediaLinks component that displays social media icons with tooltips.
 * 
 * @example
 * // Example usage of MediaLinks in a footer component
 * import MediaLinks from '../components/footer/MediaLinks';
 * 
 * function Footer() {
 *   return (
 *     <footer className="footer">
 *       <MediaLinks />
 *     </footer>
 *   );
 * }
 * 
 * @exports MediaLinks
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import React from 'react';
import Tooltip from '../uiElements/Tooltip';
import { useMediaQuery } from 'react-responsive';
import IconSkills from '../../data/iconSkills';

/**
 * MediaLinks component
 *
 * @returns {JSX.Element} The MediaLinks component.
 */
function MediaLinks({headerLinks=false}) {
  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px)' });

  // links to use for both footer and header
  const mediaLinks = [
    { name: "GitHub", icon: IconSkills.GITHUB.icon, link: "https://github.com/ChaceN89" },
    { name: "LinkedIn", icon: IconSkills.LINKEDIN.icon, link: "https://www.linkedin.com/in/chace-nielson" },
    { name: "YouTube", icon: IconSkills.YOUTUBE.icon, link: "https://www.youtube.com/@chacenielson5413" },
    { name: "Instagram", icon: IconSkills.INSTAGRAM.icon, link: "https://www.instagram.com/chacenielson" },
    { name: "Itch.io", icon: IconSkills.ITCHIO.icon, link: "https://kar2fast.itch.io/" }
  ];

  const iconSize = isMediumScreen ? 24 : 18;


  // what to return if its the header links
  if (headerLinks){
    return (
      <div className="grid grid-cols-4 xl:grid-cols-6 gap-1.5 relative py-0.5 ">
        {mediaLinks.reverse().map((link) => (
          <Tooltip key={link.name} text={link.name}>
            <a
              href={link.link}
              aria-label={link.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center 
                w-10 h-10 rounded-xl border-2 p-1
                button-secondary"
              >
                <link.icon size={20} className="" />
              </div>
            </a>
          </Tooltip>
        ))}
      </div>
    );
  }

  // what to return if its the footer links
  return (
    <div className="flex justify-center space-x-1.5 relative py-0.5">
      {mediaLinks.map((link) => (
        <Tooltip key={link.name} text={link.name}>
          <a
            href={link.link}
            aria-label={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center 
              w-8 h-8 md:w-10 md:h-10 rounded-xl border-2 p-1
              button-secondary"
            >
              <link.icon size={iconSize} className="" />
            </div>
          </a>
        </Tooltip>
      ))}
    </div>
  );
}

export default MediaLinks;
