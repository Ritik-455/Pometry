"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "swiper/css";
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
    <div className="pt-[152px] relative">
      <div className="container max-w-[1180px]">
        <PrimaryHeading
          textName="Say hello to graph 2.0"
          className="pb-3 capitalize text-center"
        />
        <Paragraph
          textName="We take away many of the widely spread pains associated with temporal graph analytics. One contextual platform to rule them all!"
          className=" pb-12 opacity-80 max-w-[592px] text-center mx-auto"
        />
        <div className="row items-center">
          <div className="lg:col-5 w-full px-3">
            <div className="flex flex-col items-start">
              {SAY_HELLO_CONTENT.map((obj: HelloList, index: number) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-6">
                    <TikIcon />
                    <p className="font-jakarta font-semibold 2xl:text-xl text-lg text-jet_black">
                      {obj.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-7 w-full px-3 flex 2Xl:justify-start justify-center">
            {/* =====orange-bg====== */}
            <div className="bg-dark_red xl:max-w-[868px] max-w-[663px] w-full h-[198px] rounded-[24px_0_0_24px] absolute 2XL:end-[15%] 2XL:top-[48%] end-0 top-[59%] lg:block hidden"></div>
            <div className="flex gap-4 relative">
              {/* ======Swiper-ArrowIcon======= */}
              <div className="size-8 bg-white rounded-full absolute swiper-btn-next xl:right-[-9%] xl:top-[43%] lg:right-[3%] md:right-[40%] right-[23%] max-xl:bottom-[-22%] flex justify-center items-center z-20 border border-transparent max-lg:border-dark_red">
                <NextArrowIcon />
              </div>
              <div className="size-8 bg-white rounded-full absolute swiper-btn-prev xl:top-[43%] xl:left-[-8%] lg:left-[-9%] left-[26%] max-xl:bottom-[-22%] max-xl:right-[39%] flex justify-center items-center z-20 border border-transparent max-lg:border-dark_red">
                <PrevArrowIcon />
              </div>
              <Swiper
                spaceBetween={16}
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{
                  nextEl: ".swiper-btn-next",
                  prevEl: ".swiper-btn-prev",
                }}
                className="md:max-w-[582px] max-w-[293px]"
                breakpoints={{
                  530: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                }}
              >
                {SAY_HELLO_CARDS.map((obj: HelloCards, index: number) => (
                  <SwiperSlide
                    className="!w-[283px] !h-[321px] rounded-xl lg:px-6 lg:pt-6 lg:pb-10 p-6 bg-white hover:shadow-4xl border-[0.5px] border-dim_black hover:border-transparent transition ease-linear duration-300 z-10"
                    key={index}
                  >
                    <div className="size-[46px] bg-light_red rounded flex justify-center items-center mb-6">
                      {obj.icon}
                    </div>
                    <h4 className="font-jakarta font-semibold text-2xl pb-2">
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
