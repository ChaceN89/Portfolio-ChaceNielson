/**
 * @file genrePrediction.js
 * @module genrePrediction
 * @desc Contains data for the Genre Prediction project.
 * 
 * @name Genre Prediction
 * 
 * @example
 * // Example usage of genrePrediction data in a component
 * import { genrePrediction } from './genrePrediction';
 * 
 * function ProjectComponent() {
 *   return (
 *     <div>
 *       <h2>{genrePrediction.name}</h2>
 *       <div>{genrePrediction.description}</div>
 *     </div>
 *   );
 * }
 * 
 * @exports genrePrediction
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import IconSkills from "../iconSkills";

// Short description (blurb) to be displayed on the project card
const short = "Predicting music genres and creating recommendations using machine learning.";

// Long description for the modal page, providing detailed information about the project
const long = (
  <div className='space-y-2'>
    <p>
      This project uses machine learning to predict music genres and generate recommendations. Built with Apache Spark, Jupyter Notebook and Python, it involves data analysis, feature extraction, and model training. Leveraging the power of Apache Spark for big data processing, the project explores various machine learning algorithms to achieve accurate predictions.
    </p>
    <p>
      An interactive Jupyter notebook is provided for experimenting with different models and techniques. This setup allows users to test and refine their approaches in a flexible, hands-on environment.
    </p>
  </div>
);

export const genrePrediction = {
  id: "genre-prediction",
  name: "Genre Prediction",
  tag: "Machine Learning",
  blurb: short,
  description: long,
  images: [
    { src: "genrePrediction.jpg", blurhash: "LIR{uws%#rkX.8bJX5ad_MW@Xknh" },
  ],
  mainStack: [
    IconSkills.APACHE_SPARK,
    IconSkills.PYTHON,
  ],
  extendedStack: [
    IconSkills.JUPYTER,
    IconSkills.MACHINE_LEARNING,
  ],
  externalLinks: [
    { name: "Genre Analysis", link: "https://github.com/ChaceN89/Machine-Learning-Music-Notebooks/blob/main/MusicGenrePrediction/ENSF_544_Final_Project.ipynb", icon: IconSkills.GITHUB.icon },
    { name: "Spark Setup", link: "https://github.com/ChaceN89/Machine-Learning-Music-Notebooks/blob/main/SparkSentimentAnalysis/SparkSentimentMLAnalysis.ipynb", icon: IconSkills.GITHUB.icon },
    { name: "Report", pdf: "Spark ML Genre Report.pdf", icon: IconSkills.PDF.icon },
  ],
};
