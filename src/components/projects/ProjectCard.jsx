/**
 * @file ProjectCard.jsx
 * @module ProjectCard
 * @desc Reusable card component for displaying project previews in a grid layout.
 *       Combines thumbnail image, ripple hover effect, and technology icons.
 *
 * @props
 * @param {object} project - Project object with name, blurb, thumbnail, and mainStack
 * @param {function} onClick - Function to open the modal with project details
 *
 * @created May 23, 2025
 */

import React, { useRef, useEffect, useState } from 'react';

import Tooltip from '@/components/uiElements/Tooltip';
import ShowIcon from '@/components/uiElements/skillBox/ShowIcon';
import ImageComponent from '@/components/uiElements/images/ImageComponent';
import { openModal } from '@/utils/utils';
import { useNavigate, useLocation } from 'react-router-dom';
import CardLearnMore from './CardLearnMore';
export default function ProjectCard({ project, showDetails = false }) {
  const navigate = useNavigate();
  const location = useLocation();

  const titleRef = useRef(null);
  const blurbRef = useRef(null);

  const [isTitleClamped, setIsTitleClamped] = useState(false);
  const [isBlurbClamped, setIsBlurbClamped] = useState(false);

  useEffect(() => {
    if (titleRef.current) {
      const lineHeight = parseFloat(getComputedStyle(titleRef.current).lineHeight);
      const height = titleRef.current.offsetHeight;
      setIsTitleClamped(height > lineHeight ); // +1 buffer for rounding
    }
    if (blurbRef.current) {
      setIsBlurbClamped(blurbRef.current.scrollHeight > blurbRef.current.clientHeight + 2);
    }
  }, [project.name, project.blurb]);

  const handleClick = () => {
    openModal({ type: 'project', id: project.id, navigate, location });
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer bg-primary/10 dark:bg-secondary/10 border-2 border-secondary/40 dark:border-primary/40 rounded-xl shadow-2xl transition-transform hover:scale-[1.01] overflow-hidden"
    >
      <CardLearnMore/>
      {/* Image + Ripple Layer */}
      <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-secondary/40 dark:border-primary/60">
        <span className="ripple-hover z-10" />
        <ImageComponent
          src={project.thumbnail?.src}
          blurHash={project.thumbnail?.blurhash}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text + Icons */}
      <div className="p-4 space-y-2 bg-primary/50 dark:bg-secondary/50">
        {isTitleClamped ? (
          <Tooltip text={project.name} openDuration={1500}>
            <h6 ref={titleRef} className="text-lg font-semibold line-clamp-1">{project.name}</h6>
          </Tooltip>
        ) : (
          <h6 ref={titleRef} className="text-lg font-semibold line-clamp-1">{project.name}</h6>
        )}

        {showDetails && (
          <>
            {isBlurbClamped ? (
              <Tooltip text={project.blurb} openDuration={1500} className="w-56 whitespace-normal">
                <p ref={blurbRef} className="text-sm opacity-80 italic line-clamp-2">{project.blurb}</p>
              </Tooltip>
            ) : (
              <p ref={blurbRef} className="text-sm opacity-80 italic line-clamp-2">{project.blurb}</p>
            )}

            {project.mainStack?.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2">
                {project.mainStack.slice(0, 5).map((iconObj, i) => (
                  <Tooltip text={iconObj.name} key={i}>
                    <ShowIcon skill={iconObj} size="2.5rem" />
                  </Tooltip>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
