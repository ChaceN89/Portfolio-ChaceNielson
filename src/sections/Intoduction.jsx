/**
 * Intro to me
 * description of myself and picture of me, also a list of external links to github etc
 * reacts to size of screen
 */
import React from 'react'
import ExternalLinks from '../components/ExternalLinks';

function Intoduction() {

  return(
    <section id='Home' className='section hiddenClass
      flex flex-col items-center
      lg:grid lg:grid-cols-2 place-items-center'>
        <div className='pb-2 pt-5 text-5xl sm:text-6xl xl:text-7xl text-center font-bold'>Chace Nielson</div>

        <div className='row-span-2 container mx-6 my-2 max-w-xs sm:max-w-md md:max-w-md lg:max-w-lg bg-white bg-opacity-60 backdrop-blur-lg rounded-xl '>
            <img src={process.env.PUBLIC_URL + '/portaits/portrait4.jpg'} 
              alt="..."
              className="p-1 rounded-xl"
              />
          </div>
       
        <div className='introParagraph'>
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
          <div className='flex justify-center p-4'>
            <ExternalLinks size={30} animate={true}/>
          </div>
        </div>
    </section>
  )  
}

export default Intoduction