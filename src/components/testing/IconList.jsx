import React from 'react'
import IconLibrary from '../../data/iconLibrary'
import ShowIcon from '../uiElements/ShowIcon'

export default function IconList() {
  return (
    <div className="p-10 grid grid-cols-6 gap-4">
      {Object.entries(IconLibrary).map(([key, skill]) => (
        <div key={key} className="flex flex-col items-center text-center">
          <ShowIcon skill={skill} size="3rem" useWhiteText={false} />
          <p className="mt-2 text-sm font-medium">{skill.name}</p>
        </div>
      ))}
    </div>
  )
}
