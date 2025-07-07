import fotopribadi from "../assets/foto_about.png"
import AOS from 'aos';
import { useEffect } from "react";
import Judul from "./partials/Judul";
import 'aos/dist/aos.css';
import skils from "../utils/skill";
import SKill from "./partials/Skill";
import ButtonDownload from "./partials/ButtonDownload";
export default function About(){
    useEffect(()=>{
        AOS.init()
    },[])
    return(
        <div id="aboutme" className="min-h-screen">
            <div id="header" className="text-center mt-10 max-sm:mt-4" data-aos="fade-down">
                <Judul judul="About Me"/>
                <p className="text-lg/loose text-neutral-500">Front-end And Back-end Web Developer</p>
            </div>
            <div id="content" className="flex justify-around items-center mx-55 max-sm:flex-col max-sm:mx-20">
                <div id="left" className="relative  w-xs h-100" data-aos="fade-right">
                        <div id="picture" className="absolute inset-0 rounded-t-full  bg-neutral-600 scale-75">
                            <img src={fotopribadi} alt="" srcset="" className="relative   bottom-13  w-xs"/>
                        </div>
                </div>
                <div id="right" className="w-md max-sm:w-xs " data-aos="fade-left">
                    <p className="text-xl/relaxed text-justify text-white">I am an Informatics student at Gunadarma University with a focus on web development. I have experience in organizational activities, which has equipped me with strong teamwork skills. I am highly enthusiastic about continuously learning and developing myself in the field of technology. I am particularly interested in becoming a professional web developer and am eager to deepen my skills in creating modern, user-friendly, and responsive web applications.</p>
                    <ButtonDownload/>
                </div>
            </div>
            <div id="skill" className="flex justify-center mt-10 flex-wrap" data-aos="zoom-in">
                {skils.map((skill,index)=>(
                    <SKill value={skill.value} text={skill.text} icon={skill.icon}/>
                ))}
            </div>
        </div>
    )
}