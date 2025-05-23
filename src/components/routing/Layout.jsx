/**
 * @file Layout.jsx
 * @module Layout
 * @desc Shared layout wrapper that includes the Navbar, Footer, and page content via <Outlet />.
 * This component applies global structure, persistent elements, and optional background layers.
 *
 * @see {@link https://reactrouter.com/en/main/components/outlet | React Router Outlet}
 *
 * @author Chace Nielson
 * @created May 23, 2025
 * @updated May 23, 2025
 */

import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen min-w-[100px] relative overflow-hidden">

      {/* 🟡 Background noise layer */}
      <div className="noise-bg" />

      {/* 🟢 Persistent navigation */}
      <Navbar />

      {/* 🔵 Main content area */}
      <main className="flex-1 relative z-10 flex flex-col overflow-hidden">
        <div className="relative">
          <Outlet />
        </div>

        {/* 🔻 Persistent footer */}
        <div className="mt-auto">
          <Footer />
        </div>
      </main>

    </div>
  );
}
