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

	document.onkeydown = function(e) {
		switch (e.keyCode) {
			case 37:
				prevSlide()
				break;
			case 39:
				nextSlide()
				break;
		}
	};

	return(
		<div className='pt-12 container mx-auto relative max-h-screen'>
			<FaArrowLeft className="arrow leftArrow" onClick={prevSlide}/>
			<FaArrowRight className="arrow rightArrow" onClick={nextSlide}/>
			<ImShuffle className="arrow bottomArrow" onClick={randomSlide}/>

			{carouselData.map((item, index) =>{
				return(
					<div key={index} 
						className={index === current ? 'slide active ' : 'slide'}>

						<div className='
						grid grid-cols-1 place-items-center  relative 
						max-h-screen						 w-auto
						'>
							
							{index === current && (
								<img id='image' key={index} src={item.image} alt="..." 
								className='

								rounded-[2rem]
								object-contain 
								max-h-[40rem]
								max-w-full
								p-4 
								' 
								/>
							)}
						</div>
					</div>
				)
			})}    
		</div>
	)

	/**
	 * 
	 .container {
  width: 300px;
  border: dashed blue 1px;
}

.container img {
  max-height: 100%;
  max-width: 100%;
}
	 */



  	return (
    <div className='
		relative my-14 flex justify-center items-center 
		w-screen 
		mx-10 sm:mx-20 md:mx-40  
		px-12 sm:px-24 md:px-36 lg:px-40  '
	>

		<FaArrowLeft className="arrow leftArrow" onClick={prevSlide}/>
		<FaArrowRight className="arrow rigthArrow" onClick={nextSlide}/>
		<ImShuffle className="arrow" onClick={randomSlide}/>
			
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