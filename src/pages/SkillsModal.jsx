import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { techSkills } from "../data/pageData/skillsData";

const SkillsModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Check if the skill exists based on the id
  const skill = techSkills.find(skill => skill.id.toLowerCase().replace(" ", "") === id.toLowerCase());

  useEffect(() => {
    // If the skill is not found, navigate to the home page
    if (!skill) {
      navigate('/');
    }
  }, [id, skill, navigate]);

  // If skill is not found, return null to prevent rendering
  if (!skill) {
    return null;
  }

  return (
    <div className="overflow-y-auto max-h-section-height-small p-4">
      <h1 className="text-3xl font-bold mb-4">{skill.name}</h1>
      {skill.description && <p className="mb-4">{skill.description}</p>}
      {skill.topSkills && skill.topSkills.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-2">Top Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
            {skill.topSkills.map((topSkill, index) => {
              const IconComponent = topSkill.icon;
              return (
                <div key={index} className="flex flex-col items-center p-2 border rounded-md shadow-md">
                  {IconComponent ? (
                    <IconComponent style={{ color: topSkill.color, fontSize: '2rem' }} />
                  ) : (
                    <img src={topSkill.SVG_path} alt={topSkill.name} style={{ width: '2rem', height: '2rem' }} />
                  )}
                  <p className="mt-2 text-center">{topSkill.name}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
      {skill.minorSkills && skill.minorSkills.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-2">Minor Skills</h2>
          <ul className="list-disc list-inside">
            {skill.minorSkills.map((minorSkill, index) => (
              <li key={index}>{minorSkill}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SkillsModal;
