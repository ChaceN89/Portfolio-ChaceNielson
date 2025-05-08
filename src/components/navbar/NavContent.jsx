import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { navLinks } from '../../data/nav/navData';
import LinkItem from './LinkItem';

export default function NavContent() {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAtTop = scrollY <= 40 && true;

  const [hoveredIndex, setHoveredIndex] = useState(null);
  

  return (
    <div
      className="min-w-full h-16 px-10 flex flex-col justify-center transition-all duration-500 relative overflow-hidden bg-secondary/50 text-white"
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
        {/* Left Section */}
          <LinkItem 
            scrollTo ="Hero"
            router ='/'
          >
            <div className="flex items-center gap-2 z-10 group  transition-all duration-300 ">
              <img
                src="/logos/my-logos/logoFull-outline-small.png"
                alt="Logo"
                className="h-8 group-hover:opacity-80"
              />
              <h6 className="group-hover:text-accent ">CHACE NIELSON</h6>
            </div>
          </LinkItem>

        {/* Right Section */}
        <div className="z-10 flex items-center gap-6">
          {navLinks.map(({ label, icon: Icon, ...linkProps }, index) => (
            <LinkItem key={label} {...linkProps}
              className={` hover:text-accent 
                
                ${hoveredIndex !== null && hoveredIndex !== index ? 'duration-500 blur-[1px]' : 'duration-200'}
                `}
              activeClassName="underline"
              handleMouseEnter={() => setHoveredIndex(index)}
              handleMouseLeave={() => setHoveredIndex(null)} 
            >
              <h6 className="group flex items-center gap-2 transition-all duration-300 ease-in-out my-drop-shadow ">
                <span
                  className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                >
                  <Icon />
                </span>
                <span className="transition-all duration-300 group-hover:translate-x-1">
                  {label}
                </span>
              </h6>
            </LinkItem>
          ))}
        </div>
      </div>
    </div>
  );
}
