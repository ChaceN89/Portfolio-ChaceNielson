import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

import BackgroundWrapper from '@/components/uiElements/images/BackgroundWrapper';
import ImageComponent from '@/components/uiElements/images/ImageComponent';
import ScrollWheelBtn from '@/components/uiElements/ScrollWheelBtn';
import MyBtn from '@/components/buttons/MyBtn';
import { openModal } from '@/utils/utils';

export default function FeatureSection({ project, background, nextId }) {
  const { src, textColor, bgColor } = background;
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

  // Optional: Transform scrollYProgress (0 to 1) into -1 to 1 centered range
  const centeredScroll = useTransform(scrollYProgress, [0, 0.5, 1], [-1, 0, 1]);


  const enterDis = -0.2
  const exitDis = 0.35

  // Image animations
  const imageX = useTransform(centeredScroll, [-1, enterDis, 0, exitDis, 1], ['-50%', '0%', '0%', '0%', '-50%']);
  const imageOpacity = useTransform(centeredScroll, [-1, enterDis, 0, exitDis, 1], [0, 1, 1, 1, 0.2]);
  const imageRotate = useTransform(centeredScroll, [-1, enterDis, 0, exitDis, 1], ['-10eg', '0deg', '0deg', '0deg', '10deg']);
  const imageY = useTransform(centeredScroll, [-1, enterDis, 0, exitDis, 1], ['100%', '0%', '0%', '0%', '-100%']);


  // Text section aniamtions
  const textOpacity = useTransform(centeredScroll, [-1, enterDis, 0, exitDis, 1], [0, 1, 1, 1, 0]);
  const textY = useTransform(centeredScroll, [-1, enterDis, 0, exitDis, 1], ['150%', '0%', '0%', '0%', '-100%']);




  return (
    <motion.div ref={sectionRef}>
      <BackgroundWrapper
        id={`featured-${project.id}`}
        background={src}
        backgroundClass="w-screen"
        childClass="flex flex-col md:flex-row items-center justify-center gap-12 min-h-[65vh] px-8 py-24 relative container mx-auto"
        fixed
        noise
        overlay={<ScrollWheelBtn to={nextId} />}
      >

        {/* left side Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          style={{ x: imageX, y: imageY, opacity: imageOpacity, rotate: imageRotate }}
        >
          <ImageComponent
            src={`${project.thumbnail.src}`}
            alt={project.name}
            blurHash={project.thumbnail.blurhash}
            className="rounded-xl  h-96 w-[30rem] max-w-[90vw] object-cover border-2 border-white "
          />
        </motion.div>

        {/* Right side  */}
        <motion.div
          className={`w-full md:w-1/2 space-y-4 rounded-[50px]  ${bgColor} ${textColor} p-4 border`}
          style={{ opacity: textOpacity, y: textY }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >

          <h2 className="text-4xl font-bold">{project.name}</h2>
          <p className="text-xl opacity-90 italic">{project.blurb}</p>

          <MyBtn sm callBack={() => handleProjectClick(project.id)}>
            Learn More
          </MyBtn>
        </motion.div>

      </BackgroundWrapper>
    </motion.div>
  );
}
