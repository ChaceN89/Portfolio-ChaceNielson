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
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }} // slides down + fades out
      end
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="flex gap-6 p-4 bg-primary text-secondary text-lg w-full z-50 h-56 border-t-2 border-gray-300"
    >
      <div className='h-56 w-56 border-2 border-amber-600 bg-gray-700'/>
      <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
      <Link to="/projects" className="hover:text-blue-300 transition-colors">Projects</Link>
      <Link to="/contact" className="hover:text-blue-300 transition-colors">Contact</Link>
      <Link to="/about" className="hover:text-blue-300 transition-colors">About</Link>
      <Link to="/thanks" className="hover:text-blue-300 transition-colors">Thanks</Link>
    </motion.footer>
  );
}

export default Footer;
