/**
 * Data for all the vountenteeting cards
 * simple so the descritpions and photos are in this file rather than its own section
 */
import { BsInstagram } from "react-icons/bs";

// Descriptions
export const homesOfHopeDescription = "I participated in the Homes of Hope program, building a home in Tijuana Mexico for a family."

export const basketballDescription = "I've worked closely with the the Bow Valley Bobcats basketball program in Cochrane. I was an assistant coach for the high school boy's team and also helped out with a local spring league team. "

// Links
const basketballLinks = [
    {name:"Instagram", link:"https://www.instagram.com/bowvalleybobcats/", icon:<BsInstagram size={20}/>},
]

// Photos
const homeOfHopePhotoList = [
    {image: process.env.PUBLIC_URL + '/photos/travel/mexico1.jpg'},
    {image: process.env.PUBLIC_URL + '/photos/travel/mexico3.jpg'},
    {image: process.env.PUBLIC_URL + '/photos/travel/mexico2.jpg'},
]

// Return List of volunteering data
export const volunteeringDataList = [
    {
        name:"Homes of Hope", 
        description:homesOfHopeDescription,
        img:'/photos/travel/mexico3.jpg',
        modalInfo:{
            description:homesOfHopeDescription,
            photos:homeOfHopePhotoList,
            videos:[
              {path:process.env.PUBLIC_URL +"/videos/Mexico.mp4",}
            ],
            useGallery:true
          }
    },
    {
        name:"Basketball Coach", 
        description:basketballDescription,
        img:"/photos/other/basketball_bobcats.jpg",
        externalLinks:basketballLinks
    },
] 