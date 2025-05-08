import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import {   delay, motion } from 'framer-motion';
import { useState } from "react";


export default function Layout() {

  // const { pathname } = useLocation(); // Get the current location of Router
  // const [fadeOut, setFadeOut] = useState(false);


  return (

    <div className="flex flex-col min-h-screen min-w-56 relative overflow-hidden bg-primary">

    {/* <motion.div
      key={pathname + "-overlay"}
      initial={{ opacity: 0.4 }}
      animate={{ opacity: fadeOut ? 0 : 0.4 }}
      exit={{ opacity: 0.4 }}
      transition={{
        opacity: { duration: fadeOut ? 0.4 : 0, delay:fadeOut ? 0 : 0.2, ease: "easeInOut" }
      }}
      onAnimationComplete={() => {
        if (!fadeOut) setFadeOut(true); // start fade out after initial animation
      }}
      className="fixed inset-0 bg-black pointer-events-none z-[5]"
    /> */}

      {/* 🟡 Noise background layer */}
      <div className="noise-bg" />

      {/* 🟢 App content */}
      <Navbar />

      <main className="flex-1 relative z-10 flex flex-col overflow-hidden">
        
        <div className="relative">
          <Outlet />
        </div>

        <div className="mt-auto">
          <Footer />
        </div>

      </main>

    </div>

  );
}
