/**
 * @file AutoScrollNav.jsx
 * @module UI/AutoScrollNav
 * @desc Floating side panel component for controlling auto-scroll behavior on the homepage.
 *       Includes toggle for auto-scrolling, speed adjustment, and a scroll-to-top button.
 *       Automatically hides on small screens and uses a slide-in/out animation.
 *
 * @features
 * - Toggleable visibility with spring-based Framer Motion animation
 * - Scroll speed slider (range 1–3)
 * - Auto-scroll pause/resume button
 * - Scroll-to-top shortcut
 * - Portal-rendered to document body to avoid layout conflicts
 * - Tooltip-enhanced controls
 * - Responsive behavior: hidden on screens < 1020px
 *
 * @see {@link https://www.framer.com/motion/ | Framer Motion Docs}
 * @see {@link ./Tooltip.jsx | Tooltip Component}
 *
 * @author Chace Nielson
 * @created Jan 26, 2025
 * @updated May 23, 2025
 */

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FiMoreVertical } from 'react-icons/fi';
import { FaArrowUpWideShort } from "react-icons/fa6";

import { motion } from 'framer-motion';
import Tooltip from './Tooltip';

export default function AutoScrollNav({ shouldScroll, setShouldScroll, scrollSpeed, setScrollSpeed, scrollToTop }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const panelWidth = 300;

  // Auto-disable on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1020) {
        setShouldScroll(false); // Always stop scroll on small screens
        setIsOpen(false);
      }
      // ✅ Don't override the default value from HomePage
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setShouldScroll]);

  // if (typeof window === 'undefined' || window.innerWidth < 1020) return null;

  return createPortal(
  <motion.div
    initial={false}
    animate={{ x: isOpen ? 0 : -(panelWidth - 6) }}
    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    className="fixed bottom-4 left-0 z-[30] items-stretch h-auto md:flex hidden"
    style={{ width: panelWidth }}
  >
      {/* Panel content */}
      <div className="flex gap-4 bg-primary/30 dark:bg-secondary/30 border border-secondary/80 dark:border-primary/50 backdrop-blur-sm border-l-0 p-4 rounded-l-none rounded-r-lg shadow-md items-center flex-1">
        
        {/* Scroll to Top and Stop */}
        <button
          onClick={() => {
            scrollToTop();
            setShouldScroll(false);
          }}
          className=" cursor-pointer"
        >
          
          <FaArrowUpWideShort size={18} className="inline-block mr-1" />

        </button>

        {/* Toggle Scroll */}
        <button
          onClick={() => setShouldScroll(prev => !prev)}
          className="px-3 py-1 bg-secondary dark:bg-primary  text-primary dark:text-secondary rounded whitespace-nowrap w-28  cursor-pointer"
        >
          {shouldScroll ? 'Pause' : 'Auto Scroll'}
        </button>

        {/* Speed Slider */}
        <input
          type="range"
          min="1"
          max="3"
          step="0.5"
          value={scrollSpeed}
          onChange={(e) => setScrollSpeed(parseFloat(e.target.value))}
          className="w-24 accent-secondary dark:accent-primary cursor-pointer" 
        />
      </div>

      {/* Tab */}

        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="bg-secondary/60 dark:bg-primary/60 text-primary dark:text-secondary my-2 flex flex-col items-center justify-center px-1 rounded-r-lg cursor-pointer border border-l-0 dark:border-secondary/50 border-primary/80"
          title="Toggle Auto Scroll Panel"
        >
          <Tooltip text={isOpen ? 'Close' : 'Open Auto Scroll Panel'}>
            <FiMoreVertical size={18} />
          </Tooltip>
        </button>
    </motion.div>,
    document.body
  );
}
