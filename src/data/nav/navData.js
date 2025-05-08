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
 * @updated Aay 7, 2025
 */
import {
  FaHome,
  FaProjectDiagram,
  FaTools,
  FaHandshake,
  FaUserClock,
  FaImage,
  FaHeart,
  FaFlask,
  FaEnvelopeOpenText,
} from "react-icons/fa";

export const navLinks = [
  { label: "Home", scrollTo: "Hero", router: "/", icon: FaHome },
  { label: "Projects", scrollTo: "Projects", router: "/", icon: FaProjectDiagram },
  { label: "Skills", scrollTo: "TechStack", router: "/", icon: FaTools },
  { label: "Let's Connect", scrollTo: "CallToAction", router: "/", icon: FaHandshake },
  { label: "TimeLine", scrollTo: "Timeline", router: "/about", icon: FaUserClock },
  { label: "Gallery", scrollTo: "Gallery", router: "/about", icon: FaImage },
  { label: "Thanks", router: "/thanks", icon: FaHeart },
  { label: "Side Projects", router: "/projects", icon: FaFlask },
  { label: "Contact", router: "/contact", icon: FaEnvelopeOpenText },
];
