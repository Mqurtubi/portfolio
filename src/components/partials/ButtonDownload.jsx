import { FiDownload } from "react-icons/fi";
export default function ButtonDownload(){
    return(
        <a className="bg-amber-500 w-xs px-5 py-2 rounded-lg flex items-center text-white mt-5 hover:-translate-y-1 shadow-md hover:shadow-amber-500/50 duration-100 justify-center" href="/M_Qurtubi_Resume.pdf" download="M.Qurtubi_CV.pdf"><FiDownload className="mr-3"/>Download CV</a>
    )
}