/**
 * Videos of Everything
 * - currently not used
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
      }, 100);
    }
  }, [hash]);

  return (
    <div className='container mx-auto py-10'>
      <div className='fixed top-10 left-10'>  
        <Link to="/#Hobbies">
          <BsArrow90DegLeft className='p-1 fixed top-6 left-6 hover:text-white hover:opacity-100 opacity-40 hover:scale-105 cursor-pointer select-none z-50'    size={40}/>
        </Link>
      </div>
      <SectionHeader title={"Videos"} description={"A little more depth to some of my projects and hobbies"}/>
      <VideoCard 
        img="/videos/mountTemple.mp4"
        title={"Hiking"} 
        description={"My trip to Lake Louise to climb Mount Temple."} 
        id={"Hiking"} 
        mutedDefault={true}
        reverse={true}
      />
      <VideoCard 
        img="/videos/guitar.mp4"
        title={"Music"} 
        description={"My cover of Shelter by Porter Robinson"} 
        id={"Music"} 
      />
      <VideoCard 
        img="/videos/Mexico.mp4"
        title={"Mexico"} 
        description={"My trip to Mexico with homes of hope to build a home for a family."} 
        id={"Mexico"} 
        mutedDefault={true}
        reverse={true}
      />
      <VideoCard 
        img="/videos/backpacking.mp4"
        title={"Backpacking"} 
        description={"Solo Backpacking in Kananaskis."} 
        id={"Backpacking"} 
        mutedDefault={true}
      />
      <VideoCard 
        img="/videos/snowboarding.mp4"
        title={"Snowboarding"} 
        description={"Snowboarding at Sunshine"} 
        id={"Snowboarding"} 
        mutedDefault={true}
        reverse={true}
      />
      <VideoCard 
        img="/videos/SpaceSurvive_small.mp4"
        title={"Space Survive"} 
        description={"My first video game was made with Unity Game Engine. I created a progression system with saving score and accessing different modes."} 
        id={"SpaceSurvive"} 
        mutedDefault={false}
      />
      <VideoCard 
        img="/videos/FlappyBird.mp4"
        title={"Flappy Bird Clone"} 
        description={"Remake of flappy bird using Unity Game Engine. Saved high scores and increased difficulty over time."} 
        id={"FlappyBird"} 
        mutedDefault={false}
        reverse={true}
      />
    </div>
  )
}

export default Videos