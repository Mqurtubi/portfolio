import Menu from "./Menu"
import { objNavbar } from "../../utils/linkNavbar"
import Headroom from "react-headroom"
import Hamburger from "hamburger-react"
import { useState } from "react"
export default function Navbar(){
    const Links= objNavbar.map((link)=>{
        return <Menu {...link}/>
      })
    const [isOpen,setOpen]=useState(false)
    const sectionId=objNavbar.map((link)=>link.link)
    return(
        <div>
            <Headroom className="bg-neutral-800 w-full ">
            <ul
            className="text-neutral-400 text-lg flex justify-center z-100 bg-neutral-800 max-sm:hidden md:flex"
            items={sectionId}>
                {Links}
            </ul>
        </Headroom>
        <div className="hidden max-sm:flex ml-4">
                <Hamburger color="white" toggled={isOpen} toggle={setOpen}/>
        </div> 
        {
            isOpen && (
                <div className="w-xs h-screen bg-neutral-700 fixed z-50 top-0 sm:hidden">
                    <div className="ml-4">
                    <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
                    </div>
                    <ul
                        className="text-neutral-400 text-lg flex flex-col justify-center z-100 bg-neutral-700"
                        items={sectionId}>
                        {Links}
                    </ul>
                </div>
            )
        }
        </div>
        
    )
}