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

  const isAtTop = scrollY <= 40 && isHomePage;

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
        <div className="flex items-center gap-2 z-10">
          <img
            src="/logos/my-logos/logoFull-outline-small.png"
            alt="Logo"
            className="h-8"
          />
          
          <LinkItem 
          scrollTo ="Hero"
          router ='/'
          >
          <p className="hover:">CHACE NIELSON</p>
          </LinkItem>

        </div>


        {/* Right Section */}
        <div className="z-10 flex items-center gap-4">
          {navLinks.map(({ label, icon: Icon, ...linkProps }) => (
            <LinkItem key={label} {...linkProps}
              className='text-lg hover:text-accent '
              activeClassName="underline"

            >
              <span className="flex items-center gap-2 transition-colors">
                <Icon /> {label}
              </span>
            </LinkItem>
          ))}
        </div>
      </div>
    </div>
  );
}
