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
import { openPdf } from '@/utils/utils';
import { FaFileDownload } from "react-icons/fa";
import MyBtn from '../buttons/MyBtn';

function DownloadCV() {
  // Functions to open PDFs in a separate tab
  const openResume = () => openPdf("Chace Nielson - Resume.pdf");
  const openCoverLetter = () => openPdf("Chace Nielson - Cover Letter.pdf");

  return (
    <div className=' my-2 flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-6'>
      <MyBtn sm callBack={openResume} GA_label="Resume Download">
        <span className='flex items-center gap-1'>Resume <FaFileDownload/></span>
      </MyBtn>
      <MyBtn sm callBack={openCoverLetter} GA_label="Cover Letter Download">
        <span className='flex items-center gap-1'>Cover Letter <FaFileDownload/></span>
      </MyBtn>
    </div>
  );
}

export default DownloadCV;
