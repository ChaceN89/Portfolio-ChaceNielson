/**
 * Modal pop up for a project to give more detail of a project
 * 
 * displays images in either a grid box or a gallery depending on whats in the modal infoamiton
 * will also diaplsy a video at the bottom
 */
import React from 'react'

import VideoAndPhotoCard from './VideoAndPhotoCard';
import GalleryPhotos from './GalleryPhotos';
import { recordGAEvent } from '../functions/googleAnalytics';

export default function ModalProjectCard({title, techStack, modalInfo, externalLinks=[]}) {

  // get the longer description, photos list and videos list
  const { description=null, photos=null, videos=null, useGallery=false } = modalInfo;

  return (
    <div className='bg-[#1F2021] relative h-5/6 mx-4  rounded-md border border-white p-10 overflow-y-auto overscroll-contain lg:px-20'>

      <div className='text-3xl sm:text-6xl font-bold titleFont mb-10 text-center'>{title}</div>
      <div className='py-2'>{description}</div>

      {/* tech stack */}
      <div className=' flex py-2 flex-wrap '>
        {techStack.map((item)=>{
          return (<div className='rounded-xl text-black bg-slate-300 font-bold w-fit  py-0.5 px-2 m-1 text-center' key={item}>{item}</div>)
        })}
      </div>

      {/* list of links */}
      <div className=' flex flex-wrap '>
        {externalLinks.map((item, index)=>{
          return (
            <a onClick={()=> recordGAEvent("Click Link", item.link, "Project list")} 
                key={index} href={item.link} 
                target="_blank" rel="noreferrer" className='flex justify-center items-center pr-4 mx-2 py-1 rounded-2xl  text-white hover:scale-110 hover:text-slate-300 space-x-1 select-none'>
                <div>{item.icon}</div>
                <div>{item.name}</div>
            </a>
          )
        })}
      </div>

      {/* photos has a list display white line and either photo gallery or a list of cards */}
      {photos ? (
        <>
        <hr className='container mx-auto my-6 h-0.5 border border-white' />
      
        {/* request to use a gallery to dispaly else display photo card */}
        { useGallery ?
          <GalleryPhotos 
          data={photos}
          />
          : // lse jsut display a video card
          <div className='grid xl:grid-cols-2 gap-2'>
            <VideoAndPhotoCard
              list={photos}
              type={"photo"}
            />
          </div>
        }
        </>
      ) : null}


      {/*  if videos use WHite line and then dispaly videos */}
      {videos ? (
        <>
          <hr className='container mx-auto my-6 h-0.5 border border-white' />
          <VideoAndPhotoCard
            list={videos}
            type={"video"}
          />
        </>
      ) : null}
    </div>
  )
}
