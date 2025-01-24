/**
 * @file frontend.js
 * @desc Contains data for the Web Design skills section.
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated Jan 23, 2025
 */

import IconSkills from "../iconLibrary";

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
    IconSkills.NEXT,
    IconSkills.REACT,
    IconSkills.JAVASCRIPT,
    IconSkills.TAILWIND,
  ],
  minorSkills: [
    IconSkills.VUE,
    IconSkills.VITE,
    IconSkills.TYPESCRIPT,
        
    IconSkills.RESPONSIVE_DESIGN,
    IconSkills.HTML,
    IconSkills.CSS,
    
    IconSkills.REDUX,
    IconSkills.CHART_JS,
    IconSkills.FRAMER_MOTION,
    IconSkills.STREAMLIT,

    IconSkills.EMAIL_JS,
    IconSkills.GOOGLE_ANALYTICS,

    IconSkills.PWA,
    IconSkills.SEO,
    IconSkills.DATA_VISUALIZATION,

  ],
};
