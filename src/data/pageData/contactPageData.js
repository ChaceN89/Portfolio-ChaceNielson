/**
 * @file contactPageData.js
 * @module contactPageData
 * @desc Contains data for the contact page, including the title, description, and EmailJS configuration variables.
 * 
 * @see {@link https://www.emailjs.com/docs/ | EmailJS Documentation}
 * 
 * @exports contactPageData
 * @author Chace Nielson
 * @created July 28, 2024
 * @updated Jan 22, 2025
 */

export const contactPageData = {
  title: "Let's Connect",
  description: "Send me a message and let's start a conversation.",

  // EmailJS variables
  EMAILJS_USER_ID: import.meta.env.APP_EMAILJS_USER_ID,
  EMAILJS_SERVICE_ID: import.meta.env.APP_EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID: import.meta.env.APP_EMAILJS_TEMPLATE_ID,
};
