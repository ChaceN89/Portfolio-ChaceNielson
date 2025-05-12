/**
 * @file NotFoundPage.jsx
 * @module Pages/NotFound
 * @desc 404 Error page component that displays a not found message. - displays a componets
 * 
 * @author Chace Nielson
 * @created Mar 27, 2025
 */

import React from 'react';
import NotFoundInfo from '@/components/uiElements/NotFoundInfo';

export default function NotFound() {
  return (
    <div className='mt-24'>
      <NotFoundInfo/>
    </div>
  );
}
