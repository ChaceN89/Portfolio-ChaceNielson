/**
 * List of all hobbies, used same CSS as project list
 */
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'

// photo lists
import { 
  backpackingPhotoList, 
  bikingPhotoList, 
  hikingPhotoList, 
  iceClimbingPhotoList, 
  musicPhotoList, 
  rockClimbingPhotoList, 
  snowboardingPhotoList, 
  travelPhotoList 
} from '../functions/photoLists'

// descritpoinons
import {
  backpackingDescription,
  bikingDescription,
  hikingdescription,
  iceClimbingDescription,
  musicDescription, rockClimbingDescription, snowboardingDescription, travelDsecription 
} from '../functions/descriptions'

// retrun compoent for the hobbylist
function HobbyList() {
  return(
    <section id="MyInterests" className='section hiddenClass'>
      <SectionHeader title={"My Hobbies and Interests"} description={"Things I've Picked Up Over The Years"}/>
      <ul className='projectCardList'>
        <ProjectCard
          name={"Music"} 
          description={musicDescription} 
          img={'/photos/music/guitar1.jpg'} 
          modalInfo = {{
            photos:musicPhotoList,
            videos:[
              {path:process.env.PUBLIC_URL +"/videos/guitar.mp4", description:'Shelter by Porter Robinson'}
            ],
            useGallery:true,
          }}
        />
        <ProjectCard
          name={"Snowboading"} 
          description={snowboardingDescription} 
          img={'/photos/snowboarding/snowboard6.jpg'} 
          modalInfo = {{
            photos:snowboardingPhotoList,
            videos:[
              {path:process.env.PUBLIC_URL +"/videos/snowboarding.mp4"}
            ],
            useGallery:true
          }}
        />
        <ProjectCard
          name={"Backpacking"} 
          description={backpackingDescription} 
          img={'/photos/backpacking/backpacking2.jpg'} 
          modalInfo = {{
            photos:backpackingPhotoList,
            videos:[
              {path:process.env.PUBLIC_URL +"/videos/backpacking.mp4"}
            ],
            useGallery:true
          }}
        />
        <ProjectCard
          name={"Rock Climbing"} 
          description={rockClimbingDescription} 
          img={'/photos/climbing/climbing3.jpg'} 
          modalInfo = {{
            photos:rockClimbingPhotoList,
            useGallery:true
          }}
        />
        <ProjectCard
          name={"Hiking"} 
          description={hikingdescription} 
          img={'/photos/hiking/temple2.jpg'} 
          modalInfo = {{
            photos:hikingPhotoList,
            videos:[
              {path:process.env.PUBLIC_URL +"/videos/mountTemple.mp4"}
            ],
            useGallery:true
          }}
        />
        <ProjectCard
          name={"Ice Climbing"} 
          description={iceClimbingDescription} 
          img={'/photos/climbing/iceClimbing2.jpg'} 
          modalInfo = {{
            photos:iceClimbingPhotoList,
            useGallery:true
          }}
        />
        <ProjectCard
          name={"Biking"} 
          description={bikingDescription} 
          img={'/photos/biking/biking1.jpg'} 
          modalInfo = {{
            photos:bikingPhotoList,
            useGallery:true
          }}
        />
        <ProjectCard
          name={"Travel"} 
          description={travelDsecription} 
          img={'/photos/travel/japan3.jpg'} 
          modalInfo = {{
            photos:travelPhotoList,
            useGallery:true
          }}
        />
      </ul>
    </section>
  )
}

export default HobbyList