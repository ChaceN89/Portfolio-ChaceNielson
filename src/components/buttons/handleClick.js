/**
 * @file handleClick.js
 * @module handleClick
 * @desc Function to handle different click events, such as scrolling, clicking, or opening a link.
 * 
 * @requires react-scroll
 * @requires ../../globals
 * 
 * @param {Object} params - The parameters object.
 * @param {string} [params.to=null] - The target element to scroll to.
 * @param {function} [params.onClick=null] - The click event handler.
 * @param {string} [params.aLink=null] - The link to open in a new tab.
 * @param {Event} [params.event=null] - The event object.
 * 
 * @example
 * handleClick({ to: 'section1', event: e });
 * handleClick({ onClick: handleClickFunction, event: e });
 * handleClick({ aLink: 'https://example.com', event: e });
 * 
 * @exports handleClick
 * 
 * @created 2024-07-17
 * @updated 2024-07-31
 * @since 2.1
 */

import { scroller } from 'react-scroll';
import { globals } from "../../data/globals";

/**
 * Function to handle different click events.
 *
 * @param {Object} params - The parameters object.
 * @param {string} [params.to=null] - The target element to scroll to.
 * @param {function} [params.onClick=null] - The click event handler.
 * @param {string} [params.aLink=null] - The link to open in a new tab.
 * @param {Event} [params.event=null] - The event object.
 */
export default function handleClick({ to = null, onClick = null, aLink = null, event = null }) {
  if (event) {
    event.preventDefault();
  }

  if (to) {
    scroller.scrollTo(to, {
      spy: true,
      smooth: true,
      offset: globals.ScrollLink.offset,
      duration: globals.ScrollLink.duration,
    });
  } else if (onClick) {
    onClick(event);
  } else if (aLink) {
    window.open(aLink, '_blank');
  }
}
