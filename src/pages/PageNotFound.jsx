/**
 * Page that is callewd is the route is unknown to router
 * return back to home page
 */
import React from 'react'
import { Navigate } from "react-router-dom";

function PageNotFound() {
  // Navigation back to home page
  return ( 
    <Navigate to="/" replace={true} />
  )
}

export default PageNotFound