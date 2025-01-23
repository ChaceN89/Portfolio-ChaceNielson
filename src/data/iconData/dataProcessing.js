/**
 * @file dataProcessing.js
 * @module dataProcessing
 * @desc Contains all icons related to data processing and analysis.
 * @created Jan 22, 2025
 * @updated Jan 22, 2025
 */
import { SiApachespark, SiJupyter, SiStreamlit } from "react-icons/si";

const folder = "dataProcessing";

const dataProcessingIcons = {
  HADOOP: { name: "Hadoop", svg_path: `${folder}/hadoop.svg` },
  APACHE_SPARK: { name: "Apache Spark", icon: SiApachespark, color: "#E25A1B" },
  MACHINE_LEARNING: { name: "Machine Learning", svg_path: `${folder}/machine-learning.svg` },
  TENSORFLOW: { name: "TensorFlow", svg_path: `${folder}/tensorflow.svg` },

  DATA_ANALYSIS: { name: "Data Analysis", svg_path: `${folder}/data-analysis.svg` },
  DATA_VISUALIZATION: { name: "Data Visualization", svg_path: `${folder}/data-visualization.svg` },

  PLOTLY_DASH: { name: "Plotly Dash", svg_path: `${folder}/plotly-dash.svg` },
  JUPYTER: { name: "Jupyter", icon: SiJupyter, color: "#F37626" },

    STREAMLIT: { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
  
};

export default dataProcessingIcons;