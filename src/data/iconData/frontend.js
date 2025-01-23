import { FaReact } from "react-icons/fa";
import { SiChartdotjs, SiRedux, SiStreamlit, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { MdOutlineBlurOn } from "react-icons/md";

const frontendIcons = {
  REACT: { name: "React", icon: FaReact, color: "lightblue" },
  Next: { name: "Next.js", icon:RiNextjsFill },
  VUE: { name: "Vue", svg_path: "vue.svg" },
  RESPONSIVE_DESIGN: { name: "Responsive Design", svg_path: "responsive-design.svg" },
  WEB_DESIGN: { name: "Web Design", svg_path: "web-design.svg" },
  TAILWIND: { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF9" },
  STREAMLIT: { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
  REDUX: { name: "Redux", icon: SiRedux, color: '#4A4ABC' },
  HTML: { name: "HTML", svg_path: "html-5.svg" },
  CSS: { name: "CSS", svg_path: "css-3.svg" },
  STATEMANAGEMENT: { name: "State Management", svg_path: "state-management.svg" },
  FRAMER_MOTION: { name: "Framer Motion", icon: TbBrandFramerMotion, color: "black" },
  BLURHASH: { name: "BlurHash", icon: MdOutlineBlurOn, color: "black" },

  SEO: { name: "SEO", svg_path: "seo.svg" },
  PWA: { name: "Progressive Web Apps", svg_path: "pwa.svg" },

}

export default frontendIcons;