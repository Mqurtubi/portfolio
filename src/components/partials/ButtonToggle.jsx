import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
export default function ButtonToggle(){
    const [theme,setTheme]=useState(()=>{
        return localStorage.getItem("theme") || "light"
    })
    useEffect(()=>{
        document.documentElement.className=theme
        localStorage.setItem("theme",theme)
    },[theme])
    console.log(theme)
    const toggleTheme=()=>{
        setTheme(prev=>(prev === "light" ? "dark":"light"))
    }
    return(
        <button onClick={toggleTheme} className="text-xl hover:cursor-pointer">{theme === "light"? (<FaSun/>):(<FaMoon/>)}</button>
    )
}