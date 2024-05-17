/**
 * Component to display the tech stack
 * has different settings for if its called in the modal or inner project card
 */
import React from 'react';

function TechStack({ techStack, techStackName = null }) {
  return (
    <div className={`flex ${techStackName ? 'flex-col sm:items-center align-middle' : 'py-2'} flex-wrap`}>
      {techStackName && <div className='text-lg underline whitespace-nowrap'>{techStackName}</div>}
      {techStack.map((item) => (
        <div className='rounded-xl text-black bg-slate-300 font-bold w-fit py-0.5 px-2 m-1 text-center' key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default TechStack;
