import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import sampahku from "../../assets/sampahku.jpg"


export default function Items(){
    return(
        <div className="w-sm bg-neutral-600 rounded-2xl overflow-hidden hover:shadow-md shadow-neutral-400 hover:-translate-y-1.5 duration-150 mx-5 my-5">
            <div id="image">
                <img src={sampahku} alt="" srcset="" className="w-sm h-auto "/>
            </div>
            <div id="deskripsi" className="px-10 pb-5 text-xl/loose text-neutral-300">
            <a href="https://sampahku-afqo.vercel.app/">Web Klasifikasi Sampah</a>
            <div id="program" class="flex">
                <IoLogoJavascript className="mr-5"/>
                <FaReact/>
            </div>
            </div>
        </div>
    )
}