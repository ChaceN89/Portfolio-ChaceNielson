/**
 * Photo Carousel to display all sizes of photos in a fixed space
 * Used arrow keys to navigate between photos (may not work on some browsers)
 */
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

	document.onkeydown = (e)=> {
		switch (e.keyCode) {
			case 37: //left arrow button
				prevSlide()
				break;
			case 39: // right arrow button
				nextSlide()
				break;
			default:
		}
	};

	return(
		<div className='pt-12 container mx-auto relative h-fit'>
			<FaArrowLeft className="arrow leftArrow" onClick={prevSlide}/>
			<FaArrowRight className="arrow rightArrow" onClick={nextSlide}/>
			<div className='flex justify-center'>
				<ImShuffle className="arrow bottomArrow" onClick={randomSlide}/>
			</div>
			{carouselData.map((item, index) =>{
				return(
					<div key={index} className={index === current ? 'slide active ' : 'slide'}>
						<div className='grid grid-cols-1 place-items-center  relative h-fit w-auto'>
							{index === current && (
								<img id='image' key={index} loading='lazy' src={item.image} alt="..." className='rounded-[2rem] object-contain  max-h-[40rem] max-w-full p-4'/>
							)}
						</div>
					</div>
				)
			})}    
		</div>
	)
}

export default Carousel