import React, {useState} from 'react'

export default function OpeningPhotos() {

    const photoList =[
      process.env.PUBLIC_URL + '/portaits/portrait6.jpg',
      process.env.PUBLIC_URL + '/portaits/portraitJapan.jpg',
      process.env.PUBLIC_URL + '/portaits/portraitMountainCrop.jpg',

        
    ]

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const nextPhoto = () => {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === photoList.length - 1 ? 0 : prevIndex + 1
      );
    };

    // getthe index of the next photo and loop back to 0 at the length
    const nextPhotoIndex = () => {
        return (currentPhotoIndex + 1) % photoList.length; // Loop back to 0 when reaching the end
    };

  return (
    <div className="row-span-2 container mx-6 my-2 max-w-xs sm:max-w-md md:max-w-md lg:max-w-lg bg-white bg-opacity-60 backdrop-blur-lg rounded-xl rotate-3 z-10">
        <img
            src={photoList[nextPhotoIndex()]}
            alt="..."
            className="p-1 rounded-xl w-full h-full absolute "
            onClick={nextPhoto}
            style={{ cursor: 'pointer' }}
        />
        {/* bottom one is on top as its rotated back 2 -- top one is rotated and behind the image */}
        <img
            src={photoList[currentPhotoIndex]}
            alt="..."
            className="p-1 w-full h-full -rotate-3 z-10 bg-white bg-opacity-60 backdrop-blur-lg rounded-xl"
            onClick={nextPhoto}
            style={{ cursor: 'pointer' }}
        />
    </div>
  )
}


// simpiler version of the code

//   return (
//     <div className="row-span-2 container mx-6 my-2 max-w-xs sm:max-w-md md:max-w-md lg:max-w-lg bg-white bg-opacity-60 backdrop-blur-lg rounded-xl z-10">
//         <img
//             src={photoList[currentPhotoIndex]}
//             alt="..."
//             className="p-1 rounded-xl w-full h-full  "
//             onClick={nextPhoto}
//             style={{ cursor: 'pointer' }}
//         />
//     </div>
//   )