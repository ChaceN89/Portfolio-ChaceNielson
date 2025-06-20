/**
 * Component to display the tech stack
 * has different settings for if its called in the modal or inner project card
 */
import React from 'react';

function TechStack({ techStack, techStackName = null }) {

  // return nothing if there is no tech stack items
  if (techStack.length === 0){
    return null
  }

  return (
    <div className='mt-2 flex-wrap flex flex-col items-center '>
      {/* the name isn't usually used but left in just in case i use it eentually*/}
      {techStackName && <div className='text-lg underline whitespace-nowrap'>{techStackName}</div>}
      <div className='flex flex-wrap justify-center items-center'>
        {techStack.map((item) => (
          <div className='rounded-lg text-black bg-slate-300 font-bold py-0.5 px-2 m-0.5 text-center inline-block' key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
