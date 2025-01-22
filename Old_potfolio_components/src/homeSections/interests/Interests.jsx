/**
 * @file Interests.js
 * @module Interests
 * @desc React component that displays the interests section with categories.
 * This component uses the BackgroundWrapper for the background, SlideTransition for animations,
 * and SectionHeader for the section header. It maps through the interests data and renders InterestCategory components.
 *
 * @component Interests
 * 
 * @requires react
 * @requires BackgroundWrapper from '../../wrappers/BackgroundWrapper'
 * @requires SectionWrapper from '../../wrappers/SectionWrapper'
 * @requires InterestCategory from './InterestCategory'
 * @requires interests, interestsPageData from '../../data/pageData/interestsData'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @example
 * // Example usage of Interests component
 * import Interests from './Interests';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <Interests />
 *     </div>
 *   );
 * }
 * 
 * @exports Interests
 * 
 * @author Chace Nielson
 * @created 2024-07-29
 * @updated 2024-08-21
 * @since 2.1
 */
import React, {useState} from 'react';
import { interests, interestsPageData } from '../../data/pageData/interestsData';
import BackgroundWrapper from '../../wrappers/BackgroundWrapper';
import InterestCategory from './InterestCategory';
import SectionWrapper from '../../wrappers/SectionWrapper';

function Interests() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <BackgroundWrapper 
      id="Interests" 
      className=''
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range3-trim-mountain.png"}
      lowResSrc={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range3-trim-mountain-small.png"}
      mobileSrc={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range3.png"}
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
