import React from 'react'

export default function ModalHeader({ name, description, pageTitle=null }) {



  return (
    <div className="space-y-1">
      <h2 className="font-bold">{name}</h2>
      <p className="text-darken">{description}</p>
    </div>
  )
}
