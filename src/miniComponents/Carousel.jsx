import React, {useState} from 'react'
import { carouselData } from '../carouselData';
import { ImShuffle } from "react-icons/im";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Carousel() {
    const numOfSlides = carouselData.length
    const randomIndex = Math.floor(Math.random() * (numOfSlides))

    const [current, setCurrent] = useState(randomIndex)

    const prevSlide =()=>{
        setCurrent(current === 0 ? numOfSlides - 1 : current - 1);
    }
    const nextSlide =()=>{
        setCurrent(current === numOfSlides - 1 ? 0 : current + 1);
    }

    const randomSlide = () => {
        setCurrent(Math.floor(Math.random() * (numOfSlides)))
    }

    if(numOfSlides ===0 ){
        return null
    }


		const arrowCSS = ' absolute text-white z-20  select-none cursor-pointer opacity-25 hover:opacity-100 text-3xl md:text-5xl hover:text-black  '

		const leftArrow = "top-1/2 left-8  sm:left-24  md:left-32  lg:left-36  xl:left-40  2xl:left-96 "
		const rightArrow ="top-1/2 right-8 sm:right-24 md:right-32 lg:right-36 xl:right-40 2xl:right-96 "

  return (
    <div className='
		relative my-14 flex justify-center items-center 
		w-screen 
		mx-10 sm:mx-20 md:mx-40  
		px-12 sm:px-24 md:px-36 lg:px-40  '
	>

			<FaArrowLeft className={arrowCSS + leftArrow} onClick={prevSlide}/>
			<FaArrowRight className={arrowCSS + rightArrow} onClick={nextSlide}/>
			<ImShuffle className={arrowCSS + ' -bottom-4 '} onClick={randomSlide}/>
			
      {carouselData.map((item, index) =>{
        return(
			<div
				className={index === current ? ' slide active right-6' : 'slide'}
				key={index}
			>
				{index === current && (
					<img id='image' key={index} src={item.image} alt="..." 
						className='  
						object-contain 
						h-96  sm:h-108 md:h-111
						rounded-2xl  ' 
					/>
				)}
			</div>
		)
      })}    
    </div>
  )
}

export default Carousel