/**
 * @file InterestCategory.js
 * @module InterestCategory
 * @desc React component that displays a single interest category with an icon and description.
 * This component uses the ElevateOnView animation for an elevating effect when the component is in view.
 *
 * @component InterestCategory
 * 
 * @requires react
 * @requires ShowIcon from '../../components/uiElements/ShowIcon'
 * @requires ElevateOnView from '../../animations/ElevateOnView'
 * @requires useMediaQuery from 'react-responsive'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
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
 * @exports InterestCategory
 * 
 * @param {Object} props - The props object.
 * @param {Object} props.interest - The interest object containing name, description, and icon.
 * 
 * @author Chace Nielson
 * @created 2024-07-29
 * @updated 2024-07-29
 * @since 2.1
 */
import React from 'react'
import ShowIcon from '../../components/uiElements/ShowIcon'
import ElevateOnView from '../../animations/ElevateOnView'
import { useMediaQuery } from 'react-responsive'

function InterestCategory({ interest, index, hoverIndex, handleMouseEnter, handleMouseLeave }) {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 400px)' });
  const isReallySmallScreen = useMediaQuery({ query: '(max-width: 300px)' });
  const iconSize = isReallySmallScreen ? '3.5rem' : isSmallScreen ? '4.5rem' : '5rem';

  return (
    <ElevateOnView  >
      <div className='border-faint bg-frosted-glass h-full '>
        <div 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`flex items-center space-x-2 md:space-x-4 
            transition-all ${hoverIndex !== null && hoverIndex !== index ? 'duration-500 blur-xs' : 'duration-200'}`}
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
