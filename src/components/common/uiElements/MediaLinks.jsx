import React from 'react';
import { BsYoutube, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import Tooltip from './Tooltip';

function MediaLinks() {
  const mediaLinks = [
    { name: "GitHub", icon: BsGithub, link: "https://github.com/ChaceN89" },
    { name: "YouTube", icon: BsYoutube, link: "https://www.youtube.com/@chacenielson5413" },
    { name: "Instagram", icon: BsInstagram, link: "https://www.instagram.com/chacenielson" },
    { name: "LinkedIn", icon: BsLinkedin, link: "https://www.linkedin.com/in/chace-nielson" }
  ];

  return (
    <div className="grid grid-cols-2 gap-0.5 sm:flex justify-center space-x-0.5 relative">
      {mediaLinks.map((link) => (
        <Tooltip key={link.name} text={link.name}>
          <a
            href={link.link}
            aria-label={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center 
              w-10 h-10 rounded-full 
              bg-primary hover:bg-accent text-secondary hover:text-primary 
              transition duration-300"
            >
              <link.icon size={28} className="" />
            </div>
          </a>
        </Tooltip>
      ))}
    </div>
  );
}

export default MediaLinks;
