/**
 * Main page of application
 * Displays Nav, sections and footer
 */
import React, {useEffect} from 'react'
import ContactForm from '../sections/ContactForm';
import Footer from '../sections/Footer';
import HobbyList from '../sections/HobbyList';
import Intoduction from '../sections/Intoduction';
import Navbar from '../sections/Navbar';
import PhotoCarousel from '../sections/PhotoCarousel';
import ProjectList from '../sections/ProjectList'
import SkillList from '../sections/SkillList';
import Line from '../components/Line';

function Home() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>{
      entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("showClass")
          }else{
            entry.target.classList.remove("showClass")
        }
      })
    })
    const hiddenElements = document.querySelectorAll('.hiddenClass')
    hiddenElements.forEach((el) => observer.observe(el))
  },[])


return (
  <>
  <Navbar/>
  <Intoduction/>
  <Line/>
  <SkillList/> 
  <Line/>
  <PhotoCarousel/>
  <Line/>
  <ProjectList/>
  <Line/>
  <HobbyList/>
  <Line/>
  <ContactForm/>
  <Footer/>
  </>
)




  // return (
  //   <>
  //     <Navbar/>
  //     <Intoduction/>
  //       <Line/>
  //     <SkillList/> 
  //       <Line/>
  //     <PhotoCarousel/>
  //       <Line/>
  //     <ProjectList/>
  //       <Line/>
  //     <HobbyList/>
  //       <Line/>
  //     <ContactForm/>
  //     <Footer/>
  //   </>
  // )
}

export default Home