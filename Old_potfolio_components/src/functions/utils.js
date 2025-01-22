/**
 * @file utils.js
 * @module utils
 * @desc Contains utility functions used across the application.
 * 
 * @requires process.env.PUBLIC_URL
 * 
 * @see {@link https://react.dev/ | React Documentation}
 * 
 * @example
 * // Example usage of openPdf function
 * import { openPdf } from './utils';
 * 
 * openPdf('example.pdf');
 * 
 * @example
 * // Example usage of shuffleArray function
 * import { shuffleArray } from './utils';
 * 
 * const array = [1, 2, 3, 4, 5];
 * const shuffledArray = shuffleArray(array);
 * console.log(shuffledArray);
 * 
 * @exports openPdf
 * @exports shuffleArray
 * 
 * @since 2.1
 * @created 2024-07-28
 * @updated 2024-07-28
 */

/**
 * Function to open a PDF file located in the 'pdfs' folder within the 'public' folder.
 * @param {string} pdfName - The name of the PDF file to open.
 * @returns {void}
 */
function openPdf(pdfName) {
  const fileUrl = `${process.env.PUBLIC_URL}/pdf-viewer.html?pdf=${encodeURIComponent(pdfName)}`;
  window.open(fileUrl, '_blank');
}

/**
 * Function to shuffle an array randomly.
 * @param {Array} array - The array to shuffle.
 * @returns {Array} - The shuffled array.
 */
function shuffleArray(array) {
  const newArray = [...array]; // Create a copy of the original array

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
    // Swap newArray[i] and newArray[j]
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray; // Return the shuffled copy
}

export { openPdf, shuffleArray };
