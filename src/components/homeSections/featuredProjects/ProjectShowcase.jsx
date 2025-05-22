/**
 * @file ProjectShowcase.jsx
 * @module components/sections/ProjectShowcase
 * @desc Displays an animated featured project section with scroll-based effects,
 *       dynamic icon sizing, and ripple interaction visuals. Used within the homepage
 *       to highlight key projects with background theming.
 *
 * @features
 * - Scroll-linked animations for image and text using Framer Motion
 * - Adaptive icon sizes based on Tailwind breakpoints
 * - Ripple hover effect with per-project custom color
 * - Responsive 2-column layout with background imagery and call-to-action
 *
 * @author Chace Nielson
 * @created May 13, 2025
 * @updated May 22, 2025
 */

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

import BackgroundWrapper from '@/components/uiElements/images/BackgroundWrapper';
import ImageComponent from '@/components/uiElements/images/ImageComponent';
import ScrollWheelBtn from '@/components/uiElements/ScrollWheelBtn';
import MyBtn from '@/components/buttons/MyBtn';
import { openModal } from '@/utils/utils';
import ShowIcon from '@/components/uiElements/skillBox/ShowIcon';
import Tooltip from '@/components/uiElements/Tooltip';

export default function ProjectShowcase({ project, background, nextId }) {
  const { src, textColor, borderColor, rippleColor } = background;

  // Set ripple color for this element specifcially 

  const sectionRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();

  const handleProjectClick = (id) => {
    openModal({
      type: "project",
      id,
      navigate,
      location,
    });
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'], // top of section hits bottom of viewport → bottom hits top
  });

  // Transform scrollYProgress (0 to 1) into -1 to 1 centered range
  const centeredScroll = useTransform(scrollYProgress, [0, 0.5, 1], [-1, 0, 1]);

  // Constants for enter and exit distances for all animations
  const enterDis = -0.3
  const exitDis = 0.3

  // Image animations
  const imageX = useTransform(centeredScroll, [-1, enterDis, 0, exitDis, 1], ['25%', '0%', '0%', '0%', '25%']);
  const imageOpacity = useTransform(centeredScroll, [-1, enterDis, 0, exitDis, 1], [0, 1, 1, 1, 0.2]);
  const imageRotate = useTransform(centeredScroll, [-1, enterDis, 0, exitDis, 1], ['-10eg', '0deg', '0deg', '0deg', '10deg']);
  const imageY = useTransform(centeredScroll, [-1, enterDis, 0, exitDis, 1], ['100%', '0%', '0%', '0%', '-100%']);
  const imageScale = useTransform(centeredScroll, [-1, enterDis, 0, exitDis, 1], [0.8, 1, 1, 1, 0.8]);

  // Text section aniamtions
  const textOpacity = useTransform(centeredScroll, [-1, enterDis, 0, exitDis, 1], [0, 1, 1, 1, 0]);
  const textY = useTransform(centeredScroll, [-1, enterDis, 0, exitDis, 1], ['150%', '0%', '0%', '0%', '-100%']);
  const textScale = useTransform(centeredScroll, [-1, enterDis, 0, exitDis, 1], [0.8, 1, 1, 1, 0.8]);


  // determine the icon size based on the screen size
  const [iconSize, setIconSize] = useState("5rem")

  useEffect(() => {
    const updateIconSize = () => {
      const width = window.innerWidth;

      switch (true) {
        case width < 1024: // < lg
          setIconSize("3.5rem");
          break;
  
      
        case width < 1280: // lg to xl
          setIconSize("3rem");
          break;
        case width < 1536: // xl to 2xl
          setIconSize("4.5rem");
          break;
        default: // ≥ 2xl
          setIconSize("5rem");
          break;
      }
    };

    updateIconSize(); // run on mount
    window.addEventListener("resize", updateIconSize);
    return () => window.removeEventListener("resize", updateIconSize);
  }, []);

  return (
    <motion.div ref={sectionRef} >
      <BackgroundWrapper
        id={`featured-${project.id}`}
        background={src}
        backgroundClass="w-screen"
        childClass="px-10 flex flex-col lg:flex-row items-center justify-center gap-12 min-h-[75vh]  py-24 relative  "
        fixed
        noise
        overlay={<ScrollWheelBtn to={nextId} />}
      >

        <motion.div
          className={` lg:text-right w-full lg:w-1/2 space-y-4 ${textColor}  p-4 max-w-2xl `}
          style={{ opacity: textOpacity, y: textY, scale: textScale }}
        >

          {/* Title */}
          <h2 className="text-4xl font-bold">{project.name}</h2>
          <hr className={`${borderColor} border-t  dark:border-primary/40 my-2 lg:ml-20`} />
          <p className="text-xl opacity-90 italic">{project.blurb}</p>


          {/* Icons and btn */}
          <div className='flex flex-col md:flex-row items-start lg:justify-end items-center gap-6'>

            <div className="flex gap-3 items-center flex-wrap">
              {project.mainStack?.map((iconObj, i) => (
                <Tooltip text={iconObj.name} key={i}>
                  <ShowIcon key={i} skill={iconObj} size={iconSize} />
                </Tooltip>
              ))}
            </div>

            <MyBtn sm callBack={() => handleProjectClick(project.id)}>
              Learn More
            </MyBtn>
          </div>

        </motion.div>

        <motion.div
          className="group relative w-full lg:w-1/2 flex justify-center cursor-pointer"
          style={{ x: imageX, y: imageY, opacity: imageOpacity, rotate: imageRotate, scale: imageScale }}
          onClick={() => handleProjectClick(project.id)}
        >
          <Tooltip text="View Case">
            <div className="relative overflow-hidden">
              {/* Ripple Layer */}
              <span 
                className="ripple-hover z-10"
                style={{ '--ripple-color': rippleColor }}
              />

              {/* Image */}
              <ImageComponent
                src={`${project.thumbnail.src}`}
                alt={project.name}
                blurHash={project.thumbnail.blurhash}
                className="
                  aspect-[4/3] max-h-[30rem]
                  rounded-2xl max-w-[90vw] 
                  object-cover 
                  border-2 border-white shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              />
            </div>
          </Tooltip>
        </motion.div>

      </BackgroundWrapper>
    </motion.div>
  );
}