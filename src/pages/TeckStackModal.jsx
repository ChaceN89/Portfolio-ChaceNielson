/**
 * @file TechStackModal.jsx
 * @module TechStackModal
 * @desc Displays details about a selected technical specialization (e.g., Full Stack, Game Dev).
 * 
 * @author Chace Nielson
 * @created May 21, 2025
 * @updated May 21, 2025
 */

import React, { useState, useEffect } from 'react';
import { techSkills } from '@/data/pageData/skillsData';

// Components
import NotFoundInfo from '@/components/uiElements/NotFoundInfo';
import SkillBoxContainer from '@/components/uiElements/skillBox/SkillBoxContainer';
import PageHeader from '@/components/uiElements/PageHeader';

export default function TechStackModal({ techId }) {
  const [safeTechId, setSafeTechId] = useState(techId);

  useEffect(() => {
    if (techId) {
      setSafeTechId(techId);
    }
  }, [techId]);

  const tech = techSkills.find(
    (entry) => entry.id.toLowerCase() === safeTechId?.toLowerCase()
  );

  if (!tech) {
    return <NotFoundInfo name={<b>Technical Stack</b>} />;
  }

  return (
    <div className="text-primary">
      {/* Title & Description */}
      <PageHeader name={tech.name} description={tech.modalDescription} pageTitle={tech.name} />

      {/* Categorized Tool Sections */}
      {tech.allTools?.map((group, index) => (
        <div key={group.category + index} className="mt-6">
          <h3 className="font-semibold text-sm uppercase tracking-wide text-darken mb-2">{group.category}</h3>
          <SkillBoxContainer stack={group.skills} isSmall />
        </div>
      ))}
    </div>
  );
}
