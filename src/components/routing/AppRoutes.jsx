import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useBackgroundLocation } from './LocationProvider'; // Import the context
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import Thanks from '../pages/Thanks';
import Project from '../pages/Project';
import Specialization from '../pages/Specialization';
import Layout from './Layout';
import Modal from './Modal';

export default function AppRoutes() {
  const backgroundLocation = useBackgroundLocation(); // Use the context

  return (
    <>
      {/* Main App Routes */}
      <Routes location={backgroundLocation}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/photos" element={<Gallery />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>

      {/* Modal Routes */}
      <Routes>
        <Route path="/project/:name" element={<Modal><Project /></Modal>} />
        <Route path="/skills/:name" element={<Modal><Specialization /></Modal>} />
      </Routes>
    </>
  );
}
