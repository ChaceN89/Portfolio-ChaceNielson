/**
 * @file JobDetails.js
 * @module JobDetails
 * @desc Displays detailed information about a specific job, including role, dates, description, skills, soft skills, achievements, and responsibilities. 
 * Provides a link to an external resource if available.
 * 
 * @requires react
 * @requires DisplaySkill from './DisplaySkill'
 * @requires DisplayList from './DisplayList'
 * 
 * @example
 * // Example usage of JobDetails in a component
 * import JobDetails from './JobDetails';
 * 
 * function App() {
 *   const job = {
 *     name: 'Job Name',
 *     role: 'Job Role',
 *     dates: ['Start Date', 'End Date'],
 *     img: 'Image URL',
 *     description: 'Job Description',
 *     skills: ['Skill 1', 'Skill 2'],
 *     softSkills: ['Soft Skill 1', 'Soft Skill 2'],
 *     link: 'External Link',
 *     achievements: ['Achievement 1', 'Achievement 2'],
 *     responsibilities: ['Responsibility 1', 'Responsibility 2'],
 *   };
 * 
 *   return <JobDetails job={job} />;
 * }
 * 
 * @exports JobDetails
 * 
 * @author Chace Nielson
 * @created 2024-07-30
 * @updated 2024-08-09
 * @since 2.1
 */

import React from 'react';
import DisplaySkill from './DisplaySkill';
import DisplayList from './DisplayList';
import Tooltip from '../../components/uiElements/Tooltip'

function JobDetails({ job }) {
  if (!job) return null;

  const {
    name,
    role,
    dates,
    img,
    description,
    skills,
    softSkills,
    link,
    achievements,
    responsibilities,
  } = job;

  const goToLink = () => {
    if (link) window.open(link, '_blank');
  };

  return (
    <div className='text-primary p-2 px-4'>
      <div className='flex justify-between gap-2'>
        <div className='flex items-start gap-2'>
          <Tooltip openDuration={200} text="Visit">
            <div className="aspect-w-1 aspect-h-1 w-16 h-16 md:w-20 md:h-20  rounded-full overflow-hidden cursor-pointer hover:scale-95">
              <img onClick={goToLink} src={img} alt={name} className="object-cover w-full h-full " />
            </div>          
          </Tooltip>
          <div>
            <h4 className='font-bold text-lg'>{name}</h4>
            <p className='opacity-60 text-base'>{role}</p>
            <p className='opacity-60 text-base'>{dates ? dates.join(' - ') : ''}</p>
          </div>
        </div>
      </div>

      <p className='py-2'>{description}</p>

      <div className='flex-shrink pt-2'>
        <DisplaySkill skillList={skills.concat(softSkills)} />
      </div>

      <DisplayList title='Achievements' list={achievements} />
      <DisplayList title='Responsibilities' list={responsibilities} />
    </div>
  );
}

export default JobDetails;
