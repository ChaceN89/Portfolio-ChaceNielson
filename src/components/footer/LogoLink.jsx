/**
 * @file LogoLink.jsx
 * @module LogoLink
 * @desc Component representing the logo link, which either scrolls to the top of the home page or navigates to the home page.
 * The component adjusts its size based on the provided size prop.
 * 
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * @see {@link https://www.npmjs.com/package/react-scroll | React Scroll Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-05
 * @since 2.1
 */

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import ImageComponent from '../uiElements/images/ImageComponent';
import { globals } from '../../data/globals';
import './LogoLink.css';

/**
 * LogoLink component
 *
 * @param {Object} props - The component props.
 * @param {string} [props.size="large"] - The size of the logo link, either "large" or "small".
 * @returns {JSX.Element} The LogoLink component.
 */
function LogoLink({ width = "w-20" }) {
  const location = useLocation();
  const navigate = useNavigate();


  // Handle logo click event
  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const innerLogo = (
    <div className={"relative  hover:scale-95 " + width} >
    <ImageComponent 
      className="w-full h-full object-cover filter brightness-50 logo-shadow"
      src={'/logos/my-logos/logoFull-tight.png'}
      alt="Chace Nielson Logo" 
    />
  </div>
  );

  return (
    <div className=' flex gap-0 items-center text-secondary hover:cursor-pointer'>
      {location.pathname === '/' ? (
        <ScrollLink
          to="Home"
          spy={true}
          smooth={true}
          duration={globals.ScrollLink.duration}
          offset={globals.ScrollLink.offset}
          className="w-full h-full flex gap-0 items-center"
        >
          {innerLogo} 
        </ScrollLink>
      ) : (
        <div onClick={handleLogoClick} className="w-full h-full flex gap-0 items-center">
          {innerLogo}
        </div>
      )}
    </div>
  );
}

export default LogoLink;
