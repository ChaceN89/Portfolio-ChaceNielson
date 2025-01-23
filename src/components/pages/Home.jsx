import React from 'react';
import { Link } from 'react-router-dom';
import { useBackgroundLocation } from '../routing/LocationProvider';

export default function Home() {
  const backgroundLocation = useBackgroundLocation();

  return (
    <div className="bg-pink-500 h-80 pt-20 space-y-3 flex flex-col items-center">
      <h1 className="text-2xl text-center">Home</h1>

      <Link
              className="hover:bg-red-600 hover:text-white p-4 rounded-md bg-blue-300"

        to="/project/capstone"
        state={{ backgroundLocation }} // For navigation with background
      >
        Open Capstone Project
      </Link>

      <Link
              className="hover:bg-red-600 hover:text-white p-4 rounded-md bg-blue-300"

        to="/skills/frontend"
        state={{ backgroundLocation }} // For navigation with background
      >
        Open Frontend Skills
      </Link>
    </div>
  );
}
