/**
 * @file Navbar.jsx
 * @module Navbar
 * @desc React component for the navigation bar.
 *       Dynamically renders navigation links from `navLinks` array, supports scroll and routing.
 */

// import React, { useEffect, useState } from 'react';
// import { motion, useScroll, useSpring } from 'framer-motion';
// import { Squash as Hamburger } from 'hamburger-react';
// import LinkItem from './LinkItem';
// import { navLinks } from '../../data/nav/navData';
// import "./Navbar.css";
// import { useLocation } from 'react-router-dom';

import React, { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import NavContent from "./NavContent";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [lastY, setLastY] = useState(0);

  const { scrollY } = useScroll();
  const debugging = false;

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!hasScrolled && latest > 0) setHasScrolled(true);

    if (hasScrolled && latest > lastY && latest > 500) {
      setHidden(true); // scrolling down
    } else if (hasScrolled) {
      setHidden(false); // scrolling up
    }

    setLastY(latest);
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY < 300) {
        setHidden(false); // Reveal nav when mouse is near top
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {debugging ? (
        <div className="fixed top-0 w-full z-45">
          <NavContent />
        </div>
      ) : (
        <motion.nav
          initial={{ y: 0 }}
          animate={{ y: hidden ? "-100%" : "0%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 w-full z-45"
        >
          <NavContent />
        </motion.nav>
      )}
    </>
  );





  // const [isHamburgerNavOpen, setIsHamburgerNavOpen] = useState(false);
  // const [animateMenu, setAnimateMenu] = useState(false);

  // const { scrollYProgress } = useScroll();
  // const springScrollYProgress = useSpring(scrollYProgress, {
  //   stiffness: 300,
  //   damping: 30,
  //   mass: 1
  // });

  // const toggleMenu = () => {
  //   if (!isHamburgerNavOpen) {
  //     setIsHamburgerNavOpen(true);
  //     setAnimateMenu(true);
  //   } else {
  //     setAnimateMenu(false);
  //     setTimeout(() => setIsHamburgerNavOpen(false), 150);
  //   }
  // };





/*
  return (
    <nav className="bg-frosted-glass pb-1 fixed top-0 w-full z-45">
      <motion.div 
        className='w-full h-0.5 bg-primary origin-left z-40'
        style={{ scaleX: springScrollYProgress }}
      />

      <div className="bg-frosted-container container mx-auto flex justify-end md:justify-center items-center p-0.5 md:p-2">

        <div className="hidden md:flex gap-6">
          {navLinks.map(({ label, icon: Icon, ...linkProps }) => (
            <LinkItem key={label} {...linkProps}
              className='text-lg hover:text-accent transition-colors'
              activeClassName="underline"

            >
              <span className="flex items-center gap-2">
                <Icon /> {label}
              </span>
            </LinkItem>
          ))}

        </div>

        <button onClick={toggleMenu} className="text-secondary -mt-1.5 md:hidden z-50 hover:text-accent-dark flex gap-1 h-0">
          <Hamburger size={20} toggled={isHamburgerNavOpen} rounded />
        </button>

        {isHamburgerNavOpen && (
          <div className={`fixed md:hidden min-h-screen top-0 left-0 z-45 w-full flex justify-center items-center transition-opacity duration-300 h-full ${animateMenu ? 'opacity-100 fade-in' : 'opacity-0 fade-out'}`}>
            <div className="hamburger-bg flex flex-col gap-6 justify-center items-center w-full h-full">
              {navLinks.map((link, index) => (
                <LinkItem
                  key={index}
                  scrollTo={link.scrollTo}
                  router={link.router}
                  href={link.href}
                  className="text-2xl hover:text-accent"
                  activeClassName="underline"
                >
                  {link.label}
                </LinkItem>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  */
} 
