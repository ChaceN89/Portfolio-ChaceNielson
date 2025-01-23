import React from 'react'
import { Link } from 'react-router-dom'
import { useBackgroundLocation } from '../routing/LocationProvider';


export default function Specialization() {
    const backgroundLocation = useBackgroundLocation();

  return (
    <div className='text-black flex flex-col items-left justify-center'>
      Specialixzation
      <Link
              className="hover:bg-red-600 hover:text-white p-4 rounded-md bg-blue-300"

        to="?project=capstone"
        // state={{ backgroundLocation }} // For navigation with background
      >
        Open Capstone Project
      </Link>
    </div>
  )
}
