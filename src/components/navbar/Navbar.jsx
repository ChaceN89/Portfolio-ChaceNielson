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
  const { animationsEnabled } = useAnimationSettings();

  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [isNavPosLocked, setIsNavPosLocked] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isNavPosLocked) return;

    if (!hasScrolled && latest > 0) setHasScrolled(true);

    if (hasScrolled && latest > lastY && latest > 200) {
      setHidden(true);
    } else if (hasScrolled) {
      setHidden(false);
    }

    setLastY(latest);
  });

  useEffect(() => {
    if (isNavPosLocked) return;

    const handleMouseMove = (e) => {
      if (e.clientY < 200) setHidden(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isNavPosLocked]);

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

  const motionProps = useMemo(() => {
    if (!animationsEnabled) return {};
    return {
      initial: { y: 0 },
      animate: { y: hidden ? "-100%" : "0%" },
      transition: { duration: 0.3, ease: "easeInOut" }
    };
  }, [animationsEnabled, hidden]);

  return (
    <motion.nav
      {...motionProps}
      className="fixed top-0 w-full z-35 px-0"
    >
      <NavContent />
    </motion.nav>
  );
}
