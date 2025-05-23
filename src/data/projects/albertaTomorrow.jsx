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
import { FaHome } from "react-icons/fa";

const short = <>Interactive homepage and gateway for accessing Alberta Tomorrow’s <BoldSpan>sustainable land-use simulator</BoldSpan> and educational resources.</>;

const long = (
  <div className="space-y-2">
    <p>
      The <BoldSpan>Alberta Tomorrow Homepage</BoldSpan> serves as the central access point for the simulator and associated educational tools. It introduces students and educators to Alberta’s environmental past, present, and future through interactive visuals, engaging media, and curriculum-aligned content.
    </p>
    <p>
      Visitors are encouraged to explore the <BoldSpan>land-use simulator</BoldSpan>, which enables hands-on scenario planning involving forestry, agriculture, oil and gas, and other land uses. The homepage also provides access to other learning platforms such as <BoldSpan>Energy Tomorrow</BoldSpan> and <BoldSpan>Wildlife Tomorrow</BoldSpan>.
    </p>
    <p>
      The frontend is built with <BoldSpan>Next.js and Tailwind CSS</BoldSpan>, featuring smooth scroll animations via <BoldSpan>Framer Motion</BoldSpan>. It is deployed as a static site using <BoldSpan>AWS S3 and CloudFront</BoldSpan>.
    </p>
  </div>
);

export const albertaTomorrowHomepage = {
  starred: true,
  id:"alberta-tomorrow-homepage",
  name: "Alberta Tomorrow Homepage",
  tags: ["Web App", "Educational", "Next", "Tailwind"],
  blurb: short,
  description: long,
  thumbnail:{
    src: "/abTomorrow-0.jpg",
    blurhash: "L%J@{^-.slkC.T-oWVj[EUa$WCj[",
  },
  youtubeID: "MHDH_m0agFM", // youtube video - thumbnail is used as a placeholder while loading the video
  
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
    IconLibrary.REACT,
    IconLibrary.SIMULATION,
    IconLibrary.SEO,
  ],
  externalLinks: [
    { name: "Homepage", link: "https://albertatomorrow.ca/", icon: FaHome  },
  ],
};
