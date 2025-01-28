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

function Footer() {
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
