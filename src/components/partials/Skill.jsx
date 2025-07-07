import { CircularProgressbar, buildStyles } from "react-circular-progressbar"

import 'react-circular-progressbar/dist/styles.css';
export default function SKill({value,icon:Icon,text}){
    return(
        <div className="flex flex-col items-center  px-6 mt-5">
        <div className="relative w-20 h-20">
            <CircularProgressbar 
            value={value}
            strokeWidth="10"
            counterClockwise="true"
            
            styles={buildStyles({
                trailColor: "#737373",
                pathColor:"#f59e0b"
            })} 
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <Icon className="text-white text-4xl" />
            </div>
        </div>
    </div>
        
    )
}