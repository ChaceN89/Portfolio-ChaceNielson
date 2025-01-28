/**
 * @file DisplaySkills.js
 * @module DisplaySkills
 * @desc Displays a list of skills with icons, adjusting icon size based on screen size using `react-responsive`.
 * 
 * @requires react
 * @requires ShowIcon from '../../components/uiElements/ShowIcon'
 * @requires useMediaQuery from 'react-responsive'
 * 
 * @example
 * // Example usage of DisplaySkill in a component
 * import DisplaySkill from './DisplaySkill';
 * 
 * function App() {
 *   const skills = [
 *     { name: 'JavaScript', icon: 'js-icon' },
 *     { name: 'React', icon: 'react-icon' },
 *     // more skills...
 *   ];
 * 
 *   return <DisplaySkill skillList={skills} />;
 * }
 * 
 * @exports DisplaySkill
 * 
 * @author Chace Nielson
 * @created 2024-07-30
 * @updated Jan 24, 2025
 * @since 2.1
 */

import React from 'react';
import ShowIcon from '../../uiElements/ShowIcon';
import { useMediaQuery } from 'react-responsive';

function DisplaySkills({ skillList }) {
  // Define breakpoints for different screen sizes
  const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 1024 }); // 641px - 1024px
  const isLargeScreen = useMediaQuery({ minWidth: 1025 }); // > 1024px

  // Determine icon size based on screen size
  let iconSize = '1rem'; // Default size for small screens
  if (isMediumScreen) {
    iconSize = '1.5rem'; // Medium screens
  } else if (isLargeScreen) {
    iconSize = '2rem'; // Large screens
  }

  return (
    <div className='flex flex-wrap justify-start items-center gap-2'>
      {skillList.map((skill, index) => (
        <div key={index} className='flex space-x-1 p-2 items-center bg-secondary bg-opacity-20 rounded-md shadow-sm shadow-primary'>
          <ShowIcon 
            skill={skill}
            size={iconSize}
            diableMag={true}
          />
          <div className='text-xs sm:text-sm lg:text-base'>{skill.name}</div>
        </div>
      ))}
    </div>
  );
}

export default DisplaySkills;
