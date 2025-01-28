/**
 * @file generalTech.js
 * @module generalTech
 * @desc Contains all icons related to general technology and tools.
 * @created Jan 22, 2025
 * @updated Jan 22, 2025
 */
import { SiChartdotjs, SiMapbox } from "react-icons/si";

const folder = "generalTech";

const generalTechIcons = {
  MAPBOX_GL: { name: "Mapbox GL", icon: SiMapbox, color: "black" },
  CHART_JS: { name: "Chart.js", icon: SiChartdotjs, color: '#FE777B' },
  EMAIL_JS: { name: "Email.js", svg_path: `${folder}/emailjs.svg` },
  VS_CODE: { name: "VS Code", svg_path: `${folder}/vs-code.svg` },
  
  SEO: { name: "SEO", svg_path: `${folder}/seo.svg` },
  PWA: { name: "Progressive Web App", svg_path: `${folder}/pwa.svg` },

  GOOGLE_ANALYTICS: { name: "Google Analytics", svg_path: `${folder}/google_analytics.svg` },
  THREE_D_SLICER: { name: "3D Slicer", svg_path: `${folder}/3D-Slicer.svg` },
  DICOM: { name: "DICOM", svg_path: `${folder}/dicom.svg` },
};

export default generalTechIcons;
