/**
 * List of all hobbies, used same CSS as project list
 */
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'

function HobbyList() {
  return(
    <section id="MyIntrests" className='section hiddenClass'>
      <SectionHeader title={"My Hobbies and Intrests"} description={"Things I've Picked Up Over The Years"}/>
      <ul className='projectCardList'>
        <ProjectCard
          name={"Music"} 
          description={"I love playing the guitar and writing songs."} 
          img={'/photos/guitar1.png'} 
          internalLink={"Videos/#Music"}
          modalInfo = {{
            description:"I love playing guitar, writing music and even bulding guitar pedals",
            photos:[
              {path:"/photos/guitar3.jpeg", description:''},
              {path:"/photos/guitar2.png", description:''},
              {path:"/projectPhotos/gp_drillingEnclosure.jpg", description:''},
              {path:"/projectPhotos/gp_finished.jpeg", description:''},
              {path:"/projectPhotos/gp_unsoldered.jpeg", description:''},
            ],
            videos:[
              {path:"/videos/snowbgoarding.mp4", description:''}
            ]
          }}
        />
        <ProjectCard
          name={"Snowboading"} 
          description={"I'm always up for a trip to the slopes. There's nothing quite like a powder day."} 
          img={'/photos/snowboard6.png'} 
          modalInfo = {{
            photos:[
              {path:"/photos/snowboard1.jpg", description:''},
              {path:"/photos/snowboard2.jpg", description:''},
              {path:"/photos/snowboard3.jpeg", description:''},
              {path:"/photos/snowboard4.jpeg", description:''},
              {path:"/photos/snowboard5.jpg", description:''},
              {path:"/photos/snowboard6.png", description:''},
            ],
            videos:[
              {path:"/videos/snowboarding.mp4", description:''}
            ]
          }}
        />
        <ProjectCard
          name={"Backpacking"} 
          description={"Backpacking is one of my favourite ways to experience nature. There's something about spending days out in the bush that you can't get from a day hike."} 
          img={'/photos/backpacking2.jpg'} 
          modalInfo = {{
            photos:[
              {path:"/photos/westCost24.jpg", description:''},
              {path:"/photos/backpacking1.JPG", description:''},
              {path:"/photos/backpacking2.JPG", description:''},
              {path:"/photos/backpacking3.jpg", description:''},
              {path:"/photos/backpacking4.jpeg", description:''},
              {path:"/photos/backpacking5.jpg", description:''},
              {path:"/photos/backpacking6.JPG", description:''},
              {path:"/photos/backpacking7.JPG", description:''},
              {path:"/photos/westCost23.jpg", description:''},
              {path:"/photos/westCost1.jpg", description:''},
              {path:"/photos/westCost2.jpg", description:''},
              {path:"/photos/westCost3.jpg", description:''},
              {path:"/photos/westCost4.jpg", description:''},
              {path:"/photos/westCost5.jpg", description:''},
              {path:"/photos/westCost6.png", description:''},
              {path:"/photos/westCost7.jpg", description:''},
              {path:"/photos/westCost8.jpg", description:''},
              {path:"/photos/westCost9.jpg", description:''},
              {path:"/photos/westCost10.jpg", description:''},
              {path:"/photos/westCost11.png", description:''},
              {path:"/photos/westCost12.jpg", description:''},
              {path:"/photos/westCost13.jpg", description:''},
              {path:"/photos/westCost14.jpg", description:''},
              {path:"/photos/westCost15.png", description:''},
              {path:"/photos/westCost16.jpg", description:''},
              {path:"/photos/westCost17.jpg", description:''},
              {path:"/photos/westCost18.jpg", description:''},
              {path:"/photos/westCost19.jpg", description:''},
              {path:"/photos/westCost20.jpg", description:''},
              {path:"/photos/westCost21.jpg", description:''},
              {path:"/photos/westCost22.jpg", description:''},
            ],
            videos:[
              {path:"/videos/backpacking.mp4", description:''}
            ]
          }}
        />
        <ProjectCard
          name={"Rock Climbing"} 
          description={"Rock climbing is a great activity and combines working with my hands with my love of the outdoors."} 
          img={'/photos/climbing3.jpg'} 
          modalInfo = {{
            photos:[
              {path:"/photos/climbing1.jpg", description:''},
              {path:"/photos/climbing2.jpg", description:''},
              {path:"/photos/climbing3.jpg", description:''},
              {path:"/photos/climbing4.jpeg", description:''},
              {path:"/photos/climbing5.jpg", description:''},
              {path:"/photos/climbing6.jpg", description:''},
            
            ],
            videos:[
              {path:"/videos/backpacking.mp4", description:''}
            ]
          }}
        />
        <ProjectCard
          name={"Hiking"} 
          description={"I've lived near the mountains my whole life and love spending any time in nature."} 
          img={'/photos/mountains8.jpg'} 
          internalLink={"Videos/#Hiking"}
          modalInfo = {{
            photos:[
              {path:"/photos/mountains1.jpg", description:''},
              {path:"/photos/temple1.jpg", description:''},
              {path:"/photos/temple2.png", description:''},
              {path:"/photos/temple3.png", description:''},
              {path:"/photos/waterfall1.jpg", description:''},
              {path:"/photos/forrest.jpg", description:''},
              {path:"/photos/mountains2.jpg", description:''},
              {path:"/photos/mountains3.jpg", description:''},
              {path:"/photos/mountains4.jpg", description:''},
              {path:"/photos/mountains5.jpg", description:''},
              {path:"/photos/mountains6.jpg", description:''},
              {path:"/photos/mountains7.jpeg", description:''},
              {path:"/photos/mountains8.jpg",description:''},
              {path:"/photos/mountains9.JPG", description:''},
              {path:"/photos/mountains10.jpg", description:''},
              {path:"/photos/mountains11.jpg", description:''},
              {path:"/photos/mountains12.jpg", description:''},
              {path:"/photos/mountains13.jpg", description:''},
              {path:"/photos/mountains14.jpg", description:''},
              {path:"/photos/mountains15.JPG", description:''},
              {path:"/photos/mountains16.JPG", description:''},
              {path:"/photos/mountains17.JPG", description:''},
              {path:"/photos/mountains18.JPG", description:''},
              {path:"/photos/mountains19.jpg", description:''},
              {path:"/photos/mountains20.jpg", description:''},
              {path:"/photos/mountains21.JPG", description:''},
              {path:"/photos/mountains22.JPG", description:''},
              {path:"/photos/mountains23.jpg", description:''},
              {path:"/photos/mountains24.jpg", description:''},
            ],
            videos:[
              {path:"/videos/mountTemple.mp4", description:''}
            ]
          }}
        />
        <ProjectCard
          name={"Ice Climbing"} 
          description={"I've also taken my love for rock climbing and taken it into the winter."} 
          img={'/photos/iceClimbing2.jpg'} 
          modalInfo = {{
            photos:[
              {path:"/photos/iceClimbing1.jpg", description:''},
              {path:"/photos/iceClimbing2.jpg", description:''},
            ],
          }}
        />
        <ProjectCard
          name={"Biking"} 
          description={""} 
          img={'/photos/biking1.jpg'} 
          modalInfo = {{
            photos:[
              {path:"/photos/biking1.jpg", description:''},
              {path:"/photos/biking2.JPG", description:''},
            ],
          }}
        />
        <ProjectCard
          name={"Travel"} 
          description={"I love traveling, especially seeing other cultures."} 
          img={'/photos/japan3.JPG'} 
          modalInfo = {{
            photos:[
              {path:"/photos/japan1.jpg", description:''},
              {path:"/photos/japan2.JPG", description:''},
              {path:"/photos/japan3.JPG", description:''},
              {path:"/photos/japan4.JPG", description:''},
              {path:"/photos/japan5.jpg", description:''},
              {path:"/photos/japan6.JPG", description:''},
              {path:"/photos/japan7.JPG", description:''},
              {path:"/photos/europe1.JPG", description:''},
              {path:"/photos/europe2.JPEG", description:''},
              {path:"/photos/europe3.JPG", description:''},
              {path:"/photos/europe4.JPG", description:''},
              {path:"/photos/europe5.JPEG", description:''},
              {path:"/photos/europe6.JPG", description:''},
            ],
          }}
        />
      </ul>
    </section>
  )
}

export default HobbyList