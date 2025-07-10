import Carousel from "react-multi-carousel";
import Certificate from "./partials/Certificate";
import "react-multi-carousel/lib/styles.css";
import Judul from "./partials/Judul";
import certificates from "../utils/certificates";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
export default function Certificates(){
    useEffect(()=>{
        Aos.init()
    },[])
    return(
        <div className="mb-10" id="certificate">
            <div id="header" data-aos="fade-down">
            <Judul judul="Certificate"/>
            </div>
            <div data-aos="fade-in">
            <Carousel
        additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={2000}
  centerMode={false}
  className="mx-20 max-sm:mx-10"
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
        >
        {certificates.map((certificate,index)=>(
            <Certificate image={certificate.source} deskripsi={certificate.judul} link={certificate.link}/>
        ))}
        </Carousel>
            </div>
        </div>
        
    )
}