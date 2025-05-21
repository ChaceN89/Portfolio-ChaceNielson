import React from 'react'
import Hero from '@/components/homeSections/Hero'
import AboutMeHero from '@/components/homeSections/AboutMeHero'
import TechSkills from '@/components/specificSections/techSkills/TechSkills'
import TechStacks from '@/components/homeSections/techStacks/TechStacks'
import FeaturedProjects from '@/components/homeSections/featuredProjects/FeaturedProjects'
import LetsConnects from '@/components/homeSections/LetsConnects'
import ProjectCarousel from '@/components/homeSections/ProjectCarousel/ProjectCarousel'


export default function HomePage() {
  return (
    <div>
      <div id="hero"> 
        <Hero/>

        <AboutMeHero/>
      </div>
      <div id="featured-projects"> 
        <FeaturedProjects/>
      </div>
      <div id="tech-stacks"> 
        <TechStacks/>
      </div>
      <div id="about-me"> 
        <LetsConnects/>
      </div>
    </div>
  )
}





  // return (
  //   <>
  //     <div id='Home'>
  //       <Hero/>
  //       <CallToAction />
  //     </div>
  //     <div id='Experience'>
  //       <TechSkills />
  //       <JobExperience />
  //       <Interests />
  //     </div>
  //     <div id='Projects'>
  //       <ProjectSection/>
  //     </div>
  //     <div id='ContactMe'>
  //       <ContactForm />
  //     </div>
  //     <ReturnToTop />
  //   </>
  // );



