/**
 * Main router goes to home page 
 * and other pages can be called from the home page
 */
import React from "react";
import './index.css';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Gallery from './pages/Gallery'
import PageNotFound from './pages/PageNotFound';
import Videos from './pages/Videos';
import ContactThanks from './pages/ContactThanks';
import ScrollToTop from "./components/ScrollToTop";

import BreakPointVisual from './sections/BreakPointVisual'
 
 function App() {
   return (
     <div>
        <ScrollToTop/>
        <BreakPointVisual/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/Gallery" element={<Gallery/>}/>
           <Route path="/Videos" element={<Videos/>}/>
           <Route path="/Contact" element={<ContactThanks/>}/>
           <Route path="/*" element={<PageNotFound/>} /> 
        </Routes>
     </div>
   );
 }
 
 export default App;
 