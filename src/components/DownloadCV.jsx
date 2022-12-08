/**
 * Downlaod Resume and Cover Letter and can add mor buttons if need be
 */
import React from 'react'
import DownloadButton from './DownloadButton';

function DownloadCV() {
    const downloadResume = () => {
		try { 
			const fileName = "Chace Nielson - Resume.pdf" 
			var FileSaver = require('file-saver');
			FileSaver.saveAs(process.env.PUBLIC_URL + '/pdfs/'+fileName, fileName);
		} catch {
			return
		}
    }
    const downloadCoverLetter = () => {
		try { 
			const fileName = "Chace Nielson - Cover Letter.pdf"
			var FileSaver = require('file-saver');
			FileSaver.saveAs(process.env.PUBLIC_URL + '/pdfs/'+fileName, fileName);
		} catch {
			return
		}
    }

	return (
		<div className='py-6 flex justify-center space-x-4 sm:space-x-20 lg:space-x-36'>
			<DownloadButton onClick={downloadResume} name={"Resume"}/>
			<DownloadButton onClick={downloadCoverLetter} name={"Cover Letter"}/>
		</div>
	)
}

export default DownloadCV