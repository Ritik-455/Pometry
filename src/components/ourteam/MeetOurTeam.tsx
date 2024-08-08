"use client";
import React, { useState } from "react";
import PrimaryHeading from "../common/PrimaryHeading";
import Image from "next/image";
import { MEET_OUR_TEAM, OUR_TEAM_IMAGES } from "../common/Helper";
import Paragraph from "../common/Paragraph";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

interface MeetOurTeam {
  para: string;
  name: string;
  profession: string;
}
interface TeamImages {
  img: string;
}
const MeetOurTeam = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div className="pt-[152px] pb-[124px]">
      <PrimaryHeading
        className="text-center pb-[52px]"
        textName="Meet Our Team"
      />
      <Swiper
        spaceBetween={16}
        slidesPerView={7.5}
        loop={true}
        centerMode={true}
      >
        {OUR_TEAM_IMAGES.map((obj: TeamImages, index: number) => (
          <SwiperSlide key={index} className="swiper_img">
            <Image
              src={obj.img}
              width={259}
              height={259}
              alt="meet-our-team-slider-img"
              className="pointer-events-none rounded-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        loop={true}
        pagination={true}
        modules={[Pagination]}
      >
        {/* =====team-content===== */}
        {MEET_OUR_TEAM.map((obj: MeetOurTeam, index: number) => (
          <SwiperSlide key={index}>
            <div className="shadow-8xl py-[30px] px-12 rounded-2xl max-w-[1078px] mb-11">
              <Paragraph
                className="max-w-[980px] text-center !text-charcoal_gray pb-6"
                textName={obj.para}
              />
              <p className="font-semibold text-[32px] leading-10 text-dark_red text-center pb-0.5">
                {obj.name}
              </p>
              <Paragraph
                className="!text-charcoal_gray text-center"
                textName={obj.profession}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MeetOurTeam;
//  {
//    OUR_TEAM_IMAGES.map((obj: TeamImages, index: number) => (
//      <SwiperSlide key={index}>
//        <Image
//          src={obj.img}
//          width={259}
//          height={259}
//          alt="meet-our-team-slider-img"
//          className="pointer-events-none"
//        />
//      </SwiperSlide>
//    ));
//  }
