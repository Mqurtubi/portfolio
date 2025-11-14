import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";

export default function Items({ name, link, img }) {
  return (
    <div className="w-sm bg-neutral-600 rounded-2xl overflow-hidden hover:shadow-md shadow-neutral-400 hover:-translate-y-1.5 duration-150 mx-5 my-5">
      <div id="image">
        <img src={img} alt="" className="w-sm max-h-56 object-cover" />
      </div>
      <div id="deskripsi" className="px-10 pb-5 text-xl/loose text-neutral-300">
        <a href={link}>{name}</a>
        <div id="program" className="flex">
          <IoLogoJavascript className="mr-5" />
          <FaReact />
        </div>
      </div>
    </div>
  );
}
