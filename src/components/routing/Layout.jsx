import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Layout() {
  return (
    <div className="layout z-0">
      <Navbar/>
      <main className="pt-8 md:pt-12">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};