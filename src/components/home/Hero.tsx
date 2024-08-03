import React from "react";
import Paragraph from "../common/Paragraph";
import CommonButton from "../common/CommonButton";
import Image from "next/image";
import { ArrowIcon } from "../common/Icon";
import { SOCIAL_LINKS_LIST } from "../common/Helper";
interface SocialList {
  img: string;
  height: number;
}

const Hero = () => {
  return (
    <div className="bg-[#FEF8F9] relative">
      <div id="home" className="lg:pt-[88px] md:pt-20 pt-16">
        <div className="container max-w-[1180px]">
          <div className="row lg:flex-row flex-col-reverse items-center">
            <div className="lg:col-6 px-3 lg:pt-0 sm:pt-10 pt-7">
              <h1 className="font-jakarta font-bold lg:text-6xl md:text-5xl text-4xl lg:leading-[66px] md:leading-[55px] text-black pb-3">
                <span className="gradient_text">Realtime</span> graph analytics
                at scale
              </h1>
              <Paragraph
                className="!text-jet_black opacity-80 max-w-[556px] lg:pb-11 md:pb-8 pb-5"
                textName="Build and deliver realtime graph analytics scaling to billions of records in minutes. No expensive transformation pipelines, proprietary storage or dedicated SMEs."
              />
              <CommonButton textName="Learn More" />
              <span className="absolute top-[20%] 2xl:left-[44%] xl:left-[42%] left-[38%] lg:block hidden">
                <ArrowIcon />
              </span>
            </div>
            <div className="lg:col-6 px-3 flex justify-end">
              <Image
                width={547}
                height={504}
                src="/assets/images/home/webp/hero-img.png"
                alt="pometry-logo"
                className="pointer-events-none max-md:max-w-[365px] max-sm:max-w-[245px]"
              />
            </div>
          </div>
          <div className="flex flex-wrap md:justify-between justify-center items-center gap-10 pb-4 lg:pt-40 md:pt-20 pt-16">
            {SOCIAL_LINKS_LIST.map((obj: SocialList, index: number) => (
              <div key={index}>
                <Image
                  src={obj.img}
                  width={109}
                  height={obj.height}
                  alt="sql-img1"
                  className="max-sm:max-w-[70px] pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
