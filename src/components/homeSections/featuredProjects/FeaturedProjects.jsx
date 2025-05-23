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
import ProjectShowcase from './ProjectShowcase';

export default function FeaturedProjects() {

  // Light - for 4 featured projects
  const backgrounds = [
    {src: "/backgrounds/light-accent.jpg",    rippleColor:"var(--color-accent)",    textColor: "text-primary outlined-text",  borderColor: "border-primary"},
    {src: "/backgrounds/light-primary.jpg",   rippleColor:"var(--color-primary)",   textColor: "text-secondary",              borderColor: "border-secondary"},
    {src: "/backgrounds/light-secondary.jpg", rippleColor:"var(--color-secondary)", textColor: "text-primary outlined-text",  borderColor: "border-primary"},
    {src: "/backgrounds/light-tertiary.jpg",  rippleColor:"var(--color-tertiary)",  textColor: "text-secondary",              borderColor: "border-secondary"},
  ]

  return (
    <div className='flex flex-col w-full'>
      {featuredProjects.map((project, index) => {
        const isLast = index === featuredProjects.length - 1;
        const nextId = isLast ? 'tech-stacks' : `featured-${featuredProjects[index + 1].id}`;

        return (
          <div className="relative" key={project.id}>
            <ProjectShowcase
              project={project}
              background={backgrounds[index % backgrounds.length]}
              isLast={isLast}
              nextId={nextId}
            />
          </div>
        );
      })}
    </div>
  );
}