/**
 * @file ReturnToTop.jsx
 * @module ReturnToTop
 * @desc React component that provides a button to return to the top of the Home page.
 * The button uses react-scroll to smoothly scroll back to the top and includes a tooltip.
 * 
 * @component ReturnToTop
 * 
 * @requires react
 * @requires globals from '../../data/globals'
 * @requires react-scroll { Link as ScrollLink }
 * @requires react-icons/fa { FaArrowUp }
 * @requires Tooltip from './Tooltip'
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://www.npmjs.com/package/react-scroll | React Scroll Documentation}
 * @see {@link https://github.com/react-icons/react-icons | React Icons Documentation}
 * 
 * @returns {JSX.Element} The ReturnToTop button component that scrolls to the top of the Home page.
 * 
 * @example
 * // Example usage of ReturnToTop component
 * import ReturnToTop from './ReturnToTop';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       // Other components 
 *       <ReturnToTop />
 *     </div>
 *   );
 * }
 * 
 * @exports ReturnToTop
 * 
 * @author Chace Nielson
 * @since 2.1
 * @created 2024-07-28
 * @updated 2024-08-08
 */

import React from 'react';
import { globals } from '../../data/globals';
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import Tooltip from './Tooltip';

/**
 * ReturnToTop component
 *
 * @returns {JSX.Element} The ReturnToTop button component.
 */
function ReturnToTop() {
  return (
    <div className="fixed bottom-2 right-2 z-10">
      <Tooltip text={"To Top"}>
        <ScrollLink
          className="hover:cursor-n-resize"
          to={"Home"}
          spy={true}
          smooth={true}
          offset={globals.ScrollLink.offset}
          duration={globals.ScrollLink.duration}
        >
          <div className="hidden sm:flex w-10 h-10 p-2 bg-secondary rounded-full opacity-15 hover:opacity-60 items-center justify-center">
            <FaArrowUp className="text-primary" />
          </div>
        </ScrollLink>
      </Tooltip>
    </div>
  );
}

export default ReturnToTop;
