/**
 * @file frontend.js
 * @desc Contains data for the Web Design skills section.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 23, 2025
 */

import IconLibrary from "../iconLibrary";

export const frontend = { 
  id: "frontend-development",
  name: "Frontend Development",
  linkName: "See More Skills and Projects", 
  description: (
    <span>
      With 3+ years of experience, I enjoy creating interactive and responsive applications tailored to diverse use cases.
    </span>
  ),
  topSkills: [
    IconLibrary.NEXT,
    IconLibrary.REACT,
    IconLibrary.JAVASCRIPT,
    IconLibrary.TAILWIND,
  ],
  minorSkills: [
    IconLibrary.VUE,
    IconLibrary.VITE,
    IconLibrary.TYPESCRIPT,
        
    IconLibrary.RESPONSIVE_DESIGN,
    IconLibrary.HTML,
    IconLibrary.CSS,
    
    IconLibrary.REDUX,
    IconLibrary.CHART_JS,
    IconLibrary.FRAMER_MOTION,
    IconLibrary.STREAMLIT,

    IconLibrary.EMAIL_JS,
    IconLibrary.GOOGLE_ANALYTICS,

    IconLibrary.PWA,
    IconLibrary.SEO,
    IconLibrary.DATA_VISUALIZATION,

  ],
};
