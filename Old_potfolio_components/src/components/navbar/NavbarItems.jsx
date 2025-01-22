/**
 * @file NavbarItems.jsx
 * @module NavbarItems
 * @desc Component representing a list of navigation buttons for the navbar.
 * 
 * @component NavbarItems
 * 
 * @param {Object} props - The component props.
 * @param {Function} props.toggleMenu - Function to toggle the menu for the hamburger menu.
 * @param {string} props.textSize - The size of the text for the navbar items.
 * 
 * @requires react
 * @requires ./LinkItem
 * @requires react-router-dom { useLocation }
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * 
 * @returns {JSX.Element} - The rendered component.
 * 
 * @example
 * // Example usage of NavbarItems in a Navbar component
 * import NavbarItems from './NavbarItems';
 * 
 * function Navbar() {
 *   const toggleMenu = () => {
 *     // Toggle menu logic
 *   };
 * 
 *   return (
 *     <nav>
 *       <NavbarItems toggleMenu={toggleMenu} textSize="text-lg" />
 *     </nav>
 *   );
 * }
 * 
 * @exports NavbarItems
 * 
 * @created 2024-07-10
 * @updated 2024-08-05
 * @since 2.1
 */

import React from 'react';
import LinkItem from './LinkItem';
import { useLocation } from 'react-router-dom';

/**
 * NavbarItems component
 *
 * @param {Object} props - The component props.
 * @param {Function} props.toggleMenu - Function to toggle the menu for the hamburger menu.
 * @param {string} props.textSize - The size of the text for the navbar items.
 * @returns {JSX.Element} The NavbarItems component.
 */
const NavbarItems = ({ toggleMenu, textSize }) => {
  const location = useLocation();

  return (
    <ul className={`text-secondary ${textSize} space-y-4 md:space-y-0 md:space-x-4 text-center md:text-left md:flex`}>
      {location.pathname === '/' ? (
        <>
          <LinkItem to="Home" onClick={toggleMenu}>Home</LinkItem>
          <LinkItem to="Experience" onClick={toggleMenu}>Experience</LinkItem>
          <LinkItem to="Projects" onClick={toggleMenu}>Projects</LinkItem>
          <LinkItem to="ContactMe" onClick={toggleMenu}>Contact Me</LinkItem>
        </>
      ) : (
        <LinkItem to="/" onClick={toggleMenu} routerLink={true}>Home Page</LinkItem>
      )}
      <LinkItem to="/photos" onClick={toggleMenu} routerLink={true}>Photos</LinkItem>
    </ul>
  );
};

export default NavbarItems;
