/**
 * @file glassGeckoWork.js
 * @module glassGeckoWork
 * @desc Contains data for the Glass Gecko Games work experience.
 * This data includes company name, role, dates, image, description, achievements, responsibilities, and soft skills.
 * 
 * @example
 * import { glassGeckoWork } from '../workExperience/glassGeckoWork';
 * 
 * @exports glassGeckoWork
 * 
 * @author Chace Nielson
 * @version 2.3
 * @created Jul 28, 2024
 * @updated Jan 29, 2025
 */
import IconLibrary from "../iconLibrary";
import React from "react";
import { BoldSpan, BoldLink } from "../../components/uiElements/InLineText";

export const glassGeckoWork = {
  name: 'Glass Gecko Games',
  img: '/png-icons/glass-gecko-games-icon.png',
  description: (
    <>
      An indie game studio of <BoldSpan>8 multidisciplinary creators</BoldSpan>, including 
      developers, designers, artists, composers, and sound engineers. 
      We collaborate to build immersive gameplay experiences, focusing on 
      <BoldSpan> innovative mechanics</BoldSpan> and <BoldSpan>engaging storytelling</BoldSpan>.
    </>
  ),
  role: 'Game/Web Developer',
  dates: ['May 2024', 'Current'],
  link: 'https://glassgeckogames.com/',
  achievements: [
    <>
      Designed and launched the <BoldLink to={"?project=glass-gecko-games"}>Company Website</BoldLink>, boosting <BoldSpan>user engagement</BoldSpan> to <BoldSpan>80+ weekly visitors</BoldSpan> through intuitive UI/UX and responsive design.
    </>,
    <>
      Won <BoldSpan>1st place</BoldSpan> in the <BoldSpan>GMTK 2024 Game Jam</BoldSpan>, ranking <BoldSpan>#1 out of 8,000+ participants</BoldSpan> with <BoldLink to={"?project=scale-the-depths"}>Scale the Depths</BoldLink>, which has been played <BoldSpan>60,000+ times</BoldSpan>.
    </>,
    <>
      Implemented <BoldSpan>gameplay mechanics</BoldSpan> and UI components that enhanced <BoldSpan> player experience</BoldSpan> and in-game progression.
    </>,
  ],
  responsibilities: [
    <>
      Developed and maintained the <BoldSpan>company website</BoldSpan>, optimizing <BoldSpan>performance</BoldSpan>, <BoldSpan>accessibility</BoldSpan>, and <BoldSpan>UI/UX</BoldSpan>, while continuously updating content.
    </>,
    <>
      Built and refined <BoldSpan>engaging gameplay mechanics</BoldSpan> in Unity using <BoldSpan>C#</BoldSpan> and <BoldSpan>Plastic SCM</BoldSpan>, enhancing <BoldSpan>player experience</BoldSpan>.
    </>,
    <>
      Collaborated with <BoldSpan>designers</BoldSpan>, <BoldSpan>developers</BoldSpan>, and <BoldSpan>marketers</BoldSpan> to align product features with the studio’s <BoldSpan>creative vision</BoldSpan>.
    </>,
  ],
  skills: [
    IconLibrary.GAME_DESIGN,
    IconLibrary.UNITY,
    IconLibrary.PLASTIC_SCM,
    IconLibrary.CSHARP,
    IconLibrary.WEB_DESIGN,
    IconLibrary.REACT,
    IconLibrary.TAILWIND,
  ], 
  softSkills: [
    IconLibrary.PROBLEM_SOLVING,
    IconLibrary.TEAM_COLLABORATION,
    IconLibrary.CREATIVITY,
    IconLibrary.COMMUNICATION,
  ],
};