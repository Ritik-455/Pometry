"use client"
import PrimaryHeading from "./PrimaryHeading";
import Image from "next/image";
import Paragraph from "./Paragraph";
import { BLOG_DATA } from "./Helper";
import { ArrowIcon } from "./Icon";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const CommonBlog = () => {
  const SLICED_BLOG_DATA = BLOG_DATA.slice(0, 5);
  return (
    <div className="xl:pb-[152px] md:pb-20 pb-16 2xl:max-w-[1920px] mx-auto">
      <div className="container xl:max-w-[1180px] md:pt-[50px] sm:pt-8 relative z-30">
        <PrimaryHeading
          textName="Latest Blogs"
          className="xl:mb-[52px] lg:mb-12 sm:mb-10 mb-7 text-center"
        />
        <span className="absolute lg:right-[30%] md:right-[22%] right-[18%] top-0 -z-20 sm:block hidden">
          <ArrowIcon />
        </span>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{clickable:true}}
          loop={true}
          modules={[Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {SLICED_BLOG_DATA.map((value, index) => (
            <SwiperSlide
              key={index}
              className="p-4 sm:min-h-[453px] max-w-[366px] w-full rounded-xl bg-white border border-grey flex flex-col justify-between"
            >
              <div>
                <Image
                  src={value.blogImage}
                  alt="blog-image"
                  width={334}
                  height={225}
                  rel="preload"
                  className="rounded-lg mb-[10px] pointer-events-none"
                />
                <p className="font-semibold text-2xl sm:text-lg xl:text-xl xl:leading-6 text-jet_black">
                  {value.blogTitle}
                </p>
              </div>
              <div className="mt-[2px]">
                <Paragraph
                  className="opacity-80 !text-black"
                  textName="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim massa, porttitor vitaet"
                  redText={<Link href="/">Read more...</Link>}
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-[6px]">
                    <Image
                      src={value.blogProfile}
                      alt="blog-profile"
                      width={32}
                      height={32}
                      className="cursor-pointer pointer-events-none"
                    />
                    <p className="opacity-80 font-jakarta font-normal text-sm leading-5 text-jet_black">
                      Joy Ban
                    </p>
                  </div>
                  <p className="opacity-80 font-jakarta font-normal text-sm leading-5 text-jet_black">
                    02 May 2024
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CommonBlog;
