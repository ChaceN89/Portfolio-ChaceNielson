/**Shows after an email is send, will redirect to home page after 4 seconds  */
import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";

function ContactThanks() {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
        navigate('/event')
        }, 4000)
    }, [navigate])

    const buttonCSS = "bg-black text-white rounded-2xl bg-opacity-20 backdrop-blur-xl shadow-lg font-medium py-2 text-lg w-1/4 hover:bg-white hover:text-black flex justify-center"

    return (
      <div className="pt-2 mx-12 sm:mx-20 md:mx-28 lg:mx-36 flex items-center justify-around h-screen -translate-y-20">
        <div className="flex flex-col items-center justify-center space-y-5">
            <AiOutlineCheckCircle size={100}/>
            <h1 className="text-4xl font-bold text-center">Thank You!</h1>
            <p className='text-center'>Thanks for your interest! I will get back to you as soon as possible </p>
            <Link to={"/"} className={buttonCSS + " flex items-center space-x-1 p-4"}>
                <BsArrowLeft/> <span>Home</span>
            </Link>
        </div>
      </div>
  )
}

export default ContactThanks