/**
 * Main page of application
 * Displays Nav, sections and footer
 */
import React, {useEffect} from 'react'
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import HobbyList from '../components/HobbyList';
import Intoduction from '../components/Intoduction';
import Navbar from '../components/Navbar';
import PhotoCarousel from '../components/PhotoCarousel';
import ProjectList from '../components/ProjectList'
import SkillList from '../components/SkillList';
import Line from '../miniComponents/Line';

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
}

export default Home