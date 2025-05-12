/**
 * @file 404Page.jsx
 * @module Pages/NotFound
 * @desc Branded, responsive 404 error page with return CTA and on-brand visuals, placed inside the existing page layout structure.
 * 
 * @author Chace Nielson
 * @created Mar 27, 2025
 */

import React from 'react';
// import PageTitle from '../routing/PageTitle';
import HexSeparator from '@/components/uiElements/hexSparator/HexSeparator';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import MyBtn from '@/components/buttons/MyBtn';
import NotFoundInfo from '@/components/uiElements/NotFoundInfo';

export default function NotFound() {
  return (
    <div className='mt-24'>
      <NotFoundInfo/>
    </div>
  );
}
