/**
 * List of all hobbies, used same CSS as project list
 */
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'

// photo Lists
import { 
  homeOfHopePhotoList 
} from '../functions/photoLists';

// link lists
import { 
  basketballLinks 
} from '../functions/links';

// descriptions
import { 
  basketballDescription, 
  homesOfHopeDescription 
} from '../functions/descriptions';

// returns the volunteering list compoent
function VolunteeringList() {
  return(
    <section id="Volunteering" className='section hiddenClass'>
      <SectionHeader title={"Volunteering"} description={"A Few Places I've Lent a Helping Hand"}/>
      <ul className='projectCardList'>
        <ProjectCard
          name={"Homes of Hope "} 
          description={homesOfHopeDescription} 
          img={'/photos/travel/mexico3.jpg'} 
          modalInfo = {{
            description:homesOfHopeDescription,
            photos:homeOfHopePhotoList,
            videos:[
              {path:process.env.PUBLIC_URL +"/videos/Mexico.mp4",}
            ],
            useGallery:true
          }}
        />
        <ProjectCard
          name={"Basketball Coach"} 
          description={basketballDescription} 
          img={"/photos/other/basketball_bobcats.jpg"} 
          externalLinks={basketballLinks} 
        />
      </ul>
    </section>
  )
}

export default VolunteeringList