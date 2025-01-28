/**
 * @file genrePrediction.js
 * @module genrePrediction
 * @desc Contains data for the Genre Prediction project.
 * 
 * @name Genre Prediction
 * 
 * @author Chace Nielson
 * @created 2024-07-28
 * @updated 2024-07-28
 * @since 2.1
 */

import IconLibrary from "../iconLibrary";

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

const features = [
  "Mod",
];

export const genrePrediction = {
  id: "genre-prediction",
  name: "Genre Prediction",
  tag: "Machine Learning",
  blurb: short,
  description: long,
  features: features,
  images: [
    { src: "genrePrediction0.jpg", blurhash: "LIR{uws%#rkX.8bJX5ad_MW@Xknh" },
    { src: "genrePrediction1.jpg", blurhash: "LIR{uws%#rkX.8bJX5ad_MW@Xknh" },
    { src: "genrePrediction2.jpg", blurhash: "LIR{uws%#rkX.8bJX5ad_MW@Xknh" },
  ],
  mainStack: [
    IconLibrary.APACHE_SPARK,
    IconLibrary.PYTHON,
  ],
  extendedStack: [
    IconLibrary.JUPYTER,
    IconLibrary.MACHINE_LEARNING,
  ],
  externalLinks: [
    { name: "Genre Analysis", link: "https://github.com/ChaceN89/Machine-Learning-Music-Notebooks/blob/main/MusicGenrePrediction/ENSF_544_Final_Project.ipynb", icon: IconLibrary.GITHUB.icon },
    { name: "Spark Setup", link: "https://github.com/ChaceN89/Machine-Learning-Music-Notebooks/blob/main/SparkSentimentAnalysis/SparkSentimentMLAnalysis.ipynb", icon: IconLibrary.GITHUB.icon },
    { name: "Report", pdf: "Spark ML Genre Report.pdf", icon: IconLibrary.PDF.icon },
  ],
};
