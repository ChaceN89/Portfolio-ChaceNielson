/**
 * All my skills listed in responsive grid box
 */
import React from 'react'

// icons for skills
import { FaReact, FaNodeJs, FaUnity, FaCss3Alt, FaDocker, FaNode } from "react-icons/fa";


import { AiOutlineGithub } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";
import { TiHtml5 } from "react-icons/ti";
import { DiPostgresql } from "react-icons/di";
import { ImGit } from "react-icons/im";
import { 
  SiFastapi, SiMongodb, SiTailwindcss,
  SiJavascript, SiStreamlit, SiRedux,
  SiApachespark, SiChartdotjs, SiJupyter,
  SiTypescript
} from "react-icons/si";

// icons for general skills 
import { FaChessKing, FaChessQueen, FaChessBishop, FaChessKnight, FaChessRook, FaChessPawn } from "react-icons/fa";


// Component imports
import Skill from '../components/Skill';
import SectionHeader from '../components/SectionHeader';

function SkillList() {
  return(
    <section id="MySkills" className='section hiddenClass'>
      <SectionHeader title={"My Technical Skills"} description={"The Skills/Technologies I've Used in Projects "}/>

      {/* Technical Skills */}
      <ul className='pt-10 container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:max-w-4xl xl:grid-cols-8 xl:max-w-6xl gap-y-6'> 
        <Skill starred={true} label={"React"} icon={<FaReact color={"lightblue"} size={65}/>} />
        <Skill starred={true} label={"JavaScript"} backgroundColour={"black"} icon={<SiJavascript color='yellow' size={65} />} />
        <Skill label={"TypeScript"} backgroundColour={"black"} icon={<SiTypescript color='#267ACC' size={65} />} />
        <Skill starred={true} label={"Tailwind"} icon={<SiTailwindcss color='#38BDF9' size={65} />} />
        <Skill starred={true} label={"HTML5"} roundedBackground={true} backgroundColour={"red"}  icon={<TiHtml5 color='white' size={65} />} />
        <Skill starred={true} label={"CSS"}  icon={<FaCss3Alt color='#2394F0' size={65} />} />
        <Skill label={"Chart.js"} icon={ <SiChartdotjs color='#FE777B' size={65} /> } />
        <Skill label={"Redux"} icon={ <SiRedux color='#4A4ABC' size={65} /> } />
        <Skill label={"Vue"} SVG_path={"vue.svg"} />

        <Skill starred={true} label={"Python"} SVG_path={"python.svg"} />
        <Skill starred={true} label={"Plotly Dash"} SVG_path={"plotly-dash.svg"} />
        <Skill label={"Streamlit"} icon={ <SiStreamlit color='#FF4B4B' size={65} /> } />
        <Skill label={"Hadoop"} SVG_path={"hadoop.svg"} />
        <Skill label={"Apache Spark"} icon={ <SiApachespark color='#E25A1B' size={65} /> } />

        <Skill starred={true} label={"Git"} icon={<ImGit color='#EE513B' size={65} />} />
        <Skill starred={true} label={"Github"} roundedBackground={true} backgroundColour={"white"} icon={<AiOutlineGithub color='black' size={65} />} />
        <Skill starred={true} label={"VS Code"} SVG_path={"visual-studio-code.svg"} />

        <Skill label={"Java"} backgroundColour={"black"} roundedBackground={true} SVG_path={"java.svg"} />
        <Skill starred={true} label={"C++"} SVG_path={"c-plus-plus.svg"} />
        <Skill starred={true} label={"C#"} SVG_path={"c-sharp.svg"} />

        <Skill label={"Unity"}  backgroundColour={"black"} icon={<FaUnity size={65} />} />
        <Skill label={"Blender"} SVG_path={"blender.svg"} />

        <Skill label={"Docker"} icon={<FaDocker color='#089CEC' size={65} />} />
        <Skill starred={true} label={"Jupyter"} icon={<SiJupyter color='#F37626' size={65} />} />
        <Skill label={"ML"} backgroundColour={"white"} SVG_path={"machine-learning.svg"} />

        <Skill label={"Rest API"} roundedBackground={true} backgroundColour={"white"} SVG_path={"rest-api.svg"} />
        <Skill label={"Node.js"} icon={<FaNode color='#68A063' size={65} />} />
        <Skill label={"Express.js"} icon={<FaNodeJs color='#3FA040' size={65} />} />
        <Skill starred={true} label={"FastAPI"} icon={<SiFastapi  color={"#079487"}  size={65} />} />

        <Skill starred={true} label={"PostgreSQL"} roundedBackground={true} backgroundColour={"#31648C"} icon={<DiPostgresql color='white' size={65} />} />
        <Skill label={"MySQL"} backgroundColour={"white"} icon={<GrMysql color='#01618A' size={65} />}/>
        <Skill label={"MongoDB"} icon={<SiMongodb color='#4DA53F' size={65} />} />

      </ul>

      {/* general skills  */}
      <ul className='pt-10 items-center container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6 lg:max-w-4xl'> 
        <Skill starred={true} label={"Leadership"} icon={<FaChessKing size={65}/>} />
        <Skill starred={true} label={"Problem-Solving"} icon={<FaChessQueen size={65}/>} />
        <Skill starred={true} label={"Creativity"} icon={<FaChessRook size={65}/>} />
        <Skill starred={true} label={"Communication"} icon={<FaChessPawn size={65}/>} />
        <Skill starred={true} label={"Adaptability"} icon={<FaChessKnight size={65}/>} />
        <Skill starred={true} label={"Decision Making"} icon={<FaChessBishop size={65}/>} />
      </ul>
    </section>
  )
}

export default SkillList