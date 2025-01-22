/**
 * @file DownloadCV.jsx
 * @module DownloadCV
 * @desc React component for downloading resume and cover letter PDFs. Additional buttons can be added if needed.
 * 
 * @component DownloadCV
 * 
 * @requires react
 * @requires openPdf from '../../functions/utils'
 * @requires MyButton from '../../components/buttons/MyButton'
 * @requires FaFileDownload from 'react-icons/io'
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * 
 * @returns {JSX.Element} The DownloadCV component with buttons to download resume and cover letter.
 * 
 * @example
 * // Example usage of DownloadCV component
 * import DownloadCV from './DownloadCV';
 * 
 * function App() {
 *   return (
 *     <div className="App">
 *       <DownloadCV />
 *     </div>
 *   );
 * }
 * 
 * @exports DownloadCV
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-09
 * @since 2.1
 */

import React from 'react';
import { openPdf } from '../../functions/utils';
import MyButton from '../../components/buttons/MyButton';
import { FaFileDownload } from "react-icons/fa";

function DownloadCV() {
  // Functions to open PDFs in a separate tab
  const openResume = () => openPdf("Chace Nielson - CV.pdf");
  const openCoverLetter = () => openPdf("Chace Nielson - Cover Letter.pdf");

  return (
    <div className='flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-6'>
      <MyButton onClick={openResume}>
        <span className='flex items-center gap-1'>My CV <FaFileDownload/></span>
      </MyButton>
      <MyButton onClick={openCoverLetter}>
        <span className='flex items-center gap-1'>Cover Letter <FaFileDownload/></span>
      </MyButton>
    </div>
  );
}

export default DownloadCV;
