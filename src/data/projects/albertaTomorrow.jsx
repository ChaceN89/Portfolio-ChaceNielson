/**
 * @file albertaTomorrowHomepage.js
 * @module albertaTomorrowHomepage
 * @desc Homepage and landing portal for the Alberta Tomorrow educational simulator and tools.
 * 
 * @name Alberta Tomorrow Homepage
 * 
 * @author Chace Nielson
 * @created Jul 28, 2024
 * @updated May 12, 2025
 */

import IconLibrary from "../iconLibrary";
import { BoldSpan } from "@/components/uiElements/InLineText";
import { FaHome, FaMapMarkedAlt } from "react-icons/fa";

const short = <>Interactive homepage and central hub for accessing the <BoldSpan>land-use simulator</BoldSpan>, lesson plans, videos, and other educational resources.</>;

const long = (
  <div className="space-y-2">
    <p>
      The <BoldSpan>Alberta Tomorrow Homepage</BoldSpan> is the central entry point for the Alberta Tomorrow platform, connecting students and educators to land-use education, environmental history, and sustainability tools across Alberta.
    </p>
    <p>
      Designed to support both classroom and independent learning, the homepage includes information about the <BoldSpan>organization</BoldSpan>, an <BoldSpan>Indigenous Voices module</BoldSpan>, access to <BoldSpan>lesson plans</BoldSpan>, <BoldSpan>educational videos</BoldSpan>, and acts as a hub to explore the <BoldSpan>land-use simulator</BoldSpan> and future tools like <BoldSpan>Energy Tomorrow</BoldSpan> and <BoldSpan>Wildlife Tomorrow</BoldSpan>.
    </p>
    <p>
      I designed and built the homepage as part of the broader Alberta Tomorrow platform team, where I also contribute to the development of the <BoldSpan>land-use simulator</BoldSpan> and related educational tools.
    </p>
  </div>
);

export const albertaTomorrowHomepage = {
  id:"alberta-tomorrow-homepage",
  name: "Alberta Tomorrow Learning Hub",
  tags: ["Web App", "Educational", "Next", "Tailwind", "CSS", "Express", "AWS", "Mapbox", "JavaScript"],
  badge: "Full-Stack Learning Hub",
  blurb: short,
  description: long,
  
  thumbnail:{
    src: "abTomorrow-0.jpg",
    blurhash: "L%J@{^-.slkC.T-oWVj[EUa$WCj[",
  },
  
  // youtube video - thumbnail is used as a placeholder while loading the video
  youtubeID: "MHDH_m0agFM", 
  
  // list of images to display in the modal carousel
  images: [
    { src: "abTomorrow-1.jpg", blurhash: "LmJa_z$_xuV?_4%Ms,R-5GWGWAa$" }, // Replace or add more images as needed
    { src: "abTomorrow-2.jpg", blurhash: "LKA_-Q0K~W4.EMbbaKkDv0r=Shnh" }, // Replace or add more images as needed
    { src: "abTomorrow-3.jpg", blurhash: "L5OD^9L100.m00=b~W=x009t0xE1" }, // Replace or add more images as needed
    { src: "abTomorrow-4.jpg", blurhash: "L9OW$-~pD+t6009Zxt%MENtQD%t7" }, // Replace or add more images as needed
  ],
  mainStack: [
    IconLibrary.NEXT,
    IconLibrary.TAILWIND,
    IconLibrary.AWS,
  ],
  extendedStack: [
    IconLibrary.FRAMER_MOTION,
    IconLibrary.MAPBOX_GL,
    IconLibrary.REACT,
    IconLibrary.SEO,
  ],
  externalLinks: [
    { name: "Homepage", link: "https://albertatomorrow.ca/", icon: FaHome  },
    { name: "Land-Use Simulator", link: "https://www.simulator.albertatomorrow.ca/", icon: FaMapMarkedAlt},
  ],
};
