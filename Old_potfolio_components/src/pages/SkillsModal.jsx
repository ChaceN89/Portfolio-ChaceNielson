/**
 * @file SkillsModal.jsx
 * @module SkillsModal
 * @desc React component that displays a detailed view of skills in a modal.
 * This component fetches the skill data based on the URL parameter, and if the skill is found,
 * it renders the skill details along with top and minor skills using the ShadowBox component.
 *
 * @component SkillsModal
 *
 * @requires react
 * @requires useParams from 'react-router-dom'
 * @requires useNavigate from 'react-router-dom'
 * @requires techSkills from '../data/pageData/skillsData'
 * @requires SectionHeader from '../components/uiElements/SectionHeader'
 * @requires SkillBoxContainer from '../components/uiElements/SkillBoxContainer'
 *
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 *
 * @example
 * // Example usage of SkillsModal component
 * import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 * import SkillsModal from './SkillsModal';
 *
 * function App() {
 *   return (
 *     <Router>
 *       <Routes>
 *         <Route path="/skills/:id" element={<SkillsModal />} />
 *       </Routes>
 *     </Router>
 *   );
 * }
 *
 * @exports SkillsModal
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { techSkills } from "../data/pageData/skillsData";
import SectionHeader from "../components/uiElements/SectionHeader";
import SkillBoxContainer from "../components/uiElements/SkillBoxContainer";

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

  const allSkills = skill.topSkills ? [...skill.topSkills, ...skill.minorSkills] : skill.topSkills;

  return (
    <div className="text-primary">
      <div className="py-1">
        <SectionHeader title={skill.name} subtitle={skill.description} />
      </div>
      <SkillBoxContainer stack={allSkills} />
    </div>
  );
};

export default SkillsModal;
