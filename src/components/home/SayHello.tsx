"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import PrimaryHeading from "../common/PrimaryHeading";
import Paragraph from "../common/Paragraph";
import { TikIcon, NextArrowIcon, PrevArrowIcon } from "../common/Icon";
import { SAY_HELLO_CONTENT, SAY_HELLO_CARDS } from "../common/Helper";

interface HelloList {
  content: string;
}
interface HelloCards {
  icon: React.ReactNode;
  heading: string;
  para: string;
}
const SayHello = () => {
  return (
    <div className="xl:pt-[152px] xl:pb-0 md:py-20 py-16 relative 2xl:max-w-[1920px] mx-auto">
      <div className="container max-w-[1180px]">
        <PrimaryHeading
          textName="Say hello to graph 2.0"
          className="capitalize text-center"
        />
        <Paragraph
          textName="We take away many of the widely spread pains associated with temporal graph analytics. One contextual platform to rule them all!"
          className="lg:pb-9 sm:pb-9 pb-5 opacity-80 max-w-[592px] text-center mx-auto mt-4"
        />
        <div className="row items-center">
          <div className="lg:col-5 w-full px-3 lg:pt-12 max-lg:justify-center flex">
            <div className="flex flex-col items-start">
              {SAY_HELLO_CONTENT.map((obj: HelloList, index: number) => (
                <div key={index}>
                  <div className="flex items-center gap-3 lg:mb-6 mb-4">
                    <TikIcon />
                    <p className="font-jakarta font-semibold xl:text-xl text-lg text-jet_black">
                      {obj.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-7 w-full px-3 flex 2xl:justify-end justify-center lg:pt-0 pt-2">
            {/* =====red-bg====== */}
            <div className="bg-mix_red xl:max-w-[843px] lg:max-w-[628px] max-w-[663px] w-full h-[198px] rounded-[24px_0_0_24px] absolute ultra_wide:end-[11%] custom_2xl:end-[7%] lg:top-[52%] xl:top-[60%] end-0 top-[59%] lg:block hidden"></div>
            <div className="flex gap-4 relative">
              {/* ======Swiper-ArrowIcon======= */}
              <div className="size-7 md:size-8 bg-white rounded-full absolute swiper-btn-next xl:right-[-8%] xl:top-[48%] lg:right-[42%] md:right-[43%] max-md:right-[43%] max-xl:right-[23%] max-xl:bottom-[-13%] flex justify-center items-center z-20 border border-transparent max-xl:border-dark_red cursor-pointer">
                <NextArrowIcon />
              </div>
              <div className="size-7 md:size-8 bg-white rounded-full absolute swiper-btn-prev xl:top-[48%] xl:left-[-8%] lg:left-[42%] left-[26%] max-xl:bottom-[-13%] max-md:left-[33%] max-xl:left-[43%] flex justify-center items-center z-20 border border-transparent max-xl:border-dark_red cursor-pointer">
                <PrevArrowIcon />
              </div>
              <Swiper
                spaceBetween={16}
                slidesPerView={1}
                loop={true}
                modules={[Navigation]}
                navigation={{
                  nextEl: ".swiper-btn-next",
                  prevEl: ".swiper-btn-prev",
                }}
                className="md:max-w-[582px] max-w-[293px] !py-6"
                breakpoints={{
                  530: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                }}
              >
                {SAY_HELLO_CARDS.map((obj: HelloCards, index: number) => (
                  <SwiperSlide
                    className="sm:!w-[283px] w-[293px] sm:!h-[321px] !h-[290px] rounded-xl lg:px-6 lg:pt-6 lg:pb-10 sm:p-6 p-5 bg-white hover:shadow-4xl border-[0.5px] border-dim_black hover:border-transparent !common_transition z-10"
                    key={index}
                  >
                    <div className="size-[46px] bg-light_red rounded flex justify-center items-center sm:mb-6 mb-5">
                      {obj.icon}
                    </div>
                    <h4 className="font-jakarta font-semibold lg:text-2xl text-xl pb-2">
                      {obj.heading}
                    </h4>
                    <Paragraph
                      className="text-jet_black opacity-80 max-w-[235px]"
                      textName={obj.para}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SayHello;

