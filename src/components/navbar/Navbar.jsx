/**
 * @file Navbar.jsx
 * @module Navbar
 * @desc React component for the global navigation bar.
 *       Handles scroll-based visibility, mobile responsiveness, and dynamic locking behavior.
 *
 * @features
 * - Hides the navbar on scroll down after a threshold (500px) and reveals on scroll up.
 * - Reveals the navbar when the mouse approaches the top of the screen (desktop only).
 * - Locks the navbar visibility on mobile (`< 1020px`) to ensure it always remains visible.
 * - Responds to screen resizing to toggle mobile lock state in real time.
 * - Uses Framer Motion for smooth slide-in/out animations.
 *
 * @author Chace Nielson
 * @created May 9, 2025
 * @updated May 9, 2025
 */
import React, { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import NavContent from "./NavContent";

export default function Navbar({forceLock=false}) {

  // States for hidden nav, initial scroll and the last Y position of the scaoll
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [lastY, setLastY] = useState(0);

  // get the scroll Positions
  const { scrollY } = useScroll();
  const [isNavPosLocked, setIsNavPosLocked] = useState(false); // is the nav bar locked or can it animation up on scroll

  // useMotionValueEvent is a framer motion hook that allows you to listen to changes in a motion value
  useMotionValueEvent(scrollY, "change", (latest) => {

    if (isNavPosLocked) return; // if locked, do not add event listener

    // If this is the first time the user is scrolling, mark as scrolled
    if (!hasScrolled && latest > 0) setHasScrolled(true);

    // If the user is scrolling up or down, update the hidden state
    if (hasScrolled && latest > lastY && latest > 200) {
      setHidden(true); // scrolling down
    } else if (hasScrolled) {
      setHidden(false); // scrolling up
    }

    setLastY(latest);
  });

  // handle the mouse moving close to the top of the screen to trigger the nav to show
  useEffect(() => {
    if (isNavPosLocked) return; // if locked, do not add event listener

    // Function to handle mouse movement if it is close to the top of the screen
    const handleMouseMove = (e) => {
      if (e.clientY < 200) {
        setHidden(false); // Reveal nav when mouse is near top
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isNavPosLocked]);


  useEffect(() => {
    const checkLockState = () => {
      const shouldLock = forceLock ;
      setIsNavPosLocked(shouldLock);

      if (shouldLock) {
        setHidden(false);
      }
    };
  
    checkLockState(); // Run on mount
    window.addEventListener("resize", checkLockState);
    return () => window.removeEventListener("resize", checkLockState);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 w-full z-35 px-0 "
      >
      <NavContent />
    </motion.nav>
  );
}