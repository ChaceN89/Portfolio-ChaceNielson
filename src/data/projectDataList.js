/**
 * All the data for the projects section in a single list
 */

//icons for the links
import { TfiWorld } from 'react-icons/tfi'
import { BsGithub, BsYoutube, BsFileEarmarkPdf } from "react-icons/bs";
import { FaUnity, FaProjectDiagram } from "react-icons/fa";

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
    spaceSurviveDescription_long, 
    voiceRecognitionDescription,
    voiceRecognitionLongDescription,
    capstoneLongDescription,
    capstoneDescription
} from './projectDescriptions';

//All the photo lists for individual projects
import { 
    aviarPhotoList, 
    capstonePhotoList, 
    geoPredictPhotoList, 
    hapticjengaPhotoList, 
    voiceRecognitionPhotoList
} from './photoData/photoLists';

//List of all the projects to return
export const projectDataList = [
    {
        starred:true,
        name:"GEO Predict", 
        description:geoPredictDescription,
        img:'/photos/projectPhotos/geothermal_Dashboard.jpg',
        techStackName:"Tech Stack",
        techStack:["React", "FastAPI", "PostgreSQL", "Tailwind", "Docker"],
        externalLinks:[
            {name:"Website", link:"http://136.159.140.62/", icon:<TfiWorld size={20}/>}
        ],
        modalInfo:{
            description:geoPredictDescription_long,
            photos:geoPredictPhotoList,
            videos:[
                {path:process.env.PUBLIC_URL +"/videos/geopredict_walkthrough.mp4", description:'Site Walkthrough'}
            ]
        }
    },
    {
        starred:true,
        name:"Voice ID", 
        description:voiceRecognitionDescription,
        img:'/photos/projectPhotos/voice_recognition4.jpg',
        techStackName:"Tech Stack",
        techStack:[ "Ploty Dash", "Python", "CSS", "ML"],
        externalLinks:[
            {name:"Application", link:"https://github.com/ChaceN89/voice-recognition", icon:<BsGithub size={20}/>},
            {name:"Notebook", link:"https://github.com/ChaceN89/voice-recognition/blob/main/original_notebook/ENCM%20Final%20Project%20Speech%20Recognition.ipynb", icon:<BsGithub size={20}/>},
            {name:"Report", pdf:"Voice ID Report.pdf",  icon:<BsFileEarmarkPdf size={20}/>},
        ],
        modalInfo:{
            description:voiceRecognitionLongDescription,
            photos:voiceRecognitionPhotoList,
        }
    },
    {
        starred:true,
        name:"CO2 Separation", 
        description:capstoneDescription,
        img:'/photos/projectPhotos/capstone9_sim.jpg',
        techStackName:"Tools",
        techStack:["Unity", "Blender", "3D Printing", "Circuity"],
        externalLinks:[
            {name:"Project Video", link:"https://www.youtube.com/watch?v=TvnBOPB7dhc", icon:<BsYoutube size={20}/>},
            {name:"Simulation", link:"https://dev3933.d18ixp0pwlw4ex.amplifyapp.com/", icon:<FaProjectDiagram size={20}/>},
            {name:"Simulation Code", link:"https://github.com/ChaceN89/Capstone-Simulation", icon:<BsGithub size={20}/>},
            {name:"Report", pdf:"Capstone Final Report.pdf",  icon:<BsFileEarmarkPdf size={20}/>},
            {name:"Project Poster", pdf:"Capstone Poster.pdf",  icon:<BsFileEarmarkPdf size={20}/>},

        ],
        modalInfo:{
            description:capstoneLongDescription,
            photos:capstonePhotoList,
        }
    },
    {
        name:"Photo App", 
        description:aviarDescription,
        img:'/photos/projectPhotos/aviar_collections.jpg',
        techStackName:"Mern Stack",
        techStack:["MongoDB", "ExpressJS", "React", "NodeJS"],
        externalLinks:[
            {name:"GitHub", link:"https://github.com/ChaceN89/Aviar", icon:<BsGithub size={20}/>},
            {name:"Site Walkthrough", link:"https://www.youtube.com/watch?v=mktAIV4sjFQ", icon:<BsYoutube size={20}/>}
        ],
        modalInfo:{
            description:aviarDescription_long,
            photos:aviarPhotoList,
        }
    },
    {
        starred:true,
        name:"My Portfolio", 
        description:portfolioDescription,
        img:'/photos/projectPhotos/portfolio.jpg',
        techStackName:"Tech Stack",
        techStack:["React", "Tailwind", "CSS"],
        externalLinks:[
            {name:"GitHub", link:"https://github.com/ChaceN89/Portfolio-ChaceNielson", icon:<BsGithub size={20}/>}
        ],
    },
    {
        name:"ML Genre Predict", 
        description:genrePredictionDescription,
        img:'/photos/projectPhotos/genrePrediction.jpg',
        techStackName:"Tools",
        techStack:["Apache Spark", "Python", "Jupyter", "ML"],
        externalLinks:[
            {name:"ML Genre Prediction", link:"https://github.com/ChaceN89/Machine-Learning-Music-Notebooks/blob/main/MusicGenrePrediction/ENSF_544_Final_Project.ipynb", icon:<BsGithub size={20}/>},
            {name:"Spark Sentiment Analysis", link:"https://github.com/ChaceN89/Machine-Learning-Music-Notebooks/blob/main/SparkSentimentAnalysis/SparkSentimentMLAnalysis.ipynb", icon:<BsGithub size={20}/>},
            {name:"Report", pdf:"Spark ML Genre Report.pdf",  icon:<BsFileEarmarkPdf size={20}/>},

        ],
    },
    {
        name:"Space Survive", 
        starred:true,
        description:spaceSurviveDescription,
        img:'/photos/projectPhotos/spaceSurvive1.jpg',
        techStackName:"Tools",
        techStack:["Unity","C#" ],
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
        techStack:["Unity","C#" ],
        modalInfo:{
            videos:[
                {path:process.env.PUBLIC_URL +"/videos/FlappyBird.mp4", description:'Gameplay'}
              ],
        }
    },
    {
        starred:true,
        name:"Cube Game", 
        description:cubeGameDescription,
        img:'/photos/projectPhotos/cubeGame1.jpg',
        techStackName:"Tools",
        techStack:["Unity","C#" ],
        externalLinks:[
            {name:"Play Game", link:"https://chacen89.github.io/CubeGame/", icon:<FaUnity size={20}/>}
        ],
    },
    {
        name:"Jenga",
        description:JengaDescription, 
        img:'/photos/projectPhotos/jenga1.jpg', 
        techStackName:"Tools",
        techStack:["Unity", "Haptic Pen", "OpenHaptics" ],
        externalLinks:[
            {name:"GitHub", link:"https://github.com/ChaceN89/Haptic-Jenga", icon:<BsGithub size={20}/>}
        ],
        modalInfo:{
          videos:[
            {path:process.env.PUBLIC_URL +"/videos/jengaMov1.mp4", description:'Gameplay'},
            {path:process.env.PUBLIC_URL +"/videos/jengaMov2.mp4", description:'Gameplay'},
          ],
          photos:hapticjengaPhotoList,
        }
    },

]