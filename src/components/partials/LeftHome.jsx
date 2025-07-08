import { useState, useEffect } from "react"
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import ButtonDownload from "./ButtonDownload";
import IconSosmed from "./IconSosmed";
export default function LeftHome(){
    const [step,setStep]=useState(1);
    useEffect(()=>{
        if(step === 1){
            setTimeout(()=>setStep(2),2500)
        }else if(step === 2){
            setTimeout(()=>setStep(3),2500)
        }else if(step === 3){
            setTimeout(()=>setStep(4),2500)
        }
    },[step])
    return(
        <div className="">
                <div className="text-neutral-500 mt-10 mb-10 max-md:ml-6 max-md:max-w-[75%] " id="profile">
                    {step >= 1 && (<p className="typing-text1 text-2xl pb-2 max-sm:text-xl light:typing-text1-light" >Hi I am</p>)}
                    {step >=2 && (<p className="typing-text2 text-4xl text-neutral-400 pb-4 max-sm:text-2xl light:typing-text2-light" >Muhammad Qurtubi</p>)}
                    {step >=3 && (<p className="typing-text3  text-6xl text-amber-500 pt-6 font-bold max-sm:text-4xl max-sm:pt-2 light:typing-text2-light" >Web Developer</p>)}
                </div>
                {step >=4 &&(
                <div className="slide-in-left">
                <div className="my-6" id="sosialmedia">
                        <ul className="flex text-4xl max-md:ml-6">
                            <IconSosmed Icon={CiInstagram} link="https://www.instagram.com/qurtubi11/"/>
                            <IconSosmed Icon={CiLinkedin} link="https://www.linkedin.com/in/muhammad-qurtubi-1b9117368/"/>
                        </ul>
                </div>
                <div id="button" className="my-6 max-md:ml-6">
                    <ButtonDownload/>
                </div>
                <div id="hasil" className="flex py-4 px-6 text-2xl/relaxed bg-neutral-700 light:bg-neutral-600 rounded-lg max-sm:px-4 max-sm:text-lg max-sm:max-w-[80%] max-md:ml-6 max-md:max-w-[70%]">
                    <div id="experiences" className="pr-8 border-r-2 border-neutral-400">
                        <p className="text-amber-600 light:text-amber-400">5+</p>
                        <p className="text-white">Experiences</p>
                    </div>
                    <div id="project" className="px-8 max-sm:px-2">
                        <p className="text-amber-600 light:text-amber-400">20+</p>
                        <p className="text-white">Project Done</p>
                    </div>
                </div>
            </div>)}
            </div>
    )
}