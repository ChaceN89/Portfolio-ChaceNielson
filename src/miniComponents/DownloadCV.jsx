import React from 'react'

function DownloadCV() {

		const buttonCss =" px-7 py-1 rounded-2xl hover:bg-white hover:text-black hover:font-bold " 

    const downloadFile = e => {
			try { 
				const fileName = e.target.value
				var FileSaver = require('file-saver');
				FileSaver.saveAs(process.env.PUBLIC_URL + '/pdfs/'+fileName, fileName);
			} catch {
				return
			}
    }

  return (
    <div className='pt-5 flex text-center justify-center space-x-2 md:space-x-16'>
			<button onClick={downloadFile} className={buttonCss} value="Chace Nielson - Resume.pdf"> Download My Resume </button >
			<button onClick={downloadFile} className={buttonCss} value="Chace Nielson - Cover Letter.pdf">Download My Cover Letter </button >
    </div>
  )
}

export default DownloadCV