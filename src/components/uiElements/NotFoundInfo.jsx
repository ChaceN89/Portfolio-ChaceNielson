/**
 * @file NotFoundInfo.jsx
 * @module NotFoundInfo
 * @description A React component that displays a 404 Not Found message.
 * It includes a button to return to the home page and a decorative hexagonal separator.
 * 
 * @author Chace Nielson
 * @created  May 12th 2025
 * @updated  May 12th 2025
 */
import React from 'react'
import HexSeparator from '@/components/uiElements/hexSparator/HexSeparator'
import MyBtn from '@/components/buttons/MyBtn'
import { useNavigate } from 'react-router-dom'

export default function NotFoundInfo({name}) {

  const navigate = useNavigate();
  const returnHome = () => {
    // check to see if already home
    navigate('/');
  };

  return (
    <div className='flex flex-col items-center text-center text-primary'>
    
      <HexSeparator randomColors  rows={8} hexClass=' opacity-40' />
        <div className="font-extrabold relative my-drop-shadow-lg outlined-text text-accent opacity-80 text-9xl">
          404
        </div>
      
      <div className='space-y-2  flex flex-col items-center justify-center mt-10 text-secondary'>

        <h3>Uh-oh! You’ve reached uncharted code.</h3>

        <p>
          The {name ? name : "page"} you're looking for may be under construction or was moved during the last site refactor.
          <br />
          Head back home and explore some of my featured work instead.
        </p>

        <MyBtn callBack={returnHome}  >Return Home</MyBtn>
      </div>
    </div>
  )
}
