/**
 * @file ProjectCard.jsx
 * @module ProjectCard
 * @desc React component that renders an individual project card with animations.
 * This component uses Framer Motion for animations, including elevation on view
 * and hover effects. It also includes navigation to a detailed project page.
 * 
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 * 
 * @example
 * // Example usage of ProjectCard component
 * import ProjectCard from './ProjectCard';
 * 
 * function ProjectList({ projects }) {
 *   return (
 *     <div className="project-list">
 *       {projects.map((project) => (
 *         <ProjectCard key={project.id} project={project} />
 *       ))}
 *     </div>
 *   );
 * }
 * 
 * @exports ProjectCard
 * 
 * @param {Object} project - The project data to be displayed in the card.
 * 
 * @property {string} project.id - The unique identifier for the project.
 * @property {Array} project.images - The array of images for the project.
 * @property {string} project.images[0].src - The source URL of the main image.
 * @property {string} project.images[0].blurhash - The blurhash of the main image.
 * @property {Object} project - Other project details like name, description, etc.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 26 2025
 */

// React
import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAnimation, useInView } from 'framer-motion';

// Styles
import './Card.css';

// Components
import ElevateOnView from '../../animations/ElevateOnView';
import CardImg from './CardImg';
import CardText from './CardText';
import CardLearnMore from './CardLearnMore';

function ProjectCard({ project }) {
  const navigate = useNavigate();

  // State variables for hover and click effects
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // ref and controls for Framer Motion to determine when the card is in view for animations
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -75px 0px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      setTimeout(() => setIsInitialLoad(false), 500); // Set initial load to false after the delay - delay value to cause the blur effect
    }
  }, [controls, inView]);

  // function to navigate to the project page
  const clickLearnMore = (e) => {
    e.preventDefault();
    navigate(`/?project=${project.id}`);
  };

  return (
    <ElevateOnView>
      <div
        ref={ref}
        className="card-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsClicked(false); setIsHovered(false); }}
        onClick={clickLearnMore}
      >
        <CardImg
          isInitialLoad={isInitialLoad}
          isClicked={isClicked}
          projID={project.id}
          imgSrc={project.images[0].src}
          imgBlurhash={project.images[0].blurhash}
          isHovered={isHovered}
        />
        <CardText
          clickLearnMore={clickLearnMore}
          isInitialLoad={isInitialLoad}
          isHovered={isHovered}
          inView={inView}
          project={project}
        />
        <CardLearnMore
          isHovered={isHovered}
        />
      </div>
    </ElevateOnView>
  );
}

export default ProjectCard;