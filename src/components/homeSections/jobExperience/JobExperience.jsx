/**
 * @file JobExperience.jsx
 * @module JobExperience
 * @desc A React component that displays job experiences with selectable buttons and detailed views.
 * The component uses a background wrapper and section wrapper for styling.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 24, 2025
 */

import React, { useState } from 'react';

// Data
import { workExperienceList, workExperiencePageData } from '../../../data/pageData/workExperienceData'

// Components
import JobDetails from './JobDetails';
import JobButtons from './JobButtons';

// Wrappers 
import SectionWrapper from '../../wrappers/SectionWrapper';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';

function JobExperience() {
  const [experienceID, setExperienceID] = useState(0);

  return (
    <BackgroundWrapper 
      id='WorkExperience'
      className='min-h-section-height h-fit' 
      src={"/png-backgrounds/detailed/range5-trim.png"}
      lowResSrc={"/png-backgrounds/detailed/range5-trim-small.png"}
      mobileSrc={"/png-backgrounds/detailed/range5.png"}
      backgroundSize = "cover"
      bgOpacity={50}
    > 
      <SectionWrapper
        title={workExperiencePageData.title}
        subtitle={workExperiencePageData.description}
        >
        <div className='grid grid-cols-1 md:grid-cols-4 md:gap-4 h-full'>
          <div className='pb-4 md:pb-0'>
            <JobButtons 
              setExperienceID={setExperienceID}
              experienceID={experienceID}
              workExperienceList={workExperienceList}
              />
          </div>
          <div className='col-span-3 min-h-section-height-small h-fit bg-secondary rounded-lg'>
            <JobDetails job={workExperienceList[experienceID]} />
          </div>
        </div>
      </SectionWrapper>  
    </BackgroundWrapper>
  );
}

export default JobExperience;
