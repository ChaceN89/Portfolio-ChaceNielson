import { SiApachespark, SiJupyter } from "react-icons/si";

const dataProcessingIcons = {
  HADOOP: { name: "Hadoop", svg_path: "hadoop.svg" },
  APACHE_SPARK: { name: "Apache Spark", icon: SiApachespark, color: "#E25A1B" },
  MACHINE_LEARNING: { name: "Machine Learning", svg_path: "machine-learning.svg" },

  DATA_ANALYSIS: { name: "Data Analysis", svg_path: "data-analysis.svg" },
  DATA_VISUALIZATION: { name: "Data Visualization", svg_path: "data-visualization.svg" },

  PLOTLY_DASH: { name: "Plotly Dash", svg_path: "plotly-dash.svg" },
  JUPYTER: { name: "Jupyter", icon: SiJupyter, color: "#F37626" },

}

export default dataProcessingIcons;