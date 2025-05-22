import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { openModal } from '@/utils/utils';
import { useLocation, useNavigate } from 'react-router-dom';
import { techStackParam } from '@/data/globals';

import MyBtn from '@/components/buttons/MyBtn';
import MainSkills from '@/components/homeSections/techStacks/MainSkills';

export default function TechStackSection({ 
  techStack,
  hoverIndex,
  handleMouseEnter,
  handleMouseLeave,
  index,
  translation
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const learnMoreClick = () => {
    openModal({
      type: techStackParam,
      id: techStack?.id,
      navigate,
      location
    });
  };

  const isBlurred = hoverIndex !== null && hoverIndex !== index;
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  return (

    <div
      className={`
        h-full flex flex-col justify-between
        text-secondary dark:text-primary
        border-2 rounded-[30px] p-6
        transition-all duration-500
        
        ${isBlurred && !isMobile ? // the affect when the other card is hovered 
          'opacity-60 scale-[0.2] blur-[1px]  transition-all duration-400 delay-400 ease-out ' + translation
          : 'transition-all duration-500 ease-out'
        }
        
        hover:border-accent/90
        bg-primary/60 dark:bg-secondary/20 backdrop-blur-3xl
        hover:shadow-xl 
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col gap-6 flex-grow justify-between">
        <div className="flex flex-col space-y-3">
          <h3 className="leading-tight tracking-tight">
            {techStack.name}
          </h3>
          <p className="text-sm opacity-80 leading-relaxed">
            {techStack.description}
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <MainSkills topSkills={techStack.commonTools} />
        </div>
      </div>

      <div className="pt-6">
        <MyBtn sm callBack={learnMoreClick} className="w-full">
          Learn More
        </MyBtn>
      </div>
    </div>
  );
}
