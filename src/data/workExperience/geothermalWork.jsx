/**
 * @file geothermalWork.js
 * @module geothermalWork
 * @desc Contains data for the Energi Simulation Centre for Geothermal Systems Research work experience.
 * This data includes company name, role, dates, image, description, achievements, responsibilities, and soft skills.
 * 
 * @example
 * import { geothermalWork } from '../workExperience/geothermalWork';
 * 
 * @exports geothermalWork
 * 
 * @author Chace Nielson
 * @version 2.2
 * @created Jul 28, 2024
 * @updated Jan 29, 2025
 */

import IconLibrary from "../iconLibrary";
import React from "react";
import { BoldSpan, BoldLink } from "../../components/uiElements/InLineText";

export const geothermalWork = {
  name: 'Energi Simulation Centre for Geothermal Systems Research',
  role: 'Lead Software Developer',
  img: '/png-icons/geothermal.png',
  dates: ['May 2022', 'Jan 2024'],
  link: 'https://ucalgary.ca/labs/geothermal-energy/centre',
  description: (
    <>
      The <BoldSpan>Energi Simulation Centre</BoldSpan> at the University of Calgary conducts advanced research on <BoldSpan>geothermal energy systems</BoldSpan>. The team develops predictive models and data-driven applications to optimize <BoldSpan>geothermal well analysis</BoldSpan> and improve renewable energy solutions.
    </>
  ),
  achievements: [
    <>
      Led development of a geothermal web application using <BoldSpan>React</BoldSpan> and <BoldSpan>FastAPI</BoldSpan> to analyze <BoldSpan>drilling data</BoldSpan> from geothermal wells in <BoldSpan>New Mexico</BoldSpan>, <BoldSpan>Germany</BoldSpan>, and <BoldSpan>Sweden</BoldSpan>.
    </>,
    <>
      Designed and deployed <BoldLink to={"?project=geo-predict"}>Geo Predict</BoldLink>, a machine-learning-powered tool for <BoldSpan>predicting drilling data</BoldSpan>, enabling more accurate geothermal well assessments.
    </>,
    <>
      Managed a team of <BoldSpan>10 developers</BoldSpan>, overseeing <BoldSpan>full-stack development</BoldSpan> and ensuring successful project execution.
    </>,
    <>
      Awarded the <BoldSpan>Intern of Merit</BoldSpan> for exceptional contributions and leadership.
    </>,
  ],
  responsibilities: [
    <>
      Led <BoldSpan>code reviews</BoldSpan> and provided mentorship to improve software quality and team efficiency.
    </>,
    <>
      Worked closely with <BoldSpan>researchers and engineers</BoldSpan> to translate complex geothermal data into interactive and user-friendly applications.
    </>,
    <>
      Conducted <BoldSpan>technical interviews</BoldSpan> and played a key role in hiring <BoldSpan>10+ developers</BoldSpan> for the research team.
    </>,
  ],
  softSkills: [
    IconLibrary.LEADERSHIP,
    IconLibrary.TEAM_COLLABORATION,
    IconLibrary.PROBLEM_SOLVING,
    IconLibrary.ADAPTABILITY,
  ],
  skills: [
    IconLibrary.REACT,
    IconLibrary.DOCKER,
    IconLibrary.POSTGRESQL,
    IconLibrary.FASTAPI,
    IconLibrary.PYTHON,
    IconLibrary.TAILWIND,
    IconLibrary.MACHINE_LEARNING,
  ],
};
