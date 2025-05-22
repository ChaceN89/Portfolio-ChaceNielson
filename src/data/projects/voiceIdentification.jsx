/**
 * @file voiceIdentification.js
 * @module voiceIdentification
 * @desc Contains data for the Voice Identification project.
 * 
 * @name Voice Identification
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-08-09
 * @since 2.1
 */

import IconLibrary from "../iconLibrary";
import { BoldSpan } from "../../components/uiElements/InLineText";

// Short description (blurb) to be displayed on the project card
const short = "Voice identification user interface using machine learning.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This project involved the development of a voice identification system using <BoldSpan>machine learning algorithms</BoldSpan> to recognize and verify individuals by their voice. Built with Python and Plotly-Dash, the system processes voice recordings to extract features for analysis. A comprehensive Jupyter notebook supports data analysis and model training, leveraging techniques like <BoldSpan>Gaussian Mixture Models (GMM)</BoldSpan> and <BoldSpan>Convolutional Neural Networks (CNN) </BoldSpan>  to improve accuracy in voice recognition.
    </p>
    <p>
      The concept originated from a class project, which I expanded upon by developing a <BoldSpan>graphical user interface (GUI)</BoldSpan> that allows users to upload and analyze voice samples. This extension made the system more user-friendly and accessible, demonstrating Python's potential alongside intuitive data visualization tools..
    </p>
    <p>
      The final system features a web interface that is practical and easy to use, enabling efficient and reliable voice identification. The integration of advanced machine learning methods ensures the system's effectiveness, demonstrating the powerful combination of Python and modern machine learning techniques.
    </p>
  </div>
);


export const voiceIdentification = {
  starred: true,
  id: "voice-identification",
  name: "Voice Identification",
  tag: "Voice Identification",
  tag: "Machine Learning",
  blurb: short,
  description: long,
  images: [
    { src: "voice_recognition0.jpg", blurhash: "L5S?7G$x*IJF.lXSDixB.7IpVZ%K" },
    { src: "voice_recognition1.jpg", blurhash: "L6PjDVxa00xu00of_4RP9FRj-;of" },
    { src: "voice_recognition2.jpg", blurhash: "L3ODnIt600xu00R+~WWC00V@a#s." },
    { src: "voice_recognition3.jpg", blurhash: "L5PjGc%200fT00of~qi_00Rj?bof" },
    { src: "voice_recognition5.jpg", blurhash: "L3PQ87RjoeM{_2WB_4Rj00xu-:xu" },
    { src: "voice_recognition4.jpg", blurhash: "L5S?7G$x*IJF.lXSDixB.7IpVZ%K" },
  ],
  mainStack: [
    IconLibrary.PLOTLY_DASH,
    IconLibrary.PYTHON,
    IconLibrary.MACHINE_LEARNING,
  ],
  externalLinks: [
    { name: "Code", link: "https://github.com/ChaceN89/voice-recognition", icon: IconLibrary.GITHUB.icon },
    { name: "Notebook", link: "https://github.com/ChaceN89/voice-recognition/blob/main/original_notebook/ENCM%20Final%20Project%20Speech%20Recognition.ipynb", icon: IconLibrary.GITHUB.icon },
    { name: "Report", pdf: "Voice ID Report.pdf", icon: IconLibrary.PDF.icon },
  ],
};
