/**
 * @file NavContent.jsx
 * @module NavContent
 * @desc Core layout structure for the navigation bar.
 *       Handles responsive rendering of logo, desktop nav, mobile toggle, and menu dropdown.
 *
 * @features
 * - Displays logo (`NavLogo`) and navigation links (`NavDesktop`) on large screens.
 * - Renders mobile hamburger menu (`NavMobileButton`) and animated dropdown (`NavMobile`) on smaller screens.
 * - Applies a blur and noise overlay background that reacts to scroll position.
 * - Uses Framer Motion to animate the dropdown overlay and background fade-in/out.
 * - Prevents interaction with underlying content via a semi-transparent backdrop when mobile menu is active.
 *
 * @author Chace Nielson
 * @created May 9, 2025
 * @updated May 9, 2025
 */
import { useEffect, useState } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import NavLogo from "./NavLogo";
import NavMobileButton from "./NavMobileButton";
import { AnimatePresence, motion } from "framer-motion";

export default function NavContent() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAtTop = scrollY <= 40;

  return (
    <>
      {/* Top nav container with blur and noise (overflow hidden ONLY here) */}
      <div
        className="
          px-4 xl:px-10 2xl:px-20 
          z-10 relative  overflow-hidden
          min-w-full h-nav-height  
          flex flex-col justify-center 
          transition-all duration-500 
          bg-primary/50 dark:bg-secondary/50 "
        style={{
          backgroundColor: isAtTop && "transparent",
          backdropFilter: isAtTop ? "none" : "blur(10px)",
        }}
      >

        {/* Top nav content */}
        <div className="relative flex items-center justify-between z-40">
          <NavLogo />
          <div className="hidden lg:flex">
            <NavDesktop />
          </div>
          <NavMobileButton
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        </div>
      </div>

 

      {/* Mobile dropdown outside the overflow-hidden container */}
      <div className="flex lg:hidden relative z-35">
        <NavMobile setIsOpen={setIsMobileMenuOpen} isOpen={isMobileMenuOpen} />
      </div>

      {/* background overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-secondary/80"
            style={{ pointerEvents: 'auto' }}
          />
        )}
      </AnimatePresence>


    </>
  );
}
