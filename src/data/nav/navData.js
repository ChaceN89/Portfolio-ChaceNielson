/**
 * @file navData.jsx
 * @module data/navData
 * @desc Navigation and dropdown data for Alberta Tomorrow website.
 *       Includes scrollable home page links, dropdown menu items, external resource links, and donation link.
 *       Also includes Framer Motion dropdown animation variants.
 *
 * @structure
 * - scrollLinks: Array of in-page navigation links (uses scroll).
 * - toolsDropDown: Dropdown list for external learning tools.
 * - learnMoreDropDown: Dropdown list for informational pages.
 * - extraPages: Miscellaneous links such as Terms and Privacy.
 * - donateInfo: Data for the donation button.
 * - dropdownVariants: Framer Motion animation config for dropdowns.
 *
 * @example
 * {
 *   label: "Home",
 *    router: "/",
 *   scrollTo: "hero",
 *   icon: <FaHome />
 * }
 *
 * @author Chace Nielson
 * @created May 7, 2025
 * @updated May 7, 2025
 */
import {
  FaHome,
  FaTools,
  // FaHandshake,
  FaUser,
  FaCodeBranch,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";

export const navLinks = [
  // Home Page Scroll Links
  { label: "Home", scrollTo: "hero", router: "/", icon: FaHome },
  { label: "Showcase", scrollTo: "featured-projects", router: "/", icon: MdFeaturedPlayList },
  { label: "Expertise", scrollTo: "tech-stacks", router: "/", icon: FaTools },
  { label: "About Me", scrollTo: "about-me", router: "/", icon: FaUser },
  
  // Pages
  // { label: "About", router: "/about", icon: FaUser },
  { label: "Projects", router: "/projects", icon: FaCodeBranch },
  { label: "Contact", router: "/contact", icon: FaEnvelopeOpenText },
];
