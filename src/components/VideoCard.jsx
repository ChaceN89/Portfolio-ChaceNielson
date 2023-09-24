/**
 * Displays a video with text and gives the video section  an ID 
 * - only used in the video page - which isn't used anymore
 */
import React from 'react'

function VideoCard({img, title, description, id="", reverse=false, mutedDefault=false}) {
  
  // select if the txt is in left or reversed
  const normal ="md:flex-row "
  const reversed ="md:flex-row-reverse "
 
  var usedCss=normal
  if(reverse){
    usedCss= reversed
  }

  return (
    <section id={id} className={usedCss + "my-4  flex flex-col md:flex-row overflow-auto  max-h-screen  items-center  bg-white bg-opacity-10 rounded-xl z-10 "}>

        <div className= 'md:w-1/2 text-center  rounded-xl flex-col justify-center p-2'>
          <div className=' text-center font-bold text-3xl sm:text-5xl pb-2 underline  '>{title}</div>
          <div className='sm:text-3xl'>{description}</div>
        </div>
          
        <div className=' grow w-4/6 md:w-1/2'>
          <video  className='w-full  max-h-screen rounded-xl object-cover' muted={mutedDefault}  controls autoplay >
              <source src={process.env.PUBLIC_URL + img} type="video/mp4"/>
              Your browser does not support the video tag.
          </video>
        </div>
    </section>
  )
}

export default VideoCard