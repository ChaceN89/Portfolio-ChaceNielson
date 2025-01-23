/**
 * @file AppRoutes.jsx
 * @module AppRoutes
 * @desc Defines the routing structure for the application using React Router.
 * Includes routing for home, gallery, thank-you page, specialization, and project pages.
 * 
 * @requires React
 * @requires react-router-dom
 * 
 * @author Chace Nielson
 * @created Jan 22, 2025
 * @updated Jan 22, 2025
 */

import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import Thanks from '../pages/Thanks';
import Project from '../pages/Project';
import Specialization from '../pages/Specialization';
import Layout from './Layout';
import ModalLayout from './ModalLayout';



export default function AppRoutes() {
  const location = useLocation();

  return (

    <Routes location={location} key={location.key}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/photos" element={<Gallery />} />
        <Route path="/thanks" element={<Thanks />} /> 
        <Route path="*" element={<Navigate to="/" replace />} />
        
        {/* Modal Routes */}
        <Route path="" element={<ModalLayout />}>
          <Route path="skills/:name" element={<Specialization />} />
          <Route path="project/:name" element={<Project />} />
        </Route>

      </Route>
    </Routes>
    
  );
}
