/**
 * Download button that takes function and name of button
 * Uses download icon for all instances
 */
import React from 'react'
import { AiOutlineDownload } from "react-icons/ai";

function DownloadButton({onClick, name}) {
    return (
        <button onClick={onClick} className='relative group rounded-xl cursor-pointer flex justify-between items-center overflow-hidden  hover:bg-white hover:text-black bg-gray-700 bg-opacity-20 shadow-2xl backdrop-blur-3xl'>
            <div className=' p-2 bg-white bg-opacity-20   flex justify-center items-center '>
                <AiOutlineDownload size={30} className="hover:text-black hover:scale-105"/>
            </div>
            <div className="px-4">{name}</div> 
        </button>
    )
}

export default DownloadButton