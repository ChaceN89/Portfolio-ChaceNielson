/**
 * @file LogoLink.jsx
 * @module LogoLink
 * @desc Renders a logo link component. Main logo in left of navbar and footer.
 * 
 * @component LogoLink
 * 
 * @example
 * // Example usage of LogoLink component
 * return (
 *   <LogoLink />
 * )
 * 
 * @requires react
 * @requires react-router-dom
 * @requires ../ImageComponent
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html|React Documentation}
 * @see {@link https://reactrouter.com/|React Router Documentation}
 * 
 * @returns {JSX.Element} The rendered LogoLink component.
 * 
 * @author Chace Nielson
 * @created 2024-07-10
 * @updated 2024-07-14
 */
import React from 'react';
import { Link } from 'react-router-dom';
import ImageComponent from '../resuableComponents/ImageComponent';

function LogoLink() {
  return (
    <Link to="Home" className='flex gap-2 items-center text-primary'>
      <ImageComponent 
        className="w-12 md:w-16 object-contain rounded-full" 
        src={process.env.PUBLIC_URL + '/jpg-portraits/japan-portrait-trim.jpg'} 
        alt="Logo" 
      />
      <h1 className="text-xl text-secondary">Chace Nielson</h1>
    </Link>
  )
}

export default LogoLink;
