/**
 * dispalys either a video of a image that has been formated with the same css
 */
import React from 'react'

export default function VideoAndPhotoCard({list, type="photo"}) {

	// css for the imag or vide o
	const img_vid_css ="rounded-sm object-contain  max-h-[40rem] h-5/6 max-w-full"

	// if the list is null just return 
	if (!list){
			return null
	}

	// html to return for either a video or an image
  return (
    <>

			{list.map((item, index) => (
				<div className=' flex justify-center'>
					<div>
						<div className='text-center text-lg'>{item.description}</div>
						{type ==="photo" ?
								<img 
									className={img_vid_css}
									id='image' 
									key={index} 
									loading='eager' 
									src={process.env.PUBLIC_URL + item.path} 
									alt="..." 
								/>
							:
								<video 
									className={img_vid_css} 
									muted={true} 
									controls 
									autoPlay
									allowfulscreen={false}
								>
									<source src={process.env.PUBLIC_URL + item.path} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
						}
					</div>
				</div>
			))}
    </>

  )
}
