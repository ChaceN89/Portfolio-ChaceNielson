/**
 * @file SocialBreadcrumbs.jsx
 * @module UI/SocialBreadcrumbs
 * @desc A static breadcrumb-style display of personal social media links.
 *       Includes GitHub, LinkedIn, and Instagram with icons.
 *
 * @author Chace Nielson
 * @created May 9, 2025
 * @updated May 9, 2025
 */

import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  {
    label: 'GitHub',
    icon: <FaGithub />,
    href: 'https://github.com/ChaceN89',
  },
  {
    label: 'LinkedIn',
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/chace-nielson',
  },
  {
    label: 'Instagram',
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/chacenielson',
  },
];

export default function SocialBreadcrumbs() {
  return (
    <div>
      <h4 className="text-xl font-semibold mb-2">Find Me Online</h4>
      <ul className="flex flex-wrap items-center gap-2 text-sm text-white">
        {socialLinks.map(({ label, icon, href }, idx) => (
          <li key={idx} className="flex items-center">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-accent transition-colors duration-100"
            >
              <span className="text-base">{icon}</span>
              {label}
            </a>
            {idx < socialLinks.length - 1 && (
              <span className="px-1 pl-2.5 text-gray-300">/</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
