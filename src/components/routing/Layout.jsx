import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen min-w-56">
    <Navbar />
  
    <main className="flex-1 relative flex flex-col pb-14 sm:pb-24 lg:pb-0 outlet-background  overflow-hidden">
      <div className="relative ">
        <Outlet />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  </div>
  );
};