/* 
Filename: ScrollToTop.js
Created By: Chace Nielson
File Created: Oct 27th, 2022
File Updated: Oct 27th, 2022
Summary
    Component to set the scroll window to 0,0 (the top of page) 
    Uses a UseEffect and is placed in the App.js page as <ScrollToTop/>
    The component only has a useEffect call that is activated when the router changes 
    Will cause all pages to start at the top of the page
*/

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation(); // get the currect location of Router

  useEffect(() => { //call useEffect everytime the pathname (Location) Changes
    window.scrollTo(0, 0); //scroll to top
  }, [pathname]); //activated when pathname changes

  return null; // nothing to return in this fucntion its just the useEffect
}