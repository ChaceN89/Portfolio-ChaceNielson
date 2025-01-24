/**
 * @file aws.js
 * @module aws
 * @desc Contains all icons related to AWS services and features.
 * @created Jan 22, 2025
 * @updated Jan 22, 2025
 */
import { SiAwsamplify } from "react-icons/si";

const folder = "aws";

const awsIcons = {
  AWS: { name: "AWS", svg_path: `${folder}/aws.svg` },
  AMPLIFY: { name: "Amplify", icon: SiAwsamplify, color: "#FF9900" },
  RDS: { name: "RDS", svg_path: `${folder}/RDS.svg` },
  S3: { name: "S3", svg_path: `${folder}/S3.svg` },
  TERRAFORM: { name: "Terraform", svg_path: `${folder}/terraform.svg` },
};

export default awsIcons;