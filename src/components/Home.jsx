import LeftHome from "./partials/LeftHome"
import RightHome from "./partials/RightHome"
export default function Home(){
    return(
        <div className="flex justify-around min-h-screen max-md:flex-col" id="home">
            <LeftHome/>
            <RightHome/>
        </div>
    )
}