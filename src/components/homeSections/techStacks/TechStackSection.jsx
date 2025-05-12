import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Tooltip from '@/components/uiElements/Tooltip';
import ShowIcon from '@/components/uiElements/ShowIcon';
import { openModal } from '@/utils/utils';
import { useLocation, useNavigate } from 'react-router-dom';
import { techStackParam } from '@/data/globals';

import MyBtn from '@/components/buttons/MyBtn';

export default function TechStackSection({ title, techStack, description }) {
  // Icon sizing based on screen width
  const isSmallScreen = useMediaQuery({ query: '(max-width: 400px)' });
  const isReallySmallScreen = useMediaQuery({ query: '(max-width: 300px)' });
  const iconSize = isReallySmallScreen ? '2rem' : isSmallScreen ? '3rem' : '4.5rem';


  // navigate an dlocation 

  const navigate = useNavigate();
  const location = useLocation();



  // openModal()
  const learnMoreClick = () => {
    // check if the current location is not the same as the target location

      openModal({
        type: techStackParam,
        id: techStack?.id,
        navigate,
        location
      });
    
  }


  return (
    <div className={`w-full flex flex-col items-center justify-between gap-8 text-center `}>
      {/* Title */}
        <h3>{title}</h3>

      {/* Blurb */}
      <p className="max-w-md text-base italic h-20">
        {description}
      </p>

      {/* Grid of Icons */}
      <div className="grid grid-cols-3 sm:grid-cols-4  gap-6  p-4 rounded-[30px] bg-secondary/80">
        {techStack?.commonTools?.map((tool, idx) => (
          <Tooltip
            key={idx}
            openDuration={300}
            className="max-w-xs"
            text={tool.name}
          >
            <ShowIcon skill={tool} size={iconSize} useWhiteText />
          </Tooltip>
        ))}
      </div>

      <MyBtn sm callBack={learnMoreClick} className="mt-2">
        Learn More
      </MyBtn>

    </div>
  );
}
