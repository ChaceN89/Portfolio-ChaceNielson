/**
 * @file MainSkills.js
 * @module MainSkills
 * @desc React component that displays a box of top skills with icons and tooltips.
 * This component maps through the provided topSkills array and renders each skill with a corresponding icon or image.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-29
 * @since 2.1
 */
import React from 'react';
import Tooltip from '@/components/uiElements/Tooltip';
import ShowIcon from '@/components/uiElements/skillBox/ShowIcon';
import { useMediaQuery } from 'react-responsive';

export default function MainSkills({ topSkills }) {
  // check screen size for icon size  
  const isSmallScreen = useMediaQuery({ query: '(max-width: 400px)' });
  const isReallySmallScreen = useMediaQuery({ query: '(max-width: 300px)' });
  const iconSize = isReallySmallScreen ? '1rem' : isSmallScreen ? '4rem' : '5rem';

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center justify-items-center w-full">
      {topSkills.map((topSkill, idx) => (
        <Tooltip 
          key={idx}
          openDuration={300} 
          className="max-w-xs"
          text={topSkill.name}
        >
          <ShowIcon skill={topSkill} size={iconSize} className="transition-transform duration-200 hover:scale-110" />
        </Tooltip>
      ))}
    </div>
  );
}

