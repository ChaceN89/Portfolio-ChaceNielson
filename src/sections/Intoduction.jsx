/**
 * Intro to me
 * description of myself and picture of me, also a list of external links to github etc
 * reacts to size of screen
 * contains paragraphs about me
 * also has opening photos tab
 */
import React from 'react'
import ExternalLinks from '../components/ExternalLinks'; //links to linded in github etc
import OpeningPhotos from '../components/OpeningPhotos'; // photos for the right side of page

function Intoduction() {
  return(
    <section id='Home' className='section hiddenClass
      flex flex-col items-center
      lg:grid lg:grid-cols-2 place-items-center'>
        
        <div className='pb-2 pt-5 text-5xl text-center font-bold titleFont'>Chace Nielson</div>

        <OpeningPhotos/>
       
        <div className='introParagraph text-base '>
          <p className='hiddenClass projDelay'>
            I'm Chace Nielson, a passionate software developer with a keen focus on full-stack web development. I hold a Software Engineering degree from the University of Calgary, where I developed my skills and deepened my love of programming.
          </p>
          <p className='hiddenClass projDelay'>
            I thrive on exploring the unknown. Whether it's cooking new dishes, immersing myself in diverse cultures, embarking on thrilling adventures, or acquiring new skills, I'm always seeking exciting opportunities. My programming journey began during my university years and had such a profound impact on me that I altered my academic path to immerse myself further in this dynamic field.
          </p>
          <p className='hiddenClass projDelay'>
            When I'm not coding, I dedicate my time to developing a wide array of skills and hobbies. You'll often find me snowboarding, tackling challenging ice and rock climbing routes, summiting mountains, mountain biking, or embarking on backpacking journeys. I also enjoy competitive sports like basketball, golf, and squash. On a more creative note, I indulge in technical hobbies such as web design, video game development, playing guitar, and writing music.
          </p>
          <p className='hiddenClass projDelay'>
            Through this portfolio, I aim to provide you with a glimpse into my life and passions, allowing you to get to know me better. I sincerely hope you find enjoyment in exploring my journey.
          </p>
          <div className='flex justify-center p-4 hiddenClass projDelay'>
            <ExternalLinks size={30} animate={true}/>
          </div>
        </div>
    </section>
  )  
}

export default Intoduction