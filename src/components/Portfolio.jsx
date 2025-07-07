import Judul from "./partials/Judul"
import Filter from "./partials/Filter"
import Item from "./partials/Items"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
export default function Portfolio(){
    useEffect(()=>{
        AOS.init()
    },[])
    return(
        <div id="portfolio" className="my-10 min-h-screen">
            <div id="header" data-aos="fade-down">
                <Judul judul="Portfolio"/>
                <div id="category" className="flex justify-center">
                    <Filter name="All"/>
                </div>
            </div>
            <div id="items" className="flex flex-wrap justify-center mt-5" data-aos="zoom-in">
                    <Item/>
                    <Item/>
                    <Item/>
            </div>
        </div>
    )
}