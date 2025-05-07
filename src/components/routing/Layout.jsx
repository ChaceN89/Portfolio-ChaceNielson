import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen min-w-56 relative overflow-hidden bg-primary">

      {/* 🟡 Noise background layer */}
      <div className="noise-bg" />

      {/* 🟢 App content */}
      <Navbar />

      <main className="flex-1 relative z-10 flex flex-col overflow-hidden">
        
        <div className="relative ">
          <Outlet />
        </div>

        <div className="mt-auto">
          <Footer />
        </div>

      </main>

    </div>
  );
}
