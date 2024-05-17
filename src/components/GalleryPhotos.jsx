/**
 * Default Gallery of Photos that can also add a description to it
 * used by the main gallery and also porject modals
 * {image: url, description :"an optional description "}
 * */
import React,{useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export default function GalleryPhotos({data}) {

	// for model pop up
	const [modal, setModal] = useState(false)
	const [tempImage, setTempImage] = useState("")

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
    <>
		{/* the temp image for the modal */}
		{tempImage &&
			<div className={modal ? "h-full model isOpen" : "h-0 modal"} >
				<img id='image'  src={tempImage} alt="...model" className=''/>
				<AiOutlineClose className='closeModal'  onClick={onClose}  size={60}/>
			</div>
		}

      	<div className='gallery p-4 md:p-6 text-center'>
			{data.map((item, index)=>{
				return(
					<div className='py-2'>
						<div className='flex flex-col max-w-full '>
							{item.description &&  <div className='text-center '>{item.description}</div> }
							<img 
								id='image' 
								onClick={()=>getImg(item.image)} 
								key={index} 
								loading='lazy' 
								src={item.image} 
								alt="..." 
								className=' object-contain rounded-xl cursor-pointer '/>
						</div>
					</div>
				)
			})}
      	</div>
    </>
  )
}
