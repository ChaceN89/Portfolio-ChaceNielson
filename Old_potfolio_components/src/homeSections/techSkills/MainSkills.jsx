/**
 * @file MainSkills.js
 * @module MainSkills
 * @desc React component that displays a box of top skills with icons and tooltips.
 * This component maps through the provided topSkills array and renders each skill with a corresponding icon or image.
 *
 * @component MainSkills
 * 
 * @requires react
 * @requires Tooltip from '../../components/uiElements/Tooltip'
 * @requires useMediaQuery from 'react-responsive'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @example
 * // Example usage of MainSkills component
 * import MainSkills from './MainSkills';
 * 
 * function App() {
 *   const topSkills = [
 *     { name: 'React', icon: FaReact, color: 'lightblue' },
 *     { name: 'JavaScript', icon: SiJavascript, color: 'yellow' },
 *     { name: 'Python', svg_path: 'python.svg' }
 *   ];
 *   
 *   return (
 *     <MainSkills topSkills={topSkills} />
 *   );
 * }
 * 
 * @exports MainSkills
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-29
 * @since 2.1
 */
import React from 'react';
import Tooltip from '../../components/uiElements/Tooltip';
import ShowIcon from '../../components/uiElements/ShowIcon';
import { useMediaQuery } from 'react-responsive';

function MainSkills({ topSkills }) {

  // check screen size for icon size  
  const isSmallScreen = useMediaQuery({ query: '(max-width: 400px)' });
  const isReallySmallScreen = useMediaQuery({ query: '(max-width: 300px)' });
  const iconSize = isReallySmallScreen ? '2rem' : isSmallScreen ? '3rem' : '4.5rem';


  return (
    <div className="flex justify-center w-full space-x-4 sm:space-x-0 sm:grid grid-cols-2 sm:gap-4 "> 
      {topSkills.map((topSkill, idx) => (
        <Tooltip 
          key={idx}
          openDuration={300} 
          className="max-w-xs"
          text={topSkill.name}
        >
          <ShowIcon skill={topSkill} size={iconSize} useWhiteText={true} />
        </Tooltip>
      ))}
    </div>
  );
}

export default MainSkills;
