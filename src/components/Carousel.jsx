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
			case 37:
				prevSlide()
				break;
			case 39:
				nextSlide()
				break;
		}
	};

	return(
		<div className='pt-12 container mx-auto relative h-fit'>
			<FaArrowLeft className="arrow leftArrow" onClick={prevSlide}/>
			<FaArrowRight className="arrow rightArrow" onClick={nextSlide}/>
			<ImShuffle className="arrow bottomArrow" onClick={randomSlide}/>
			{carouselData.map((item, index) =>{
				return(
					<div key={index} className={index === current ? 'slide active ' : 'slide'}>
						<div className='grid grid-cols-1 place-items-center  relative h-fit w-auto'>
							{index === current && (
								<img id='image' key={index} src={item.image} alt="..." className='rounded-[2rem] object-contain  max-h-[40rem] max-w-full p-4'/>
							)}
						</div>
					</div>
				)
			})}    
		</div>
	)
}

export default Carousel