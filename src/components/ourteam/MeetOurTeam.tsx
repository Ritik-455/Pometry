"use client";
import React, { useEffect, useRef } from "react";
import PrimaryHeading from "../common/PrimaryHeading";
import Image from "next/image";
import { MEET_OUR_TEAM, OUR_TEAM_IMAGES } from "../common/Helper";
import Paragraph from "../common/Paragraph";
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Pagination } from 'swiper/modules';
import { Swiper as SwiperCore } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

interface MeetOurTeam {
  para: string;
  name: string;
  profession: string;
}

interface TeamImages {
  img: string;
}

const MeetOurTeam: React.FC = () => {
  const imageSwiperRef = useRef<SwiperCore | null>(null);
  const quoteSwiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (imageSwiperRef.current && quoteSwiperRef.current) {
      imageSwiperRef.current.controller.control = quoteSwiperRef.current;
      quoteSwiperRef.current.controller.control = imageSwiperRef.current;
    }
  }, []);

  return (
    <div className="py-16 md:py-20 xl:pt-[152px] xl:pb-[110px] max-w-[1920px] mx-auto">
      <PrimaryHeading
        className="text-center md:pb-[52px]"
        textName="Meet Our Team"
      />
      <div className="custom_slider">
        <SwiperComponent
          onSwiper={(swiper) => (imageSwiperRef.current = swiper)}
          spaceBetween={10}
          slidesPerView={6.5}
          loop={true}
          className="mt-6 lg:mt-12"
          centeredSlides={true}
          autoplay={{
            delay:  1500,
          }}
          modules={[Controller, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
            1024: {
              slidesPerView: 6.5,
              spaceBetween: 10,
            },
          }}
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
        </SwiperComponent>
      </div>
      <div className="container">
        <SwiperComponent
          parallax={true}
          spaceBetween={16}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Controller]}
          onSwiper={(swiper) => (quoteSwiperRef.current = swiper)}
          className="mt-6 box_swiper"
          watchSlidesProgress={true}
        >
          {MEET_OUR_TEAM.map((obj: MeetOurTeam, index: number) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center mt-3 md:mt-6">
                <div className="shadow-8xl p-4 lg:py-[30px] lg:px-12 rounded-2xl max-w-[1078px] mb-11">
                  <Paragraph
                    className="max-w-[980px] text-center !text-charcoal_gray pb-6 md:text-base"
                    textName={obj.para}
                  />
                  <p className="font-semibold text-2xl lg:text-[32px] lg:leading-10 text-dark_red text-center pb-0.5">
                    {obj.name}
                  </p>
                  <Paragraph
                    className="!text-charcoal_gray text-center"
                    textName={obj.profession}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>
    </div>
  );
};

export default MeetOurTeam;
