import React from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useBackgroundLocation } from './LocationProvider';
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import Thanks from '../pages/Thanks';
import Project from '../pages/Project';
import Specialization from '../pages/Specialization';
import Layout from './Layout';
import Modal from './Modal';

export default function AppRoutes() {
  const backgroundLocation = useBackgroundLocation(); // Background context
  const location = useLocation(); // Current location
  const navigate = useNavigate(); // Navigation for closing modal

  // Get query parameters
  const params = new URLSearchParams(location.search);
  const projectName = params.get('project');
  const skillName = params.get('skill');

  return (
    <>
      {/* Main App Routes */}
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/photos" element={<Gallery />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>

      {/* Modal for Projects */}
      {projectName && (
        <Modal onClose={() => {navigate(location.pathname);}} > 
          <Project projectName={projectName} />
        </Modal>
      )}

      {/* Modal for Skills */}
      {skillName && (
        <Modal onClose={() => {navigate(location.pathname);}} > 
          <Specialization skillName={skillName} />
        </Modal>
      )}
    </>
  );
}
