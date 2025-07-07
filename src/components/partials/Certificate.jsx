import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import "../../custom-zoom.css"
export default function Certificate({image,deskripsi}){
    return(
        <div className="w-sm overflow-hidden rounded-lg bg-neutral-600 text-neutral-300 hover:shadow-md shadow-neutral-400 hover:-translate-y-1.5 duration-150 max-sm:w-full">
            <div id="image">
                <Zoom classDialog="custom-zoom">
                <img src={image} alt="" srcset="" />
                </Zoom>
            </div>
            <div className="text-xl px-8 py-3">
                <p>{deskripsi}</p>
            </div>
        </div>
    )
}