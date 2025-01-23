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
  EMAILJS: { name: "Email.js", svg_path: `${folder}/emailjs.svg` },
  VS_CODE: { name: "VS Code", svg_path: `${folder}/vs-code.svg` },
  
  SEO: { name: "SEO", svg_path: `${folder}/seo.svg` },
  PWA: { name: "Progressive Web Apps", svg_path: `${folder}/pwa.svg` },
};

export default generalTechIcons;
