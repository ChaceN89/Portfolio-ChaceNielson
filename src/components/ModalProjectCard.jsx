/**
 * Modal pop up for a project to give more detail of a project
 */
import React from 'react'
import SectionHeader from './SectionHeader'

import VideoAndPhotoCard from './VideoAndPhotoCard';

export default function ModalProjectCard({title, techStack, modalInfo}) {

  // get the longer description, photos list and videos list
  const { description, photos, videos } = modalInfo;

  return (
    <div className='bg-[#1F2021] relative h-5/6 mx-4  rounded-md border border-white p-10 overflow-y-auto overscroll-contain lg:px-20'>

      <div className='text-3xl sm:text-5xl font-bold titleFontmb-4 text-center'>{title}</div>
      <div className='py-2 '>{description}</div>

      <div className=' flex py-2 '>
        {techStack.map((item)=>{
          return (<div className='rounded-xl text-black bg-slate-300 font-bold w-fit  py-0.5 px-2 m-1 text-center' key={item}>{item}</div>)
        })}
      </div>

      {photos || videos ? (
        <hr className='container mx-auto my-6 h-0.5 border border-white' />
      ) : null}

        {/* grid box of both videos and images */}
      <div className='grid xl:grid-cols-2 gap-1'>

        {/* Videos and Photos if they exist */}
        <VideoAndPhotoCard
          list={photos}
          type={"photo"}
        />

        <VideoAndPhotoCard
          list={videos}
          type={"video"}
        />
      </div>
    </div>
  )
}
