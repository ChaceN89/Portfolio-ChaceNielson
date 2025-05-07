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

export default function LinkItem({
  href,
  scrollTo,
  router,
  children,
  className = "",
  activeClassName = "",
  disableActive = false
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleClick = (e) => {
    e.preventDefault();

    if (scrollTo) {
      if (isHomePage) {
        scroller.scrollTo(scrollTo, {
          smooth: true,
          duration: 600,
          offset: -120,
        });
      } else {
        navigate("/");

        const observer = new MutationObserver(() => {
          const targetElement = document.getElementById(scrollTo);
          if (targetElement) {
            observer.disconnect();

            setTimeout(() => {
              scroller.scrollTo(scrollTo, {
                smooth: true,
                duration: 1000,
                offset: -50,
              });
            }, 300);
          }
        });

        observer.observe(document.body, { childList: true, subtree: true });
      }
    } else if (router) {
      navigate(router);
    }
  };

  return (
    <div className="relative hover:cursor-pointer">
      {/* External Link */}
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </a>
      )}

      {/* Scroll Link on Home Page */}
      {scrollTo && isHomePage && (
        <ScrollLink
          to={scrollTo}
          smooth={true}
          duration={1000}
          spy={true}
          offset={-50}
          activeClass={!disableActive ? activeClassName : ""}
          className={className}
        >
          {children}
        </ScrollLink>
      )}

      {/* Scroll Link with redirect to Home first */}
      {scrollTo && !isHomePage && (
        <a href="/" onClick={handleClick} className={className}>
          {children}
        </a>
      )}

      {/* Router Link */}
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
