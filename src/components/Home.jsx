import LeftHome from "./partials/LeftHome"
import RightHome from "./partials/RightHome"
import Particles from './partials/Particles';
export default function Home(){
    return(
        // <div className="flex justify-around min-h-screen max-md:flex-col" id="home">
        //     <LeftHome/>
        //     <RightHome/>
        // </div>
        

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>

    )
}