/**
 * Videos of Everything
 */
import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader';
import {Link} from 'react-router-dom';
import { BsArrow90DegLeft } from "react-icons/bs";
import VideoCard from '../components/VideoCard';

function Videos() {

  const {  hash  } = useLocation(); // get status 

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id element ex <div id="hashName">...
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth"} );
        }
      }, 500);
    }
  }, [hash ]);

  return (
    <div className='container mx-auto py-10'>

      <div className='fixed top-10 left-10'>  
        <Link to="/">
          <BsArrow90DegLeft className='p-1 fixed top-6 left-6 hover:text-white hover:opacity-100 opacity-40 hover:scale-105 cursor-pointer select-none'    size={40}/>
        </Link>
      </div>


      <SectionHeader title={"Videos"} description={"A little more depth to some of my projects and hobbies"}/>

        <VideoCard 
          img="/videos/guitar.mp4"
          title={"Music"} 
          description={"My cover of Shelter by Porter Robinson"} 
          id={"Music"} 
          reverse={true}
        />
        {/* <hr className='container mx-auto h-0.5 border border-white ' /> */}
        <VideoCard 
          img="/videos/mountTemple.mp4"
          title={"Hiking"} 
          description={"My trip Lake Louise to climb mount temple"} 
          id={"Hiking"} 
          mutedDefault={true}
        />
        {/* <hr className='container mx-auto h-0.5 border border-white ' /> */}
        <VideoCard 
          img="/videos/Mexico.mp4"
          title={"Mexico"} 
          description={"My trip to mexico with homes of hope to build a home for a family"} 
          id={"Mexico"} 
          mutedDefault={true}
          reverse={true}
        />
        {/* <hr className='container mx-auto h-0.5 border border-white ' /> */}
        <VideoCard 
          img="/videos/backpacking.mp4"
          title={"Backpacking"} 
          description={"My trip to mexico with homes of hope to build a home for a family"} 
          id={"Backpacking"} 
          mutedDefault={true}
          // reverse={true}
        />
        {/* <hr className='container mx-auto h-0.5 border border-white ' /> */}
        <VideoCard 
          img="/videos/snowboarding.mp4"
          title={"Snowboarding"} 
          description={"Snowboarding at Sunshine"} 
          id={"Snowboarding"} 
          mutedDefault={true}
          reverse={true}
        />
        {/* <hr className='container mx-auto h-0.5 border border-white ' /> */}
        <VideoCard 
          img="/videos/"
          title={"Space Survive"} 
          description={"My first video made with unity game engine. I used pre made assets and mad emy own sounds effects"} 
          id={"SpaceSurvive"} 
          mutedDefault={true}
        />
        {/* <hr className='container mx-auto h-0.5 border border-white ' /> */}
        <VideoCard 
          img="/videos/"
          title={"Flappy Bird Clone"} 
          description={"Remake of flappy bird"} 
          id={"FlappyBird"} 
          mutedDefault={true}
          reverse={true}
        />

    </div>
  )
}

export default Videos