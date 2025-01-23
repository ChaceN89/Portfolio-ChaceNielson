import { DiPostgresql } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";

const databaseIcons = {
  MONGODB: { name: "MongoDB", icon: SiMongodb, color: "#4DA53F" },
  POSTGRESQL: { name: "PostgreSQL", icon: DiPostgresql, color: "white" },
  MYSQL: { name: "MySQL", icon: GrMysql, color: '#01618A' },
  SQLITE: { name: "SQLite", svg_path: "sqlite.svg" },

};

export default databaseIcons;