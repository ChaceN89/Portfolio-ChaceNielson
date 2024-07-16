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
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * 
 * @returns {JSX.Element} - The rendered component.
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-10
 */

import React from 'react';
import LinkItem from './LinkItem';


const NavbarItems = ({ toggleMenu, textSize }) => {
  return (
    <ul className={`text-primary ${textSize} space-y-4 md:space-y-0 md:space-x-4 text-center md:text-left md:flex`}>
      <li>
        <LinkItem to="Home" onClick={toggleMenu}>Intro</LinkItem>
      </li>
      <li>
        <LinkItem to="AboutMe" onClick={toggleMenu}>About Me</LinkItem>
      </li>
      <li>
        <LinkItem to="Projects" onClick={toggleMenu}>Projects</LinkItem>
      </li>
      <li>
        <LinkItem to="ContactMe" onClick={toggleMenu}>Contact Me</LinkItem>
      </li>
      <li>
        <LinkItem to="/Gallery" onClick={toggleMenu} routerLink={true}>Photos</LinkItem>
      </li>

    </ul>
  );
};

export default NavbarItems;