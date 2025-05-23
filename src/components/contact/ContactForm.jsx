/**
 * @file ContactForm.jsx
 * @module ContactForm
 * @desc React component that renders the contact form section with a background image, title, subtitle, and form.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-09
 */

import React from 'react';
import Form from './Form';
import './ContactForm.styles.css';
import DownloadCV from './DownloadCV';
import BackgroundWrapper from '../uiElements/images/BackgroundWrapper';

export default function ContactForm() {
  return (
    <div >
      <h2>Contact Me</h2>
      <p>I would love to hear from you! Please fill out the form below to get in touch.</p>
      <DownloadCV /> 
      <hr className='border-t-2 border-secondary dark:border-primary my-4' />
      <BackgroundWrapper 
        background="/backgrounds/laptop-accent.jpg"
        backgroundClass='rounded-2xl object-left '
        className='grid grid-cols-1 md:grid-cols-2 gap-2 '
        noise
      >
        <div className='md:w-1/2 p-8'>
          <Form />
        </div>
      </BackgroundWrapper>
    </div>
  );
}

