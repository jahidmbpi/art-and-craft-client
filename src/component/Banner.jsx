import { Swiper, SwiperSlide } from "swiper/react"; // Correct import
import { Autoplay, Pagination } from "swiper/modules"; // Removed Navigation module import
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
          renderBullet: (index, className) =>
            `<span class="${className}"></span>`, // Custom bullet without icons
        }}
        navigation={false} // Navigation disabled
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-[550px]"
            src="https://i.ibb.co.com/mCq8dc5/floating-green-tree-roots-no-260nw-2472618789.webp"
            alt=""
          />
        </SwiperSlide>
        {/* ............... */}
        <SwiperSlide>
          <img
            className="w-full h-[550px]"
            src="https://i.ibb.co.com/72wKYPq/istockphoto-479338877-2048x2048.jpg"
            alt=""
          />
        </SwiperSlide>
        {/* .............. */}
        <SwiperSlide>
          <img
            className="w-full h-[550px]"
            src="https://i.ibb.co.com/FwyQLQd/Logo-Png-0-75x.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[550px]"
            src="https://i.ibb.co.com/fDd0K6j/roots-trees-plants-made-paper-craft-generative-ai-989263-2415.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
