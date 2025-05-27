
/**
 * @file ProjectCarousel.jsx
 * @module ProjectCarousel
 * @desc Responsive multi-device carousel that displays a subset of featured projects.
 *       Uses `react-multi-carousel` for smooth, swipeable behavior and modular `CarouselCard` components.
 * 
 * @features
 * - Auto-plays with hover pause and swipe support
 * - Displays projects with image, name, and category tag
 * - Opens project modals on click
 * - Includes a button to view the full Projects page
 * 
 * @author Chace Nielson
 * @created May 22, 2025
 * @updated May 22, 2025
 */
// data - list of projects to display in the carousel
import { carouselProjects } from '@/data/pageData/projectData';

// utils
import { useNavigate } from 'react-router-dom';

// components
import MyBtn from '@/components/buttons/MyBtn';
import ProjectCard from '@/components/projects/ProjectCard';
import SelectArrow from '../uiElements/SelectArrow';

// Library components
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, partialVisibilityGutter: 40 },
  tablet:  { breakpoint: { max: 1024, min: 464 }, items: 2, partialVisibilityGutter: 30 },
  mobile:  { breakpoint: { max: 464, min: 0 },    items: 1, partialVisibilityGutter: 30 }
};

export default function ProjectCarousel() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center gap-4 py-8 '>
      <Carousel
        responsive={responsive}
        infinite
        arrows
        autoPlay
        autoPlaySpeed={2000}
        keyBoardControl
        pauseOnHover
        draggable
        swipeable
        customLeftArrow={<SelectArrow direction="left" />}
        customRightArrow={<SelectArrow direction="right" />}
        className="w-full"
        itemClass="px-5 py-1"
      >
        {carouselProjects.map((project) => {
          const image = project.images?.[0];
          if (!image?.src) return null;

          return (
            <ProjectCard project={project} key={project.id} />
          );
        })}
      </Carousel>

      <MyBtn 
        sm 
        callBack={() => navigate('/projects')}
        GA_label='Project Carousel See All Button'
      >
        See All Projects
      </MyBtn>
    </div>
  );
}
