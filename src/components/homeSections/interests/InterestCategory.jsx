/**
 * @file InterestCategory.js
 * @module InterestCategory
 * @desc React component that displays a single interest category with an icon and description.
 * This component uses the ElevateOnView animation for an elevating effect when the component is in view.
 * 
 * @example
 * // Example usage of InterestCategory component
 * import InterestCategory from './InterestCategory';
 * 
 * const interest = {
 *   name: 'Hiking',
 *   description: 'Exploring various trails and enjoying nature.',
 *   icon: { name: 'hiking', color: 'green' }
 * };
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <InterestCategory interest={interest} />
 *     </div>
 *   );
 * }
 * 
 * @author Chace Nielson
 * @created 2024-07-29
 * @updated 2024-07-29
 */
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import ElevateOnView from '../../animations/ElevateOnView';
import ShowIcon from '../../uiElements/ShowIcon';

function InterestCategory({ interest, index, hoverIndex, handleMouseEnter, handleMouseLeave }) {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 400px)' });
  const isReallySmallScreen = useMediaQuery({ query: '(max-width: 300px)' });
  const iconSize = isReallySmallScreen ? '3.5rem' : isSmallScreen ? '4.5rem' : '5rem';

  return (
    <ElevateOnView>
      <div className='border-faint bg-frosted-glass h-full '>
        <div 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`flex items-center space-x-2 md:space-x-4 
            transition-all ${hoverIndex !== null && hoverIndex !== index ? 'duration-500 blur-xxs' : 'duration-200'}`}
        >
          <div className='flex-shrink-0'>
            <ShowIcon skill={interest.icon} size={iconSize} useWhiteText={true}/>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{interest.name}</h3>
            <p className="text-secondary text-sm text-darken">{interest.description}</p>
          </div>
        </div>
      </div>
    </ElevateOnView>
  )
}

export default InterestCategory
