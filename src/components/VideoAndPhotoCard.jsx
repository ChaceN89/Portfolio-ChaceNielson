/**
 * dispalys either a video of a image that has been formated with similar CSS
 */
import React from 'react'

export default function VideoAndPhotoCard({list, type="photo"}) {


	// if the list is null just return 
	if (!list){
			return null
	}

	// html to return for either a video or an image
  return (
    <>
		{list.map((item, index) => (
			<div className='flex justify-center text-center'>
				<div>
					<div className='text-center text-lg'>{item.description}</div>
					{type ==="photo" ?
							<img 
								className={"rounded-sm object-contain max-w-full"}
								id='image' 
								key={index} 
								loading='lazy' 
								src={item.image} 
								alt="..." 
							/>
						:
						<div className='max-h-screen'>
							<div className='h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
								<video
									className="h-full w-full object-contain"
									muted={true}
									controls
									autoPlay
									playsinline
								>
								<source src={item.path} type="video/mp4" />
								Your browser does not support the video tag.
								</video>
							</div>
						</div>
					}
				</div>
			</div>
		))}
    </>

  )
}
