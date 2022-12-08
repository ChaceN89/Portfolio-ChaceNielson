/**
 * Inner area of the project card containing the text, seperate to make this easier to work with 
 */
import React from 'react'

function InnerProjectCard({name, description, techStackName=null, techStack=[], externalLinks=[]}) {
  return (
    <div className='flex justify-between'>
        <div className='flex flex-col justify-between space-y-4'>
            <div>
                <div className='p-0.5 sm:p-2 font-bold text-2xl sm:text-3xl underline'>{name}</div>
                <div className='p-0.5 sm:px-2'>{description}</div>
            </div>

            <div className='flex flex-col sm:flex-row'>
                {externalLinks.map((item,index)=>{
                    return (
                        <a key={index} href={item.link} target="_blank" rel="noreferrer" className='flex justify-center items-center pr-4 mx-2 py-1 rounded-2xl  text-white hover:scale-110 hover:text-slate-300 space-x-1 select-none'>
                            <div>{item.icon}</div>
                            <div>{item.name}</div>
                        </a>
                    )
                })}
            </div>
        </div>

        <div className='w-auto pt-2 flex flex-col sm:items-center align-middle'>
            <div className='text-lg underline whitespace-nowrap'>{techStackName}</div>
            {techStack.map((item)=>{
                return (<div className='rounded-xl text-black bg-slate-300 font-bold w-fit  py-0.5 px-2 m-1 text-center' key={item}>{item}</div>)
            })}
        </div>
    </div>
  )
}

export default InnerProjectCard