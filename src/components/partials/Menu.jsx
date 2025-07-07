import { Link } from "react-scroll"

export default function Menu({name,link}){
    return(
        <Link to={link}  smooth={true} duration={600} className="p-4 mx-5 hover:text-amber-500 duration-200 hover:-translate-1 cursor-pointer" spy={true} activeClass="text-amber-500 font-bold" offset="-300">{name}</Link>
    )
}