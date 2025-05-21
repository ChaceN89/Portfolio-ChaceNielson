/**
 * @file FeaturedProjects.jsx
 * @module components/sections/FeaturedProjects
 * @desc Displays featured projects with individual background themes using BackgroundWrapper.
 *
 * @author Chace Nielson
 * @created May 13, 2025
 * @updated May 20, 2025
 */
import { featuredProjects } from '@/data/pageData/projectData';
import FeatureSection from './FeatureSection';
import BackgroundWrapper from '@/components/uiElements/images/BackgroundWrapper';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import MyBtn from '@/components/buttons/MyBtn';
import { useNavigate } from 'react-router-dom';

export default function FeaturedProjects() {

  // Light
  const backgrounds = [
    {src: "/backgrounds/light-accent.jpg", textColor: "text-primary outlined-text", bgColor: "bg-accent/0"},
    {src: "/backgrounds/light-primary.jpg", textColor: "text-secondary", bgColor: "bg-primary/0"},
    {src: "/backgrounds/light-secondary.jpg", textColor: "text-primary outlined-text", bgColor: "bg-secondary/0"},
    {src: "/backgrounds/light-tertiary.jpg", textColor: "text-secondary", bgColor: "bg-tertiary/0"},
  ]

  
  const navigate = useNavigate();
  const handleProjectClick = () => {
    navigate('/projects');
  }

  return (
    <div className='flex flex-col w-full'>
      {featuredProjects.map((project, index) => {
        const isLast = index === featuredProjects.length - 1;
        const nextId = isLast ? 'tech-stacks' : `featured-${featuredProjects[index + 1].id}`;

        return (
          <div className="relative" key={project.id}>
            <FeatureSection
              project={project}
              background={backgrounds[index % backgrounds.length]}
              isLast={isLast}
              nextId={nextId}
            />
          </div>
        );
      })}
      <BackgroundWrapper
        id={``}
        background={backgrounds[0].src}
        fixed
        noise
        childClass='flex flex-col items-center justify-center gap-4 py-4'
      >
        
        <ProjectCarousel/>
          <MyBtn sm callBack={handleProjectClick}> See All Projects</MyBtn>
      </BackgroundWrapper>  
    </div>
  );
}


