/**
 * @file ContactToast.jsx
 * @module ContactToast
 * @desc Renders a custom toast notification for the contact form.
 * 
 * This component is used to display a success message when the contact form is submitted successfully.
 * 
 * @component ContactToast
 * 
 * @param {Object} props - The component props.
 * @param {Object} props.t - The toast object provided by react-hot-toast.
 * 
 * @requires react
 * @requires react-hot-toast
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://react-hot-toast.com/docs | React Hot Toast Documentation}
 * 
 * @returns {JSX.Element} The custom toast notification component.
 * 
 * @example
 * // Example usage of ContactToast component
 * toast.custom((t) => <ContactToast t={t} />);
 * 
 * @created 2024-07-23
 * @updated 2024-07-23
 * @since 2.1
 * 
 * @author Chace Nielson
 */

import React from 'react';
import { toast } from 'react-hot-toast';

function ContactToast({ t }) {
  return (
    <div
      className={`${
        t.visible ? 'animate-toast-in' : 'animate-toast-out'
      } max-w-md w-full bg-accent border-2 border-secondary shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 transition duration-300 ease-in-out`}
    >
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-primary text-secondary rounded-full ml-4 mt-4 mb-4">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-secondary">
              Your email has been sent successfully!
            </p>
            <p className="mt-1 text-sm text-secondary opacity-75">
              Thanks for your feedback. I will get back to you as soon as we can.
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-secondary hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ContactToast;
