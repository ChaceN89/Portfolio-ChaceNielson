/**
 * List of Projects 
 * both technical and other project
 * will have a project component and hobbies in the same project cards
 */
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard';


// photo Lists
import {
  geoPredictPhotoList, 
  aviarPhotoList
} from '../functions/photoLists';

// Link lists
import { 
  aviarLinks, 
  portfolioLinks, 
  geoPredictLinks, 
  cubeGameLinks 
} from '../functions/links';

// descrtiptions
import { 
    geoPredictDescription, geoPredictDescription_long,
    aviarDescription, aviarDescription_long,
    portfolioDescription,
    spaceSurviveDescription, spaceSurviveDescription_long, 
    flappyBirdCloneDescription,
    cubeGameDescription, JengaDescription
  } from '../functions/descriptions';

// retruns project ist component
function ProjectList() {
  return(
    <section id="MyProjects" className='section hiddenClass '>
      <SectionHeader title={"My Technical Projects"} description={"My Projects Using Various Tech Stacks"} />
      <ul className='projectCardList'>
        <ProjectCard
          name={"GEO Predict"} 
          description={geoPredictDescription} 
          img={'/photos/projectPhotos/geothermal_Dashboard.jpg'} 
          techStackName={"Tech Stack"}
          techStack={["ReactJS", "FastApi", "Postgres", "Tailwind", "Docker"]}
          externalLinks={geoPredictLinks}
          modalInfo = {{
            description:geoPredictDescription_long,
            photos:geoPredictPhotoList,
          }}
          
        />
        <ProjectCard
          name={"Aviar"} 
          description={aviarDescription} 
          img={'/photos/projectPhotos/aviar_collections.jpg'} 
          techStackName={"Mern Stack"}
          techStack={["MongoDB", "ExpressJS", "ReactJS", "NodeJS"]}
          externalLinks={aviarLinks}
          modalInfo = {{
            description:aviarDescription_long,
            photos:aviarPhotoList,
          }}
        />

        <ProjectCard
          name={"Portfolio"}
          description={portfolioDescription} 
          img={'/photos/projectPhotos/portfolio.jpg'} 
          techStackName={"Tech Stack"}
          techStack={["ReactJS", "Tailwind", "CSS"]}
          externalLinks={portfolioLinks} 
        />

        <ProjectCard 
          name={"Space Survive"} 
          description={spaceSurviveDescription} 
          img={'/photos/projectPhotos/spaceSurvive1.jpg'} 
          techStackName={"Tools"}
          techStack={["Unity Game Engine","C#" ]}
          modalInfo = {{
            description:spaceSurviveDescription_long,
            videos:[
              {path:process.env.PUBLIC_URL +"/videos/SpaceSurvive_small.mp4", description:'Gameplay'}
            ]
          }}
        />

        <ProjectCard
          name={"Flappy Bird Clone"} 
          description={flappyBirdCloneDescription} 
          img={'/photos/projectPhotos/flappyBirdClone.jpg'} 
          techStackName={"Tools"}
          techStack={["Unity Game Engine","C#"]}
          modalInfo = {{
            videos:[
              {path:process.env.PUBLIC_URL +"/videos/FlappyBird.mp4", description:'Gameplay'}
            ],
          }}
        />
        
        <ProjectCard
          name={"Cube Game"} 
          description={cubeGameDescription} 
          img={'/photos/projectPhotos/cubeGame1.jpg'} 
          techStackName={"Tools"}
          techStack={["Unity Game Engine","C#" ]}
          externalLinks={cubeGameLinks} 
        />

        <ProjectCard
          name={"Jenga"} 
          description={JengaDescription} 
          img={'/photos/projectPhotos/jenga1.jpg'} 
          techStackName={"Tools"}
          techStack={["Unity Game Engine","C#", "Haptic Sylulus", "OpenHaptics" ]}
          modalInfo = {{
            videos:[
              {path:process.env.PUBLIC_URL +"/videos/jengaMov1.mp4", description:'Gameplay'},
              {path:process.env.PUBLIC_URL +"/videos/jengaMov2.mp4", description:'Gameplay'},
            ],
          }}
        />

      </ul>
    </section>
  )
}

export default ProjectList
