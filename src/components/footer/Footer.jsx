/**
 * @file Footer.jsx
 * @module Footer
 * @desc Footer component that appears at the bottom of the page.
 * Contains an avatar image, a link back to the top with the author's name, and a list of links to various social media or other resources.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-05
 * @since 2.1
 */

import React from 'react';
import LogoLink from './LogoLink';
import MediaLinks from './MediaLinks';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer className="flex gap-6 p-4 bg-primary text-secondary text-lg  w-full z-50 h-56 border-t-2 border-gray-300 bg-red-100">
      <div className='h-56 w-56 border-2 border-amber-600 bg-gray-700 '/>
      <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
      <Link to="/projects" className="hover:text-blue-300 transition-colors">Projects</Link>
      <Link to="/contact" className="hover:text-blue-300 transition-colors">Contact</Link>
      <Link to="/about" className="hover:text-blue-300 transition-colors">About</Link>
      <Link to="/thanks" className="hover:text-blue-300 transition-colors">Thanks</Link>
    </footer>
  );

  return (
    <footer className="bg-frosted-glass flex relative bottom-0">
      <div className='container mx-auto flex justify-between items-center p-1 sm:p-2'>
        <LogoLink />
        <MediaLinks  />
      </div>
    </footer>
  );
}

export default Footer;
