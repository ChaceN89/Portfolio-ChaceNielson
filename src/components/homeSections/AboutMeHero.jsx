/**
 * AboutMeHero Component
 * @file AboutMeHero.jsx
 * @module AboutMeHero
 * @desc This component renders the "About Me" section of the homepage.
 * It includes a brief introduction, an image, and a button to connect.
 * 
 * @author Chace Nielson
 * @created May 12, 2025
 * @updated May 20, 2025
 */
import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ImageComponent from '@/components/uiElements/images/ImageComponent';
import MyBtn from '@/components/buttons/MyBtn';
import { ScrollToID } from '@/utils/utils';
import { useAnimationSettings } from '@/components/animations/AnimationContext';


export default function AboutMeHero() {

  const { animationsEnabled } = useAnimationSettings(); // Get animation settings from context

  const sectionRef = useRef();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'], // scroll enters viewport
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.75, 1], [150, 0, -80, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.6, 1, 1]);


  const animatedStyle = useMemo(() => {
    if (!animationsEnabled) return {};
    return { opacity, y, scale };
  }, [animationsEnabled, opacity, y, scale]);

  return (
    <motion.div
      id="about-me-hero"
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-12 "
      style={animatedStyle}
    >
      {/* Image */}
      <div className="min-w-48 lg:max-w-60 overflow-hidden rounded-xl rounded-bl-[100px] hover:rounded-bl-xl rounded-tr-[100px] hover:rounded-tr-xl transition-all duration-400 ease-in-out flex justify-center "
        style={{ width: "288px", height: "288px" }} // 72x72

      >
        <ImageComponent
          src="/portraits/pngs/chace-2.png"
          alt="Chace Nielson"
          className="h-56 md:h-72 w-56 md:w-72 object-cover object-top flex justify-center"
          imgClass="w-full h-full transition-transform duration-400 ease-in-out hover:scale-110 "
        />
      </div>

      {/* Text */}
      <div className="max-w-xl text-center md:text-left space-y-4">
        <h2 className="text-3xl font-bold">A Little About Me</h2>
        <p className="text-lg leading-relaxed">
          Hey, I'm <strong>Chace Nielson</strong> — a software engineer with a passion for building intuitive websites and immersive games.
          Whether I'm crafting smooth user interfaces or designing engaging game mechanics, I love turning ideas into interactive experiences.
          Coding is how I express creativity — it's where logic meets imagination.
        </p>

        <MyBtn sm callBack={() => ScrollToID("about-me")}
          GA_label='About Me Hero Button'
          >Learn More</MyBtn>
      </div>
    </motion.div>
  );
}
