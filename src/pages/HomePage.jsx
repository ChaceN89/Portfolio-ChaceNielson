import React from 'react'
import Hero from '@/components/homeSections/hero/Hero'
import AboutMeHero from '@/components/homeSections/hero/AboutMeHero'
import TechSkills from '@/components/homeSections/techSkills/TechSkills'
import TechStacks from '@/components/homeSections/techStacks/TechStacks'

export default function HomePage() {
  return (
    <div>
      <div id="hero"> 
        <Hero/>
        <AboutMeHero/>
      </div>
      <div id="featured-projects" className='bg-yellow-400  h-56'> 
        Featured Projects
      </div>
      <div id="tech-stacks" className=''> 
        <TechStacks/>
      </div>
      <div id="lets-connect" className='bg-red-900  h-56'> 
        Call To Action
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



