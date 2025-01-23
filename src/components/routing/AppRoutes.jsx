/**
 * @file AppRoutes.jsx
 * @module AppRoutes
 * @desc Defines the main routing system for the application, including modal routing for projects and specializations.
 *       This component handles URL-based navigation and dynamically renders modals based on query parameters.
 * 
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * 
 * @author Chace Nielson
 * @created 2024-07-26
 * @updated Jan 23, 2025
 */

import React from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import Thanks from '../pages/Thanks';
import Project from '../pages/Project';
import Specialization from '../pages/Specialization';
import Layout from './Layout';
import Modal from './Modal';

// global Variables
import { skillParam, projectParam } from '../../data/globals';

export default function AppRoutes() {
  const location = useLocation(); // Current location
  const navigate = useNavigate(); // Navigation for closing modal

  // Get query parameters
  const params = new URLSearchParams(location.search);
  const projectName = params.get(projectParam);
  const specializationName = params.get(skillParam);

  return (
    <>
      {/* Main App Routes */}
      <Routes >
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
      {specializationName && (
        <Modal onClose={() => {navigate(location.pathname);}} > 
          <Specialization specializationName={specializationName} />
        </Modal>
      )}
    </>
  );
}
