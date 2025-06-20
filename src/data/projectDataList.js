/**
 * All the data for the projects section in a single list
 */

//icons for the links
import { TfiWorld } from 'react-icons/tfi'
import { BsGithub, BsYoutube, BsFileEarmarkPdf } from "react-icons/bs";
import { FaUnity, FaMusic} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";


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
    capstoneDescription,
    musicPlayerDescription,
    imageProcessorDescription,
    jobDashboardDescription
} from './projectDescriptions';

//All the photo lists for individual projects
import { 
    aviarPhotoList, 
    capstonePhotoList, 
    geoPredictPhotoList, 
    hapticjengaPhotoList, 
    musicPlayerPhotoList, 
    voiceRecognitionPhotoList
} from './photoData/photoLists';

//List of all the projects to return
export const projectDataList = [
    {
        starred:true,
        name:"GEO Predict", 
        description:geoPredictDescription,
        img:'/photos/projectPhotos/geothermal_Dashboard.jpg',
        techStack:["Full-Stack", "Authentication", "React", "FastAPI", "PostgreSQL", "Tailwind", "Docker", "Cloud Deployment"],
        externalLinks:[
            {name:"Overview", link:"https://youtu.be/oTU0C_8-dSw", icon:<BsYoutube size={20}/>},
            {name:"Website", link:"http://136.159.140.62/", icon:<CgWebsite size={20}/>}
        ],
        modalInfo:{
            description:geoPredictDescription_long,
            photos:geoPredictPhotoList,
        }
    },
    {
        starred:true,
        name:"Voice Identification", 
        description:voiceRecognitionDescription,
        img:'/photos/projectPhotos/voice_recognition4.jpg',
        techStack:[ "Ploty-Dash", "Python", "CSS", "Machine Learning"],
        externalLinks:[
            {name:"Code", link:"https://github.com/ChaceN89/voice-recognition", icon:<BsGithub size={20}/>},
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
        name:<span>C0<sub>2</sub> Separation</span>, 
        description:capstoneDescription,
        img:'/photos/projectPhotos/capstone9_sim.jpg',
        // techStackName:"Tools",
        techStack:["Unity","C#", "Blender", "3D-Design", "3D-Printing", "Circuity Design"],
        externalLinks:[
            {name:"Overview", link:"https://www.youtube.com/watch?v=TvnBOPB7dhc", icon:<BsYoutube size={20}/>},
            {name:"Simulation", link:"https://dev3933.d18ixp0pwlw4ex.amplifyapp.com/", icon:<FaUnity size={20}/>},
            {name:"Code", link:"https://github.com/ChaceN89/Capstone-Simulation", icon:<BsGithub size={20}/>},
            {name:"Poster", pdf:"Capstone Poster.pdf",  icon:<BsFileEarmarkPdf size={20}/>},
            {name:"Report", pdf:"Capstone Final Report.pdf",  icon:<BsFileEarmarkPdf size={20}/>},
        ],
        modalInfo:{
            description:capstoneLongDescription,
            photos:capstonePhotoList,
        }
    },
    {
        name:"Music Player", 
        description:musicPlayerDescription,
        img:'/photos/projectPhotos/musicPlayer1.jpg',
        techStack:["Vue", "Tailwind", "Vercel" ],
        externalLinks:[
            {name:"Website", link:"https://music-player-chace-nielsons-projects.vercel.app/", icon:<FaMusic size={20}/>}, 
            {name:"Code", link:"https://github.com/ChaceN89/music-player", icon:<BsGithub size={20}/>},
        ],
        modalInfo:{
            description:musicPlayerDescription,
            photos:musicPlayerPhotoList,
        }
    },
    {
        starred:true,
        name:" Image Task Queue", 
        description:imageProcessorDescription,
        img:'/photos/projectPhotos/imageProcessor.jpg',
        techStack:["React", "TypeScript", "FastAPI", "Railway" ],
        externalLinks:[
            {name:"Website", link:"https://main--img-processor.netlify.app/", icon:<TfiWorld size={20}/>}, 
            {name:"Code", link:"https://github.com/ChaceN89/image-processor", icon:<BsGithub size={20}/>},
        ],
    },
    {
        starred:true,
        name:"Job Dashboard", 
        description:jobDashboardDescription,
        img:'/photos/projectPhotos/jobDashboard.jpg',
        techStack:["Full-Stack", "Vue", "FastAPI", "SQLite", "Tailwind", "Render", "Netlify" ],
        externalLinks:[
            {name:"Website", link:"https://job-dashboard-chace.netlify.app/", icon:<TfiWorld size={20}/>}, 
            {name:"Code", link:"https://github.com/ChaceN89/job-dashboard", icon:<BsGithub size={20}/>},
        ],
    },
    {
        name:"Photo App", 
        description:aviarDescription,
        img:'/photos/projectPhotos/aviar_collections.jpg',
        techStack:["Full-Stack", "Authentication", "MongoDB", "React", "ExpressJS",  "NodeJS"],
        externalLinks:[
            {name:"Overview", link:"https://www.youtube.com/watch?v=mktAIV4sjFQ", icon:<BsYoutube size={20}/>},
            {name:"Code", link:"https://github.com/ChaceN89/Aviar", icon:<BsGithub size={20}/>},
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
        techStack:["React", "Tailwind", "CSS", "Vercel"],
        externalLinks:[
            {name:"Code", link:"https://github.com/ChaceN89/Portfolio-ChaceNielson", icon:<BsGithub size={20}/>}
        ],
    },
    {
        name:"Genre Prediction", 
        description:genrePredictionDescription,
        img:'/photos/projectPhotos/genrePrediction.jpg',
        techStack:["Apache Spark", "Python", "Jupyter", "Machine Learning"],
        externalLinks:[
            {name:"Genre Analysis", link:"https://github.com/ChaceN89/Machine-Learning-Music-Notebooks/blob/main/MusicGenrePrediction/ENSF_544_Final_Project.ipynb", icon:<BsGithub size={20}/>},
            {name:"Spark", link:"https://github.com/ChaceN89/Machine-Learning-Music-Notebooks/blob/main/SparkSentimentAnalysis/SparkSentimentMLAnalysis.ipynb", icon:<BsGithub size={20}/>},
            {name:"Report", pdf:"Spark ML Genre Report.pdf",  icon:<BsFileEarmarkPdf size={20}/>},
        ],
    },
    {
        name:"Jenga",
        description:JengaDescription, 
        img:'/photos/projectPhotos/jenga1.jpg', 
        techStack:["Unity","C#", "Haptic Pen", "OpenHaptics" ],
        externalLinks:[
            {name:"Code", link:"https://github.com/ChaceN89/Haptic-Jenga", icon:<BsGithub size={20}/>}
        ],
        modalInfo:{
            description:JengaDescription, 
            videos:[
                {path:process.env.PUBLIC_URL +"/videos/jengaMov1.mp4", description:'Gameplay'},
                {path:process.env.PUBLIC_URL +"/videos/jengaMov2.mp4", description:'Gameplay'},
            ],
            photos:hapticjengaPhotoList,
        }
    },
    {
        starred:true,
        name:"Cube Game", 
        description:cubeGameDescription,
        img:'/photos/projectPhotos/cubegame.jpg',
        techStack:["Unity","C#" ],
        externalLinks:[
            {name:"Play Game", link:"https://chacen89.github.io/CubeGame/", icon:<FaUnity size={20}/>}
        ],
    },
    {
        name:"Flappy Bird Clone", 
        description:flappyBirdCloneDescription,
        img:'/photos/projectPhotos/flappyBird.jpg',
        techStack:["Unity","C#" ],
        modalInfo:{
            description:flappyBirdCloneDescription,
            videos:[
                {path:process.env.PUBLIC_URL +"/videos/FlappyBird.mp4", description:'Gameplay'}
            ]
        }
    },
    {
        name:"Space Survive", 
        starred:true,
        description:spaceSurviveDescription,
        img:'/photos/projectPhotos/spaceSurvive1.jpg',
        techStack:["Unity","C#" ],
        modalInfo:{
            description:spaceSurviveDescription_long,
            videos:[
                {path:process.env.PUBLIC_URL +"/videos/SpaceSurvive_small.mp4", description:'Gameplay'}
            ]
        }
    }
]