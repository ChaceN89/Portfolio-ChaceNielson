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

import { Thumbnail } from "react-pdf";
import IconLibrary from "../iconLibrary";
import { BoldSpan } from "@/components/uiElements/InLineText";

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

const proj_id = "alberta-tomorrow-homepage";

export const albertaTomorrowHomepage = {
  starred: true,
  id:proj_id,
  name: <>Alberta Tomorrow Homepage</>,
  tag: "Education",
  blurb: short,
  description: long,
  video:{
    thumbnail:"/projects/"+proj_id+'/abTomorrow-0.jpg',
    youtubeID: "MHDH_m0agFM", // Add video if available
  },
  images: [
    { src: "abTomorrow-1.png", blurhash: "LlC8%[oOozfA_7owjFk8%oobj;jZ" }, // Replace or add more images as needed
    { src: "abTomorrow-2.png", blurhash: "LlC8%[oOozfA_7owjFk8%oobj;jZ" }, // Replace or add more images as needed
    { src: "abTomorrow-3.png", blurhash: "LlC8%[oOozfA_7owjFk8%oobj;jZ" }, // Replace or add more images as needed
    { src: "abTomorrow-4.png", blurhash: "LlC8%[oOozfA_7owjFk8%oobj;jZ" }, // Replace or add more images as needed
  ],
  mainStack: [
    IconLibrary.NEXT,
    IconLibrary.TAILWIND,
    IconLibrary.AWS,
  ],
  extendedStack: [
    IconLibrary.FRAMER_MOTION,
    IconLibrary.REACT,
    // IconLibrary.UI_UX,
    // IconLibrary.EDUCATION,
    IconLibrary.SIMULATION,
    IconLibrary.SEO,
    // IconLibrary.DEPLOYMENT,
  ],
  externalLinks: [
    { name: "Live Site", link: "https://albertatomorrow.ca/", icon: IconLibrary.WORLD.icon },
  ],
};
