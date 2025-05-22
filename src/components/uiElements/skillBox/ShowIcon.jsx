/**
 * @file ShowIcon.js
 * @module ShowIcon
 * @desc React component that displays an icon based on the provided skill object. 
 * The component adjusts the icon color based on the useWhiteText prop and ensures both SVG and React icons have the same size.
 * Can handle both React icons and SVG images. See the example below for more details.
 *
 * @component ShowIcon
 * 
 * @requires react
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @example
 * // Example usage of ShowIcon component
 * import ShowIcon from './ShowIcon';
 * 
 * const skill = {
 *   name: 'React',
 *   color: 'blue',
 *   icon: ReactIcon,
 *   svg_path: 'react-icon.svg' // this or the icon not both
 * };
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       // Other components
 *       <ShowIcon skill={skill} size="3rem" useWhiteText={true} />
 *     </div>
 *   );
 * }
 * 
 * @exports ShowIcon
 * 
 * @author Chace Nielson
 * @since 2.1
 * @created 2024-07-29
 * @updated Jan 26 2025
 */

import React from 'react';
import Magnetic from '@/components/animations/Magnetic';

/**
 * ShowIcon component
 *
 * @param {Object} props - The component props.
 * @param {Object} props.skill - The skill object containing icon information.
 * @param {string} [props.size="2rem"] - The size of the icon.
 * @param {boolean} [props.useWhiteText=false] - Flag to determine if white text should be used.
 * @param {boolean} [props.noDropShadow=false] - Flag to determine if the drop shadow should be removed.
 * @returns {JSX.Element} The ShowIcon component.
 */
function ShowIcon({ skill, size = "2rem",  diableMag=false }) {

  // If it's a react-icon use the icon component, otherwise use the svg
  const IconComponent = skill.icon;

  // Styles for the icon and image elements
  const iconStyle = { color: skill.color, fontSize: size };
  const imgStyle = { width: size, height: size };

  return (
    <Magnetic padding={5} disabled={diableMag}>
      <div className='black-drop-shadow' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: size, height: size }}>
        {IconComponent ? (
          <IconComponent className="brightness-125" style={iconStyle} />
        ) : (
          <img 
            src={`/icons/svg-icons/${skill.svg_path}`} 
            alt={skill.name} style={imgStyle} 
            className='brightness-125'
          />
        )}
      </div>
    </Magnetic>
  );
}

export default ShowIcon;
