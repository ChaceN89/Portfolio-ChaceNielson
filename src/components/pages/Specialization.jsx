import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { techSkills } from '../../data/pageData/skillsData';
import SectionHeader from '../uiElements/SectionHeader';
import SkillBoxContainer from '../uiElements/SkillBoxContainer';

export default function Specialization() {
  const [searchParams] = useSearchParams(); // Retrieve query parameters from the URL
  const [loading, setLoading] = useState(true); // Loading state
  const [skill, setSkill] = useState(null); // Current skill data
  const navigate = useNavigate();

  useEffect(() => {
    const specializationName = searchParams.get('specialization'); // Extract specialization from the query
    if (!specializationName) {
      navigate('/'); // Redirect to home if no specialization is provided
      return;
    }

    // Match specializationName with `specializationName` field in techSkills
    const matchedSkill = techSkills.find(
      (skill) =>
        skill.id.toLowerCase().replace(/\s+/g, '-') === specializationName.toLowerCase()
    );

    if (matchedSkill) {
      setSkill(matchedSkill); // Set the matched skill
    } else {
      navigate('/'); // Redirect to home if no skill matches
    }
    setLoading(false); // Finish loading
  }, [searchParams, navigate]);

  if (loading) {
    return <div>Loading...</div>; // Render a loading state
  }

  // If no skill is found (fallback safety check), prevent rendering
  if (!skill) {
    return null;
  }

  // Combine topSkills and minorSkills
  const allSkills = skill.topSkills ? [...skill.topSkills, ...skill.minorSkills] : skill.topSkills;

  return (
    <div className="text-primary">
      <div className="py-1">
        <SectionHeader title={skill.name} subtitle={skill.description} />
      </div>
      <SkillBoxContainer stack={allSkills} />
    </div>
  );
}
