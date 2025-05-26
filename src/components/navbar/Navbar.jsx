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
 * @updated May 23, 2025
 */

import React, { useState, useEffect, useMemo } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import NavContent from "./NavContent";
import { useAnimationSettings } from "@/components/animations/AnimationContext";

export default function Navbar({ forceLock = false }) {
  const { prefersReducedMotion } = useAnimationSettings();

  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [isNavPosLocked, setIsNavPosLocked] = useState(false);

  const { scrollY } = useScroll();

  // for determining if the mobile menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 🖱️ Hide navbar on scroll down after threshold
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isNavPosLocked || isMobileMenuOpen) return; // 🛑 prevent hiding if menu is open

    if (!hasScrolled && latest > 0) setHasScrolled(true);

    if (hasScrolled && latest > lastY && latest > 200) {
      setHidden(true);
    } else if (hasScrolled) {
      setHidden(false);
    }

    setLastY(latest);
  });

  // 🖱️ Show navbar when mouse moves near top of screen
  useEffect(() => {
    if (isNavPosLocked || isMobileMenuOpen) return; // 🛑 block mouse-triggered reveal

    const handleMouseMove = (e) => {
      if (e.clientY < 200) setHidden(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isNavPosLocked, isMobileMenuOpen]);

  // 📱 Lock navbar position on mobile screens
  useEffect(() => {
    const checkLockState = () => {
      const shouldLock = forceLock;
      setIsNavPosLocked(shouldLock);
      if (shouldLock) setHidden(false);
    };

    checkLockState();
    window.addEventListener("resize", checkLockState);
    return () => window.removeEventListener("resize", checkLockState);
  }, []);

  // 🖥️ Disable animations if user perfers reduced motion or save the animation settings
  const motionProps = useMemo(() => {
    if (prefersReducedMotion) return {}; // Disable animations if on small screens
    
    return {
      initial: { y: 0 },
      animate: { y: hidden ? "-100%" : "0%" },
      transition: { duration: 0.3, ease: "easeInOut" }
    };
  }, [prefersReducedMotion, hidden]);

  return (
    <motion.nav
      {...motionProps}
      className="fixed top-0 w-full z-35 px-0"
    >
      <NavContent
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </motion.nav>
  );
}
