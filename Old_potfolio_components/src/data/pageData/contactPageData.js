/**
 * @file contactPageData.js
 * @module contactPageData
 * @desc Contains data for the contact page, including the title, description, and EmailJS configuration variables.
 * 
 * @requires process.env.REACT_APP_EMAILJS_USER_ID
 * @requires process.env.REACT_APP_EMAILJS_SERVICE_ID
 * @requires process.env.REACT_APP_EMAILJS_TEMPLATE_ID
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * @see {@link https://www.emailjs.com/docs/ | EmailJS Documentation}
 * 
 * @example
 * // Example usage of contactPageData in a component
 * import { contactPageData } from '../data/contactPageData';
 * 
 * function ContactPage() {
 *   return (
 *     <div>
 *       <h1>{contactPageData.title}</h1>
 *       <p>{contactPageData.description}</p>
 *       // Other components and logic
 *     </div>
 *   );
 * }
 * 
 * @exports contactPageData
 * 
 * @author Chace Nielson
 * @since 2.1
 * @created 2024-07-28
 * @updated 2024-07-28
 */

export const contactPageData = {
  title: "Let's Connect",
  description: "Send me a message and let's start a conversation.",

  // EmailJS variables
  EMAILJS_USER_ID: process.env.REACT_APP_EMAILJS_USER_ID,
  EMAILJS_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
};
