/**
 * Page containing a gallery of all photos
 */
import React, { useState, useEffect } from 'react'
import { mainPhotoList } from '../data/photoData/mainPhotoList';
import SectionHeader from '../components/SectionHeader'
import { BsArrow90DegLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';

// improt to shuffle the array
import shuffleArray from '../functions/shuffleArray';
import GalleryPhotos from '../components/GalleryPhotos';

//Google analytics
import { recordGAPage } from '../functions/googleAnalytics';

// shuffle the mainPhotoList before using it (jsut the reference)
const shuffledPhotoList = shuffleArray(mainPhotoList)

function Gallery() {
  // for model pop up
  const [modal, setModal] = useState(false)
  const [tempImage, setTempImage] = useState("")

  useEffect(() => {
    recordGAPage("Gallery");
  }, [])
  
  // fore escape key to escape model
  document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
      setModal(false)
    }
  });
  // functions for setting modal status and value
  const getImg =(e)=>{
    setTempImage(e)
    setModal(true)
  }
  const onClose =()=>{
    setModal(false)
  }

  return (
    <section className=' '>
      <div className='fixed top-10 left-10'>
        <Link to="/">
        <BsArrow90DegLeft className='p-1 fixed top-6 left-6 hover:text-white hover:opacity-100 opacity-40 hover:scale-105 cursor-pointer'  onClick={onClose}  size={40}/>
        </Link>
      </div>

      <div className='py-10 container mx-auto px-2 sm:px-7 md:px-10 '>
        <SectionHeader title= {"My Gallery"} description={"Some Of My Photos"}/>
      </div>

      <GalleryPhotos 
        data={shuffledPhotoList}
        onClickFunction={getImg}
        closeFunction= {onClose}
        tempImage={tempImage}
        modal={modal}
      />
    </section>
  )
}

export default Gallery