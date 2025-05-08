import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '../../data/nav/navData';
import { RiScrollToBottomLine } from 'react-icons/ri';


export default function NavMobile({setIsOpen, isOpen }) {

  const dropdownVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };
  
    useEffect(() => {
      // Toggle body overflow based on menu open state
      document.body.classList.toggle("overflow-hidden", isOpen);
    
      // Resize handler to auto-close menu on md+
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setIsOpen(false);
        }
      };
    
      window.addEventListener("resize", handleResize);
    
      // Cleanup
      return () => {
        document.body.classList.remove("overflow-hidden");
        window.removeEventListener("resize", handleResize);
      };
    }, [isOpen, setIsOpen]);
    
    return (
      <div className="fixed inset-0 z-50 pointer-events-none">
      
        <AnimatePresence initial={false}>
        {isOpen && (
            <>

              {/* Dropdown menu */}
              <motion.div
                key="mobile-menu"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
                className="w-full overflow-hidden fixed top-16 left-0 z-30 "
              >
                  <hr className="border-white border-1 rounded-4xl mt-4 sticky top-0 z-10" />
            <div className="absolute bottom-2 right-2 text-secondary"><RiScrollToBottomLine size={24} /></div>
            <div onClick={() => setIsOpen(false)} className="noise-bg "/>

            <div className="p-4 max-h-[50svh] overflow-y-auto scroll-element relative bg-secondary/90  backdrop-blur-2xl  ">
                  {/* your link items */}
                  ajhahabr
                  ajhahabr
                  <br />
                  ajhahabr
                  <br />
                  ajhahabr
                  <br />
                  ajhahabr
                  <br />
                  <br />
                  ajhahabr
                  <br />
                  ajhahabr
                  <br />
                  ajhahabr
                  <br />
                  <br />
                  ajhahabr
                  <br />
                  ajhahabr
                  <br />
                  <br />
                  ajhahabr
                  <br />
                  ajhahabr
                  <br />
                  <br />
                  ajhahabr
                  <br />
                  ajhahabr
                  <br />
                  <br />
                  ajhahabr
                  <br />
                  ajhahabr
                  <br />
                  <br />
                  ajhahabr
                  <br />
                  ajhahabr
                  <br />
                  ajhahabr
                  <br />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    )
}
