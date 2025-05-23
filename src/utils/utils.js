/**
 * @file utils.js
 * @module utils
 * @desc Utility functions used across the application.
 * 
 * @created July 28, 2024
 * @updated May 12, 2025
 */

/**
 * Function to open a PDF file located in the 'pdfs' folder within the 'public' folder.
 * @param {string} pdfName - The name of the PDF file to open.
 * @returns {void}
 */
function openPdf(pdfName) {
  const fileUrl = `/pdf-viewer.html?pdf=${encodeURIComponent(pdfName)}`;
  window.open(fileUrl, '_blank');
}

/**
 * Shuffles an array randomly.
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

/**
 * Function to remove URL parameters from the current page.
 * This function uses the History API to replace the current URL with a new one that has no parameters.
 * It does not reload the page, but updates the URL in the address bar.
 */
function removeParamsFromUrl() {
  const currentPath = window.location.pathname;
  const currentParams = window.location.search;
  const newPath = currentParams ? `${currentPath}` : currentPath;
  window.history.replaceState(null, '', newPath);
}

/**
 * Function to scroll to a specific element by its ID.
 * This function uses the react-scroll library to perform smooth scrolling.
 * @param {string} id - The ID of the element to scroll to.
 */
import { scroller } from "react-scroll";
import { globals } from "@/data/globals";


function ScrollToID(id) {
  const element = document.getElementById(id);
  if (element) {
    scroller.scrollTo(id, {
      smooth: true,
      duration: globals.scrollDuration,
      offset: globals.navbarHeight,
    });
  }
}


/**
 * Navigates to a modal route using a query parameter (e.g., ?specialization=ID).
 * Useful for opening route-based modals while preserving the current path.
 *
 * @function openModal
 * @param {string} type - The query parameter key (e.g., "specialization", "video").
 * @param {string} id - The ID value to assign to the query parameter.
 * @param {Function} navigate - The `navigate` function from `useNavigate()` (React Router).
 * @param {object} location - The `location` object from `useLocation()` (React Router).
 */
function openModal({ type, id, navigate, location }) {
  const currentPath = location.pathname;
  const searchParams = new URLSearchParams(location.search);

  if (searchParams.get(type) === id) return; // already open

  searchParams.set(type, id);
  navigate(`${currentPath}?${searchParams.toString()}`, { replace: true });
}


// Export default function utils() {
export { 
  openPdf, 
  shuffleArray, 
  removeParamsFromUrl, 
  ScrollToID,
  openModal 
};

