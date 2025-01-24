import React from 'react'
import { Link } from 'react-router-dom'
import { projectParam, skillParam } from '../../data/globals'


export default function Gallery() {
  return (
    <div className="space-y-5 flex flex-col items-center justify-center">
      <h1>gallery Page</h1>
      <Link
        className="hover:bg-red-600 hover:text-white p-4 rounded-md bg-blue-300"
        to={`?${projectParam}=capstone`}
      >
        Open Capstone Project Modal from Gallery
      </Link>
      <br />
      <Link
        className="hover:bg-red-600 hover:text-white p-4 rounded-md bg-blue-300"
        to={`?${skillParam}=frontend`}
      >
        Open Frontend Skills Modal from Gallery
      </Link>
    </div>
  )
}
