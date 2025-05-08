import { useEffect, useState } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { HiX } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import NavLogo from "./NavLogo";

export default function NavContent() {
  const [scrollY, setScrollY] = useState(0);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAtTop = scrollY <= 40;   // Check if the page is at the top

  
  return (
    <div
      className="min-w-full h-16 px-4 flex flex-col justify-center transition-all duration-500 relative overflow-hidden bg-secondary/50 text-white"
      style={{
        backgroundColor: isAtTop && "transparent" ,
        backdropFilter: isAtTop ? 'none' : 'blur(6px)', // for other browsers
      }}
    >
      {/* SVG Filter for Noise */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500 ease-in-out"
        style={{
          filter: 'url(#noiseFilter)',
          mixBlendMode: 'multiply',
          opacity: isAtTop ? 0 : 1, // fade in/out
        }}
      />

    <div className="relative flex items-center justify-between">
      <NavLogo/>
      <NavDesktop />
      <button
        className="flex items-center lg:hidden hover:cursor-pointer "
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <HiX className="text-white w-6 h-6 transition-transform duration-500 hover:text-accent" />
        ) : (
          <HiBars3BottomRight className="text-white w-6 h-6 transition-transform duration-500 hover:text-accent" />
        )}
      </button>
    </div>

 

    <NavMobile setIsOpen={setIsMobileMenuOpen} isOpen={isMobileMenuOpen}/>


    </div>
  );
}
