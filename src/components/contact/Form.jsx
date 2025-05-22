/**
 * @file Form.jsx
 * @module Form
 * @description A React form component for sending messages using EmailJS. 
 * Validates input fields and shows success or error notifications. 
 * Redirects to a "Thanks" page on successful submission.
 * 
 * @see {@link https://www.emailjs.com/docs/ | EmailJS Documentation}
 * 
 * @author Chace Nielson
 * @created Jan 26, 2025
 * @updated May 22, 2025
 */

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import MyBtn from '../buttons/MyBtn';
import { contactPageData } from '@/data/pageData/contactPageData';

export default function Form() {

  const formRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the EmailJS configuration is set up correctly
    if (!contactPageData.EMAILJS_USER_ID || !contactPageData.EMAILJS_SERVICE_ID || !contactPageData.EMAILJS_TEMPLATE_ID) {
      toast.error('EmailJS configuration is missing or incorrect.', {
        position: 'center',
      });
      return;
    }

    // Create the email template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      reply_to: email
    };

    // Use EmailJS to send the email
    emailjs.send(
      contactPageData.EMAILJS_SERVICE_ID,
      contactPageData.EMAILJS_TEMPLATE_ID,
      templateParams,
      contactPageData.EMAILJS_USER_ID
    ).then(() => {
      // Navigate to the Thanks page
      navigate('/thanks');
    }, (error) => {
      toast.error('Failed to send email. Please try again later.', {
        position: 'center',
      });
    });
  };

  return (
    <form 
      ref={formRef}
      onSubmit={handleSubmit} 
      className="space-y-6"
    >
      <Toaster />
      <div>
        <label htmlFor="name" className="contact-label">Name</label>
        <input
          type="text"
          placeholder="John Doe"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="contact-input"
        />
      </div>
      <div>
        <label htmlFor="email" className="contact-label">Email</label>
        <input
          type="email"
          placeholder="name@example.com"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="contact-input"
        />
      </div>
      <div>
        <label htmlFor="message" className="contact-label">Message</label>
        <textarea
          id="message"
          placeholder="Leave your thoughts here..."
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          maxLength="800"
          className="contact-input min-h-28 h-20 xl:h-40 2xl:h-64 max-h-72"
        />
      </div>
      <div className='w-full flex justify-start'>
        <MyBtn sm callBack={() => formRef.current?.requestSubmit()}>
          Send Message
        </MyBtn>
      </div>
    </form>
  );
}

