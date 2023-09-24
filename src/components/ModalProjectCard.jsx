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
    <div className='bg-[#1F2021] relative h-5/6 mx-4 w-full rounded-md border border-white p-10 overflow-y-auto overscroll-contain'>
        <SectionHeader title={title} />
        
        <div className='py-2'>{description}</div>
        <div className=' flex '>
          {techStack.map((item)=>{
            return (<div className='rounded-xl text-black bg-slate-300 font-bold w-fit  py-0.5 px-2 m-1 text-center' key={item}>{item}</div>)
          })}
        </div>

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
  )
}
