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
    <div className="bg-pink relative 2xl:max-w-[1920px] mx-auto">
      <div id="home" className="xl:pt-[55px] pt-16 md:pt-3">
        <div className="container max-w-[1180px]">
          <div className="row lg:flex-row flex-col-reverse items-center">
            <div className="lg:col-6 px-3">
              <h1 className="font-jakarta font-bold xl:text-6xl md:text-5xl text-4xl lg:!leading-[66px] md:leading-[55px] text-black pb-3 capitalize max-lg:text-center">
                <span className="hero_gradient_text">Realtime</span> graph
                analytics at scale
              </h1>
              <Paragraph
                className="!text-jet_black opacity-80 max-w-[556px] lg:pb-11 md:pb-7 pb-5 max-lg:text-center mx-auto"
                textName="Build and deliver realtime graph analytics scaling to billions of records in minutes. No expensive transformation pipelines, proprietary storage or dedicated SMEs."
              />
              <div className="max-lg:text-center">
                <CommonButton textName="Learn More" />
              </div>
              <span className="absolute top-[23%] 2xl:left-[45%] xl:left-[44%] left-[38%] lg:block hidden">
                <ArrowIcon />
              </span>
            </div>
            <div className="lg:col-6 px-3 flex justify-end">
              <Image
                width={547}
                height={504}
                src="/assets/images/home/webp/hero-image.webp"
                alt="pometry-logo"
                className="pointer-events-none max-lg:max-w-[500px] max-md:max-w-[365px] max-sm:max-w-[245px]"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center xl:gap-[109px] lg:gap-16 gap-4 md:gap-10 pb-4 lg:pt-[108px] md:pt-20 pt-12">
            {SOCIAL_LINKS_LIST.map((obj: SocialList, index: number) => (
              <div key={index}>
                <Image
                  src={obj.img}
                  width={109}
                  height={obj.height}
                  alt="social-icon-list"
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
