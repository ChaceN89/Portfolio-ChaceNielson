/**
 * @file Interests.js
 * @module Interests
 * @desc React component that displays the interests section with categories.
 * This component uses the BackgroundWrapper for the background, SlideTransition for animations,
 * and SectionHeader for the section header. It maps through the interests data and renders InterestCategory components.
 * 
 * @author Chace Nielson
 * @created 2024-07-29
 * @updated 2024-08-21
 */
import React, {useState} from 'react';
import { interests, interestsPageData } from '../../../data/pageData/interestsData';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import SectionWrapper from '../../wrappers/SectionWrapper';
import InterestCategory from './InterestCategory';


function Interests() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <BackgroundWrapper
      id="Interests" 
      className=''
      src={"/png-backgrounds/detailed/range3-trim-mountain.png"}
      lowResSrc={"/png-backgrounds/detailed/range3-trim-mountain-small.png"}
      mobileSrc={"/png-backgrounds/detailed/range3.png"}
      backgroundSize = "cover"
      backgroundAttachment='fixed'
      bgOpacity={20}
    >
      <hr />
      <SectionWrapper
        title = {interestsPageData.title}
        subtitle = {interestsPageData.description}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {interests.map((interest, index) => (
            <InterestCategory
              key={index}
              interest={interest}
              index={index}
              hoverIndex={hoveredIndex}
              handleMouseEnter={() => setHoveredIndex(index)}
              handleMouseLeave={() => setHoveredIndex(null)} 
            />
          ))}
        </div>
      </SectionWrapper>
      <hr />
    </BackgroundWrapper>
  );
}

export default Interests;
