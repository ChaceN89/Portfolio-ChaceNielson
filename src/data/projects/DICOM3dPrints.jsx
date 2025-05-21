/**
 * @file DICOM3dPrints.js
 * @module DICOM3dPrints
 * @desc Contains data for the DICOM to 3D Print project
 * 
 * @name DICOM to 3D Print
 * 
 * @author Chace Nielson
 * @created Jan 27, 2025
 * @updated Jan 27, 2025
 */

import IconLibrary from "../iconLibrary";
import { BoldSpan } from "../../components/uiElements/InLineText";


// Short description (blurb) to be displayed on the project card
const short = "A pipeline to transform medical imaging files into 3D-printed anatomical models.";

// Long description for the modal page, providing detailed information about the project
export const long = (
  <div className="space-y-2">
    <p>
      The "DICOM to 3D Print Pipeline" project developed a workflow to convert <BoldSpan>DICOM</BoldSpan> files from CT and MRI scans into physical 3D models of anatomical structures. These models provide a detailed and realistic view of the human body.
    </p>
    <p>
      The pipeline used tools like <BoldSpan>3D Slicer</BoldSpan>  for segmentation, <BoldSpan>Blender</BoldSpan>  for mesh cleanup and support structures, and 3D PrinterOS for slicing and printing. Models were created to analyze bones, tissues, and articulated joints, with noise analysis and mesh refinement improving results.
    </p>
    <p>
      Highlights include 3D prints of a heart, spine, and jaw, showcasing segmentation, thresholding, and articulated joints. Challenges such as noisy DICOM data and print optimization were effectively addressed.
    </p>
    <p>
      This project demonstrates the potential of 3D printing in medical education, patient care, and prosthetic design, offering accessible and accurate anatomical models.
    </p>
  </div>
);

export const dicom3dPrint = {
  id: "dicom-to-3d-pint", 
  name: "DICOM to 3D Print", 
  rawName: "DICOM",
  tag: "Engineering", 
  blurb: short,
  description: long,
  images: [
    { src: "3dPrint_8.jpg", blurhash: "LKI5Y-9FxuIU4nIUf7j[~qt7s;of" },
    { src: "3dPrint_1.jpg", blurhash: "CDKwRrE1?^L~%1RkMxV@" },
    { src: "3dPrint_2.jpg", blurhash: "CAJ*n-.m01-qE0_3xZNF" },
    { src: "3dPrint_7.jpg", blurhash: "CpJ*n~M_~qohjLW9k9og" },
    { src: "3dPrint_3.jpg", blurhash: "CsPP+Pf6_NkCoffQRjay" },
    { src: "3dPrint_4.jpg", blurhash: "C8HLrE00RH_100-xt:Rj" },
    { src: "3dPrint_5.jpg", blurhash: "CBJ*#c9pS.t100t1R:xt" },
    { src: "3dPrint_6.jpg", blurhash: "CGI#x_IV~qxt00ay%Mf6" },
  ],
  mainStack: [
    IconLibrary.BLENDER,
    IconLibrary.THREE_D_SLICER,
  ],
  extendedStack: [
    IconLibrary.PYTHON,
    IconLibrary.DICOM,
  ],
  externalLinks: [
    { name: "Report", pdf: "BMEN 509 Project Report.pdf", icon: IconLibrary.PDF.icon }
  ],
}; 