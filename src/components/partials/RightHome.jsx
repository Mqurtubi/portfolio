import { useState, useEffect } from "react"
import fotopribadi from "../../assets/foto_pribadi-removebg-preview.png"
export default function RightHome(){
    const [step,setStep]=useState(1)
    useEffect(()=>{
        if(step === 1){
            setTimeout(()=>setStep(2),8500)
        }
    },[step])
    return(
        <div className=" flex items-center justify-center">
                <div id="container">
                    {step >= 2 &&(
                        <div id="circle" className="relative w-sm h-100 fade-in">
                        <div id="picture" className="absolute inset-0 rounded-full bg-neutral-600 scale-110 overflow-hidden max-sm:scale-70">
                            <img src={fotopribadi} alt="gambar foto pribadi" srcset="" className="relative  w-xs h-full object-cover rounded-full left-10 top-10 overflow-visible grayscale hover:grayscale-0  transition duration-700 fade-in"/>
                        </div>
                    </div>
                    )}
                </div>
            </div>
    )
}