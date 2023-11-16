// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { Rating } from "@smastrom/react-rating";
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";
import SectionHeader from "../../../../Components/CommonHeader/SectionHeader";

const Testimonials = () => {
  return (
    <section className="my-20">
      <SectionHeader
        toptitle="---What Our Client Say---"
        title="Testimonials"
      />

      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </section>
  );
};

export default Testimonials;
