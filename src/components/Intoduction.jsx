/**
 * INtro to me
 * description of myself and picture of me, also a list of external links to github etc
 * reacts to size of screen
 */
import React from 'react'
import ExternalLinks from '../miniComponents/ExternalLinks';

function Intoduction() {
  return(
    <section id='Home' className='hiddenClass sectionWidth sectionVert min-h-screen'>
      <div className='flex 
        py-12 sm:px-12 lg:px-16 
        items-center pt-6 px-4  lg:pt-0
        space-x-7 space-y-6
        flex-col lg:flex-row 
        mx-auto sm:mx-14 md:ml-24 lg:mx-24 xl:mx-34 2xl:mx-42'
      >
        <div className=' grow flex flex-col items-center space-y-10'>
            <div className='text-5xl item-start font-bold' >Chace Nielson</div>
            <div className='text-base  text-justify flex flex-col space-y-3'>
              <p>
                My name is Chace Nielson and I'm a software developer with a special interest in full-stack web design. I'm currently completing my Software Engineering degree at the University of Calgary.
              </p>
              <p>
                Trying new things is second nature to me. Whether it's new foods, cultures, adventures or skills, I'm always looking for exciting opportunities. Programming was something I first tried when I got to university. It was so influential that I changed my major to spend more of my time programming. 
              </p>
              <p>
                I've taken time to develop many skills and hobbies. These include my love for the outdoors, snowboarding, ice and rock climbing, backpacking, and mountain biking. As well as more technical hobbies such as web design, video game design, and song writing. 
              </p>
              <p>
                I've made this portfolio to give you a glimpse into my life and learn a bit more about what kind of person I am. I hope you enjoy it.
              </p>
            </div>
            <ExternalLinks size={30}/>
        </div>

        <div className="shrink flex flex-wrap justify-center bg-white bg-opacity-60 backdrop-blur-lg rounded-lg">
            <img
              src={process.env.PUBLIC_URL + '/portaits/portrait4.jpg'}
              className=" p-1 bg-transparent border border-opacity-5 boder-backdrop-blur-lg max-w-xs  sm:max-w-sm rounded-lg"
              alt="..."
              />
        </div>
      </div>
    </section>
              
  )
}

export default Intoduction