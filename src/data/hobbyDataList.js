/**
 * All the Data for the Hobby/Interests Section
 * Includes inports and calls the the decriptions section
 */
//Descriptions
import { 
    backpackingDescription, 
    basketballDescription, 
    bikingDescription, 
    hikingdescription, 
    iceClimbingDescription,
    musicDescription, 
    rockClimbingDescription,
    snowboardingDescription, 
    travelDescription 
} from "./hobbyDescriptions";

//Photos
import { 
    backpackingPhotoList, 
    basketballPhotoList, 
    bikingPhotoList, 
    hikingPhotoList, 
    iceClimbingPhotoList, 
    musicPhotoList, 
    rockClimbingPhotoList, 
    snowboardingPhotoList, 
    travelPhotoList 
} from "./photoData/photoLists";

import { BsYoutube } from "react-icons/bs";


// Return List of Hobby data
export const hobbyDataList = [
    {
        name:"Music", 
        description:musicDescription,
        img:'/photos/music/guitar1.jpg',
        modalInfo:{
            photos:musicPhotoList,
            videos:[
                {path:process.env.PUBLIC_URL +"/videos/guitar.mp4", description:'Shelter by Porter Robinson'}
            ],
            useGallery:true
        }
    },
    {
        name:"Snowboarding", 
        description:snowboardingDescription,
        img:'/photos/snowboarding/snowboard6.jpg',
        modalInfo:{
            photos:snowboardingPhotoList,
            videos:[
                {path:process.env.PUBLIC_URL +"/videos/snowboarding.mp4"}
            ],
            useGallery:true
        }
    },
    {
        name:"Basketball", 
        description:basketballDescription,
        img:'/photos/basketball/basketball1.jpg',
        modalInfo:{
            photos:basketballPhotoList,
            useGallery:true
        },
        externalLinks:[
            {name:"High School", link:"https://youtu.be/AJMJtZt2-g0?si=qHXwWGUBQ1O-psQA", icon:<BsYoutube size={20}/>},
            {name:"College", link:"https://youtu.be/17dn5CzCtgM?si=WDNFRG1qUBNdfIWP", icon:<BsYoutube size={20}/>}
        ]
    },
    {
        name:"Backpacking", 
        description:backpackingDescription,
        img:'/photos/backpacking/backpacking2.jpg',
        modalInfo:{
            photos:backpackingPhotoList,
            videos:[
                {path:process.env.PUBLIC_URL +"/videos/backpacking.mp4"}
            ],
            useGallery:true
        }
    },
    {
        name:"Rock Climbing", 
        description:rockClimbingDescription,
        img:'/photos/climbing/climbing3.jpg',
        modalInfo:{
            photos:rockClimbingPhotoList,
            useGallery:true,
            videos:[
                {path:process.env.PUBLIC_URL +"/videos/climbing.mp4"}
            ],
          }
    },

    {
        name:"Hiking", 
        description:hikingdescription,
        img:'/photos/hiking/temple2.jpg',
        modalInfo:{
            photos:hikingPhotoList,
            videos:[
                {path:process.env.PUBLIC_URL +"/videos/mountTemple.mp4"}
              ],
            useGallery:true
        }
    },
    {
        name:"Biking", 
        description:bikingDescription,
        img:'/photos/biking/biking1.jpg',
        modalInfo:{
            photos:bikingPhotoList,
            useGallery:true
        }
    },
    {
        name:"Ice Climbing", 
        description:iceClimbingDescription,
        img:'/photos/climbing/iceClimbing2.jpg',
        modalInfo:{
            photos:iceClimbingPhotoList,
            useGallery:true
        }
    },
    {
        name:"Travel", 
        description:travelDescription,
        img:'/photos/travel/japan3.jpg',
        modalInfo:{
            photos:travelPhotoList,
            useGallery:true
        }
    },
  
]