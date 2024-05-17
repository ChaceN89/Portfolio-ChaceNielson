/**
 * Downlaod Resume and Cover Letter and can add mor buttons if need be
 */
import React from 'react'
import DownloadButton from './DownloadButton';
import openPdf from '../functions/openPDF';

function DownloadCV() {
	// functions to open pdfs in a separate
	const openResume = () => openPdf("Chace Nielson - Resume.pdf");
    const openCoverLetter = () => openPdf("Chace Nielson - Cover Letter.pdf");

	return (
		<div className='py-6 flex justify-center space-x-4 sm:space-x-20 lg:space-x-36'>
			<DownloadButton onClick={openResume} name={"Resume"}/>
			<DownloadButton onClick={openCoverLetter} name={"Cover Letter"}/>
		</div>
	)
}

export default DownloadCV