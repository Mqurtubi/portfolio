export default function IconSosmed({Icon,link}){
    return(
        <li className="p-1 mr-2"><a href={link} target="_blank"><Icon className="text-white light:text-black"/></a></li>
    )
}