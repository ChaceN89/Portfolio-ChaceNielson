import React, { useEffect, useRef, useState } from 'react';
import Hero from '@/components/homeSections/Hero';
import AboutMeHero from '@/components/homeSections/AboutMeHero';
import TechStacks from '@/components/homeSections/techStacks/TechStacks';
import FeaturedProjects from '@/components/homeSections/featuredProjects/FeaturedProjects';
import AboutMe from '@/components/homeSections/AboutMe';
import ProjectCarousel from '@/components/homeSections/ProjectCarousel/ProjectCarousel';
import AutoScrollNav from '@/components/uiElements/AutoScrollNav';

export default function HomePage() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(1.5); // user-controlled speed
  const frameRef = useRef(null);

const accumulated = useRef(0);

useEffect(() => {
  const smoothScroll = () => {
    if (scrolling) {
      accumulated.current += scrollSpeed;
      const delta = Math.floor(accumulated.current);
      if (delta >= 1) {
        window.scrollBy(0, delta);
        accumulated.current -= delta; // subtract used amount
      }
    }
    frameRef.current = requestAnimationFrame(smoothScroll);
  };

  frameRef.current = requestAnimationFrame(smoothScroll);
  return () => cancelAnimationFrame(frameRef.current);
}, [scrolling, scrollSpeed]);

  // fucntion  to scroll back t othe tipo 
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      {/* ✅ Always rendered into <body> via portal */}
      <AutoScrollNav
        shouldScroll={scrolling}
        setShouldScroll={setScrolling}
        scrollSpeed={scrollSpeed}
        setScrollSpeed={setScrollSpeed}
        scrollToTop={scrollToTop} // Pass the scrollToTop function
      />

      <div onClick={() => setScrolling(false)}>
        {/* Main page sections */}
        <div id="hero">
          <Hero />
          <AboutMeHero />
        </div>
        <div id="featured-projects">
          <FeaturedProjects />
          <ProjectCarousel />
        </div>
        <div id="tech-stacks">
          <TechStacks />
        </div>
        <div id="about-me">
          <AboutMe />
        </div>
      </div>
    </>
  );
}
