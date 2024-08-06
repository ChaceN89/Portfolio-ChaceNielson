/**
 * @file JobButtons.jsx
 * @module JobButtons
 * @desc A React component that renders a list of buttons for selecting different job experiences.
 * Each button represents a job experience and highlights the selected job.
 * 
 * @param {Object[]} props.workExperienceList - Array of work experience objects.
 * @param {function} props.setExperienceID - Function to set the selected experience ID.
 * @param {number} props.experienceID - The ID of the currently selected experience.
 * 
 * @example
 * import JobButtons from './JobButtons';
 * import { workExperienceList } from '../data/workExperienceData';
 * 
 * function ExperienceSection() {
 *   const [experienceID, setExperienceID] = useState(0);
 * 
 *   return (
 *     <div>
 *       <JobButtons 
 *         workExperienceList={workExperienceList} 
 *         setExperienceID={setExperienceID} 
 *         experienceID={experienceID} 
 *       />
 *       <div>
 *         <h2>{workExperienceList[experienceID].name}</h2>
 *         <p>{workExperienceList[experienceID].description}</p>
 *       </div>
 *     </div>
 *   );
 * }
 * 
 * @exports JobButtons
 * 
 * @ChaceN89
 * @created 2024-07-28
 * @updated 2024-07-29
 */

import React from 'react';

function JobButtons({ workExperienceList, setExperienceID, experienceID }) {
  return (
    <div className='flex flex-col space-y-4'>
      {workExperienceList.map((experience, index) => (
        <button 
          key={index} 
          onClick={() => setExperienceID(index)}
          className={`p-4 rounded-lg border-2 transition-colors duration-300 ${experienceID === index ? 'bg-accent text-primary' : 'bg-white text-primary hover:bg-primary hover:text-white'}`}
        >
          {experience.name}
        </button>
      ))}
    </div>
  );
}

export default JobButtons;
