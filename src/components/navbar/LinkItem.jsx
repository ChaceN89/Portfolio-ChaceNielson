/**
 * @file LinkItem.jsx
 * @module LinkItem
 * @desc A reusable navigation link component that supports react-scroll, react-router, and href links.
 *
 * @see {@link https://reactrouter.com/en/main | React Router Documentation}
 * @see {@link https://www.npmjs.com/package/react-scroll | React Scroll Documentation}
 *
 * @author Chace Nielson
 * @created Mar 17, 2025
 * @updated Mar 21, 2025
 */

import React from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { delay } from "framer-motion";

export default function LinkItem({
  scrollTo,
  router,
  children,
  className = "",
  activeClassName = "",
  disableActive = false
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const onSamePage = location.pathname ? location.pathname === router : false;
  location.pathname === "/";

  const scrollOffset = -60

  const handleClick = (e) => {
    e.preventDefault();

    // If there is a scroll to and we are't in the home page
    if (scrollTo && !onSamePage) {
        navigate(router, { replace: true });
        console.log("navigating to home page before scroll");

        const observer = new MutationObserver(() => {
          const targetElement = document.getElementById(scrollTo);
          if (targetElement) {
            observer.disconnect();

            setTimeout(() => {
              scroller.scrollTo(scrollTo, {
                smooth: true,
                duration: 1000,
                offset: scrollOffset,
              });
            }, 400);
          }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    
    } else if (router) {
      navigate(router);
    }
  };

  return (
    <div className="relative hover:cursor-pointer">


      {/* Scrill Link on the same page - active style when in section on the page  */}
      {scrollTo && onSamePage && (
        <ScrollLink
          to={scrollTo}
          smooth={true}
          duration={1000}
          spy={true}
          offset={scrollOffset}
          activeClass={!disableActive ? activeClassName : ""}
          className={className}
        >
          {children}
        </ScrollLink>
      )}

      {/* Scroll Link not on the same page - no need for active style */}
      {scrollTo && !onSamePage && (
        <a href="/" onClick={handleClick} className={className}>
          {children}
        </a>
      )}

      {/* Router Link with no scrollto - can be active is page is a simple navlink page */}
      {router && !scrollTo && (
        <NavLink
          to={router}
          className={({ isActive }) =>
            `${className} ${isActive && !disableActive ? activeClassName : ""}`
          }
        >
          {children}
        </NavLink>
      )}
    </div>
  );
}
