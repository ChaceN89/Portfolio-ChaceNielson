import { SiAwsamplify } from "react-icons/si";

const folder = "aws";

const awsIcons = {
  AWS: { name: "AWS", svg_path: `${folder}/aws.svg` },
  AMPLIFY: { name: "Amplify", icon: SiAwsamplify, color: "#FF9900" },
  RDS: { name: "RDS", svg_path: `${folder}/RDS.svg` },
  S3: { name: "S3", svg_path: `${folder}/S3.svg` },
};

export default awsIcons;