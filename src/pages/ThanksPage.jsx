/**
 * @file ThanksPage.jsx
 * @module ThanksPage
 * @desc A React component that displays a thank you message after an email is sent.
 * It will redirect the user to the home page after 4 seconds.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated may 22, 2025
 */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCheckCircle } from "react-icons/ai";
import HexSeparator from '@/components/uiElements/hexSparator/HexSeparator';
import MyBtn from '@/components/buttons/MyBtn';

export default function ThanksPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const returnHome = () => {
    navigate('/');
  };

  return (
    <div className="w-screen h-screen relative flex items-center justify-center">
      
      {/* Foreground message box */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-5 bg-frosted-glass rounded-2xl max-w-lg border-faint px-6 py-8">
        <HexSeparator
          rows={9}
          parentClass="absolute inset-0 -z-10"
          hexClass="bg-primary dark:bg-secondary opacity-50"
        />
        <div className="flex gap-4 items-center">
          <AiOutlineCheckCircle size={80} />
          <h1 className="text-4xl font-bold text-center whitespace-nowrap">Thank You!</h1>
        </div>
        <p className="text-center pt-14">I appreciate your interest and I will get back to you as soon as possible.</p>
        <MyBtn callBack={returnHome} className="absolute bottom-10">
          Return Home
        </MyBtn>
      </div>
    </div>
  );
}