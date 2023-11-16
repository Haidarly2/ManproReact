import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "./data";
import { Navigation } from "swiper/modules";
import { HomeCard } from "./card/HomeCard";
import next from "../../assets/Buttonnext.svg";
import prev from "../../assets/Buttonprevious.svg";
import "swiper/css";
import "swiper/css/navigation";

export const Home: React.FC = () => {
  return (
    <>
      <button className="button-prev ml-[5%]">
        <img src={prev} alt="next" />
      </button>
      <Swiper
        grabCursor={true}
        direction="horizontal"
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        slidesPerView={1}
        modules={[Navigation]}
        className="w-[80%] h-fit mt-[10%] laptop2:mt-[5%]">
        <div className="flex">
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <HomeCard
                id={item.id}
                name={item.name}
                status={item.status}
                TimerOff={item.TimerOff}
                TimerOn={item.TimerOn}
                rak={item.rak}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <button className="button-next mr-[5%]">
        <img src={next} alt="next" />
      </button>
    </>
  );
};
