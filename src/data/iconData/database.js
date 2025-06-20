/**
 * @file database.js
 * @module database
 * @desc Contains all icons related to databases and database technologies.
 * @created Jan 22, 2025
 * @updated Jan 22, 2025
 */
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";

const folder = "database";

const databaseIcons = {
  MONGODB: { name: "MongoDB", icon: SiMongodb, color: "#4DA53F" },
  POSTGRESQL: { name: "PostgreSQL", svg_path: `${folder}/postgresql.svg`},
  MYSQL: { name: "MySQL", icon: GrMysql, color: '#01618A' },
  SQLITE: { name: "SQLite", svg_path: `${folder}/sqlite.svg` },
};

export default databaseIcons;
