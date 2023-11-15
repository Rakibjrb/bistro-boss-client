import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "../../../../Components/CommonHeader/SectionHeader";

import SlideImage1 from "../../../../assets/home/slide1.jpg";
import SlideImage2 from "../../../../assets/home/slide2.jpg";
import SlideImage3 from "../../../../assets/home/slide3.jpg";
import SlideImage4 from "../../../../assets/home/slide4.jpg";
import SlideImage5 from "../../../../assets/home/slide5.jpg";

const OrderOnline = () => {
  return (
    <div className="mt-16 lg:mt-32 mb-32">
      <SectionHeader
        toptitle="---From 11:00am to 10:00pm---"
        title="ORDER ONLINE"
      />
      <div className="mt-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative">
              <img src={SlideImage1} className="rounded-xl" alt="" />
              <h2 className="text-xl md:text-4xl uppercase text-center absolute bottom-7 text-white left-[45%] -translate-x-1/2">
                salads
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={SlideImage2} className="rounded-xl" alt="" />
              <h2 className="text-xl md:text-4xl uppercase text-center absolute bottom-7 text-white left-[45%] -translate-x-1/2">
                soups
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={SlideImage3} className="rounded-xl" alt="" />
              <h2 className="text-xl md:text-4xl uppercase text-center absolute bottom-7 text-white left-[45%] -translate-x-1/2">
                pizzas
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={SlideImage4} className="rounded-xl" alt="" />
              <h2 className="text-xl md:text-4xl uppercase text-center absolute bottom-7 text-white left-[45%] -translate-x-1/2">
                Cackes
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={SlideImage5} className="rounded-xl" alt="" />
              <h2 className="text-xl md:text-4xl uppercase text-center absolute bottom-7 text-white left-[45%] -translate-x-1/2">
                desserts
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OrderOnline;
