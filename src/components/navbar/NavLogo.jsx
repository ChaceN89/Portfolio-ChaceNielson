/**
 * @file NavLogo.jsx
 * @module NavLogo
 * @desc React component for rendering the site's logo and name in the navbar.
 *       Uses a LinkItem wrapper to scroll or navigate to the homepage hero section.
 *
 * @author Chace Nielson
 * @created May 9, 2025
 * @updated May 9, 2025
 */
import React from 'react'
import LinkItem from './LinkItem'

export default function NavLogo() {
  return (
    <LinkItem
      scrollTo ="Hero"
      router ='/'
    >
      <div className="flex items-center gap-2 z-10 group  transition-all duration-300 ">
        <img
          src="/logos/my-logos/logoFull-outline-small.png"
          alt="Logo"
          className="h-8 group-hover:opacity-80"
        />
        <h6 className="group-hover:text-accent my-drop-shadow ">CHACE NIELSON</h6>
      </div>
    </LinkItem>
  )
}
