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

// layouts
import Layout from './Layout';
import Modal from './Modal';

// pages
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import Thanks from '../pages/Thanks';

// Modal pages
import Project from '../pages/Project';
import Specialization from '../pages/Specialization';

// global Variables
import { skillParam, projectParam } from '../../data/globals';

export default function AppRoutes() {
  const location = useLocation(); // Current location
  const navigate = useNavigate(); // Navigation for closing modal

  // Get query parameters
  const params = new URLSearchParams(location.search);
  const projectID = params.get(projectParam);
  const specializationID = params.get(skillParam);

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
      {projectID && (
        <Modal onClose={() => {navigate(location.pathname);}} > 
          <Project projectName={projectID} />
        </Modal>
      )}

      {/* Modal for Skills */}
      {specializationID && (
        <Modal onClose={() => {navigate(location.pathname);}} > 
          <Specialization specializationID={specializationID} />
        </Modal>
      )}
    </>
  );
}
