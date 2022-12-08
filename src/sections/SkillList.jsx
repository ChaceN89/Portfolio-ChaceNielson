/**
 * All my skills listed in responsive grid box
 */
import React from 'react'

// icons for skills
import { FaPython, FaReact, FaNodeJs, FaUnity, FaCss3 } from "react-icons/fa";
import { AiOutlineHtml5, AiOutlineGithub } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";
import { SiFastapi, SiPostgresql, SiMongodb, SiJava, SiTailwindcss, SiCplusplus, SiJavascript } from "react-icons/si";

// components
import Skill from '../components/Skill';
import SectionHeader from '../components/SectionHeader';

function SkillList() {
  return(
    <section id="Skills" className='section hiddenClass'>
      <SectionHeader title={"My Technical Skills"} description={"What I've Learned Through My Experiences"}/>
      <ul className='pt-10 container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6 lg:max-w-4xl'>
        <Skill label={"ReactJS"} icon={<FaReact color={"blue"} size={65} />}/>
        <Skill label={"JavaScript"} icon={<SiJavascript color='yellow' size={65} />}/>
        <Skill label={"HTML"} icon={<AiOutlineHtml5 color='red' size={65} />}/>
        <Skill label={"Tailwind"} icon={<SiTailwindcss color='blue' size={65} />}/>
        <Skill label={"CSS"} icon={<FaCss3 color='blue'  size={65} />}/>
        <Skill label={"NodeJS"} icon={<FaNodeJs color='green' size={65} />}/>
        <Skill label={"Unity"} icon={<FaUnity size={65} />}/>
        <Skill label={"Java"} icon={<SiJava color='red' size={65} />}/>
        <Skill label={"C++"} icon={<SiCplusplus color='blue' size={65} />}/>
        <Skill label={"Python"} icon={<FaPython color='yellow' size={65} />}/>
        <Skill label={"Fastapi"} icon={<SiFastapi  color={"black"}  size={65} />}/>
        <Skill label={"ExpressJS"} icon={<FaNodeJs color='black' size={65} />}/>
        <Skill label={"PostgresDB"} icon={<SiPostgresql color='blue' size={65} />}/>
        <Skill label={"MySQL"} icon={<GrMysql color='purple' size={65} />}/>
        <Skill label={"MongoDB"} icon={<SiMongodb color='green' size={65} />}/>
        <Skill label={"Git/Github"} icon={<AiOutlineGithub size={65} />}/>
      </ul>
    </section>
  )



}

export default SkillList