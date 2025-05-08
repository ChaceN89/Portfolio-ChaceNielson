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
        <h6 className="group-hover:text-accent ">CHACE NIELSON</h6>
      </div>
    </LinkItem>
)
}
