/**
 * All my skills listed in responsive grid box
 */
import React from 'react'

// icons for skills
import { FaPython, FaReact, FaNodeJs, FaUnity, FaCss3Alt, FaDocker } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { GrMysql, GrHadoop } from "react-icons/gr";
import { TiHtml5 } from "react-icons/ti";
import { DiPostgresql } from "react-icons/di";
import { ImGit } from "react-icons/im";
import { 
  SiFastapi, SiMongodb, SiJava, SiTailwindcss, SiCsharp,
  SiCplusplus, SiJavascript, SiBlender, SiStreamlit, SiRedux,
  SiVisualstudiocode, SiApachespark, SiChartdotjs
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
      <ul className='pt-10 container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6 lg:max-w-4xl'> 
        <Skill starred={true} label={"ReactJS"} icon={<FaReact color={"lightblue"} size={65}/>} />
        <Skill starred={true} label={"JavaScript"} backgroundColour={"black"} icon={<SiJavascript color='yellow' size={65} />}    />
        <Skill starred={true} label={"HTML5"} roundedBackground={true} backgroundColour={"red"}  icon={<TiHtml5 color='white' size={65} />}    />
        <Skill starred={true} label={"Tailwind"} icon={<SiTailwindcss color='#38BDF9' size={65} />}    />
        <Skill starred={true} label={"Fastapi"} icon={<SiFastapi  color={"#079487"}  size={65} />}/    >
        <Skill starred={true} label={"PostgreSQL"} roundedBackground={true} backgroundColour={"#31648C"} icon={<DiPostgresql color='white' size={65} />}    />
        <Skill starred={true} label={"Git"}   icon={<ImGit color='#E84E32' size={65} />}    />
        <Skill starred={true} label={"Github"}  backgroundColour={"white"} icon={<AiOutlineGithub color='black' size={65} />}    />
        <Skill starred={true} label={"Python"} icon={<FaPython color='#FED73A' size={65} />}    />
        <Skill label={"Unity"}  backgroundColour={"black"} icon={<FaUnity size={65} />}    />
        <Skill label={"Blender"} icon={ <SiBlender color='#E27204' size={65} /> }    />
        <Skill label={"CSS"}  icon={<FaCss3Alt color='#2394F0' size={65} />}    />
        <Skill label={"ExpressJS"} icon={<FaNodeJs color='#3FA040' size={65} />}    />
        <Skill label={"Java"} backgroundColour={"#E16D01"} roundedBackground={true} icon={<SiJava color='white' size={65} />}    />
        <Skill label={"C++"} backgroundColour={"white"} roundedBackground={true} icon={<SiCplusplus color='#1D67A2'  size={65} />}    />
        <Skill label={"C#"} backgroundColour={"white"} roundedBackground={true} icon={<SiCsharp color='#1D67A2'  size={65} />}    />
        <Skill label={"MySQL"} backgroundColour={"white"} icon={<GrMysql color='#01618A' size={65} />}    />
        <Skill label={"MongoDB"} icon={<SiMongodb color='#4DA53F' size={65} />}    />
        <Skill label={"Docker"} icon={<FaDocker color='#089CEC' size={65} />}    />
        <Skill label={"ChartJS"} icon={ <SiChartdotjs color='#FE777B' size={65} /> }    />
        <Skill label={"Hadoop"} backgroundColour={"yellow"} icon={ <GrHadoop color='black' size={65} /> }    />
        <Skill label={"Apache Spark"} icon={ <SiApachespark color='#E25A1B' size={65} /> }    />
        <Skill label={"Redux"} icon={ <SiRedux color='#4A4ABC' size={65} /> }/    >
        <Skill label={"Streamlit"} icon={ <SiStreamlit color='#FF4B4B' size={65} /> }    />
        <Skill label={"VS Code"} icon={ <SiVisualstudiocode color='#2589CA' size={65} /> }    />
      </ul>

      {/* general skills  */}
      <ul className='pt-10 items-center container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6 lg:max-w-4xl'> 
        <Skill starred={true} label={"Leadership"} icon={<FaChessKing size={65}/>} />
        <Skill starred={true} label={"Problem-Solving"} icon={<FaChessQueen size={65}/>} />
        <Skill starred={true} label={"Creativity"} icon={<FaChessRook size={65}/>} />
        <Skill starred={true} label={"Communication"} icon={<FaChessPawn size={65}/>} />
        <Skill starred={true} label={"Adaptability"} icon={<FaChessKnight size={65}/>} />
        <Skill starred={true} label={"Decison Making"} icon={<FaChessBishop size={65}/>} />
      </ul>
    </section>
  )
}

export default SkillList