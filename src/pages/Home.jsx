/**
 * Main page of application
 * Displays Nav, sections and footer
 * 
 * also is in charge of the animation of appearing 
 * can turn off the dissapearing
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
import { useLocation } from 'react-router-dom';
import VolunteeringList from '../sections/VolunteeringList';

//Google analytics
import { recordGAPage } from '../functions/googleAnalytics';

function Home() {
  const {  hash  } = useLocation(); // get status of the hash in router

  // google analytics for recording this page
  useEffect(() => {
    recordGAPage("Home");
  }, [])

  // use Effect for Scroll to section on load
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id element ex <div id="hashName">...
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth"} );
        }
      },100);
    }
  }, [hash ]);

  // useEffect for animations to add/remove showClass
  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>{
      entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("showClass")
          }else{
            //------ this linecasues animations to repeart as you navigate the app - comment it out so items that appear don't disapear again -------
            // entry.target.classList.remove("showClass") //uncomment this line to have items dissaper when they leave the viewport
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
    <ProjectList/>
    <Line/>
    <HobbyList/>
    <Line/>
    <VolunteeringList/>
    <Line/>
    <PhotoCarousel/>
    <Line/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Home