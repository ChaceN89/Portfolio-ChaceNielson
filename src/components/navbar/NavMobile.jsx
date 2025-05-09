/**
 * @file NavMobile.jsx
 * @module NavMobile
 * @desc React component for the animated mobile navigation dropdown menu.
 *       Displays a vertically stacked nav list and handles screen resizing and scroll lock.
 *
 * @features
 * - Renders `NavDesktop` inside a mobile-friendly vertical layout.
 * - Uses Framer Motion for smooth dropdown expand/collapse animations.
 * - Automatically closes the menu on screen resize to desktop (`≥ 1020px`).
 * - Locks page scroll when menu is open using `overflow-hidden` on `<body>`.
 * - Limits dropdown height to 50% of viewport with internal scrolling support.
 *
 * @author Chace Nielson
 * @created May 9, 2025
 * @updated May 9, 2025
 */
import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NavDesktop from './NavDesktop';

export default function NavMobile({ setIsOpen, isOpen }) {
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);

    const handleResize = () => {
      if (window.innerWidth >= 1020) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, setIsOpen]);

  return (
    <AnimatePresence initial={true} mode="wait">
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="w-full absolute top-full left-0 z-30 overflow-hidden"
        >
          <div className="
            bg-secondary/95 text-white py-10 border-t-2 border-white/50 rounded-b-4xl 
            w-full flex flex-col items-center gap-4 
            max-h-[50svh] overflow-y-auto scroll-element
          ">
            <NavDesktop />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
  
}
