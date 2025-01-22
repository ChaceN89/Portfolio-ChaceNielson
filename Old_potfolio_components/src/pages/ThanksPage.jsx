/**
 * @file ThanksPage.jsx
 * @module ThanksPage
 * @desc A React component that displays a thank you message after an email is sent.
 * It will redirect the user to the home page after 4 seconds.
 *
 * @component ThanksPage
 *
 * @requires react
 * @requires useEffect from 'react'
 * @requires useNavigate from 'react-router-dom'
 * @requires AiOutlineCheckCircle from 'react-icons/ai'
 * @requires MyButton from '../components/buttons/MyButton'
 * @requires BackgroundWrapper from '../wrappers/BackgroundWrapper'
 *
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 *
 * @example
 * // Example usage of ThanksPage component
 * import ThanksPage from './ThanksPage';
 *
 * function App() {
 *   return (
 *     <div className="App">
 *       <ThanksPage />
 *     </div>
 *   );
 * }
 *
 * @exports ThanksPage
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCheckCircle } from "react-icons/ai";
import MyButton from '../components/buttons/MyButton';
import BackgroundWrapper from '../wrappers/BackgroundWrapper';

function ThanksPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const returnHome = () => {
    navigate('/');
  };

  return (
    <BackgroundWrapper 
      id="AboutMe" 
      className="min-h-section-height h-full flex items-center justify-center"      
      src={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w3-trim.png"}
      lowResSrc={process.env.PUBLIC_URL + "/png-backgrounds/detailed/range-b&w3-mountain-small.png"}
      bgOpacity={55}
      backgroundSize="cover"
    >
      <div className="flex flex-col items-center justify-center space-y-5 bg-frosted-glass rounded-2xl max-w-lg border-faint">
        <AiOutlineCheckCircle size={100} />
        <h1 className="text-4xl font-bold text-center">Thank You!</h1>
        <p className='text-center'>I appreciate your interest and I will get back to you as soon as possible.</p>
        <MyButton onClick={returnHome}>Home</MyButton>
      </div>
    </BackgroundWrapper>
  );
}

export default ThanksPage;
