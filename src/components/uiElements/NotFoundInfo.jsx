import React from 'react'
import HexSeparator from '@/components/uiElements/hexSparator/HexSeparator'
import MyBtn from '@/components/buttons/MyBtn'
import { useNavigate } from 'react-router-dom'

export default function NotFoundInfo({name}) {

  const navigate = useNavigate();
  const returnHome = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col items-center text-center text-primary'>
    
      <HexSeparator randomColors  rows={8} hexClass=' opacity-40' />
        <div className="font-extrabold relative my-drop-shadow-lg outlined-text text-tertiary opacity-80 text-9xl">
          404
        </div>
      
      <div className='space-y-2  flex flex-col items-center justify-center mt-10 text-secondary'>

        <h3>Oops! You're off the map.</h3>

        <p>
          The {name ? name : "page"} you’re looking for doesn’t exist or might’ve moved.
          <br />
          But no worries — let’s get you back on track.
        </p>
    

        <MyBtn callBack={returnHome}  >Return Home</MyBtn>
      </div>
    </div>
  )
}
