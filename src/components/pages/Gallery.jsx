import React from 'react'
import GalleryPhotos from '../photoGallery/GalleryPhotos';
import FadeTransition from '../animations/FadeTransition';
import BackgroundWrapper from '../wrappers/BackgroundWrapper';
import { galleryPhotos, galleryFolder } from '../../data/pageData/galleryData';


export default function Gallery() {
  return (
    <FadeTransition>
      <BackgroundWrapper
        className="min-h-screen"
        src={"/png-backgrounds/overlays/scratch-1.png"}
        backgroundRepeat="repeat"
        backgroundAttachment="scroll"
        bgOpacity={40}
      >
        <GalleryPhotos galleryPhotos={galleryPhotos} galleryFolder={galleryFolder}/>
      </BackgroundWrapper>
    </FadeTransition>
  );
}
