/**
 * All the data for the projects section in a single list
 */

//icons for the links
import { TfiWorld } from 'react-icons/tfi'
import { BsGithub } from "react-icons/bs";
import { FaUnity } from "react-icons/fa";

// all project descriptions
import {  
    JengaDescription, 
    aviarDescription, 
    aviarDescription_long, 
    cubeGameDescription, 
    flappyBirdCloneDescription, 
    geoPredictDescription, 
    geoPredictDescription_long, 
    portfolioDescription,
    genrePredictionDescription,
    spaceSurviveDescription, 
    spaceSurviveDescription_long 
} from './projectDescriptions';

//All the photo lists for individual projects
import { 
    aviarPhotoList, 
    geoPredictPhotoList, 
    hapticjengaPhotoList 
} from './photoData/photoLists';

// links 
const aviarLinks= [
    {name:"GitHub", link:"https://github.com/ChaceN89/Aviar", icon:<BsGithub size={20}/>},
]
const portfolioLinks= [
    {name:"GitHub", link:"https://github.com/ChaceN89/Portfolio-ChaceNielson", icon:<BsGithub size={20}/>}
]
const genrePredictionLinks= [
    {name:"GitHub", link:"https://github.com/ChaceN89/GenrePredictionSpark", icon:<BsGithub size={20}/>}
]
const geoPredictLinks =[
    {name:"Website", link:"http://136.159.140.62/", icon:<TfiWorld size={20}/>}
]
const cubeGameLinks =[
    {name:"Play Game", link:"https://chacen89.github.io/CubeGame/", icon:<FaUnity size={20}/>}
]
const hapticJengaLinks =[
    {name:"GitHub", link:"https://github.com/ChaceN89/Haptic-Jenga", icon:<BsGithub size={20}/>}
]

//List of all the projects to return
export const projectDataList = [
    {
        starred:true,
        name:"GEO Predict", 
        description:geoPredictDescription,
        img:'/photos/projectPhotos/geothermal_Dashboard.jpg',
        techStackName:"Tech Stack",
        techStack:["ReactJS", "FastApi", "Postgres", "Tailwind", "Docker"],
        externalLinks:geoPredictLinks,
        modalInfo:{
            description:geoPredictDescription_long,
            photos:geoPredictPhotoList,
        }
    },
    {
        name:"Aviar", 
        description:aviarDescription,
        img:'/photos/projectPhotos/aviar_collections.jpg',
        techStackName:"Mern Stack",
        techStack:["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
        externalLinks:aviarLinks,
        modalInfo:{
            description:aviarDescription_long,
            photos:aviarPhotoList,
        }
    },
    {
        starred:true,
        name:"Portfolio", 
        description:portfolioDescription,
        img:'/photos/projectPhotos/portfolio.jpg',
        techStackName:"Tech Stack",
        techStack:["ReactJS", "Tailwind", "CSS"],
        externalLinks:portfolioLinks,
    },
    {
        name:"ML Genre Prediction", 
        description:genrePredictionDescription,
        img:'/photos/projectPhotos/genrePrediction.jpg',
        techStackName:"Tech Stack",
        techStack:["Apache Spark", "Python", "Machine Learning"],
        externalLinks:genrePredictionLinks,
    },
    {
        name:"Space Survive", 
        starred:true,
        description:spaceSurviveDescription,
        img:'/photos/projectPhotos/spaceSurvive1.jpg',
        techStackName:"Tools",
        techStack:["Unity Game Engine","C#" ],
        modalInfo:{
            description:spaceSurviveDescription_long,
            videos:[
                {path:process.env.PUBLIC_URL +"/videos/SpaceSurvive_small.mp4", description:'Gameplay'}
              ]
        }
    },
    {
        name:"Flappy Bird Clone", 
        description:flappyBirdCloneDescription,
        img:'/photos/projectPhotos/flappyBirdClone.jpg',
        techStackName:"Tools",
        techStack:["Unity Game Engine","C#" ],
        modalInfo:{
            videos:[
                {path:process.env.PUBLIC_URL +"/videos/FlappyBird.mp4", description:'Gameplay'}
              ],
        }
    },
    {
        name:"Cube Game", 
        description:cubeGameDescription,
        img:'/photos/projectPhotos/cubeGame1.jpg',
        techStackName:"Tools",
        techStack:["Unity Game Engine","C#" ],
        externalLinks:cubeGameLinks,
    },
    {
        name:"Jenga",
        description:JengaDescription, 
        img:'/photos/projectPhotos/jenga1.jpg', 
        techStackName:"Tools",
        techStack:["Unity Game Engine","C#", "Haptic Stylus", "OpenHaptics" ],
        externalLinks:hapticJengaLinks,
        modalInfo:{
          videos:[
            {path:process.env.PUBLIC_URL +"/videos/jengaMov1.mp4", description:'Gameplay'},
            {path:process.env.PUBLIC_URL +"/videos/jengaMov2.mp4", description:'Gameplay'},
          ],
          photos:hapticjengaPhotoList,
        }
    },

]