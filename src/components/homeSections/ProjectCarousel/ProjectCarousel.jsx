import React, { useEffect, useRef } from 'react';
import { projects } from '@/data/pageData/projectData';
import ImageComponent from '@/components/uiElements/images/ImageComponent';
import './ProjectCarousel.styles.css';
import Tooltip from '@/components/uiElements/Tooltip';
import { openModal } from '@/utils/utils';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ProjectCarousel() {
  const trackRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();


  const itemWidth = 28 * 16 + 32; // ≈ 480px

  const handleClick = (id) => {
    openModal({
      type: 'project',
      id,
      navigate,
      location,
    });
  };

  // Auto-scrolling with reset for infinite loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame;
    const speed = 0.8; // pixels per frame (60fps ~= 48px/sec)

    const scroll = () => {
      if (track.scrollLeft >= track.scrollWidth / 1.5) {
        track.scrollTo({ left: 0, behavior: 'auto' });
      } else {
        track.scrollLeft += speed;
      }
      frame = requestAnimationFrame(scroll);
    };

    const stopScroll = () => cancelAnimationFrame(frame);
    const startScroll = () => frame = requestAnimationFrame(scroll);

    startScroll();

    track.addEventListener('mouseenter', stopScroll);
    track.addEventListener('mouseleave', startScroll);

    const arrows = document.querySelectorAll('.carousel-arrow');
    arrows.forEach(btn => {
      btn.addEventListener('mouseenter', stopScroll);
      btn.addEventListener('mouseleave', startScroll);
    });

    return () => {
      stopScroll();
      track.removeEventListener('mouseenter', stopScroll);
      track.removeEventListener('mouseleave', startScroll);
      arrows.forEach(btn => {
        btn.removeEventListener('mouseenter', stopScroll);
        btn.removeEventListener('mouseleave', startScroll);
      });
    };
  }, []);


  const scrollLeft = () => {
    trackRef.current?.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    trackRef.current?.scrollBy({ left: itemWidth, behavior: 'smooth' });
  };

  return (
    <div className="project-carousel-container group">
      <button onClick={scrollLeft} className="carousel-arrow left-arrow">
        <FaChevronLeft />
      </button>
      <button onClick={scrollRight} className="carousel-arrow right-arrow">
        <FaChevronRight />
      </button>

      <div ref={trackRef} className="project-carousel-track ">
        {projects.concat(projects, projects).map((project, index) => {
          const image = project.images?.[0];
          if (!image?.src) return null;

          return (
            <div onClick={() => handleClick(project.id)} key={`${project.id}-${index}`} className="carousel-item">
              <Tooltip text={project.name} openDuration={200}>
                <ImageComponent
                  src={`/projects/${project.id}/${image.src}`}
                  blurHash={image.blurhash}
                  alt={project.name}
                  className="carousel-image object-cover object-top"
                />
              </Tooltip>
            </div>
          );
        })}
      </div>
    </div>
  );
}
