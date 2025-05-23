/**
 * @file QuickLinks.jsx
 * @module UI/QuickLinks
 * @desc Footer component that displays quick access links to key sections of the portfolio.
 *
 * @author Chace Nielson
 * @created May 9, 2025
 * @updated May 9, 2025
 */

import React from 'react';
import { navLinks } from '@/data/nav/navData';
import LinkItem from '../navbar/LinkItem';

export default function QuickLinks() {
  // Split navLinks based on presence of scrollTo or router
  const scrollLinks = navLinks.filter(link => link.scrollTo);
  const routerLinks = navLinks.filter(link => link.router && !link.scrollTo);

  return (
    <div>
      <h4 className="text-xl font-semibold">Quick Links</h4>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Scroll-based links (in-page) */}
        <ul className="space-y-2">
          {scrollLinks.map(({ label, scrollTo, router, icon: Icon }, idx) => (
            <li key={idx}>
              <LinkItem
                scrollTo={scrollTo}
                router={router}
                className="flex items-center gap-2 text-sm hover:text-accent transition-colors duration-100"
              >
                <Icon className="w-4 h-4" /> {label}
              </LinkItem>
            </li>
          ))}
        </ul>

        {/* Router-based links (pages) */}
        <ul className="space-y-2">
          {routerLinks.map(({ label, router, icon: Icon }, idx) => (
            <li key={idx}>
              <LinkItem
                router={router}
                className="flex items-center gap-2 text-sm hover:text-accent transition-colors duration-100"
              >
                <Icon className="w-4 h-4" /> {label}
              </LinkItem>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
