/**
 * @file HexSeparator.jsx
 * @module HexSeparator
 * @desc A customizable, interlocking hexagonal grid used as a visual separator between sections.
 *       The component supports both top and bottom alignment, background inheritance, and responsive flexibility.
 *       Can be used to enhance visual storytelling and section transitions on landing pages.
 *
 * @component
 * @prop {number} rows - The number of hexagon rows to display (default: 4).
 * @prop {number} cols - The number of hexagons per row (default: 80).
 * @prop {string} parentClass - Tailwind or custom classes for the outer wrapper. Controls height, padding, and background color.
 *                               Common use: `'bg-primary h-10'` to define color and height of the separator block.
 * @prop {string} hexClass - Classes applied to each hexagon element. Useful for customizing color, opacity, or hover effects.
 *                           Example: `'bg-accent opacity-50'`.
 * @prop {boolean} bottom - If true, renders the grid starting from the bottom up using `flex-col-reverse`. 
 *                          Use this for bottom separators that should bleed into the section above.
 *
 * @usage
 * <HexSeparator 
 *   rows={5} 
 *   cols={60} 
 *   parentClass="bg-secondary h-12"
 *   hexClass="bg-secondary-alt opacity-70"
 *   bottom={true}
 * />
 *
 * @author Chace Nielson
 * @created Mar 24, 2025
 * @updated Mar 24, 2025
 */

// styles
import './HexSeparator.styles.css'; // Import the CSS file for hexagon styles

// Separator.jsx
export default function HexSeparator({ 
  rows = 4, 
  cols = 80, 
  parentClass = 'bg-primary h-0',
  hexClass = 'bg-primary-alt opacity-50',
  bottom = false,
  randomColors = false 
}) {

  const colorClasses = ['bg-primary', 'bg-accent', 'bg-tertiary', 'bg-secondary'];

  const getRandomColorClass = () => {
    const randomIndex = Math.floor(Math.random() * colorClasses.length);
    return colorClasses[randomIndex] + " "+ hexClass;
  };

  return (
    <div className={`relative ${parentClass} `}>
      <div className={`absolute bottom-0 hex-grid  ${bottom && 'bottom-hex-grid'}`}>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className={`hex-row ${rowIndex % 2 !== 0 ? 'hex-row-offset' : ''}`}
          >
            {Array.from({ length: cols }).map((_, colIndex) => (
              <div
                key={`hex-${rowIndex}-${colIndex}`}
                className={`hexagon ${randomColors ? getRandomColorClass() : hexClass}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
