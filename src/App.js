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
import VideoGames from './pages/VideoGames';
import ContactThanks from './pages/ContactThanks';
 
 function App() {
   return (
     <div className='body-font font-poppins'>
         <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/Gallery" element={<Gallery/>}/>
           <Route path="/VideoGames" element={<VideoGames/>}/>
           <Route path="/Contact" element={<ContactThanks/>}/>
           <Route path="/*" element={<PageNotFound/>} /> 
         </Routes>
     </div>
   );
 }
 
 export default App;
 