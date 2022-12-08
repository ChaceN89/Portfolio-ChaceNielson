import React from 'react'
import {AiOutlineCloudDownload} from 'react-icons/ai'

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

			<button onClick={downloadResume} className='relative group rounded-xl shadow bg-black cursor-pointer flex justify-between items-center overflow-hidden  hover:bg-white hover:text-black  opacity-70'>
				<div className=' p-2 bg-white bg-opacity-20   flex justify-center items-center '>
					<AiOutlineCloudDownload size={30} className="hover:text-black hover:scale-105"/>
				</div>
				<div className="px-5">Resume</div> 
			</button>
			
			<button onClick={downloadCoverLetter}  className='group rounded-xl shadow bg-black cursor-pointer flex justify-between items-center overflow-hidden  hover:bg-white hover:text-black  opacity-70'>
				<div className='relative p-2 bg-white bg-opacity-20   flex justify-center items-center '>
					<AiOutlineCloudDownload size={30} className="hover:text-black hover:scale-105"/>
				</div>
				<p className="px-5">Cover Letter</p>
			</button>
	
		</div>
	)

}

export default DownloadCV