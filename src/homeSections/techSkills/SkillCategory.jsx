/**
 * @file SkillCategory.js
 * @module SkillCategory
 * @desc React component that displays a category of skills with an animated elevation effect.
 * This component uses the ElevateOnView animation, SkillsBox to display the top skills, and 
 * Link from react-router-dom to navigate to the detailed skills page.
 *
 * @component SkillCategory
 * 
 * @requires react
 * @requires ElevateOnView from '../../animations/ElevateOnView'
 * @requires SkillsBox from './SkillsBox'
 * @requires Link from 'react-router-dom'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * 
 * @example
 * // Example usage of SkillCategory component
 * import SkillCategory from './SkillCategory';
 * 
 * function App() {
 *   const category = {
 *     name: 'Web Development',
 *     id: 'web-development',
 *     linkName: 'See My Web Development Skills',
 *     description: 'This category includes HTML, CSS, JavaScript, and React.',
 *     topSkills: ['HTML', 'CSS', 'JavaScript', 'React']
 *   };
 *   
 *   return (
 *     <SkillCategory category={category} index={0} />
 *   );
 * }
 * 
 * @exports SkillCategory
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 */

import React from 'react';
import ElevateOnView from '../../animations/ElevateOnView';
import SkillsBox from './SkillsBox';
import { Link } from 'react-router-dom';

function SkillCategory({ category, index }) {
  return (
    <ElevateOnView marginY='-75px'>
      <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
        <div className='px-4'>
          <div className='flex space-x-4 items-center justify-start'>
            <h3 className="font-bold whitespace-nowrap">{category.name}</h3>
            <Link 
              to={"/skills/" + category.id}
              className="text-accent hover:text-accent-dark hover:underline cursor-pointer text-sm"
            >
              {category.linkName}
            </Link>
          </div>
          <p className="text-sm text-secondary text-opacity-60 pt-0.5">
            {category.description} 
          </p>
        </div>
        <div>
          <SkillsBox topSkills={category.topSkills} />
        </div>
      </div>
    </ElevateOnView>
  );
}

export default SkillCategory;
