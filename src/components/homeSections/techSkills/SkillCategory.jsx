/**
 * @file SkillCategory.js
 * @module SkillCategory
 * @desc React component that displays a category of skills with an animated elevation effect.
 * The entire component is a link, but the underline effect on the `linkName` text is retained.
 * 
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 23, 2025
 * @since 2.2
 */

import React from 'react';
import ElevateOnView from '../../animations/ElevateOnView';
import MainSkills from './MainSkills';
import { Link } from 'react-router-dom';
import { skillParam } from '../../../data/globals';

function SkillCategory({ category, index, hoverIndex, handleMouseEnter, handleMouseLeave }) {
  return (
    <ElevateOnView>
      <Link
        to={`?${skillParam}=${category.id}`}
        className="block border-faint bg-frosted-glass"
      >
        <div 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 
            transition-all ${hoverIndex !== null && hoverIndex !== index ? 'duration-500 blur-xxs' : 'duration-200'}`}
        >
          {/* Left section: Skill details */}
          <div className="sm:col-span-2 flex flex-col space-y-2 justify-between">
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold text-2xl">{category.name}</h3>
              <p className="text-sm text-secondary text-darken">{category.description}</p>
            </div>
            {/* LinkName with underline effect */}
            <span
              className="text-accent hover:text-accent-dark hover:underline cursor-pointer text-sm"
            >
              {category.linkName}
            </span>
          </div>

          {/* Right section: Top skills */}
          <div className="flex justify-center items-center">
            <MainSkills topSkills={category.topSkills} />
          </div>
        </div>
      </Link>
    </ElevateOnView>
  );
}

export default SkillCategory;
