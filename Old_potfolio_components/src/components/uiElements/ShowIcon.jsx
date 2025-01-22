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
 * @updated 2024-07-29
 */

import React from 'react';
import Magnetic from '../../animations/Magnetic';

/**
 * ShowIcon component
 *
 * @param {Object} props - The component props.
 * @param {Object} props.skill - The skill object containing icon information.
 * @param {string} [props.size="2rem"] - The size of the icon.
 * @param {boolean} [props.useWhiteText=false] - Flag to determine if white text should be used.
 * @returns {JSX.Element} The ShowIcon component.
 */
function ShowIcon({ skill, size = "2rem", useWhiteText = false, diableMag=false }) {
  // Determine the icon color based on the useWhiteText prop
  let iconColor;
  if (useWhiteText) {
    iconColor = skill.color === 'black' ? 'white' : skill.color;
  } else {
    iconColor = skill.color === 'white' ? 'black' : skill.color;
  }

  // If it's a react-icon use the icon component, otherwise use the svg
  const IconComponent = skill.icon;

  // Styles for the icon and image elements
  const iconStyle = { color: iconColor, fontSize: size };
  const imgStyle = { width: size, height: size };

  return (
    <Magnetic padding={5} disabled={diableMag}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: size, height: size }}>
        {IconComponent ? (
          <IconComponent style={iconStyle} />
        ) : (
          <img src={process.env.PUBLIC_URL + "/svg-icons/" + skill.svg_path} alt={skill.name} style={imgStyle} />
        )}
      </div>
    </Magnetic>
  );
}

export default ShowIcon;
