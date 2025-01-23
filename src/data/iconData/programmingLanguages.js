/**
 * @file programmingLanguages.js
 * @module programmingLanguages
 * @desc Contains all icons related to programming languages.
 * @created Jan 22, 2025
 * @updated Jan 22, 2025
 */
import { SiTypescript } from "react-icons/si";

const folder = "programmingLanguages";

const programmingLanguageIcons = {
  JAVASCRIPT: { name: "JavaScript", svg_path: `${folder}/javascript.svg` },
  TYPESCRIPT: { name: "TypeScript", icon: SiTypescript, color: "#38BDF9" },
  PYTHON: { name: "Python", svg_path: `${folder}/python.svg` },
  JAVA: { name: "Java", svg_path: `${folder}/java.svg` },
  CPP: { name: "C++", svg_path: `${folder}/c-plus-plus.svg` },
  CSHARP: { name: "C#", svg_path: `${folder}/c-sharp.svg` },
};

export default programmingLanguageIcons;