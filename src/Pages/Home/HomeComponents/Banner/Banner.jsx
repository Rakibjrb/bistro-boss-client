import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../../assets/home/01.jpg";
import bannerImg2 from "../../../../assets/home/02.jpg";
import bannerImg3 from "../../../../assets/home/03.png";
import bannerImg4 from "../../../../assets/home/04.jpg";
import bannerImg5 from "../../../../assets/home/05.png";
import bannerImg6 from "../../../../assets/home/06.png";
import "./banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true} swipeable={true}>
        <div>
          <img className="xl:h-[760px] 2xl:h-[900px]" src={bannerImg1} />
        </div>
        <div>
          <img className="xl:h-[760px] 2xl:h-[900px]" src={bannerImg2} />
        </div>
        <div>
          <img className="xl:h-[760px] 2xl:h-[900px]" src={bannerImg3} />
        </div>
        <div>
          <img className="xl:h-[760px] 2xl:h-[900px]" src={bannerImg4} />
        </div>
        <div>
          <img className="xl:h-[760px] 2xl:h-[900px]" src={bannerImg5} />
        </div>
        <div>
          <img className="xl:h-[760px] 2xl:h-[900px]" src={bannerImg6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
